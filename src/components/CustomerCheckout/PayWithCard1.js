import * as React from "react";
import HeaderMenu from "../common/HeaderMenu.js";
import { useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import styled from "@emotion/styled";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import CheckoutProgressBar from "./CheckoutProgressBar";
import CustomerAmountDetails from "./CustomerAmountDetails";
import PayPal from "./PayPal.js";
import CustomerPaymentSuccess from "./CustomerPaymentSuccess.js";
import { stripeCheckoutApi } from "../../serviceCalls/stripeCheckoutApi";
import { placeOrderApiCall } from "../../serviceCalls/placeOrderApiCall";
import { SET_IS_LOADING, SET_TOTAL_AMOUNT } from "../../constants/actionTypes";

const CardElementContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;

  & .StripeElement {
    width: 100%;
    padding: 15px;
  }
`;

const Row = styled.div`
  width: 475px;
  margin: 30px auto;
  box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 #ffffff;
  border-radius: 4px;
  position: relative;
`;

const SubmitButton = styled.button`
  display: block;
  height: 40px;
  width: 100%;
  font-size: inherit;
  background-color: ${(props) => (props.disabled ? "#7795f8" : "#e9adac")};
  border-radius: 4px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`;

const PayWithCard1 = (props) => {
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
      email: "ssshackathon@gmail.com",
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
        .post("http://localhost:8080/checkout", {
          amount: Math.round(totalAmount * 100),
          receipt_email: "ssshackathon@gmail.com",
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
        // description: "Gandy & Black Asthetic Supplies",
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

  // Learning
  // A common ask/bug that users run into is:
  // How do you change the color of the card element input text?
  // How do you change the font-size of the card element input text?
  // How do you change the placeholder color?
  // The answer to all of the above is to use the `style` option.
  // It's common to hear users confused why the card element appears impervious
  // to all their styles. No matter what classes they add to the parent element
  // nothing within the card element seems to change. The reason for this is that
  // the card element is housed within an iframe and:
  // > styles do not cascade from a parent window down into its iframes

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
        <HeaderMenu dispatch={dispatch} cartCount={tempCart.length} />
      </div>
      <div className="container-fluid">
        <div className="row col-lg-5 col-md-8 col-sm-12 col-xs-12 order-md-first order-last payment-card">
          <form onSubmit={handleFormSubmit} className="px-0">
            <CardElementContainer>
              <CardElement
                options={cardElementOpts}
                onChange={handleCardDetailsChange}
              />
            </CardElementContainer>
            {/* TIP always disable your submit button while processing payments */}
            {checkoutError && <span className="error">{checkoutError}</span>}
            <div className="payment-cards mrt-20">
              <img src="visa.png" />
              <img src="amex.png" />
              <img src="icons8-discover-96.png" />
              <img src="icons8-mastercard-logo-96.png" />
              <span style={{ lineHeight: "3.5" }}>more..</span>
            </div>
            <div className="mt-4">
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
            {/* <SubmitButton
              className="action-button mrt-20"
              disabled={isProcessing || !stripe || checkoutError}
            >
              {isProcessing ? "Processing..." : `Pay $${totalAmount}`}
            </SubmitButton> */}

            {/* <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
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
          </div> */}
          </form>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div>
  //     {isLoading && (
  //       <div className="d-flex justify-content-center loader">
  //         <Spinner animation="border" role="status">
  //           <span className="visually-hidden">Loading...</span>
  //         </Spinner>
  //       </div>
  //     )}
  //     <div>
  //       <HeaderMenu dispatch={dispatch} cartCount={tempCart.length} />
  //     </div>
  //     <div id="checkout">
  //       <div className="container">
  //         <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
  //           <div className="row">
  //             <div className="col-md-12 mx-0" id="msform">
  //               <CheckoutProgressBar progressItem="Payment" />
  //               <div className="row">
  //                 <div style={{ width: "65%" }}>
  //                   <button
  //                     className="previous action-button-previous"
  //                     type="submit"
  //                     onClick={() => {
  //                       history.push("/customerpayment_info");
  //                     }}
  //                   >
  //                     Back
  //                   </button>
  //                   <StripeCheckout
  //                     stripeKey="pk_test_51JumLXBPQeAuTgL1NI4yDdkimtENKscd8FBy4LRA4ahqXVEbBRt4VgcobThjBxmwywgTwX1t2PtodBZYjYYp5gbY00cI3NjBn6"
  //                     token={handleToken}
  //                     amount={Number(applicationState.totalAmount) * 100}
  //                     currency="GBP"
  //                     billingAddress
  //                     shippingAddress
  //                     image="/favicon.ico"
  //                     label="Pay now with 💳"
  //                     description={`Your total amount is £${applicationState.totalAmount}`}
  //                   >
  //                     <button className="next action-button">
  //                       Pay now with 💳
  //                     </button>
  //                   </StripeCheckout>
  //                 </div>
  //                 <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
  //                   <CustomerAmountDetails
  //                     subTotalAmount={subTotalAmount}
  //                     finalVatAmount={totalVatAmount}
  //                     totalAmount={totalAmount}
  //                     shippingCost={shippingCost}
  //                     changeShippingCost={(newShippingCost) =>
  //                       settingAmountDetails(newShippingCost)
  //                     }
  //                     dispatch={dispatch}
  //                   />
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default PayWithCard1;
