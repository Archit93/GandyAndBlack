import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import ForgotPassword from "../components/ForgotPassword";
import AboutUs from "../components/AboutUs";
import ProductList from "../components/ProductList/ProductList";
import CustomerCart from "../components/CustomerCheckout/CustomerCart";
import CustomerShippingInformation from "../components/CustomerCheckout/CustomerShippingInformation";
import CustomerPayment from "../components/CustomerCheckout/CustomerPayment";
import CustomerPaymentSuccess from "../components/CustomerCheckout/CustomerPaymentSuccess";
import MyProfile from "../components/Customer/UserProfile/MyProfile";
import PayPal from "../components/CustomerCheckout/PayPal";
import PayWithCard from "../components/CustomerCheckout/PayWithCard";
import MyOrders from "../components/MyOrders";
import AdminCustomersList from "../components/Admin/AdminCustomerTab/AdminCustomersList";
import CRM from "../components/Admin/CRMTab/CRM";
import HomePage from "../components/HomePage";
import AdminProductList from "../components/Admin/AdminProductListTab/AdminProductList";
import AdminPlaceOrder from "../components/Admin/AdminPlaceOrderTab/AdminPlaceOrder";
import ProductListTiles from "../components/ProductList/ProductListTiles";

import CustomerPaymentFail from "../components/CustomerCheckout/CustomerPaymentFail";

export const AppRouter = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <HomePage {...props} />
        </Route>
        <Route exact={true} path="/signin">
          <SignIn {...props} />
        </Route>
        <Route exact={true} path="/forgot_password">
          <ForgotPassword {...props} />
        </Route>
        <Route exact={true} path="/signup">
          <SignUp {...props} />
        </Route>
        <Route exact={true} path="/aboutus">
          <AboutUs {...props} />
        </Route>
        <Route exact={true} path="/productlist">
          <ProductList {...props} />
        </Route>
        <Route exact={true} path="/customercart_details">
          <CustomerCart {...props} />
        </Route>
        <Route exact={true} path="/customershipping_info">
          <CustomerShippingInformation {...props} />
        </Route>
        <Route exact={true} path="/customerpayment_info">
          <CustomerPayment {...props} />
        </Route>
        <Route exact={true} path="/customerpayment_success">
          <CustomerPaymentSuccess {...props} />
        </Route>
        <Route exact={true} path="/customer_list">
          <AdminCustomersList {...props} />
        </Route>
        <Route exact={true} path="/my_profile">
          <MyProfile {...props} />
        </Route>
        <Route exact={true} path="/paypal">
          <PayPal {...props} />
        </Route>
        <Route exact={true} path="/pay-with-card">
          <PayWithCard {...props} />
        </Route>
        <Route exact={true} path="/crm">
          <CRM {...props} />
        </Route>
        <Route exact={true} path="/my_orders">
          <MyOrders {...props} />
        </Route>
        <Route exact={true} path="/admin_product_list">
          <AdminProductList {...props} />
        </Route>
        <Route exact={true} path="/place_order">
          <AdminPlaceOrder {...props} />
        </Route>
        <Route exact={true} path="/producttypes">
          <ProductListTiles {...props} />
        </Route>

        <Route exact={true} path="/cutomerfail">
          <CustomerPaymentFail {...props} />
        </Route>
      </Switch>
    </Router>
  );
};
