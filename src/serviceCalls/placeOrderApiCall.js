import axios from "axios";
import { makeApiRequestHeader } from "../utils/makeApiRequestHeader";
import { SET_ERROR, SET_IS_LOADING } from "../constants/actionTypes";
import { getProductsApiCall } from "./getProductsApiCall";
import fileSaver from "file-saver";

const baseUrl = "http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8080";

export const placeOrderApiCall = async ({
  dispatch,
  history,
  placeOrderRequest,
  authToken,
}) => {
  const apiRequestHeader = makeApiRequestHeader(
    "POST",
    { "x-auth-token": authToken },
    null
  );
  const apiUrl = `${baseUrl}/order/walkin`;
  await axios
    .post(apiUrl, placeOrderRequest, apiRequestHeader)
    .then((apiResponse) => {
      dispatch({ type: SET_IS_LOADING, payload: false });
  // apiResponse.data.toString('base64')
      const fileData = new Blob([apiResponse.data], {
        type: "application/pdf;base64",
      });
      fileSaver.saveAs(fileData, "invoice.pdf");
      // download(apiResponse.data.toString('base64'), "invoice.pdf", apiResponse.headers['content-type']);
      history.push("/customerpayment_success");
    })
    .catch(() => {
      dispatch({ type: SET_IS_LOADING, payload: false });
      dispatch({
        type: SET_ERROR,
      });
    });
};
