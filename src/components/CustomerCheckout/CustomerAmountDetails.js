import * as React from 'react';


const CustomerAmountDetails = (props) => {
    return (<>
        <fieldset>
            <h2 className="fs-title">Amount Information</h2>
            <div className="form-card" style={{ backgroundColor: "#7984a3", color: "#fff" }}>
                <div className="h5">
                    <span>Subtotal</span><span style={{ float: "right" }}>$12</span>
                </div>
                <div className="h6">Total Vat : <span style={{ float: "right" }}>$0</span></div>
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
                    <span>Total</span><span style={{ float: "right" }}>$12</span>
                </div>
            </div>
        </fieldset>
    </>)
}

export default CustomerAmountDetails;