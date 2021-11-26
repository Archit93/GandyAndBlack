import * as React from "react";
import HeaderMenu from "../common/HeaderMenu.js";
import CheckoutProgressBar from "./CheckoutProgressBar";

const CustomerPaymentFail = (props) => {
  return (
    <div>
      <div>
        <HeaderMenu />
      </div>
      <div id="checkout">
        <div className="container-fluid">
          <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
            <div className="row">
              <div className="col-md-12 mx-0">
                <form id="msform">
                  {/* <CheckoutProgressBar /> */}
                  <div className="row">
                    <div className="col-lg-12 col-md-8 col-sm-12 col-xs-12 order-md-first order-last">
                      <fieldset>
                        <div className="form-card">
                            <div>
                            <h2 className="fs-title text-center">Order Failed!</h2>
                            </div>
                            <div className="row justify-content-center">
                            <div className="col-3 cross-icon">
                            <i class="fa fa-times-circle fa-5x" aria-hidden="true"></i>
                            </div>
                            </div>
                            <div className="row justify-content-center">
                            <div className="col-7 text-center">
                                <h5>Please try again</h5>
                            </div>
                            </div>
                            <div className="text-center mrt-20">
                                <button
                                className="btn btn-secondary"
                                type="submit">
                                Back to Home
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

export default CustomerPaymentFail;
