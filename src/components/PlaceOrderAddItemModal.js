import * as React from "react";
import { CSSTransition } from "react-transition-group";

const AddItemModalModal = (props) => {
    return (
        <>
        {/* <CSSTransition
            in={props.show}
            unmountOnExit
            timeout={{ enter: 0, exit: 300 }}
        > */}
        <div className="modal enter-done">
            <div className="modal-content" style={{overflow: "auto", maxHeight: "600px"}}>
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
                    <div className="my-renderer">
                <label for="floatingInput">Quantity</label>
                    <button
                        className="btn-quantity"
                        // onClick={(event) => onDecrement(event)}
                    >
                        -
                    </button>
                    <input
                        className="quantity-inputbtn"
                        id="productPrice"
                        type="number"
                        value="quantity value"
                        // onChange={(event) => onInputChange(event)}
                        // onBlur={() => onInputBlur()}
                    />
                    <button
                        className="btn-quantity"
                        // onClick={(event) => onIncrement(event)}
                    >
                        +
                    </button>
                </div>
                </div>
                <div className="modal-footer text-align-center">
                    <button className="btn btn-main">
                    Add Product
                    </button>     
                    <button onClick={props.onClose} className="btn floating-modal-btn btn-secondary">
                    Close
                    </button>   
                </div>
            </div>
        </div>
      {/* </CSSTransition> */}
        </>
    );
};
export default AddItemModalModal;