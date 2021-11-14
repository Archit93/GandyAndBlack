import * as React from "react";
import HeaderMenu from "../common/Header.js";
import { useHistory } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import CheckoutProgressBar from "./CheckoutProgressBar";
import CustomerAmountDetails from "./CustomerAmountDetails";
import PayPal from "./PayPal.js";
import CustomerPaymentSuccess from "./CustomerPaymentSuccess.js";

const CustomerPayment = (props) => {
  const history = useHistory();
  const { applicationState } = props;
  const { cartDetails } = applicationState;
  const [paymentMethod, setPaymentMethod] = React.useState("");
  const purchase_units = [];
  cartDetails.map((item) => {
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

  const onPaymentMethodChange = (value) => {
    value === "POD"
      ? history.push("customerpayment_success")
      : setPaymentMethod(value);
  };

  return (
    <div>
      <div>
        <HeaderMenu cartCount={cartDetails.length} />
      </div>
      <div id="checkout">
        <div className="container">
          <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
            <div className="row">
              <div className="col-md-12 mx-0" id="msform">
                <CheckoutProgressBar progressItem="Payment" />
                <div className="row">
                  {paymentMethod === "PAYPAL" && <PayPal {...props} />}
                  {paymentMethod === "CARD" && (
                    <div style={{ width: "65%" }}>
                      <StripeCheckout
                        stripeKey="pk_test_51JumLXBPQeAuTgL1NI4yDdkimtENKscd8FBy4LRA4ahqXVEbBRt4VgcobThjBxmwywgTwX1t2PtodBZYjYYp5gbY00cI3NjBn6"
                        token={handleToken}
                        amount={Number(applicationState.totalAmount) * 100}
                        currency="GBP"
                        billingAddress
                        shippingAddress
                        image="https://gnblist.com/assets/images/newlogo1.png"
                        label="Pay Now"
                        panelLabel="Pay Now"
                        description={`Your total amount is £${applicationState.totalAmount}`}
                      />
                    </div>
                  )}
                  {paymentMethod === "" && (
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 order-md-first order-last">
                      <fieldset>
                        <h2 className="fs-title">Payment Information</h2>
                        <div
                          class="my-3 form-card"
                          onChange={(e) =>
                            onPaymentMethodChange(e.target.value)
                          }
                        >
                          <div class="custom-control custom-radio">
                            <input
                              id="paypal"
                              name="paymentMethod"
                              type="radio"
                              class="custom-control-input"
                              checked=""
                              value="PAYPAL"
                              required=""
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
                              required=""
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
                      </fieldset>
                    </div>
                  )}
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <CustomerAmountDetails {...props} />
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
