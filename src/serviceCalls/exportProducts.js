import axios from "axios";
import fileSaver from "file-saver";
import { makeApiRequestHeader } from "../utils/makeApiRequestHeader";
import {
  SET_SIGN_UP_DATA,
  SET_ADD_DELETE_NEW_PRODUCT,
  SET_IS_LOADING,
} from "../constants/actionTypes";

const baseUrl = "http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8080";

export const exportProducts = async ({ dispatch, authToken }) => {
  let apiRequestHeader = makeApiRequestHeader(
    "GET",
    { "x-auth-token": authToken },
    null,
    null
  );
  const apiUrl = `${baseUrl}/product/exportproducts`;
  apiRequestHeader = {
    ...apiRequestHeader,
    responseType: 'blob'
  }

  await axios
    .get(apiUrl, apiRequestHeader)
    .then((apiResponse) => {
      const { data, headers } = apiResponse;
      const fileData = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64",
      });
      fileSaver.saveAs(fileData, "Products.xlsx");
      dispatch({ type: SET_IS_LOADING, payload: false });
    })
    .catch(() => {
      dispatch({ type: SET_IS_LOADING, payload: false });
      dispatch({
        type: SET_ADD_DELETE_NEW_PRODUCT,
        payload: "error",
        message: "There was some error while exporting the product list.",
      });
    });
};
