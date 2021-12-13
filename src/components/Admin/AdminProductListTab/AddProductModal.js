import * as React from "react";
import { CSSTransition } from "react-transition-group";
import { addProductApiCall } from "../../../serviceCalls/addProductApiCall";
import { SET_IS_LOADING } from "../../../constants/actionTypes";

const AddProductModal = (props) => {
  const { config, dispatch, onClose, history } = props;
  const [newProductDetails, setNewProductDetails] = React.useState({
    productType: "",
    productBrand: "",
    productDescription: "",
    productPrice: "",
    productWarehouse: "",
    productWareHouseStock: "",
    productVat: "",
    productShortCode: "",
    productStockYellow: "",
    productStockRed: "",
  });

  const [newProductDetailsError, setNewProductDetailsError] = React.useState({
    productTypeError: "",
    productBrandError: "",
    productDescriptionError: "",
    productPriceError: "",
    productWarehouseError: "",
    productWareHouseStockError: "",
    productVatError: "",
    productShortCodeError: "",
    productStockYellowError: "",
    productStockRedError: "",
  });

  const [emptyCredentialsError, setEmptyCredentialsError] = React.useState("");

  const validateValue = (value, fieldName) => {
    value === ""
      ? setNewProductDetailsError({
          ...newProductDetailsError,
          [`${fieldName}Error`]: "Please enter a proper value",
        })
      : setNewProductDetailsError({
          ...newProductDetailsError,
          [`${fieldName}Error`]: "",
        });
  };

  const {
    productType,
    productBrand,
    productDescription,
    productPrice,
    productWarehouse,
    productWareHouseStock,
    productVat,
    productShortCode,
    productStockYellow,
    productStockRed,
  } = newProductDetails;

  const {
    productTypeError,
    productBrandError,
    productDescriptionError,
    productPriceError,
    productWareHouseStockError,
    productVatError,
    productShortCodeError,
    productStockYellowError,
    productStockRedError,
  } = newProductDetailsError;

  const onAdd = (e) => {
    e.preventDefault();
    if (
      productTypeError ||
      productBrandError ||
      productDescriptionError ||
      productPriceError ||
      productWareHouseStockError ||
      productVatError ||
      productShortCodeError ||
      productStockYellowError ||
      productStockRedError
    ) {
      setEmptyCredentialsError(
        "Looks like you're missing something! Do you want to give it another try?"
      );
    } else if (
      productType === "" ||
      productBrand === "" ||
      productDescription === "" ||
      productPrice === "" ||
      productWarehouse === "" ||
      productWareHouseStock === "" ||
      productVat === "" ||
      productShortCode === "" ||
      productStockYellow === "" ||
      productStockRed === ""
    ) {
      setEmptyCredentialsError(
        "Looks like you're missing something! Do you want to give it another try?"
      );
    } else {
      dispatch({ type: SET_IS_LOADING, payload: true });
      const requestBodyForAdd = {
        brand: productBrand,
        producttype: productType,
        productdesc: productDescription,
        salepriceperunit: productPrice,
        numberofstock: 181,
        createDate: "2021/08/09 12:51:23",
        vat: productVat,
        threshold: productStockYellow,
        breakpoint: productStockRed,
        warehouse: {
          Liverpool: productWareHouseStock,
          Glasgow: 8,
        },
        shortcode: productShortCode ? productShortCode : "N/A",
        fromwarehouse: "",
      };
      addProductApiCall({
        dispatch: dispatch,
        authToken: config.authToken,
        requestBodyForAdd: requestBodyForAdd,
        history: history,
        config: config,
      });
      onClose();
    }
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
              <h4 className="modal-title">Add New Product</h4>
            </div>
            <div className="modal-body">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="productType"
                  placeholder="productType"
                  value={productType}
                  onChange={(e) => {
                    setNewProductDetailsError({
                      ...newProductDetailsError,
                      productTypeError: "",
                    });
                    setNewProductDetails({
                      ...newProductDetails,
                      productType: e.target.value,
                    });
                    setEmptyCredentialsError("");
                  }}
                  onBlur={(e) => validateValue(e.target.value, "productType")}
                />
                <label for="floatingInput">Product Type</label>
              </div>
              {productTypeError ? (
                <span className="error">{productTypeError}</span>
              ) : (
                <React.Fragment />
              )}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="productBrand"
                  placeholder="productBrand"
                  value={productBrand}
                  onChange={(e) => {
                    setNewProductDetailsError({
                      ...newProductDetailsError,
                      productBrandError: "",
                    });
                    setNewProductDetails({
                      ...newProductDetails,
                      productBrand: e.target.value,
                    });
                    setEmptyCredentialsError("");
                  }}
                  onBlur={(e) => validateValue(e.target.value, "productBrand")}
                />
                <label for="floatingInput">Product Brand</label>
              </div>
              {productBrandError ? (
                <span className="error">{productBrandError}</span>
              ) : (
                <React.Fragment />
              )}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="productDescription"
                  placeholder="productDescription"
                  value={productDescription}
                  onChange={(e) => {
                    setNewProductDetailsError({
                      ...newProductDetailsError,
                      productDescriptionError: "",
                    });
                    setNewProductDetails({
                      ...newProductDetails,
                      productDescription: e.target.value,
                    });
                    setEmptyCredentialsError("");
                  }}
                  onBlur={(e) =>
                    validateValue(e.target.value, "productDescription")
                  }
                />
                <label for="floatingInput">Product Description</label>
              </div>
              {productDescriptionError ? (
                <span className="error">{productDescriptionError}</span>
              ) : (
                <React.Fragment />
              )}
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="productPrice"
                  placeholder="productPrice"
                  value={productPrice}
                  onChange={(e) => {
                    setNewProductDetailsError({
                      ...newProductDetailsError,
                      productPriceError: "",
                    });
                    setNewProductDetails({
                      ...newProductDetails,
                      productPrice: e.target.value,
                    });
                    setEmptyCredentialsError("");
                  }}
                  onBlur={(e) => validateValue(e.target.value, "productPrice")}
                />
                <label for="floatingInput">Product Price</label>
              </div>
              {productPriceError ? (
                <span className="error">{productPriceError}</span>
              ) : (
                <React.Fragment />
              )}
              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  id="productWarehouse"
                  name="productWarehouse"
                  value={productWarehouse}
                  onChange={(e) => {
                    setNewProductDetails({
                      ...newProductDetails,
                      productWarehouse: e.target.value,
                    });
                    setEmptyCredentialsError("");
                  }}
                >
                  <option value="">Please select</option>
                  <option value="Liverpool">Liverpool</option>
                  <option value="Glasgow">Glasgow</option>
                </select>
                <label for="productWarehouse">Product Warehouse</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="productWareHouseStock"
                  placeholder="productWareHouseStock"
                  value={productWareHouseStock}
                  onChange={(e) => {
                    setNewProductDetailsError({
                      ...newProductDetailsError,
                      productWareHouseStockError: "",
                    });
                    setNewProductDetails({
                      ...newProductDetails,
                      productWareHouseStock: e.target.value,
                    });
                    setEmptyCredentialsError("");
                  }}
                  onBlur={(e) =>
                    validateValue(e.target.value, "productWareHouseStock")
                  }
                />
                <label for="floatingInput">Product Warehouse Stock</label>
              </div>
              {productWareHouseStockError ? (
                <span className="error">{productWareHouseStockError}</span>
              ) : (
                <React.Fragment />
              )}
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="productVat"
                  placeholder="productVat"
                  value={productVat}
                  onChange={(e) => {
                    setNewProductDetailsError({
                      ...newProductDetailsError,
                      productVatError: "",
                    });
                    setNewProductDetails({
                      ...newProductDetails,
                      productVat: e.target.value,
                    });
                    setEmptyCredentialsError("");
                  }}
                  onBlur={(e) => validateValue(e.target.value, "productVat")}
                />
                <label for="floatingInput">Product Vat</label>
              </div>
              {productVatError ? (
                <span className="error">{productVatError}</span>
              ) : (
                <React.Fragment />
              )}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="productShortCode"
                  placeholder="productShortCode"
                  value={productShortCode}
                  onChange={(e) => {
                    setNewProductDetailsError({
                      ...newProductDetailsError,
                      productShortCodeError: "",
                    });
                    setNewProductDetails({
                      ...newProductDetails,
                      productShortCode: e.target.value,
                    });
                    setEmptyCredentialsError("");
                  }}
                  onBlur={(e) =>
                    validateValue(e.target.value, "productShortCode")
                  }
                />
                <label for="floatingInput">Product Short Code</label>
              </div>
              {productShortCodeError ? (
                <span className="error">{productShortCodeError}</span>
              ) : (
                <React.Fragment />
              )}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="productStockYellow"
                  placeholder="productStockYellow"
                  value={productStockYellow}
                  onChange={(e) => {
                    setNewProductDetailsError({
                      ...newProductDetailsError,
                      productStockYellowError: "",
                    });
                    setNewProductDetails({
                      ...newProductDetails,
                      productStockYellow: e.target.value,
                    });
                    setEmptyCredentialsError("");
                  }}
                  onBlur={(e) =>
                    validateValue(e.target.value, "productStockYellow")
                  }
                />
                <label for="floatingInput">Product Stock Yellow</label>
              </div>
              {productStockYellowError ? (
                <span className="error">{productStockYellowError}</span>
              ) : (
                <React.Fragment />
              )}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="productStockRed"
                  placeholder="productStockRed"
                  value={productStockRed}
                  onChange={(e) => {
                    setNewProductDetailsError({
                      ...newProductDetailsError,
                      productStockRedError: "",
                    });
                    setNewProductDetails({
                      ...newProductDetails,
                      productStockRed: e.target.value,
                    });
                    setEmptyCredentialsError("");
                  }}
                  onBlur={(e) =>
                    validateValue(e.target.value, "productStockRed")
                  }
                />
                <label for="floatingInput">Product Stock Red</label>
              </div>
              {productStockRedError ? (
                <span className="error">{productStockRedError}</span>
              ) : (
                <React.Fragment />
              )}
            </div>
            <div className="modal-footer text-align-center">
              {emptyCredentialsError ? (
                <div className="mrb-20 error">{emptyCredentialsError}</div>
              ) : (
                <React.Fragment />
              )}
              <button className="btn btn-main" onClick={(e) => onAdd(e)}>
                Add
              </button>
              <button
                className="btn floating-modal-btn btn-secondary"
                onClick={() => onClose()}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};
export default AddProductModal;
