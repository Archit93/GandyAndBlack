import axios from 'axios';
import { makeApiRequestHeader } from '../utils/makeApiRequestHeader';
import { SET_SIGN_IN_DATA, SET_ERROR, SET_INITIAL_RESPONSE, SET_FORGOT_PASSWORD_ERROR } from '../constants/actionTypes';

const baseUrl = 'http://13.235.247.221:55586';

export const forgotPasswordApiCall = async ({ dispatch, history, email }) => {
    const apiRequestHeader = makeApiRequestHeader('GET', null, null, null);
    const apiUrl = `${baseUrl}/user/reset/password/${email}`;
    await axios.get(apiUrl, null, apiRequestHeader)
        .then((apiResponse) => {
            console.log(apiResponse);
            dispatch({
                type: SET_SIGN_IN_DATA,
                payload: apiResponse.data.body
            })
            if(apiResponse.data.body.role) {
                // TODO : Navigation and API Calls based on roles
                // dispatch({
                //     type: SET_SIGN_IN_DATA,
                //     payload: apiResponse.data.body
                // }) 
                history.push('/customer_list');

            } else {
                // TODO : Navigation and API Calls based on roles
                dispatch({ type: SET_INITIAL_RESPONSE })
                history.push('/customer_list');

            }
        })
        .catch((error) => {
            console.log(error.response.data);
            console.log(error.response.status === 500);
            if(error.response.status === 500) {
                dispatch({
                    type: SET_FORGOT_PASSWORD_ERROR,
                    payload: error.response.data
                })
            }
            
           history.push('/forgot_password');
        })

}
