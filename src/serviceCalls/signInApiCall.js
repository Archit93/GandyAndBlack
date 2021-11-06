import axios from 'axios';
import { makeApiRequestHeader } from '../utils/makeApiRequestHeader';
import {SET_SIGN_IN_DATA, SET_ERROR} from '../constants/actionTypes';

const baseUrl = 'https://13.235.247.221:55363';

export const signInApiCall = async ({dispatch}) => {
    const requestBody = {
        email: 'pareshg4@gmail.com',
        password: 's3>HL)y{$M'
    }
    const apiRequestHeader = makeApiRequestHeader('POST', null, requestBody, null);
    const apiUrl = `${baseUrl}/user/login`;
    console.log(apiUrl);
    await axios.post(apiUrl, requestBody, apiRequestHeader)
        .then((apiResponse) => {

            dispatch({
                type : SET_SIGN_IN_DATA,
                payload: apiResponse.data
            })
        })
            .catch((error) => {
                console.log(error)
                dispatch({
                    type: SET_ERROR
                })
            })
        
}
