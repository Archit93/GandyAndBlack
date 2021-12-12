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
import MyOrders from "../components/Customer/MyOrders/MyOrders";
import AdminCustomersList from "../components/Admin/AdminCustomerTab/AdminCustomersList";
import CRM from "../components/Admin/CRMTab/CRM";
import HomePage from "../components/HomePage";
import AdminProductList from "../components/Admin/AdminProductListTab/AdminProductList";
import AdminPlaceOrder from "../components/Admin/AdminPlaceOrderTab/AdminPlaceOrder";
import ProductListTiles from "../components/ProductList/ProductListTiles";
import CustomerPaymentFail from "../components/CustomerCheckout/CustomerPaymentFail";
import RequireAuth from "../components/RequireAuth";
import AdminCustomerOrderList from "../components/Admin/AdminCustomerTab/AdminCustomerOrderList";
import CppPage1 from "../components/Admin/CPP/CppPage1";
import CppPage2 from "../components/Admin/CPP/CppPage2";
import CppPage3 from "../components/Admin/CPP/CppPage3";
import CustomerProfile from "../components/Admin/AdminCustomerProfile/CustomerProfile";

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
          {RequireAuth(ProductList, { ...props })}
        </Route>
        <Route exact={true} path="/customercart_details">
          {RequireAuth(CustomerCart, { ...props })}
        </Route>
        <Route exact={true} path="/customershipping_info">
          {RequireAuth(CustomerShippingInformation, { ...props })}
        </Route>
        <Route exact={true} path="/customerpayment_info">
          {RequireAuth(CustomerPayment, { ...props })}
        </Route>
        <Route exact={true} path="/customerpayment_success">
          {RequireAuth(CustomerPaymentSuccess, { ...props })}
        </Route>
        <Route exact={true} path="/customer_list">
          {RequireAuth(AdminCustomersList, { ...props })}
        </Route>
        <Route exact={true} path="/my_profile">
          {RequireAuth(MyProfile, { ...props })}
        </Route>
        <Route exact={true} path="/paypal">
          {RequireAuth(PayPal, { ...props })}
        </Route>
        <Route exact={true} path="/pay-with-card">
          {RequireAuth(PayWithCard, { ...props })}
        </Route>
        <Route exact={true} path="/crm">
          {RequireAuth(CRM, { ...props })}
        </Route>
        <Route exact={true} path="/my_orders">
          {RequireAuth(MyOrders, { ...props })}
        </Route>
        <Route exact={true} path="/admin_product_list">
          {RequireAuth(AdminProductList, { ...props })}
        </Route>
        <Route exact={true} path="/place_order">
          {RequireAuth(AdminPlaceOrder, { ...props })}
        </Route>
        <Route exact={true} path="/producttypes">
          {RequireAuth(ProductListTiles, { ...props })}
        </Route>
        <Route exact={true} path="/customerfail">
          {RequireAuth(CustomerPaymentFail, { ...props })}
        </Route>
        <Route exact={true} path="/orders_by_customer">
          {RequireAuth(AdminCustomerOrderList, { ...props })}
        </Route>
        <Route exact={true} path="/cppPage1">
          {RequireAuth(CppPage1, { ...props })}
        </Route>
        <Route exact={true} path="/cppPage2">
          {RequireAuth(CppPage2, { ...props })}
        </Route>
        <Route exact={true} path="/cppPage3">
          {RequireAuth(CppPage3, { ...props })}
        </Route>
        <Route exact={true} path="/customer_profile">
          {RequireAuth(CustomerProfile, { ...props })}
        </Route>
      </Switch>
    </Router>
  );
};
