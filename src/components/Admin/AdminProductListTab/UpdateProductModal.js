import * as React from "react";
import { CSSTransition } from "react-transition-group";

const UpdateProductModal = (props) => {
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
                            <h4 className="modal-title">Edit Product Details</h4>
                        </div>
                        <div className="modal-body">
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="productId"
                                    placeholder="productId"
                                />
                                <label for="floatingInput">Product Id</label>
                            </div>
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
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="productPrice"
                                    placeholder="productPrice"
                                    value="Product Description"
                                />
                                <label for="floatingInput">Product Price</label>
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
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="productPrice"
                                    placeholder="productWareHouseStock"
                                    value="Product Warehouse Stock"
                                />
                                <label for="floatingInput">Product Warehouse Stock</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="productVat"
                                    placeholder="productVat"
                                    value="Product Vat"
                                />
                                <label for="floatingInput">Product Vat</label>
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

                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="productStockYellow"
                                    placeholder="Product Stock Yellow"
                                    value="Product Stock Yellow"
                                />
                                <label for="floatingInput">Product Stock Yellow</label>
                            </div>

                             <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="productStockYellow"
                                    placeholder="Product Stock Red"
                                    value="Product Stock Red"
                                />
                                <label for="floatingInput">Product Stock Red</label>
                            </div>
                            
                        </div>
                        <div className="modal-footer text-align-center">
                            <button className="btn btn-main" onClick={()=> props.onClose()}>
                                Save
                </button>
                            <button className="btn floating-modal-btn btn-secondary" onClick={()=> props.onClose()}>
                                Back
                </button>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </>
    );
};
export default UpdateProductModal;