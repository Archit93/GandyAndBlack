import * as React from "react";
import HeaderMenu from "../common/HeaderMenu.js";
import CheckoutProgressBar from "./CheckoutProgressBar";
import { useHistory } from "react-router-dom";
import { EDIT_PRODUCT_QUANTITY } from "../../constants/actionTypes";
import {getMyOrdersApiCall} from "../../serviceCalls/getMyOrdersApiCall";

const CustomerPaymentSuccess = (props) => {
  const { applicationState, dispatch } = props;
  const history = useHistory();

  React.useEffect(()=> {
    const { productList, config, customerDetails } = applicationState;
    const productlistArray = [];
    productList.forEach((product) => {
      let productListObject = Object.assign(product);
      productListObject = {
        ...productListObject,
        quantity: 0,
      };
      productlistArray.push(productListObject);
    });
    getMyOrdersApiCall({
      dispatch: dispatch,
      authToken: config.authToken,
      email: customerDetails.email,
      productList : productlistArray,
      cartDetails: []
    })
  }, [applicationState.config.authToken]);

  const onContinueShopping = () => {
    history.push("/producttypes")
  }
  return (
    <div>
      <div>
        <HeaderMenu dispatch={dispatch} />
      </div>
      <div id="checkout">
        <div className="container-fluid">
          <div className="card px-0 pb-0 mb-3">
            <div className="row">
              <div className="col-md-12 mx-0">
                <form id="msform">
                  {/* <CheckoutProgressBar /> */}
                  <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-8 col-sm-12 col-xs-12 ">
                      <fieldset>
                        <div className="form-card">
                          <div>
                            <h2 className="fs-title text-center">Success!</h2>
                          </div>
                          <div className="row justify-content-center">
                            <div className="col-3">
                              <img
                                src="https://img.icons8.com/color/96/000000/ok--v2.png"
                                className="fit-image"
                              />
                            </div>
                          </div>
                          <div className="row justify-content-center">
                            <div className="col-7 text-center">
                              <h5>Your Order Placed Sucessfully</h5>
                            </div>
                          </div>
                          <div className="text-center mrt-20">
                            <button
                              className="btn btn-secondary"
                              type="submit"
                              onClick={() => onContinueShopping()}
                            >
                              Continue Shopping
                            </button>
                          </div>
                        </div>
                      </fieldset>
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

export default CustomerPaymentSuccess;
