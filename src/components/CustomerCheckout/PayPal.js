import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import HeaderMenu from "../common/HeaderMenu.js";
import CheckoutProgressBar from "./CheckoutProgressBar";
import CustomerAmountDetails from "./CustomerAmountDetails";

export default function PayPal(props) {
  const paypal = useRef();
  const history = useHistory();
  const { applicationState, dispatch } = props;
  const { cartDetails } = applicationState;
  const [tempCart, setTempCart] = React.useState(cartDetails);

  useEffect(() => {
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
          console.log(data);
          const order = await actions.order.capture();
          console.log(order);
          order && history.push("/customerpayment_success");
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
    const cartData = JSON.parse(window.sessionStorage.getItem("cart"));
    if (cartData) {
      setTempCart(cartData);
    }
  }, []);

  return (
    <div>
      <div>
        <HeaderMenu dispatch={dispatch} cartCount={cartDetails.length} />
      </div>
      <div id="checkout">
        <div className="container">
          <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
            <div className="row">
              <div className="col-md-12 mx-0" id="msform">
                <CheckoutProgressBar progressItem="Payment" />
                <div className="row">
                  <div style={{ width: "65%" }}>
                    <div ref={paypal}></div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <CustomerAmountDetails
                      cartDetails={tempCart}
                      dispatch={dispatch}
                    />
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
