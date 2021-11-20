import * as React from "react";
import HeaderMenu from "../common/HeaderMenu.js";
import { useHistory } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import CheckoutProgressBar from "./CheckoutProgressBar";
import CustomerAmountDetails from "./CustomerAmountDetails";
import PayPal from "./PayPal.js";
import CustomerPaymentSuccess from "./CustomerPaymentSuccess.js";

const PayWithCard = (props) => {
  const history = useHistory();
  const { applicationState, dispatch } = props;
  const { cartDetails } = applicationState;
  const [tempCart, setTempCart] = React.useState(cartDetails);

  React.useEffect(() => {
    const cartData = JSON.parse(window.sessionStorage.getItem("cart"));
    if (cartData) {
      setTempCart(cartData);
    }
  }, []);

  const handleToken = async (token, addresses) => {
    console.log(token, addresses);
    const response = await axios.post(
      "https://d7okb.sse.codesandbox.io/checkout",
      {
        token,
        product: {
          name: "Tesla Roadster",
          price: 10000,
          description: "Cool car",
        },
      }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      console.log("Success! Check email for details");
    } else {
      console.log("Something went wrong");
    }
  };

  return (
    <div>
      <div>
        <HeaderMenu cartCount={tempCart.length} />
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
