import * as actionTypes from '../constants/actionTypes';
import {tempData} from '../constants/temporaryData';

export const useStateManager = (state = {
    mobileView: false,
    drawerOpen: false,
    productList: []
}, action)=> {
    switch(action.type) {
        case actionTypes.SET_MOBILE_VIEW:
        return {
            ...state,
            mobileView: action.payload
        }
        case actionTypes.SET_INITIAL_RESPONSE:
        return {
            ...state,
            productList: tempData
        }
        case actionTypes.EDIT_PRODUCT_QUANTITY:
        return {
            ...state,
            productList: action.payload
        }

        default: 
        return {state}
    }
}