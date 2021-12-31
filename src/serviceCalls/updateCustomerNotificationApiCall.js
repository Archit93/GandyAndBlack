import axios from "axios";
import { makeApiRequestHeader } from "../utils/makeApiRequestHeader";
import {
  SET_ERROR,
  SET_IS_LOADING,
  UPDATE_USER_DETAILS,
  SET_PROFILE_UPDATE_STATUS,
  UPDATE_CUSTOMER_DETAILS,
  UPDATE_CUSTOMER_NOTIFICATION_STATUS,
  SET_NOTIFICATION_SPINNER
} from "../constants/actionTypes";

const baseUrl = "http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8081";

export const updateCustomerNotificationApiCall = async ({
  dispatch,
  email,
  isNotificationEnabled,
  authToken,
  history
}) => {
  const apiRequestHeader = makeApiRequestHeader(
    "POST",
    { "x-auth-token": authToken },
    null
  );
  const apiUrl = isNotificationEnabled
    ? `${baseUrl}/admin/enablenotification`
    : `${baseUrl}/admin/disablenotification`;
  dispatch({
    type: SET_NOTIFICATION_SPINNER,
    isSpinnerEnabled: true,
  });
  await axios
    .post(apiUrl, { email: email }, apiRequestHeader)
    .then((apiResponse) => {
      if (apiResponse?.status === 200) {
        dispatch({
          type: UPDATE_CUSTOMER_NOTIFICATION_STATUS,
          payload: apiResponse.data,
        });
        axios.get(
          `${baseUrl}/admin/user/management/GANDYS_USER`,
          apiRequestHeader
        ).then((userDetails) => {
          const allCustomersData = [];
          userDetails &&
            userDetails.data &&
            userDetails.data.map((user) => {
              allCustomersData.push({
                ...user,
                username: `${user.firstname ? user.firstname : ""} ${user.lastname ? user.lastname : ""
                  }`,
                postcode:
                  user.address && user.address.length > 0
                    ? user.address[0].postcode
                    : "",
              });
            });
          dispatch({
            type: UPDATE_CUSTOMER_NOTIFICATION_STATUS,
            customerList: allCustomersData,
          });
          dispatch({
            type: SET_NOTIFICATION_SPINNER,
            isSpinnerEnabled: false,
          });
          history.push("/customer_list");
        })

      }
    })
    .catch(() => {
      dispatch({ type: SET_IS_LOADING, payload: false });
      dispatch({
        type: SET_ERROR,
      });
    });
};
