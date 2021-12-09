import axios from "axios";
import { makeApiRequestHeader } from "../utils/makeApiRequestHeader";
import {
  SET_SIGN_UP_DATA,
  SET_ERROR,
  SET_IS_LOADING,
} from "../constants/actionTypes";

const baseUrl = "http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8080";

export const importProducts = async ({
  dispatch,
  history,
  fileToUpload,
  authToken,
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
      dispatch({ type: SET_IS_LOADING, payload: false });
      console.log("imported successfully");
    })
    .catch(() => {
      dispatch({ type: SET_IS_LOADING, payload: false });
      console.log("import failed");
    });
};
