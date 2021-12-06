import * as React from "react";
import { CSSTransition } from "react-transition-group";

const PlaceOrderAddItemModal = (props) => {
  const { productList } = props;
  const [productToOrder, setProductToOrder] = React.useState("");
  const [quantityToOrder, setQuantityToOrder] = React.useState("");

  const addItemToOrder = () => {
    const finalProduct = productList?.find(
      (prod) => prod.productid === productToOrder
    );
    props.gridApi.applyTransaction({
      add: [
        {
          ...finalProduct,
          product: `${finalProduct?.brand} ${finalProduct?.producttype} ${finalProduct?.productdesc}`,
          quantity: Number(quantityToOrder),
          //   totalprice: Number(
          //     quantityToOrder * Number(finalProduct?.salepriceperunit)
          //   ),
          totalprice: Number(finalProduct?.salepriceperunit),
          totalvat: Number(quantityToOrder * finalProduct?.vat),
          totalcost: Number(
            (finalProduct?.salepriceperunit + finalProduct?.vat) *
              quantityToOrder
          ),
        },
      ],
    });
    setProductToOrder("");
    setQuantityToOrder("");
    props.onClose();
  };
  return (
    <>
      <CSSTransition
        in={props.show}
        unmountOnExit
        timeout={{ enter: 0, exit: 300 }}
      >
        <div className="modal enter-done">
          <div
            className="modal-content"
            style={{ overflow: "auto", maxHeight: "600px" }}
          >
            <div className="modal-header">
              <h4 className="modal-title">Add Items</h4>
            </div>
            <div className="modal-body">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="productList"
                  name="productList"
                  value={productToOrder}
                  onChange={(e) => setProductToOrder(e.target.value)}
                >
                  <option value="">Please select</option>
                  {productList?.map((product) => (
                    <option
                      value={product.productid}
                    >{`${product.brand} ${product.producttype} ${product.productdesc}`}</option>
                  ))}
                </select>
                <label for="productWarehouse">Product</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="quantity"
                  placeholder="quantity"
                  value={quantityToOrder}
                  onChange={(e) => setQuantityToOrder(e.target.value)}
                />
                <label for="floatingInput">Quantity</label>
              </div>
            </div>
            <div className="modal-footer text-align-center">
              <button className="btn btn-main" onClick={() => addItemToOrder()}>
                Add Item
              </button>
              <button
                onClick={() => props.onClose()}
                className="btn floating-modal-btn btn-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};
export default PlaceOrderAddItemModal;
