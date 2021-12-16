import * as React from "react";

const OrderDetailsTab = ({ orderInfo, showEmailPopUp }) => {

    return (<>
        <div className="row form-card p-3">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <label><strong>Order Id -</strong></label> {orderInfo.id}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <label><strong>Order Date -</strong></label> {orderInfo.orderDate}
            </div>
        </div>
        <div className="row form-card p-3">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <label><strong>Order No -</strong></label> {orderInfo.orderNum}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <label><strong>Order Amount -</strong></label> £ {orderInfo.amount}
            </div>
        </div>
        <div className="row form-card p-3">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <label><strong>Order Payment Method -</strong></label> {orderInfo.orderpaymentmethod}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <label><strong>Order Shipping cost  -</strong></label> {orderInfo.shippingcost}
            </div>
        </div>
        <div className="row form-card p-3">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <label><strong>Products Warehouse -</strong></label> {orderInfo.warehouse}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <label><strong>Promocode Discount -</strong></label> {orderInfo.promocodeapplied ? 'Yes' : 'No'}
            </div>
        </div>
        <div className="text-center mt-3">
            <button className="btn btn-main" onClick= {() => showEmailPopUp(orderInfo)}>
                Send Email
      </button>
            {/* <button className="btn btn-secondary">
          Close
      </button> */}
        </div>
    </>)
}
export default OrderDetailsTab