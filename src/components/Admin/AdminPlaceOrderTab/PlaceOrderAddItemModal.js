import * as React from "react";
import { CSSTransition } from "react-transition-group";

const PlaceOrderAddItemModal = (props) => {
    const addItemToOrder = () => {
        props.gridApi.applyTransaction({
            add: [{
                id: 123333,
                product: 'ABC',
                quantity: 1,
                totalprice: 123,
                totalvat: 50,
                totalcost: 173
            }],
        });
        props.onClose();
    }
    return (
        <>
            <CSSTransition
                in={props.show}
                unmountOnExit
                timeout={{ enter: 0, exit: 300 }}
            >
                <div className="modal enter-done">
                    <div className="modal-content" style={{ overflow: "auto", maxHeight: "600px" }}>
                        <div className="modal-header">
                            <h4 className="modal-title">Add Items</h4>
                        </div>
                        <div className="modal-body">
                            <div className="form-floating">
                                <select
                                    className="form-select"
                                    id="productList"
                                    name="productList"
                                    value="productList"
                                >
                                    <option value="Product 1">Product 1</option>
                                    <option value="Product 2">Product 2</option>
                                </select>
                                <label for="productWarehouse">Product</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="quantity"
                                    placeholder="quantity"
                                    value="Quantity"
                                />
                                <label for="floatingInput">Quantity</label>
                            </div>
                        </div>
                        <div className="modal-footer text-align-center">
                            <button className="btn btn-main"
                                onClick={() => addItemToOrder()}>
                                Add Item
                    </button>
                            <button onClick={() => props.onClose()} className="btn floating-modal-btn btn-secondary">
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