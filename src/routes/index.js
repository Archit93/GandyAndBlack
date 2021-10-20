// import React, { Suspense } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
// import Header from '../components/common/Header';
// import SignIn from '../components/SignIn';
// import SignUp from '../components/SignUp';
// export const history = createBrowserHistory();

// const SignIn = React.lazy(() =>
//   import('../components/SignIn')
// );

// const SignUp = React.lazy(() =>
// import('../components/SignUp')
// );


// const routes = [
//   {
//     component: SignUp,
//     exact: true,
//     path: '/',
//     title: 'Gandy & Black Aesthetics',
//     nextPath: '/',
//     failurePath: null,
//     backBehaviour: {
//       isInternal: true,
//       path: '/'
//     }
//   },
//   {
//     component: SignIn,
//     path: '/signIn',
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
//   const {mobileView, drawerOpen} = applicationState;
//   return (
//     <Router history={history}>
//       <Suspense fallback={<div />}>
//         <Switch>
//           {routes.map(route => {
//             console.log(route)
//             return (<>
//               <div><Header mobileView={mobileView} drawerOpen={drawerOpen} dispatch={dispatch}/></div>
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
// import Header from '../components/common/Header';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import ForgotPassword from '../components/ForgotPassword';
import AboutUs from '../components/AboutUs';
import ProductList from '../components/ProductList';

export const AppRouter = ({ applicationState, dispatch }) => {
  return (
    <Router>
        <Switch>
          <Route exact={true} path="/" component={SignIn} applicationState={applicationState} dispatch={dispatch} />
          <Route path="/signup" component={SignUp} applicationState={applicationState} dispatch={dispatch} />
          <Route path="/forgot_password" component={ForgotPassword} applicationState={applicationState} dispatch={dispatch} />
          <Route path="/aboutus" component={AboutUs} applicationState={applicationState} dispatch={dispatch} />
          <Route path="/productlist" component={ProductList} applicationState={applicationState} dispatch={dispatch} />
          {/*<Route path="/aboutus" component={AboutUs} applicationState={applicationState} dispatch={dispatch} /> */}
        </Switch>
    </Router>
  )
};
