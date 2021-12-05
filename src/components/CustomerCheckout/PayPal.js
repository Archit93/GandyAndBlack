import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import Alert from "@material-ui/lab/Alert";
import HeaderMenu from "../common/HeaderMenu.js";
import CheckoutProgressBar from "./CheckoutProgressBar";
import CustomerAmountDetails from "./CustomerAmountDetails";
import { placeOrderApiCall } from "../../serviceCalls/placeOrderApiCall";
import { SET_IS_LOADING, SET_TOTAL_AMOUNT } from "../../constants/actionTypes";

export default function PayPal(props) {
  const paypal = useRef();
  const history = useHistory();
  const { applicationState, dispatch } = props;
  const {
    cartDetails,
    isLoading,
    subTotalAmount,
    totalVatAmount,
    totalAmount,
    shippingCost,
  } = applicationState;
  const [tempCart, setTempCart] = React.useState(cartDetails);

  React.useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Gandy & Black Asthetic Supplies",
                amount: {
                  currency_code: "GBP",
                  value: Number(applicationState.totalAmount),
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          dispatch({ type: SET_IS_LOADING, payload: true });
          await actions.order.capture().then((response) => {
            const itemList = applicationState ?.cartDetails ?.map((item) => [
              item.productid,
              item.quantity,
            ]);
            let productidcartmap = Object.fromEntries(itemList);
            const placeOrderRequest = {
              address: applicationState ?.shippingAddressDetails ?.address || "",
              cart: {
                ordershippingcost: Number(applicationState ?.shippingCost),
                productidcartmap,
                subtotal: applicationState ?.subTotalAmount,
                totalvat: applicationState ?.totalVatAmount,
                userId: applicationState ?.shippingAddressDetails ?.email || "",
              },
              cppcode: "",
              email: applicationState ?.shippingAddressDetails ?.email || "",
              firstname:
                applicationState ?.shippingAddressDetails ?.firstName || "",
              lastname:
                applicationState ?.shippingAddressDetails ?.lastName || "",
              mobileno: applicationState ?.shippingAddressDetails ?.phoneNo || "",
              paymentMethod: "PAYPAL",
              postalcode:
                applicationState ?.shippingAddressDetails ?.postCode || "",
            };
            placeOrderApiCall({
              dispatch,
              history,
              placeOrderRequest,
              authToken: applicationState ?.config ?.authToken,
            });
          });
        },
        onError: (err) => {
          dispatch({ type: SET_IS_LOADING, payload: false });
          console.log(err);
        },
      })
      .render(paypal.current);
    const cartData = JSON.parse(window.sessionStorage.getItem("cart"));
    if (cartData) {
      setTempCart(cartData);
    }
  }, []);

  const settingAmountDetails = (shippingCost) => {
    dispatch({
      type: SET_TOTAL_AMOUNT,
      payload: {
        shippingCost,
        subTotalAmount: subTotalAmount,
        totalVatAmount: totalVatAmount,
        totalAmount: (
          subTotalAmount +
          totalVatAmount +
          Number(shippingCost)
        ).toFixed(2),
      },
    });
  };

  return (
    <div>
      {isLoading && (
        <div className="d-flex justify-content-center loader">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      <div>
        <HeaderMenu dispatch={dispatch} cartCount={cartDetails.length} />
      </div>
      <div id="checkout">
        <div className="container-fluid">
          <div className="card">
            <div className="row">
              <div className="col-md-12 mx-0 px-0" id="msform">
                <CheckoutProgressBar progressItem="Payment" />
                <div className="row col-lg-5 col-md-8 col-sm-12 col-xs-12 payment-card px-0">
                  <Alert severity="warning" className="mb-4">
                    Warning! Please do not exit tthe browser or go back while
                    processing the payment
                    </Alert>
                  <div>
                    <div ref={paypal}></div>
                  </div>
                </div>
                <button
                  className="previous action-button-previous"
                  type="submit"
                  onClick={() => {
                    history.push("/customerpayment_info");
                  }}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
