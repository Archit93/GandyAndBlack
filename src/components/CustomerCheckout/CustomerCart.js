import * as React from "react";
import HeaderMenu from "../common/HeaderMenu.js";
import { useHistory } from "react-router-dom";
import CheckoutProgressBar from "./CheckoutProgressBar";
import CustomerAmountDetails from "./CustomerAmountDetails";

const CustomerCart = (props) => {
  const history = useHistory();
  const { applicationState, dispatch } = props;
  const { cartDetails } = applicationState;
  const [tempCart, setTempCart] = React.useState(cartDetails);

  React.useEffect(() => {
    const cartData = JSON.parse(window.sessionStorage.getItem("cart"));
    if (cartData) {
      setTempCart(cartData);
    }
  }, []);

  return (
    <div>
      <div>
        <HeaderMenu cartCount={tempCart.length} />
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
                          tempCart?.map((product) => (
                            <div className="form-card" key={product.productid}>
                              <div className="h5">
                                <span>{product.brand}</span>
                                <span style={{ float: "right" }}>
                                  £{product.salepriceperunit}
                                </span>
                              </div>
                              <div className="h5">
                                <span>
                                  {product.producttype} {product.productdesc}
                                </span>
                              </div>
                              <div className="h6">
                                VAT : <span>£{product.vat}</span>
                              </div>
                              <div className="h6">
                                QTY : <span>{product.quantity}</span>
                              </div>
                            </div>
                          ))}
                        <button
                          className="previous action-button-previous"
                          type="submit"
                          onClick={() => {
                            history.push("/productlist");
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
