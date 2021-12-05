import * as React from 'react';

const CheckoutProgressBar = (props) => {
    
    return (
        <>
            <ul id="progressbar" className="pl-3">
                <li className={props.progressItem === "Cart" ? "active": ""} id="account"><strong>My Cart</strong></li>
                <li className={props.progressItem === "Billing" ? "active": ""} id="personal"><strong>Billing Address</strong></li>
                <li className={props.progressItem === "Payment" ? "active": ""} id="payment"><strong>Payment</strong></li>
            </ul>
        </>
    );
}

export default CheckoutProgressBar;