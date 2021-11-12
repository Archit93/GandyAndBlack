import * as actionTypes from "../constants/actionTypes";
import { tempData, customerList } from "../constants/temporaryData";

export const useStateManager = (
  state = {
    mobileView: false,
    drawerOpen: false,
    productList: [],
    customerList: [],
    cartDetails: [],
    customerDetails: {},
    config: {},
    isCartEmpty: true,
    isLoading: false,
    forgotPasswordError: ""
  },
  action
) => {
  switch (action.type) {
    case actionTypes.SET_MOBILE_VIEW:
      return {
        ...state,
        mobileView: action.payload,
      };
    case actionTypes.SET_SIGN_IN_DATA:
      return {
        ...state,
        config: {
          ...state.config,
          access_token: action.payload.authToken,
          role: action.payload.role
        },
      };
    case actionTypes.SET_FORGOT_PASSWORD_ERROR:
    console.log(action);
    return {
      ...state,
      forgotPasswordError : action.payload,
      isLoading: false
    }
    case actionTypes.SET_INITIAL_RESPONSE:
      return {
        ...state,
        productList: tempData,
        customerList: customerList,
        isLoading: false
      };
    case actionTypes.EDIT_PRODUCT_QUANTITY:
      return {
        ...state,
        productList: action.payload,
      };
    case actionTypes.SET_CUSTOMER_CART_DETAILS:
      return {
        ...state,
        cartDetails: action.payload,
      };
    case actionTypes.IS_CART_EMPTY:
      return {
        ...state,
        isCartEmpty: action.payload,
      };
    case actionTypes.SET_CUSTOMER_BILLING_DETAILS:
      return {
        ...state,
        customerDetails: action.payload,
      };
    case actionTypes.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case actionTypes.SET_ERROR:
    default:
      return { state };
  }
};
