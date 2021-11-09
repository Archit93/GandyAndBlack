import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function PayPal(props) {
  const paypal = useRef();
  const history = useHistory();
  const { applicationState } = props;

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
          const order = await actions.order.capture();
          order && history.push("/customerpayment_success");
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div style={{ width: "65%" }}>
      <div ref={paypal}></div>
    </div>
  );
}
