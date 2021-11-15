import * as React from "react";
import HeaderMenu from "../common/Header.js";
import { useHistory } from "react-router-dom";
import CheckoutProgressBar from "./CheckoutProgressBar";
import CustomerAmountDetails from "./CustomerAmountDetails";

const CustomerCart = (props) => {
  const history = useHistory();
  const { applicationState } = props;
  const { cartDetails } = applicationState;

  return (
    <div>
      <div>
        <HeaderMenu cartCount={cartDetails.length} />
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
                        {cartDetails &&
                          cartDetails?.map((product) => (
                            <div className="form-card">
                              <div className="h5">
                                <span>
                                  {product.brand} {product.productType}{" "}
                                  {product.description}
                                </span>
                                <span style={{ float: "right" }}>
                                  £{product.salesPerUnit}
                                </span>
                              </div>
                              <div className="h6">
                                QTY : <span>{product.quantity}</span>
                              </div>
                            </div>
                          ))}
                          <div className="mt-4">
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
                          </div>
                      </fieldset>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                      <CustomerAmountDetails {...props} />
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
