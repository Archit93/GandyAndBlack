import axios from "axios";
import { makeApiRequestHeader } from "../utils/makeApiRequestHeader";
import {
  SET_ERROR,
  SET_IS_LOADING,
  SET_USER_DETAILS,
} from "../constants/actionTypes";

const baseUrl = "http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8080";

export const updateCustomerDetails = async ({
  dispatch,
  customerDetails,
  config,
  history,
  flag,
}) => {
  const apiRequestHeader = makeApiRequestHeader(
    "POST",
    { "x-auth-token": config.authToken },
    null
  );
  const apiUrl = flag
    ? `${baseUrl}/user/updatepassword`
    : `${baseUrl}/user/editaccountdetails`;
  await axios
    .post(apiUrl, customerDetails, apiRequestHeader)
    .then((apiResponse) => {
      if (!flag) {
        axios
          .all([
            axios.get(
              `${baseUrl}/user/account/${customerDetails.email}`,
              apiRequestHeader
            ),
          ])
          .then(
            axios.spread((customerDetails) => {
              dispatch({
                type: SET_USER_DETAILS,
                payload: customerDetails.data,
              });
            })
          );
      } else {
        dispatch({ type: SET_IS_LOADING, payload: false });
      }
    })
    .catch(() => {
      dispatch({
        type: SET_ERROR,
      });
    });
};
