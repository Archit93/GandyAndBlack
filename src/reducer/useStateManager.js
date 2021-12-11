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
    profileUpdateStatus: "",
    getCustomerOrderList: {},
    taProductRates: []
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
          signInError: action.signInError,
        },
      };
    case actionTypes.SET_SIGN_UP_DATA:
      return {
        ...state,
        signUpStatus: action.payload,
        isLoading: false,
      };
    case actionTypes.SET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
      };
    case actionTypes.SET_USER_DETAILS:
      return {
        ...state,
        customerDetails: action.payload,
        orderDetails: action.orderDetails
          ? action.orderDetails
          : state.orderDetails,
        shippingAddressDetails: action.shippingAddressDetails,
        productList: action.productList,
        cartDetails: action.cartDetails,
        isLoading: false,
      };
    case actionTypes.UPDATE_USER_DETAILS:
      return {
        ...state,
        customerDetails: action.payload,
        shippingAddressDetails: action.shippingAddressDetails,
        isLoading: false,
      };
    case actionTypes.SET_FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        forgotPasswordError: action.payload,
        isLoading: false,
      };
    case actionTypes.EDIT_PRODUCT_QUANTITY:
      return {
        ...state,
        productList: action.payload,
        cartDetails: action.cartDetails ? action.cartDetails : [],
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
        shippingAddressDetails: action.payload?.shippingAddressDetails,
        billingAddressDetails:
          action.payload?.billingAddressDetails || state.billingAddressDetails,
        isSameAddress: action.payload?.isSameAddress || state.isSameAddress,
      };
    case actionTypes.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case actionTypes.SET_TOTAL_AMOUNT:
      return {
        ...state,
        subTotalAmount: action.payload.subTotalAmount,
        totalVatAmount: action.payload.totalVatAmount,
        totalAmount: action.payload.totalAmount,
        shippingCost: action.payload.shippingCost,
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
        isLoading: false,
      };
    case actionTypes.SET_KANBAN_DETAILS:
      return {
        ...state,
        customerList: action.customerList,
        crmDetails: action.payload,
        taProductRates: action.taProductRates,
        isLoading: false
      };
    case actionTypes.ADMIN_ADD_ITEM_FOR_ORDER:
      return {
        ...state,
        adminPlaceOrder: action.payload.adminPlaceOrder,
        subTotalAmount: action.payload.subTotalAmount,
        totalVatAmount: action.payload.totalVatAmount,
        totalAmount: action.payload.totalAmount,
        shippingCost: action.payload.shippingCost,
      };
    case actionTypes.SET_PROFILE_UPDATE_STATUS:
      return {
        ...state,
        profileUpdateStatus: action.payload,
      };
    case actionTypes.GET_CUSTOMER_ORDER_LIST:
      return {
        ...state,
        getCustomerOrderList: action.payload,
        isLoading: false,
      };
    case actionTypes.SET_ERROR:
    case actionTypes.RESET_ALL_DATA:
    default:
      return { state };
  }
};
