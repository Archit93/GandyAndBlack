import axios from "axios";
import { makeApiRequestHeader } from "../utils/makeApiRequestHeader";
import { SET_ERROR } from "../constants/actionTypes";

const baseUrl = "http://localhost:3000/stubData";

export const updateCustomerDetails = async ({
  dispatch,
  customerDetails,
  history,
}) => {
  const apiRequestHeader = makeApiRequestHeader("POST", null, null);
  const apiUrl = `${baseUrl}/signIn.json`;
  await axios
    .post(apiUrl, customerDetails, apiRequestHeader)
    .then((apiResponse) => {
      console.log(apiResponse.data);
      history.push("/customerpayment_info");
    })
    .catch(() => {
      dispatch({
        type: SET_ERROR,
      });
    });
};
