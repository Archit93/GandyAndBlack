import * as React from "react";

const CustomerDetailsTab = ({ orderInfo }) => {

  return (<>
    <div className="row form-card mt-5">
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <label><strong>Customer Name -</strong></label> {orderInfo.customerName}
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <label><strong>Customer Mobile -</strong></label> {orderInfo.customerPhone}
      </div>
    </div>
    <div className="row form-card mt-3">
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <label><strong>Customer Email -</strong></label> {orderInfo.customerEmail}
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <label><strong>Delivery Address -</strong></label> {orderInfo.customerAddress} Postal Code - {orderInfo.postalcode}
      </div>
    </div>
  </>)
}
export default CustomerDetailsTab