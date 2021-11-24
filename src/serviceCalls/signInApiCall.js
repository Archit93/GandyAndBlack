import axios from "axios";
import { makeApiRequestHeader } from "../utils/makeApiRequestHeader";
import {
  SET_SIGN_IN_DATA,
  SET_ERROR,
  SET_INITIAL_RESPONSE,
} from "../constants/actionTypes";
import { getProductsApiCall } from "./getProductsApiCall";

const baseUrl = "http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8080";

export const signInApiCall = async ({ dispatch, history, email, password }) => {
  const apiRequestHeader = makeApiRequestHeader("POST", null, null);
  const apiUrl = `${baseUrl}/user/login`;
  await axios
    .post(
      apiUrl,
      {
        email,
        password,
      },
      apiRequestHeader
    )
    .then((apiResponse) => {
      dispatch({
        type: SET_SIGN_IN_DATA,
        payload: apiResponse.data.body,
      });
      getProductsApiCall({
        dispatch,
        history,
        signInResponse: apiResponse.data.body,
        email,
      });
    })
    .catch(() => {
      dispatch({
        type: SET_ERROR,
      });
    });
};
