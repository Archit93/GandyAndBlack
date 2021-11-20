import * as React from "react";
import HeaderMenu from "../common/HeaderMenu.js";
import { useHistory } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import CheckoutProgressBar from "./CheckoutProgressBar";
import CustomerAmountDetails from "./CustomerAmountDetails";
import PayPal from "./PayPal.js";
import CustomerPaymentSuccess from "./CustomerPaymentSuccess.js";
import { SET_PAYMENT_METHOD } from "../../constants/actionTypes";

const CustomerPayment = (props) => {
  const history = useHistory();
  const { applicationState, dispatch } = props;
  const { cartDetails } = applicationState;
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

  const validateSubmit = (e) => {
    dispatch({
      type: SET_PAYMENT_METHOD,
      payload: paymentMethod,
    });
    if (paymentMethod === "PAYPAL") {
      history.push("/paypal");
    } else if (paymentMethod === "CARD") {
      history.push("/pay-with-card");
    } else {
      history.push("/customerpayment_success");
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
                  <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 order-md-first order-last">
                    <fieldset>
                      <h2 className="fs-title">Payment Information</h2>
                      <div
                        class="my-3 form-card"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      >
                        <div class="custom-control custom-radio">
                          <input
                            id="paypal"
                            name="paymentMethod"
                            type="radio"
                            class="custom-control-input"
                            value="PAYPAL"
                            checked={paymentMethod === "PAYPAL" ? true : false}
                          />
                          <label class="custom-control-label" for="paypal">
                            Paypal
                          </label>
                        </div>
                        <div class="custom-control custom-radio">
                          <input
                            id="credit"
                            name="paymentMethod"
                            type="radio"
                            class="custom-control-input"
                            value="CARD"
                            checked={paymentMethod === "CARD" ? true : false}
                          />
                          <label class="custom-control-label" for="credit">
                            Credit Card/Debit Card
                          </label>
                        </div>

                        <div class="custom-control custom-radio">
                          <input
                            id="payondelivery"
                            name="paymentMethod"
                            type="radio"
                            class="custom-control-input"
                            value="POD"
                            checked={paymentMethod === "POD" ? true : false}
                          />
                          <label
                            class="custom-control-label"
                            for="payondelivery"
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

export default CustomerPayment;
