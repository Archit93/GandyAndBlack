

import axios from "axios";
import { makeApiRequestHeader } from "../utils/makeApiRequestHeader";
import { SET_ERROR, SET_IS_LOADING, GET_CUSTOMER_ORDER_LIST } from "../constants/actionTypes";
import { getProductsApiCall } from "./getProductsApiCall";

const baseUrl = "http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8080";

export const getOrderListOfCustomerForAdmin = async ({
  dispatch,
  history,
  authToken,
  email
}) => {
    const apiRequestHeader = makeApiRequestHeader("GET", { "x-auth-token": authToken }, null);

  const apiUrl = `${baseUrl}/order/customer/list?custemail=${email}`;
  await axios
    .get(apiUrl, apiRequestHeader)
    .then((apiResponse) => {
      const customerorderlistarray = [];
      apiResponse.data.customerorderlist.forEach((customerOrder) => {
        customerorderlistarray.push({
          ...customerOrder,
          balance: Number(customerOrder.orderamount) - Number(customerOrder.orderamountpaid)
        })
      });
      const customerOrderListData = {
        ...apiResponse.data,
        customerorderlist: customerorderlistarray
      }
      dispatch({ type: GET_CUSTOMER_ORDER_LIST, payload: customerOrderListData });
      history.push("/orders_by_customer")
    })
    .catch(() => {
      dispatch({ type: SET_IS_LOADING, payload: false });
      dispatch({
        type: SET_ERROR,
      });
    });
};