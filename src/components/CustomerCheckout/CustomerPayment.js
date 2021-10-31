import * as React from 'react';
import Header from '../common/Header.js';
import { useHistory } from "react-router-dom";
import CheckoutProgressBar from './CheckoutProgressBar';
import CustomerAmountDetails from './CustomerAmountDetails'

const CustomerPayment = (props) => {
    const history = useHistory();

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
                                    <CheckoutProgressBar progressItem="Payment" />
                                    <div className="row">
                                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 order-md-first order-last">
                                            <fieldset>
                                                <h2 className="fs-title">Payment Information</h2>
                                                <div className="form-card">
                                                    <div className="radio-group">
                                                        <div className="h5">
                                                            <div className='radio' data-value="credit"></div>Credit Card</div>
                                                        <div className="h5">
                                                            <div className='radio' data-value="paypal"></div>Paypal</div>
                                                        <div className="h5">
                                                            <div className='radio' data-value="paypal"></div>Pay on Delivery</div>
                                                    </div>
                                                </div>
                                                <button className="previous action-button-previous" type="submit"
                                                    onClick={() => { history.push('/customershipping_info') }}>Back</button>
                                                <button className="next action-button" type="submit"
                                                    onClick={() => { history.push('/customerpayment_success') }}>Confirm Order</button>
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <CustomerAmountDetails />
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

export default CustomerPayment;


