import axios from 'axios';
import { makeApiRequestHeader } from '../utils/makeApiRequestHeader';
import { SET_PRODUCT_LIST, SET_ERROR, SET_INITIAL_RESPONSE } from '../constants/actionTypes';

const baseUrl = 'http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8082';

export const getProductsApiCall = async ({ dispatch, history, authToken }) => {
    const apiRequestHeader = makeApiRequestHeader('GET', { 'Accept': 'application/json','Content-Type':'application/json','x-auth-token': authToken }, null, null);
    const apiUrl = `${baseUrl}/product/all`;
    await axios.get(apiUrl, apiRequestHeader)
        .then((apiResponse) => {
            console.log(apiResponse);
            dispatch({
                type: SET_PRODUCT_LIST,
                payload: apiResponse.data
            })
            if (apiResponse.data.body.role) {
                // TODO : Navigation and API Calls based on roles
                // dispatch({
                //     type: SET_SIGN_IN_DATA,
                //     payload: apiResponse.data.body
                // }) 
                history.push('/productlist');

            } else {
                // TODO : Navigation and API Calls based on roles
                //dispatch({ type: SET_INITIAL_RESPONSE })
                history.push('/productlist');

            }
        })
        .catch(() => {
            dispatch({
                type: SET_ERROR
            })
        })

}
