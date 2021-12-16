import axios from "axios";
import { makeApiRequestHeader } from "../utils/makeApiRequestHeader";
import { SET_IS_LOADING, SET_ERROR } from "../constants/actionTypes";
import { getProductsApiCall } from "./getProductsApiCall";
// TO BE WORKED
const baseUrl = "http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8080";

export const sendEmailApiCall = async ({
    dispatch,
    authToken,
    requestBodyForEmail,
}) => {
    const apiRequestHeader = makeApiRequestHeader(
        "POST",
        { "x-auth-token": authToken },
        null
    );
    const apiUrl = `${baseUrl}/notification/email/sendemail`;
    await axios
        .post(apiUrl, requestBodyForEmail, apiRequestHeader)
        .then(() => {
            dispatch({
                type: SET_IS_LOADING, isLoading: false
            })
        })
        .catch(() => {
            dispatch({
                type: SET_ERROR,
            });
        });
};
