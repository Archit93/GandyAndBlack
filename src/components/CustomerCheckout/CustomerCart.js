import * as React from "react";
import HeaderMenu from "../common/HeaderMenu.js";
import { useHistory } from "react-router-dom";
import CheckoutProgressBar from "./CheckoutProgressBar";
import CustomerAmountDetails from "./CustomerAmountDetails";
import {
  EDIT_PRODUCT_QUANTITY,
} from "../../constants/actionTypes";

const CustomerCart = (props) => {
  const history = useHistory();
  const { applicationState, dispatch } = props;
  const { cartDetails, productList } = applicationState;
  const [tempCart, setTempCart] = React.useState(cartDetails);

  React.useEffect(() => {
    const cartData = JSON.parse(window.sessionStorage.getItem("cart"));
    if (cartData) {
      setTempCart(cartData);
    }
  }, []);

  const removeItemFromCart = (e, productid) => {
    e.preventDefault();
    const productlistArray = [];
    const filtered = tempCart.filter(
      (cartItem) => cartItem.productid !== productid
    );
    productList.map((rowdetail) => {
      let productListObject = Object.assign(rowdetail);
      if (rowdetail.productid === productid) {
        productListObject = {
          ...rowdetail,
          quantity: 0,
        };
      }
      productlistArray.push(productListObject);
    });
    setTempCart(filtered);
    dispatch({
      type: EDIT_PRODUCT_QUANTITY,
      payload: productlistArray,
      cartDetails: filtered
    });
    window.sessionStorage.setItem("cart", JSON.stringify(filtered));
  };

  const updateProductQuantity = (e, product) => {
    const {productList} = applicationState;
    const productlistArray = [];
    tempCart.forEach((productInCart) => {
      if (productInCart.productid === product.productid) {
        productInCart.quantity = e.target.value ? Number(e.target.value) : e.target.value;
      }
    })
    productList.map((rowdetail) => {
      let productListObject = Object.assign(rowdetail);
      if (rowdetail.productid === product.productid) {
        productListObject = {
          ...rowdetail,
          quantity:  e.target.value ? Number(e.target.value) : 0,
        };
      }
      productlistArray.push(productListObject);
    });
    setTempCart(tempCart);
    dispatch({
      type: EDIT_PRODUCT_QUANTITY,
      payload: productlistArray,
      cartDetails: tempCart
    });
    window.sessionStorage.setItem("cart", JSON.stringify(tempCart));
  }
  
  const isNextButtonDisabled = () => {
    let disableNextButton = false;
    disableNextButton = !(tempCart && tempCart.length > 0)
    tempCart.forEach((productInCart) => {
      if(!productInCart.quantity) {
        disableNextButton = true
      }
    })
    return disableNextButton
  }

  return (
    <div>
      <div>
        <HeaderMenu dispatch={dispatch} cartCount={tempCart.length} />
      </div>
      <div id="checkout">
        <div className="container-fluid">
          <div className="card px-0 pb-0">
            <div className="row">
              <div className="col-md-12 mx-0">
                <form id="msform">
                  <CheckoutProgressBar progressItem="Cart" />
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 order-md-first order-last">
                      <fieldset>
                        <h2 className="fs-title">My Cart</h2>
                        {tempCart &&
                          tempCart ?.map((product) => (
                            <div className="form-card" key={product.productid}>
                              <div className="h5">
                                <span style={{ fontWeight: "600" }}>{product.brand}</span>
                                <span style={{ float: "right", cursor: "pointer" }}
                                  onClick={(e) =>
                                    removeItemFromCart(e, product.productid)
                                  }>
                                  <i className="fa fa-trash icon-red"></i>
                                </span>
                                <span style={{ float: "right" }}>
                                  £{product.salepriceperunit}
                                </span>

                              </div>
                              <div className="h6">
                                <span>
                                  {product.producttype} {product.productdesc}
                                </span>
                              </div>
                              <div className="h6">
                                VAT : <span>£{product.vat}</span>
                              </div>
                              <div className="h6">
                                <span className="mrr-5">QTY : </span>
                                <span>
                                  <input
                                    type="number"
                                    className="cart-input"
                                    name="quantity"
                                    id={`quantity-${product.productid}`}
                                    value={product.quantity}
                                    onChange={(e) => updateProductQuantity(e, product)}
                                  />
                                </span>
                              </div>
                            </div>
                          ))}
                        <button
                          className="previous action-button-previous"
                          type="submit"
                          onClick={() => {
                            history.push("/producttypes");
                          }}
                        >
                          Back
                        </button>
                        <button
                          className="next action-button"
                          type="submit"
                          name="next"
                          id="next"
                          onClick={() => {
                            history.push("/customershipping_info");
                          }}
                          disabled={isNextButtonDisabled()}
                        >
                          Next
                        </button>
                      </fieldset>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                      <CustomerAmountDetails
                        cartDetails={tempCart}
                        dispatch={dispatch}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomerCart;
