import axios from "axios";
import fileSaver from "file-saver";
import { makeApiRequestHeader } from "../utils/makeApiRequestHeader";
import {
  SET_SIGN_UP_DATA,
  SET_ERROR,
  SET_IS_LOADING,
} from "../constants/actionTypes";

const baseUrl = "http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8080";

export const exportProducts = async ({ dispatch, authToken }) => {
  const apiRequestHeader = makeApiRequestHeader(
    "GET",
    { "x-auth-token": authToken },
    null,
    null
  );
  const apiUrl = `${baseUrl}/product/exportproducts`;

  await axios
    .get(apiUrl, apiRequestHeader)
    .then((apiResponse) => {
      const { data, headers } = apiResponse;
      const fileData = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,",
      });
      fileSaver.saveAs(fileData, "Products.xls");
      dispatch({ type: SET_IS_LOADING, payload: false });
    })
    .catch(() => {
      console.log("Download failed...");
      dispatch({ type: SET_IS_LOADING, payload: false });
    });
};
