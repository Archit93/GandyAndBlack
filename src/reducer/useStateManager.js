import * as actionTypes from '../constants/actionTypes';
import {tempData, customerList} from '../constants/temporaryData';

export const useStateManager = (state = {
    mobileView: false,
    drawerOpen: false,
    productList: [],
    customerList: [],
    config: {}
}, action)=> {
    switch(action.type) {
        case actionTypes.SET_MOBILE_VIEW:
        return {
            ...state,
            mobileView: action.payload
        }
        case actionTypes.SET_SIGN_IN_DATA: 
        return {
            ...state,
            config: {
                ...state.config,
                access_token : action.payload.access_token,
                role: action.payload.role
            }
        }
        case actionTypes.SET_INITIAL_RESPONSE:
        return {
            ...state,
            productList: tempData,
            customerList: customerList
        }
        case actionTypes.EDIT_PRODUCT_QUANTITY:
        return {
            ...state,
            productList: action.payload
        }
        case actionTypes.SET_ERROR:
        default: 
        return {state}
    }
}