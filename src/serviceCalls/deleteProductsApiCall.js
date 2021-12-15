import axios from "axios";
import { makeApiRequestHeader } from "../utils/makeApiRequestHeader";
import {
  SET_IS_LOADING,
  SET_ADD_DELETE_NEW_PRODUCT,
} from "../constants/actionTypes";
import { getProductsApiCall } from "./getProductsApiCall";

const baseUrl = "http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8080";

export const deleteProductsApiCall = async ({
  dispatch,
  authToken,
  productid,
  history,
  config,
}) => {
  const apiRequestHeader = makeApiRequestHeader(
    "DELETE",
    { "x-auth-token": authToken },
    null
  );
  const apiUrl = `${baseUrl}/product/id?productid=${productid}`;
  await axios
    .delete(apiUrl, apiRequestHeader)
    .then(() => {
      dispatch({
        type: SET_ADD_DELETE_NEW_PRODUCT,
        payload: "success",
        message: "Product deleted successfully.",
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
        payload: "There was some error while deleting the product.",
      });
    });
};
