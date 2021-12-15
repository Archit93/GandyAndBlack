import axios from "axios";
import { makeApiRequestHeader } from "../utils/makeApiRequestHeader";
import {
  SET_SIGN_UP_DATA,
  SET_IS_LOADING,
  SET_ADD_DELETE_NEW_PRODUCT,
} from "../constants/actionTypes";
import { getProductsApiCall } from "./getProductsApiCall";

const baseUrl = "http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8080";

export const importProducts = async ({
  dispatch,
  history,
  fileToUpload,
  authToken,
  config,
}) => {
  const apiRequestHeader = makeApiRequestHeader(
    "POST",
    {
      "Content-Type": "multipart/form-data",
      "x-auth-token": authToken,
    },
    null,
    null
  );
  const apiUrl = `${baseUrl}/product/store`;

  await axios
    .post(apiUrl, fileToUpload, apiRequestHeader)
    .then((apiResponse) => {
      dispatch({
        type: SET_ADD_DELETE_NEW_PRODUCT,
        payload: "success",
        message: "File uploaded successfully.",
      });
      getProductsApiCall({
        dispatch,
        history,
        signInResponse: config,
        email: null,
        moveToNextPage: false,
      });
    })
    .catch(() => {
      dispatch({ type: SET_IS_LOADING, payload: false });
      dispatch({
        type: SET_ADD_DELETE_NEW_PRODUCT,
        payload: "error",
        message: "There was some error while uploading the file. ",
      });
    });
};
