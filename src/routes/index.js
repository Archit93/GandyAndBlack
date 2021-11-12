// import React, { Suspense } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
// //import Header from '../components/common/Header';
// import SignIn from '../components/SignIn';
// import SignUp from '../components/SignUp';
// export const history = createBrowserHistory();

// // const SignIn = React.lazy(() =>
// //   import('../components/SignIn')
// // );

// // const SignUp = React.lazy(() =>
// // import('../components/SignUp')
// // );


// const routes = [
//   {
//     component: SignUp,
//     exact: true,
//     path: '/',
//     title: 'Gandy & Black Aesthetics',
//     nextPath: '/signin',
//     failurePath: null,
//     backBehaviour: {
//       isInternal: true,
//       path: '/'
//     }
//   },
//   {
//     component: SignIn,
//     path: '/signin',
//     title: 'Gandy & Black Aesthetics',
//     nextPath: '/',
//     failurePath: null,
//     backBehaviour: {
//       isInternal: true,
//       path: '/'
//     }
//   }

// ];


// export const AppRouter = ({applicationState, dispatch}) => {
//   //const {mobileView, drawerOpen} = applicationState;
//   return (
//     <Router history={history}>
//       <Suspense fallback={<div />}>
//         <Switch>
//           {routes.map(route => {
//             console.log(route)
//             return (<>
//               {/* <div><Header mobileView={mobileView} drawerOpen={drawerOpen} dispatch={dispatch}/></div> */}
//               <div><Route
//                 key={route.path}
//                 path={route.path}
//                 exact={route.exact}
//                 render={props => (
//                   <route.component {...props} {...route.props} routes={route.routes} applicationState={applicationState} dispatch={dispatch}/>
//                 )}
//               /></div>
//             </>);
//           })}
//         </Switch>
//       </Suspense>
//     </Router>
//   );
// };

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import React from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import ForgotPassword from '../components/ForgotPassword';
import AboutUs from '../components/AboutUs';
import ProductList from '../components/ProductList/ProductList';
import CustomerCart from '../components/CustomerCheckout/CustomerCart';
import CustomerShippingInformation from '../components/CustomerCheckout/CustomerShippingInformation';
import CustomerPayment from '../components/CustomerCheckout/CustomerPayment';
import CustomerPaymentSuccess from '../components/CustomerCheckout/CustomerPaymentSuccess';
import MyProfile from '../components/MyProfile';

import AdminCustomersList from '../components/Admin/AdminCustomerTab/AdminCustomersList';
import CRM from '../components/Admin/AdminCustomerTab/CRM';

export const AppRouter = (props) => {
  return (
    <Router>
        <Switch>
          <Route exact={true} path="/"> <SignIn {...props}/> </Route>
          <Route exact={true} path="/forgot_password"> <ForgotPassword {...props}/> </Route>
          <Route path="/signup" component={SignUp} applicationState={props.applicationState} dispatch={props.dispatch} />
          <Route path="/aboutus" component={AboutUs} applicationState={props.applicationState} dispatch={props.dispatch} />
          <Route exact={true} path="/productlist"> <ProductList {...props}/> </Route>
          <Route exact={true} path="/customercart_details"> <CustomerCart {...props}/> </Route>
          <Route exact={true} path="/customershipping_info"> <CustomerShippingInformation {...props}/> </Route>
          <Route exact={true} path="/customerpayment_info"> <CustomerPayment {...props}/> </Route>
          <Route exact={true} path="/customerpayment_success"> <CustomerPaymentSuccess {...props}/> </Route>
          <Route exact={true} path="/customer_list"><AdminCustomersList {...props}/> </Route>
          <Route exact={true} path="/my_profile"> <MyProfile {...props}/> </Route>

          <Route exact={true} path="/crm"> <CRM {...props}/> </Route>
          {/* <Route path="/productlist" component={ProductList} applicationState={props.applicationState} dispatch={props.dispatch} props={props} {...props}/> */}
          {/* <Route exact={true} path="/checkout" component={CustomerCheckout} applicationState={props.applicationState} dispatch={props.dispatch} /> */}
        </Switch>
    </Router>
  )
};
