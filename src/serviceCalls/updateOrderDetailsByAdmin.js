import axios from "axios";
import { makeApiRequestHeader } from "../utils/makeApiRequestHeader";
import { SET_IS_LOADING, SET_ERROR } from "../constants/actionTypes";
import {getProductsApiCall} from "./getProductsApiCall";

const baseUrl = "http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8080";

export const updateOrderDetailsByAdmin = async ({
    dispatch,
    history,
    config,
    requestBody
}) => {
    const apiRequestHeader = makeApiRequestHeader(
        "POST",
        { "x-auth-token": config.authToken },
        null
    );
    const apiUrl = `${baseUrl}/order/details`;
    await axios
        .post(apiUrl, requestBody, apiRequestHeader)
        .then(() => {
            getProductsApiCall({dispatch, history, signInResponse: config, email: null, moveToNextPage : false })
        })
        .catch(() => {
            dispatch({
                type: SET_ERROR,
            });
        });
};