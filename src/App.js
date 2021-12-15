// import * as React from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { AppRouter } from './routes/index';

// import {SET_MOBILE_VIEW} from './constants/actionTypes';
// import {useStateManager} from './reducer/useStateManager';

// const theme = createTheme();

// const App = () => {
//   const[reducer, dispatch] = React.useReducer(useStateManager, null);
//   React.useEffect(() => {
//     const setResponsiveness = () => {
//       return dispatch({
//           type : SET_MOBILE_VIEW,
//           payload: window.innerWidth < 900
//       })
//     };

//     setResponsiveness();
//     window.addEventListener("resize", () => setResponsiveness());

//     return () => {
//       window.removeEventListener("resize", () => setResponsiveness());
//     }
//   }, []);

// if(reducer) {
//   return (
//    <ThemeProvider theme={theme}>
//       <div><AppRouter applicationState={reducer} dispatch={dispatch} /></div>
//     </ThemeProvider>
//   );

// } else {
//   return (
//     <ThemeProvider theme={theme}>
//       <div>Loader</div>
//     </ThemeProvider>
//   );
// }

// }
// export default App;

import * as React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { AppRouter } from "./routes/index";
import { useStateManager } from "./reducer/useStateManager";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/common.css";
import "./styles/login.css";
import "./styles/checkout.css";
import "./styles/g-b-insta-landing-page.css";
import "./styles/globals.css";
import "./styles/styleguide.css";
import "./styles/admin.css";
import { SET_MOBILE_VIEW } from "./constants/actionTypes";

// Learning
// To best leverage Stripe’s advanced fraud functionality,
// include this script on every page, not just the checkout page.
// This allows Stripe to detect anomalous behavior that may be indicative
// of fraud as customers browse your website.
// Note: This is why we are adding it to a Layout component.

const stripePromise = loadStripe(
  "pk_test_51JumLXBPQeAuTgL1NI4yDdkimtENKscd8FBy4LRA4ahqXVEbBRt4VgcobThjBxmwywgTwX1t2PtodBZYjYYp5gbY00cI3NjBn6"
);
const App = () => {
  const [reducer, dispatch] = React.useReducer(useStateManager, {
    mobileView: false,
    drawerOpen: false,
    productList: [],
    customerList: [],
    cartDetails: [],
    customerDetails: {},
    shippingAddressDetails: {},
    billingAddressDetails: {},
    isSameAddress: true,
    orderDetails: [],
    config: {
      signInError: false,
      authToken: "",
    },
    isCartEmpty: true,
    isLoading: false,
    forgotPasswordError: "",
    totalAmount: 0,
    totalVatAmount: 0,
    subTotalAmount: 0,
    shippingCost: 0,
    paymentMethod: "",
    adminPlaceOrder: [],
    signUpStatus: {
      signUpError: false,
    },
    addDeleteStatus: "",
    alertMessage: "",
    profileUpdateStatus: "",
    getCustomerOrderList: {},
    taProductRates: [],
    cppFinalDetails: {
      selectedProduct: [],
      totalBoxesPurchasedWeekly: 0,
      totalBoxesPurchasedMonthly: 0,
      effectiveCost: 0,
      totalTAProfitShare: 0,
      trainerName: "",
      trainingAcademy: "",
      noOfStudents: "",
      productsTrainedOn: "",
      noOfBoxes: "",
      minimumProfit: "1",
      overhead: "1",
      year1: 0,
      year2: 0,
      year3: 0,
    },
  });
  React.useEffect(() => {
    const setResponsiveness = () => {
      return dispatch({
        type: SET_MOBILE_VIEW,
        payload: window.innerWidth < 900,
      });
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  return (
    <div>
      <Elements stripe={stripePromise}>
        <AppRouter applicationState={reducer} dispatch={dispatch} />
      </Elements>
    </div>
  );
};

export default App;
