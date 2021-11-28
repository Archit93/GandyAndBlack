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
    orderDetails: [],
    config: {},
    isCartEmpty: true,
    isLoading: false,
    forgotPasswordError: "",
    totalAmount: 0,
    paymentMethod: "",
    adminPlaceOrder: [],
    signUpStatus: null,
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
          authToken: action.payload.authToken,
          userType: action.payload.userType,
        },
      };
    case actionTypes.SET_SIGN_UP_DATA:
      return {
        ...state,
        signUpStatus: action.payload,
      };
    case actionTypes.SET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload
      };
    case actionTypes.SET_USER_DETAILS:
      return {
        ...state,
        customerDetails: action.payload,
        orderDetails: action.orderDetails,
        isLoading: false,
      };
    case actionTypes.SET_FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        forgotPasswordError: action.payload,
        isLoading: false,
      };
    case actionTypes.SET_INITIAL_RESPONSE:
      return {
        ...state,
        productList: tempData,
        customerList: customerList,
        isLoading: false,
      };
    case actionTypes.EDIT_PRODUCT_QUANTITY:
      return {
        ...state,
        productList: action.payload,
        cartDetails: action.cartDetails ? action.cartDetails : []
      };
    case actionTypes.SET_TILE_CLICKED:
      return {
        ...state,
        tileClicked: action.payload,
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
    case actionTypes.SET_TOTAL_AMOUNT:
      return {
        ...state,
        totalAmount: action.payload,
      };
    case actionTypes.SET_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    case actionTypes.UPDATE_CUSTOMER_DETAILS:
      return {
        ...state,
        customerDetails: action.payload,
        isLoading: true,
      };
    case actionTypes.SET_KANBAN_DETAILS:
      return {
        ...state,
        crmDetails: action.payload,
      };
    case actionTypes.ADMIN_ADD_ITEM_FOR_ORDER:
      return {
        ...state,
        adminPlaceOrder: action.payload,
      };
    case actionTypes.SET_ERROR:
    case actionTypes.RESET_ALL_DATA:
    default:
      return { state };
  }
};
