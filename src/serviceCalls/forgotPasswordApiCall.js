import axios from "axios";
import { makeApiRequestHeader } from "../utils/makeApiRequestHeader";
import {
  SET_IS_LOADING,
  SET_FORGOT_PASSWORD_ERROR,
} from "../constants/actionTypes";

const baseUrl = "http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8080";

export const forgotPasswordApiCall = async ({ dispatch, history, email }) => {
  const apiRequestHeader = makeApiRequestHeader("GET", null, null, null);
  const apiUrl = `${baseUrl}/user/reset/password/${email}`;
  await axios
    .get(apiUrl, null, apiRequestHeader)
    .then(() => {
      dispatch({
        type: SET_IS_LOADING,
        isLoading: false
      })
        history.push("/signin");
    })
    .catch((error) => {
      if (error.response.status === 500) {
        dispatch({
          type: SET_FORGOT_PASSWORD_ERROR,
          payload: error.response.data
        });
      }

      history.push("/forgot_password");
    });
};
