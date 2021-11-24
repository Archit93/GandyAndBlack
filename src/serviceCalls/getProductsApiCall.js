import axios from "axios";
import { makeApiRequestHeader } from "../utils/makeApiRequestHeader";
import {
  SET_PRODUCT_LIST,
  SET_ERROR,
  SET_KANBAN_DETAILS,
  SET_USER_DETAILS,
} from "../constants/actionTypes";

const baseUrl = "http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8080";

export const getProductsApiCall = async ({
  dispatch,
  history,
  signInResponse,
  email,
}) => {
  const apiRequestHeader = makeApiRequestHeader(
    "GET",
    { "x-auth-token": signInResponse.authToken },
    null,
    null
  );
  const apiUrl = `${baseUrl}/product/all`;
  await axios
    .get(apiUrl, apiRequestHeader)
    .then((apiResponse) => {
      dispatch({
        type: SET_PRODUCT_LIST,
        payload: apiResponse.data,
      });
      if (signInResponse.userType.toUpperCase() === "USER") {
        axios
          .all([
            axios.get(`${baseUrl}/user/account/${email}`, apiRequestHeader),
          ])
          .then(
            axios.spread((customerDetails) => {
              dispatch({
                type: SET_USER_DETAILS,
                payload: customerDetails.data,
              });
              history.push("/productlist");
            })
          );
      }
      if (signInResponse.userType.toUpperCase() === "ADMIN") {
        axios
          .all([
            // axios.get(`${baseUrl}/admin/user/management/admin`, apiRequestHeader),
            axios.get(`${baseUrl}/order/all`, apiRequestHeader),
          ])
          .then(
            axios.spread((allOrders) => {
              dispatch({
                type: SET_KANBAN_DETAILS,
                payload: allOrders.data,
              });
            })
          );
        history.push("/crm");
      }
    })
    .catch(() => {
      dispatch({
        type: SET_ERROR,
      });
    });
};
