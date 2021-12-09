import * as React from "react";
import HeaderMenu from "../common/HeaderMenu.js";
import { useHistory } from "react-router-dom";
import axios from "axios";
import CheckoutProgressBar from "./CheckoutProgressBar";
import CustomerAmountDetails from "./CustomerAmountDetails";
import PayPal from "./PayPal.js";
import CustomerPaymentSuccess from "./CustomerPaymentSuccess.js";
import {
  SET_PAYMENT_METHOD,
  SET_TOTAL_AMOUNT,
  SET_IS_LOADING,
} from "../../constants/actionTypes";
import { placeOrderApiCall } from "../../serviceCalls/placeOrderApiCall";
import AdminHeaderMenu from "../common/AdminHeaderMenu.js";

const CustomerPayment = (props) => {
  const history = useHistory();
  const { applicationState, dispatch } = props;
  const {
    cartDetails,
    subTotalAmount,
    totalVatAmount,
    totalAmount,
    shippingCost,
    config,
  } = applicationState;
  const [paymentMethod, setPaymentMethod] = React.useState(
    applicationState.paymentMethod
  );
  const [tempCart, setTempCart] = React.useState(cartDetails);

  React.useEffect(() => {
    const cartData = JSON.parse(window.sessionStorage.getItem("cart"));
    if (cartData) {
      setTempCart(cartData);
    }
  }, []);

  const purchase_units = [];
  tempCart.map((item) => {
    const purchaseUnitObject = Object.assign({});
    purchaseUnitObject.description =
      item.brand + " " + item.description + " " + item.productType;
    purchaseUnitObject.amount = {
      currency_code: "GBP",
      value: Number(item.quantity * item.salesPerUnit),
    };
    purchase_units.push(purchaseUnitObject);
  });

  const validateSubmit = (e) => {
    dispatch({
      type: SET_PAYMENT_METHOD,
      payload: paymentMethod,
    });
    if (config?.userType === "USER" && paymentMethod === "PAYPAL") {
      history.push("/paypal");
    } else if (config?.userType === "USER" && paymentMethod === "CARD") {
      history.push("/pay-with-card");
    } else {
      dispatch({ type: SET_IS_LOADING, payload: true });
      const itemList = applicationState?.cartDetails?.map((item) => [
        item.productid,
        item.quantity,
      ]);
      let productidcartmap = Object.fromEntries(itemList);
      const placeOrderRequest = {
        address: applicationState?.shippingAddressDetails?.address || "",
        cart: {
          ordershippingcost: Number(applicationState?.shippingCost),
          productidcartmap,
          subtotal: applicationState?.subTotalAmount,
          totalvat: applicationState?.totalVatAmount,
          userId: applicationState?.shippingAddressDetails?.email || "",
        },
        cppcode: "",
        email: applicationState?.shippingAddressDetails?.email || "",
        firstname: applicationState?.shippingAddressDetails?.firstName || "",
        lastname: applicationState?.shippingAddressDetails?.lastName || "",
        mobileno: applicationState?.shippingAddressDetails?.phoneNo || "",
        paymentMethod: config?.userType === "USER" ? "POD" : "STORE",
        postalcode: applicationState?.shippingAddressDetails?.postCode || "",
      };
      placeOrderApiCall({
        dispatch,
        history,
        placeOrderRequest,
        authToken: applicationState?.config?.authToken,
      });
    }
  };

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
      {config?.userType === "ADMIN" ? (
        <AdminHeaderMenu />
      ) : (
        <HeaderMenu dispatch={dispatch} cartCount={tempCart.length} />
      )}
      <div id="checkout" className={` ${config?.userType === "ADMIN" ? "admin" : ""}`}>
        <div className="container-fluid">
          <div className="card px-0 pb-0 mb-3">
            <div className="row">
              <div className="col-md-12 mx-0 px-0" id="msform">
                <CheckoutProgressBar
                  progressItem="Payment"
                  userType={config?.userType}
                />
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 order-md-first order-last px-0 admin-shipaddress">
                    <fieldset>
                      <h2 className="fs-title">Payment Information</h2>
                      <div className="my-3 form-card">
                        <div className="custom-control custom-radio">
                          <input
                            id="paypal"
                            name="paymentMethod"
                            type="radio"
                            className="custom-control-input"
                            value="PAYPAL"
                            checked={paymentMethod === "PAYPAL" ? true : false}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="paypal"
                          >
                            Paypal
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            id="credit"
                            name="paymentMethod"
                            type="radio"
                            className="custom-control-input"
                            value="CARD"
                            checked={paymentMethod === "CARD" ? true : false}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="credit"
                          >
                            Credit Card/Debit Card
                          </label>
                        </div>

                        <div className="custom-control custom-radio">
                          <input
                            id="payondelivery"
                            name="paymentMethod"
                            type="radio"
                            className="custom-control-input"
                            value="POD"
                            checked={paymentMethod === "POD" ? true : false}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="payondelivery"
                          >
                            Pay on Delivery
                          </label>
                        </div>
                      </div>
                      <button
                        className="previous action-button-previous"
                        type="submit"
                        onClick={() => {
                          history.push("/customershipping_info");
                        }}
                      >
                        Back
                      </button>
                      <button
                        className="next action-button"
                        type="submit"
                        onClick={validateSubmit}
                        disabled={!paymentMethod}
                      >
                        Proceed to Pay
                      </button>
                    </fieldset>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mobile-padding">
                    <CustomerAmountDetails
                      subTotalAmount={subTotalAmount}
                      finalVatAmount={totalVatAmount}
                      totalAmount={totalAmount}
                      shippingCost={shippingCost}
                      changeShippingCost={(newShippingCost) =>
                        settingAmountDetails(newShippingCost)
                      }
                      dispatch={dispatch}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerPayment;
