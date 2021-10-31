import * as React from "react";

const CustomerAmountDetails = (props) => {
  const { selectedProducts } = props;
  const [shippingCost, setShippingCost] = React.useState("9.98");
  const [subTotalAmount, setSubTotalAmount] = React.useState("");
  const [totalAmount, setTotalAmount] = React.useState("");

  React.useEffect(() => {
    const totalArray = selectedProducts.map(
      (prod) => prod.salesPerUnit * prod.quantity
    );
    const reducer = (previousValue, currentValue) =>
      previousValue + currentValue;
    const subTotalValue = totalArray.reduce(reducer);
    setSubTotalAmount(subTotalValue);
    setTotalAmount(subTotalValue + Number(shippingCost));
  }, [selectedProducts, shippingCost]);

  const onShippingCostChange = (e) => {
    setShippingCost(e.target.value);
    setTotalAmount(subTotalAmount + Number(shippingCost));
  };

  return (
    <>
      <fieldset>
        <h2 className="fs-title">Amount Information</h2>
        <div
          className="form-card"
          style={{ backgroundColor: "#7984a3", color: "#fff" }}
        >
          <div className="h5">
            <span>Subtotal</span>
            <span style={{ float: "right" }}>{`£${subTotalAmount}`}</span>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <label className="h6">Shipping Cost</label>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <select
                className="select"
                id="shipping"
                name="shipping"
                onChange={onShippingCostChange}
              >
                <option value="0">Click and collect 0 GBP</option>
                <option value="9.98" selected>
                  Next day delivery 9.98GBP
                </option>
                <option value="15.95">Next day by 12pm 15.95 GBP</option>
                <option value="19.95">Next day by 10.30am 19.95 GBP</option>
              </select>
            </div>
          </div>
          <div className="separator"></div>
          <div className="h5">
            <span>Total</span>
            <span style={{ float: "right" }}>{`£${totalAmount}`}</span>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default CustomerAmountDetails;
