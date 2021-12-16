import axios from "axios";
import { makeApiRequestHeader } from "../utils/makeApiRequestHeader";
import { SET_IS_LOADING, SET_ERROR } from "../constants/actionTypes";
import { getProductsApiCall } from "./getProductsApiCall";
// TO BE WORKED
const baseUrl = "http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8080";

export const editProductApiCall = async ({
    dispatch,
    authToken,
    requestBodyForEdit,
    history,
    config
}) => {
    const apiRequestHeader = makeApiRequestHeader(
        "POST",
        { "x-auth-token": authToken },
        null
    );
    const apiUrl = `${baseUrl}/product/save`;
    await axios
        .post(apiUrl, requestBodyForEdit, apiRequestHeader)
        .then(() => {
            getProductsApiCall({dispatch, history, signInResponse:config, email: null})
        })
        .catch(() => {
            dispatch({
                type: SET_ERROR,
            });
        });
};
