import axios from "axios";
import { makeApiRequestHeader } from "../utils/makeApiRequestHeader";
import { SET_ERROR, SET_IS_LOADING } from "../constants/actionTypes";
import { getProductsApiCall } from "./getProductsApiCall";

const baseUrl = "http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8080";

export const moveToNextStatusApiCall = async ({
  dispatch,
  history,
  requestBody,
  authToken,
  moveToStatus,
  signInResponse,
  email,
  moveToNextPage
}) => {
  const apiRequestHeader = makeApiRequestHeader(
    "POST",
    { "x-auth-token": authToken },
    null
  );
  const apiUrl = `${baseUrl}/order/${moveToStatus}`;
  await axios
    .post(apiUrl, requestBody, apiRequestHeader)
    .then(() => {
        getProductsApiCall({dispatch, history, signInResponse, email, moveToNextPage })
    })
    .catch(() => {
      dispatch({ type: SET_IS_LOADING, payload: false });
      dispatch({
        type: SET_ERROR,
      });
    });
};