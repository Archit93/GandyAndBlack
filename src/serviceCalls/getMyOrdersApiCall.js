import axios from "axios";
import { makeApiRequestHeader } from "../utils/makeApiRequestHeader";
import {
    SET_IS_LOADING,
    SET_USER_DETAILS,
    EDIT_PRODUCT_QUANTITY,
    SET_ERROR
} from "../constants/actionTypes";

const baseUrl = "http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8080";

export const getMyOrdersApiCall = async ({
    dispatch,
    authToken,
    email,
    productList,
}) => {
    const apiRequestHeader = makeApiRequestHeader("GET", { "x-auth-token": authToken }, null);
    axios
        .all([
            axios.get(`${baseUrl}/user/account/${email}`, apiRequestHeader),
            axios.get(
                `${baseUrl}/order/customers/email?email=${email}`,
                apiRequestHeader
            ),
        ])
        .then(
            axios.spread((customerDetails, customerOrders) => {
                const shippingAddressDetails = {
                    firstName: customerDetails ?.data ?.firstname ?? "",
                    lastName: customerDetails ?.data ?.lastname ?? "",
                    email: customerDetails ?.data ?.email ?? "",
                    phoneNo: customerDetails ?.data ?.mobileno ?? "",
                    address: customerDetails ?.data ?.address ?.[0] ?.addressbody ?? "",
                    postCode: customerDetails ?.data ?.address ?.[0] ?.postcode ?? "",
                    instagramId: customerDetails ?.data ?.instaname ?? "",
                    tradeOfBusiness: customerDetails ?.data ?.tradeofbuisness ?? "",
                };
                dispatch({
                    type: EDIT_PRODUCT_QUANTITY,
                    payload: productList,
                    cartDetails: [],
                });
                dispatch({
                    type: SET_USER_DETAILS,
                    payload: customerDetails.data,
                    orderDetails: customerOrders.data,
                    shippingAddressDetails,
                });
            })
        ).catch(() => {
            dispatch({ type: SET_IS_LOADING, payload: false });
            dispatch({
                type: SET_ERROR,
            });
        });;
}