import axios from "axios";
import { makeApiRequestHeader } from "../utils/makeApiRequestHeader";
import {
  SET_IS_LOADING,
  SET_ADD_DELETE_NEW_PRODUCT,
} from "../constants/actionTypes";
import { getProductsApiCall } from "./getProductsApiCall";

const baseUrl = "http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8080";

export const addProductApiCall = async ({
  dispatch,
  authToken,
  requestBodyForAdd,
  history,
  config,
}) => {
  const apiRequestHeader = makeApiRequestHeader(
    "POST",
    { "x-auth-token": authToken },
    null
  );
  const apiUrl = `${baseUrl}/product/new`;
  await axios
    .post(apiUrl, requestBodyForAdd, apiRequestHeader)
    .then(() => {
      dispatch({
        type: SET_ADD_DELETE_NEW_PRODUCT,
        payload: "success",
        message: "Product added successfully.",
      });
      getProductsApiCall({
        dispatch,
        history,
        signInResponse: config,
        email: null,
      });
    })
    .catch(() => {
      dispatch({
        type: SET_ADD_DELETE_NEW_PRODUCT,
        payload: "error",
        message: "There was some error while adding the product.",
      });
      dispatch({
        type: SET_IS_LOADING,
        isLoading: false,
      });
    });
};
