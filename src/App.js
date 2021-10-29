
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

import * as React from 'react';
import { AppRouter } from './routes/index';
import {useStateManager} from './reducer/useStateManager';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/common.css';
import './styles/login.css';
import './styles/checkout.css';
import {SET_MOBILE_VIEW} from './constants/actionTypes';


const App = () => {
  const[reducer, dispatch] = React.useReducer(useStateManager, null);
    React.useEffect(() => {
    const setResponsiveness = () => {
      return dispatch({
          type : SET_MOBILE_VIEW,
          payload: window.innerWidth < 900
      })
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, []);

  return (
    <div><AppRouter applicationState={reducer} dispatch={dispatch} /></div>
  )
}

export default App;