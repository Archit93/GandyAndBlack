import * as React from "react";
import HeaderMenu from "../common/Header.js";
import { useHistory } from "react-router-dom";
import CheckoutProgressBar from "./CheckoutProgressBar";
import CustomerAmountDetails from "./CustomerAmountDetails";
import PayPal from "./PayPal.js";

const CustomerPayment = (props) => {
  const history = useHistory();
  const { applicationState } = props;
  const { cartDetails } = applicationState;
  // const [paymentMethod, setPaymentMethod] = React.useState("");
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

  return (
    <div>
      <div>
        <HeaderMenu cartCount={cartDetails.length} />
      </div>
      <div id="checkout">
        <div className="container">
          <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
            <div className="row">
              <div className="col-md-12 mx-0">
                <form id="msform">
                  <CheckoutProgressBar progressItem="Payment" />
                  <div className="row">
                    <PayPal {...props} />
                    {/* {paymentMethod === "paypal" ? (
                      <PayPal {...props} />
                    ) : (
                      <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 order-md-first order-last">
                        <fieldset>
                          <h2 className="fs-title">Payment Information</h2>
                          <div className="form-card">
                            <div
                              className="radio-group"
                              onChange={(e) => setPaymentMethod(e.target.value)}
                            >
                              <input
                                type="radio"
                                className="radio"
                                value="card"
                              />
                              Credit Card
                              <input
                                type="radio"
                                className="radio"
                                value="paypal"
                              />
                              Paypal
                              <input
                                type="radio"
                                className="radio"
                                value="cod"
                              />
                              Pay on delivery
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
                            onClick={() => {
                              history.push("/customerpayment_success");
                            }}
                          >
                            Confirm Order
                          </button>
                        </fieldset>
                      </div>
                    )} */}

                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                      <CustomerAmountDetails {...props} />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerPayment;
