import * as React from "react";
import { SET_TOTAL_AMOUNT } from "../../constants/actionTypes";

const CustomerAmountDetails = (props) => {
  const {
    dispatch,
    cartDetails,
    subTotalAmount,
    finalVatAmount,
    totalAmount,
    shippingCost,
    changeShippingCost,
  } = props;
  //const [shippingCost, setShippingCost] = React.useState("9.98");

  // const [subTotalAmount, setSubTotalAmount] = React.useState("");
  // const [finalVatAmount, setFinalVatAmount] = React.useState("0");
  // const [totalAmount, setTotalAmount] = React.useState("");
  // React.useMemo(() => {
  //   if (cartDetails && cartDetails.length > 0) {
  //     const totalArray = cartDetails ?.map(
  //       (prod) => prod.salepriceperunit * prod.quantity
  //     );
  //     const vatArray = cartDetails ?.map((prod) => prod.vat);
  //     const reducer = (previousValue, currentValue) =>
  //       previousValue + currentValue;
  //     const subTotalValue = totalArray.reduce(reducer);
  //     const vatAmount = vatArray.reduce(reducer);
  //     setSubTotalAmount(subTotalValue);
  //     setFinalVatAmount(vatAmount);
  //     setTotalAmount(
  //       (subTotalValue + vatAmount + Number(shippingCost)).toFixed(2)
  //     );
  //     dispatch({
  //       type: SET_TOTAL_AMOUNT,
  //       payload: {
  //         shippingCost,
  //         subTotalAmount: subTotalValue,
  //         totalVatAmount: vatAmount,
  //         totalAmount: (
  //           subTotalValue +
  //           vatAmount +
  //           Number(shippingCost)
  //         ).toFixed(2),
  //       },
  //     });
  //   }
  // }, [[JSON.stringify(cartDetails)], shippingCost]);

  // const onShippingCostChange = (e) => {
  //   setShippingCost(e.target.value);
  // };

  return (
    <>
      <fieldset>
        <h2 className="fs-title">Order Summary</h2>
        <div
          className="form-card order-bg">
          <div className="h5">
            <span>Subtotal</span>
            <span style={{ float: "right" }}>{`£${subTotalAmount}`}</span>
          </div>
          <div className="h6">
            <span>VAT</span>
            <span style={{ float: "right" }}>{`£${finalVatAmount}`}</span>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 p-0">
              <label className="h6" style={{ verticalAlign: "sub" }}>
                Shipping Cost
              </label>
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 p-0">
              <select
                className="form-control"
                id="shipping"
                name="shipping"
                onChange={(e) => changeShippingCost(e.target.value)}
                value={shippingCost}
              >
                <option value="0">Click and collect 0 GBP</option>
                <option value="9.98">Next day delivery 9.98GBP</option>
                <option value="15.95">Next day by 12pm 15.95 GBP</option>
                <option value="19.95">Next day by 10.30am 19.95 GBP</option>
              </select>
            </div>
          </div>
          <div className="separator"></div>
          <div className="h5">
            <span><strong>Total</strong></span>
            <span style={{ float: "right" }}>{`£${totalAmount}`}</span>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default CustomerAmountDetails;
