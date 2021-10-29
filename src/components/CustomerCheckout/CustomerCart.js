import * as React from "react";
import { useHistory } from "react-router-dom";
import CheckoutProgressBar from "./CheckoutProgressBar";
import CustomerAmountDetails from "./CustomerAmountDetails";

const CustomerCart = (props) => {
  const history = useHistory();
  const selectedProducts = [
    {
      productId: 35,
      brand: "JBP",
      productType: "Body Filler",
      description: "22g x 70 mm",
      quantity: 4,
      availabilty: true,
      salesPerUnit: "8.00",
    },
    {
      productId: 37,
      brand: "Lidocaine",
      productType: "Classic-S Body Filler",
      description: "1 x 10ml",
      quantity: 2,
      availabilty: true,
      salesPerUnit: "24.00",
    },
  ];
  return (
    <div id="checkout">
      <div className="container">
        <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
          <div className="row">
            <div className="col-md-12 mx-0">
              <form id="msform">
                <CheckoutProgressBar progressItem="Cart" />
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 order-md-first order-last">
                    <fieldset>
                      <h2 className="fs-title">My Cart</h2>
                      {selectedProducts.map((product) => (
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
                      selectedProducts={selectedProducts}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomerCart;
