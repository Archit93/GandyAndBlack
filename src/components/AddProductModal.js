import * as React from "react";
import { CSSTransition } from "react-transition-group";

const AddProductModal = (props) => {
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
                <h4 className="modal-title">Add Product</h4>
            </div>
            <div className="modal-body">
                {/* Update Product - add this field in update */}
                <div className="form-floating mb-3">
                    <input
                    type="text"
                    className="form-control"
                    id="productId"
                    placeholder="productId"
                    value="Product Id"
                    />
                    <label for="floatingInput">Product Id</label>
                </div>
                {/* Add Product */}
                <div className="form-floating mb-3">
                    <input
                    type="text"
                    className="form-control"
                    id="productType"
                    placeholder="productType"
                    value="Product Type"
                    />
                    <label for="floatingInput">Product Type</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                    type="text"
                    className="form-control"
                    id="productBrand"
                    placeholder="productBrand"
                    value="Product Brand"
                    />
                    <label for="floatingInput">Product Brand</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                    type="text"
                    className="form-control"
                    id="productDescription"
                    placeholder="productDescription"
                    value="Product Description"
                    />
                    <label for="floatingInput">Product Description</label>
                </div>
                <div className="my-renderer">
                <label for="floatingInput">Product Price</label>
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
                <div className="form-floating">
                    <select
                    className="form-select"
                    id="productWarehouse"
                    name="productWarehouse"
                    value="productWarehouse"
                    >
                    <option value="Liverpool">Liverpool</option>
                    <option value="Glasgow">Glasgow</option>
                    </select>
                    <label for="productWarehouse">Product Warehouse</label>
                </div>
                <div className="my-renderer">
                <label for="floatingInput">Product Warehouse Stock</label>
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
                <div className="my-renderer">
                <label for="floatingInput">Product Vat</label>
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
                <div className="form-floating mb-3">
                    <input
                    type="text"
                    className="form-control"
                    id="productShortCode"
                    placeholder="Product Short Code"
                    value="Product Short Code"
                    />
                    <label for="floatingInput">Product Short Code</label>
                </div>
                <div className="my-renderer">
                <label for="floatingInput">Product Stock Yellow</label>
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
                <div className="my-renderer">
                <label for="floatingInput">Product Stock Red</label>
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
                Save
                </button>
                {/* this button for add product */}
                <button onClick={props.onClose} className="btn floating-modal-btn btn-secondary">
                Close
                </button> 
                {/* this button for update product */}
                <button className="btn floating-modal-btn btn-secondary">
                Back to Home
                </button>         
            </div>
        </div>
      </div>
      {/* </CSSTransition> */}
        </>
    );
};
export default AddProductModal;