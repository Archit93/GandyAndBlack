import * as actionTypes from '../constants/actionTypes';
export const useStateManager = (state = {
    mobileView: false,
    drawerOpen:false
}, action)=> {
    switch(action.type) {
        case actionTypes.SET_MOBILE_VIEW:
        return {
            ...state,
            mobileView: action.payload
        }
        case actionTypes.SET_DRAWER_OPEN:
        return {
            ...state,
            drawerOpen: action.payload
        }
        default: 
        return {state}
    }
}