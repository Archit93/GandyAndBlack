import axios from "axios";
import { makeApiRequestHeader } from "../utils/makeApiRequestHeader";
import {
  SET_SIGN_IN_DATA,
  SET_ERROR,
  SET_INITIAL_RESPONSE,
} from "../constants/actionTypes";
import { getProductsApiCall } from "./getProductsApiCall";

const baseUrl = "http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8080";

export const signInApiCall = async ({ dispatch, history }) => {
  // const requestBody = {
  //   email: "pareshg4@gmail.com",
  //   password: "s3>HL)y{$M",
  // };
  const requestBody = {
    email: "prateekbdash@gmail.com",
    password: "12345",
  };
  const apiRequestHeader = makeApiRequestHeader(
    "POST",
    null,
    requestBody,
    null
  );
  const apiUrl = `${baseUrl}/user/login`;
  await axios
    .post(apiUrl, requestBody, apiRequestHeader)
    .then((apiResponse) => {
      dispatch({
        type: SET_SIGN_IN_DATA,
        payload: apiResponse.data.body,
      });
      getProductsApiCall({ dispatch, history, signInResponse : apiResponse.data.body, email: requestBody.email })
    })
    .catch(() => {
      dispatch({
        type: SET_ERROR,
      });
    });
};
