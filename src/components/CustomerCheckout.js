import * as React from 'react';
import { useHistory } from "react-router-dom";

const CustomerCheckout = (props) => {
    const history = useHistory();
    return (
        <div id="checkout">
		<div className="container">
			{/* <!-- MultiStep Form -->
		    <!-- <div className="row justify-content-center mt-0"> -->
		        <!-- <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2"> --> */}
		            <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
		                <div className="row">
		                    <div className="col-md-12 mx-0">
		                        <form id="msform">
		                            {/* <!-- progressbar --> */}
		                            <ul id="progressbar">
		                                <li className="active" id="account"><strong>My Cart</strong></li>
		                                <li id="personal"><strong>Billing Address</strong></li>
		                                <li id="payment"><strong>Payment</strong></li>
		                            </ul> 
		                            {/* <!-- fieldsets --> */}
		                            <div className="row">
			                            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 order-md-first order-last">
				                            <fieldset>
				                            	<h2 className="fs-title">My Cart</h2> 
				                                <div className="form-card">
				                                    <div className="h5">
				                                    	<span>Product name</span><span style={{float:"right"}}>$12</span>
				                                    </div>
				                                    <div className="h6">Vat : <span>45</span></div>
				                                    <div className="h6">QTY : <span>45</span></div>
				                                </div> 
				                                <div className="form-card">
				                                    <div className="h5">
				                                    	<span>Product name</span><span style={{float:"right"}}>$12</span>
				                                    </div>
				                                    <div className="h6">Vat : <span>45</span></div>
				                                    <div className="h6">QTY : <span>45</span></div>
				                                </div> 
				                                <input type="button" name="next" className="next action-button" value="Next" />
				                            </fieldset> */}
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
				                                <input type="button" name="previous" className="previous action-button-previous" value="Back" /> 
				                                <input type="button" name="next" className="next action-button" value="Proceed to Pay" />
				                            </fieldset>
				                            <fieldset>
				                            	<h2 className="fs-title">Payment Information</h2>
				                                <div className="form-card">
				                                    <div className="radio-group">
				                                        <div className="h5">
				                                        	<div className='radio' data-value="credit"></div>Credit Card
				                                        </div>
				                                        <div className="h5">
				                                        	<div className='radio' data-value="paypal"></div>Paypal
				                                    	</div>
				                                        <div className="h5">
				                                        	<div className='radio' data-value="paypal"></div>Pay on Delivery
				                                        </div>
				                                    </div>
				                                </div> 
				                                <input type="button" name="previous" className="previous action-button-previous" value="Back" /> 
				                                <input type="button" name="make_payment" className="next action-button" value="Confirm Order" />
				                            </fieldset>
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
			                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
			                            	<fieldset>
			                            		<h2 className="fs-title">Amount Information</h2> 
				                                <div className="form-card" style={{backgroundColor: "#7984a3",color: "#fff"}}>
				                                    <div className="h5">
				                                    	<span>Subtotal</span><span style={{float:"right"}}>$12</span>
				                                    </div>
				                                    <div className="h6">Total Vat : <span style={{float:"right"}}>$0</span></div>
				                                    <div className="row">
					                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
					                                    	<label className="h6">Shipping Cost</label>
					                                    </div>
					                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
					                                    	<select className="select" id="shipping" name="shipping">
					                                            <option selected>Next day delivery 9.98GBP</option>
					                                        </select> 
					                                    </div>
					                                </div>
				                                    <div className="separator"></div>
				                                    <div className="h5">
				                                    	<span>Total</span><span style={{float:"right"}}>$12</span>
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
    );
}

export default CustomerCheckout