import axios from "axios";
import { makeApiRequestHeader } from "../utils/makeApiRequestHeader";
import { SET_ERROR } from "../constants/actionTypes";

const baseUrl = "http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8083";

export const updateCartDetails = async ({
  dispatch,
  customerCartArray,
  history,
  authToken,
}) => {
  const apiRequestHeader = makeApiRequestHeader(
    "POST",
    { "x-auth-token": authToken },
    null
  );
  const apiUrl = `${baseUrl}/cart`;
  await axios
    .post(apiUrl, customerCartArray, apiRequestHeader)
    .then((apiResponse) => {
      history.push("/customercart_details");
    })
    .catch(() => {
      dispatch({
        type: SET_ERROR,
      });
    });
};
