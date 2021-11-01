import axios from "axios";
import { makeApiRequestHeader } from "../utils/makeApiRequestHeader";
import { SET_SIGN_IN_DATA, SET_ERROR } from "../constants/actionTypes";

const baseUrl = "http://localhost:3000/stubData";

export const updateCartDetails = async ({
  dispatch,
  customerCartArray,
  history,
}) => {
  const apiRequestHeader = makeApiRequestHeader("POST", null, null);
  const apiUrl = `${baseUrl}/signIn.json`;
  await axios
    .post(apiUrl, customerCartArray, apiRequestHeader)
    .then((apiResponse) => {
      console.log(apiResponse.data);
      history.push("/customercart_details");
    })
    .catch(() => {
      dispatch({
        type: SET_ERROR,
      });
    });
};
