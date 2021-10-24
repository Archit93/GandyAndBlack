import * as React from 'react';
import { useHistory } from "react-router-dom";
import CheckoutProgressBar from './CheckoutProgressBar';
import CustomerAmountDetails from './CustomerAmountDetails'

const CustomerCart = (props) => {
	const history = useHistory();

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
											<div className="form-card">
												<div className="h5">
													<span>Product name</span><span style={{ float: "right" }}>$12</span>
												</div>
												<div className="h6">Vat : <span>45</span></div>
												<div className="h6">QTY : <span>45</span></div>
											</div>
											<div className="form-card">
												<div className="h5">
													<span>Product name</span><span style={{ float: "right" }}>$12</span>
												</div>
												<div className="h6">Vat : <span>45</span></div>
												<div className="h6">QTY : <span>45</span></div>
											</div>
											<button className="next action-button" type="submit" onClick={() => {
												history.push('/customershipping_info')

											}}>Next</button>

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
	)
}
export default CustomerCart;