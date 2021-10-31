import * as React from 'react';
import Header from '../common/Header.js';
import CheckoutProgressBar from './CheckoutProgressBar';

const CustomerPaymentSuccess = (props) => {
    return (
        <div>
			<div>
				<Header />
			</div>
            <div id="checkout">
                <div className="container">
                    <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                        <div className="row">
                            <div className="col-md-12 mx-0">
                                <form id="msform">
                                    {/* <CheckoutProgressBar /> */}
                                    <div className="row">
                                        <div className="col-lg-12 col-md-8 col-sm-12 col-xs-12 order-md-first order-last">
                                            <fieldset>
                                                <div className="form-card">
                                                    <div><h2 className="fs-title text-center">Success!</h2></div>
                                                    <div className="row justify-content-center">
                                                        <div className="col-3">
                                                            <img src="https://img.icons8.com/color/96/000000/ok--v2.png" className="fit-image" />
                                                        </div>
                                                    </div>
                                                    <div className="row justify-content-center">
                                                        <div className="col-7 text-center">
                                                            <h5>Your Order Placed Sucessfully</h5>
                                                        </div>
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
    )
}

export default CustomerPaymentSuccess;