import * as React from "react";
import HeaderMenu from "../common/HeaderMenu.js";
import { useHistory } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import CheckoutProgressBar from "./CheckoutProgressBar";
import CustomerAmountDetails from "./CustomerAmountDetails";
import PayPal from "./PayPal.js";
import CustomerPaymentSuccess from "./CustomerPaymentSuccess.js";
import { stripeCheckoutApi } from "../../serviceCalls/stripeCheckoutApi";
import { SET_IS_LOADING } from "../../constants/actionTypes";

const PayWithCard = (props) => {
  const history = useHistory();
  const { applicationState, dispatch } = props;
  const { cartDetails, isLoading } = applicationState;
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
      <div id="checkout">
        <div className="container">
          <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
            <div className="row">
              <div className="col-md-12 mx-0" id="msform">
                <CheckoutProgressBar progressItem="Payment" />
                <div className="row">
                  <div style={{ width: "65%" }}>
                    <button
                      className="previous action-button-previous"
                      type="submit"
                      onClick={() => {
                        history.push("/customerpayment_info");
                      }}
                    >
                      Back
                    </button>
                    <StripeCheckout
                      stripeKey="pk_test_51JumLXBPQeAuTgL1NI4yDdkimtENKscd8FBy4LRA4ahqXVEbBRt4VgcobThjBxmwywgTwX1t2PtodBZYjYYp5gbY00cI3NjBn6"
                      token={handleToken}
                      amount={Number(applicationState.totalAmount) * 100}
                      currency="GBP"
                      billingAddress
                      shippingAddress
                      image="/favicon.ico"
                      label="Pay now with 💳"
                      description={`Your total amount is £${applicationState.totalAmount}`}
                    >
                      <button className="next action-button">
                        Pay now with 💳
                      </button>
                    </StripeCheckout>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <CustomerAmountDetails
                      cartDetails={tempCart}
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

export default PayWithCard;
