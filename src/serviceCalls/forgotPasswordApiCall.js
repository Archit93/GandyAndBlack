import axios from "axios";
import { makeApiRequestHeader } from "../utils/makeApiRequestHeader";
import {
  SET_SIGN_IN_DATA,
  SET_ERROR,
  SET_INITIAL_RESPONSE,
  SET_FORGOT_PASSWORD_ERROR,
} from "../constants/actionTypes";

const baseUrl = "http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8080";

export const forgotPasswordApiCall = async ({ dispatch, history, email }) => {
  const apiRequestHeader = makeApiRequestHeader("GET", null, null, null);
  const apiUrl = `${baseUrl}/user/reset/password/${email}`;
  await axios
    .get(apiUrl, null, apiRequestHeader)
    .then((apiResponse) => {
      dispatch({
        type: SET_SIGN_IN_DATA,
        payload: apiResponse.data.body,
      });
      if (apiResponse.data.body.role) {
        // TODO : Navigation and API Calls based on roles
        // dispatch({
        //     type: SET_SIGN_IN_DATA,
        //     payload: apiResponse.data.body
        // })
        history.push("/customer_list");
      } else {
        // TODO : Navigation and API Calls based on roles
        dispatch({ type: SET_INITIAL_RESPONSE });
        history.push("/signin");
      }
    })
    .catch((error) => {
      if (error.response.status === 500) {
        dispatch({
          type: SET_FORGOT_PASSWORD_ERROR,
          payload: error.response.data,
        });
      }

      history.push("/forgot_password");
    });
};
