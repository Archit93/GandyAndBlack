import axios from 'axios';
import { makeApiRequestHeader } from '../utils/makeApiRequestHeader';
import { SET_PRODUCT_LIST, SET_ERROR, SET_INITIAL_RESPONSE, SET_USER_DETAILS } from '../constants/actionTypes';

const baseUrl = 'http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8082';
const baseUrlForUserServices = "http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8081";

export const getProductsApiCall = async ({ dispatch, history, signInResponse, email }) => {
    const apiRequestHeader = makeApiRequestHeader('GET', { 'x-auth-token': signInResponse.authToken }, null, null);
    const apiUrl = `${baseUrl}/product/all`;
    await axios.get(apiUrl, apiRequestHeader)
        .then((apiResponse) => {
            dispatch({
                type: SET_PRODUCT_LIST,
                payload: apiResponse.data
            })
            if(signInResponse.userType.toUpperCase() === 'USER') {
                axios.all([
                    //axios.get(`${baseUrlForUserServices}/user/id/${email}`, apiRequestHeader), 
                    axios.get(`${baseUrlForUserServices}/user/account/${email}`, apiRequestHeader), 
                  ]).then((apiResponse) => {
                    dispatch({
                        type: SET_USER_DETAILS,
                        payload: apiResponse.data
                    })
                      history.push('/productlist');
                  })
            }
        })
        .catch(() => {
            dispatch({
                type: SET_ERROR
            })
        })

}
