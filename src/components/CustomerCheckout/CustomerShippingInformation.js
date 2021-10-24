import * as React from 'react';
import { useHistory } from "react-router-dom";
import CheckoutProgressBar from './CheckoutProgressBar';
import CustomerAmountDetails from './CustomerAmountDetails';

const CustomerShippingInformation = (props) => {
    const history = useHistory();

    return (<div id="checkout">
        <div className="container">
            <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                <div className="row">
                    <div className="col-md-12 mx-0">
                        <form id="msform">
                            <CheckoutProgressBar progressItem = "Billing"/>
                            <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 order-md-first order-last">
                                    <fieldset>
                                        <h2 className="fs-title">Billing Address</h2>
                                        <div className="form-card">
                                            <input type="text" name="fname" placeholder="First Name" />
                                            <input type="text" name="lname" placeholder="Last Name" />
                                            <input type="text" name="email" placeholder="Email" />
                                            <input type="text" name="phno" placeholder="Contact No." />
                                            <input type="text" name="instaid" placeholder="Instagram Name" />
                                            <input type="text" name="delivery_address" placeholder="Delivery Address" />
                                            <input type="text" name="postcode" placeholder="Post Code" />
                                            <label className="h5">Trade of business</label>
                                            <select className="select" id="trade_business" name="trade_business">
                                                <option selected></option>
                                            </select>
                                        </div>
                                        <button className="previous action-button-previous" type="submit" 
                                            onClick={() => { history.push('/customercart_details')}}>Back</button>
                                        <button className="next action-button" type="submit" 
                                            onClick={() => { history.push('/customerpayment_info')}}>Proceed to Pay</button>
                                    </fieldset>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <CustomerAmountDetails/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default CustomerShippingInformation