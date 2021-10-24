import axios from 'axios';
import { makeApiRequestHeader } from '../utils/makeApiRequestHeader';
import {SET_SIGN_IN_DATA, SET_ERROR} from '../constants/actionTypes';

const baseUrl = 'http://localhost:3000/stubData';

export const signInApiCall = async ({dispatch}) => {
    const requestBody = {
        email: 'architmehta007@gmail.com',
        password: 'a12@345'
    }
    const apiRequestHeader = makeApiRequestHeader('POST', null, requestBody, null);
    const apiUrl = `${baseUrl}/signIn.json`;
    await axios.post(apiUrl, requestBody, apiRequestHeader)
        .then((apiResponse) => {
            dispatch({
                type : SET_SIGN_IN_DATA,
                payload: apiResponse.data
            })
        })
            .catch(() => {
                dispatch({
                    type: SET_ERROR
                })
            })
        
}
