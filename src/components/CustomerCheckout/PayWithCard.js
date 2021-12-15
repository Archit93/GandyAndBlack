import * as React from "react";
import HeaderMenu from "../common/HeaderMenu.js";
import { useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import styled from "@emotion/styled";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import Alert from "@material-ui/lab/Alert";
import CheckoutProgressBar from "./CheckoutProgressBar";
import CustomerAmountDetails from "./CustomerAmountDetails";
import PayPal from "./PayPal.js";
import CustomerPaymentSuccess from "./CustomerPaymentSuccess.js";
import { stripeCheckoutApi } from "../../serviceCalls/stripeCheckoutApi";
import { placeOrderApiCall } from "../../serviceCalls/placeOrderApiCall";
import { SET_IS_LOADING, SET_TOTAL_AMOUNT } from "../../constants/actionTypes";
import AdminHeaderMenu from "../common/AdminHeaderMenu.js";

const CardElementContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;

  & .StripeElement {
    width: 100%;
    padding: 15px;
  }
`;

const PayWithCard = (props) => {
  const history = useHistory();
  const { applicationState, dispatch } = props;
  const {
    cartDetails,
    isLoading,
    subTotalAmount,
    totalVatAmount,
    totalAmount,
    shippingCost,
    billingAddressDetails,
    config,
  } = applicationState;

  const [tempCart, setTempCart] = React.useState(cartDetails);

  React.useEffect(() => {
    const cartData = JSON.parse(window.sessionStorage.getItem("cart"));
    if (cartData) {
      setTempCart(cartData);
    }
  }, []);

  const handleToken = async (token, addresses) => {
    dispatch({ type: SET_IS_LOADING, payload: true });
    stripeCheckoutApi({
      dispatch,
      history,
      token,
      addresses,
      applicationState,
    });
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

  const [isProcessing, setProcessingTo] = React.useState(false);
  const [checkoutError, setCheckoutError] = React.useState(true);

  const stripe = useStripe();
  const elements = useElements();

  // TIP
  // use the cardElements onChange prop to add a handler
  // for setting any errors:

  const handleCardDetailsChange = (ev) => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError("");
  };

  const handleFormSubmit = async (ev) => {
    ev.preventDefault();
    const billingDetails = {
      name: `${billingAddressDetails.firstNameBilling} ${billingAddressDetails.lastNameBilling}`,
      email: billingAddressDetails.emailBilling,
      address: {
        line1: billingAddressDetails.billingAddress,
        postal_code: billingAddressDetails.billingPostCode,
      },
    };

    setProcessingTo(true);
    dispatch({ type: SET_IS_LOADING, payload: true });
    const cardElement = elements.getElement("card");

    try {
      const { data: clientSecret } = await axios
        .post("http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8000/checkout", {
          amount: Math.round(totalAmount * 100),
          receipt_email: billingAddressDetails.emailBilling,
        })
        .catch((error) => {
          console.log(error);
          setProcessingTo(false);
          dispatch({ type: SET_IS_LOADING, payload: false });
        });

      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billingDetails,
      });

      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message);
        setProcessingTo(false);
        dispatch({ type: SET_IS_LOADING, payload: false });
      } else {
        const { error } = await stripe.confirmCardPayment(clientSecret, {
          payment_method: paymentMethodReq.paymentMethod.id,
        });

        if (error) {
          setCheckoutError(error.message);
          setProcessingTo(false);
          return;
        } else {
          setProcessingTo(false);
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
            firstname:
              applicationState?.shippingAddressDetails?.firstName || "",
            lastname: applicationState?.shippingAddressDetails?.lastName || "",
            mobileno: applicationState?.shippingAddressDetails?.phoneNo || "",
            paymentMethod: "CARD",
            postalcode:
              applicationState?.shippingAddressDetails?.postCode || "",
          };
          placeOrderApiCall({
            dispatch,
            history,
            placeOrderRequest,
            authToken: applicationState?.config?.authToken,
          });
        }
      }
    } catch (err) {
      setCheckoutError(err.message);
    }
  };

  const iframeStyles = {
    base: {
      fontSize: "16px",
      iconColor: "#e9adac",
      "::placeholder": {
        color: "#bac5cf",
      },
    },
    invalid: {
      iconColor: "#000000",
      color: "#000000",
    },
    complete: {
      iconColor: "#cbf4c9",
    },
  };

  const cardElementOpts = {
    iconStyle: "solid",
    style: iframeStyles,
    hidePostalCode: true,
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
        {config?.userType === "ADMIN" ? (
          <AdminHeaderMenu dispatch={dispatch} />
        ) : (
          <HeaderMenu dispatch={dispatch} cartCount={tempCart.length} />
        )}
      </div>
      <div id="checkout">
        <div className="container-fluid">
          <div className="card">
            <div className="row">
              <div className="col-md-12 mx-0 px-0" id="msform">
                <div className="row col-lg-5 col-md-8 col-sm-12 col-xs-12 payment-card">
                  <Alert severity="warning" className="mb-4">
                    Warning! Please do not exit tthe browser or go back while
                    processing the payment
                  </Alert>
                  <form onSubmit={handleFormSubmit} className="px-0">
                    <CardElementContainer>
                      <CardElement
                        options={cardElementOpts}
                        onChange={handleCardDetailsChange}
                      />
                    </CardElementContainer>
                    {/* TIP always disable your submit button while processing payments */}
                    {checkoutError && (
                      <span className="error">{checkoutError}</span>
                    )}
                    <div className="payment-cards mrt-20">
                      <img src="visa.png" />
                      <img src="amex.png" />
                      <img src="icons8-discover-96.png" />
                      <img src="icons8-mastercard-logo-96.png" />
                      <span style={{ lineHeight: "3.5" }}>more..</span>
                    </div>
                    <div className="text-center mt-4">
                      <button
                        className="previous action-button-previous"
                        type="submit"
                        onClick={() => {
                          history.push("/customerpayment_info");
                        }}
                      >
                        Back
                      </button>
                      <button
                        className="next action-button"
                        type="submit"
                        disabled={isProcessing || !stripe || checkoutError}
                      >
                        {isProcessing ? "Processing..." : `Pay £${totalAmount}`}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayWithCard;
