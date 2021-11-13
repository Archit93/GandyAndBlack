import axios from 'axios';
import { makeApiRequestHeader } from '../utils/makeApiRequestHeader';
import { SET_SIGN_IN_DATA, SET_ERROR, SET_INITIAL_RESPONSE } from '../constants/actionTypes';

// const baseUrl = 'http://13.235.247.221:55586';
const baseUrl = 'http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8081';

export const signInApiCall = async ({ dispatch, history }) => {
    const requestBody = {
        email: 'pareshg4@gmail.com',
        password: 's3>HL)y{$M'
    }
    const apiRequestHeader = makeApiRequestHeader('POST', null, requestBody, null);
    const apiUrl = `${baseUrl}/user/login`;
    await axios.post(apiUrl, requestBody, apiRequestHeader)
        .then((apiResponse) => {
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
                history.push('/productlist');

            } else {
                // TODO : Navigation and API Calls based on roles
                dispatch({ type: SET_INITIAL_RESPONSE })
                history.push('/productlist');

            }
        })
        .catch(() => {
            dispatch({
                type: SET_ERROR
            })
        })

}
