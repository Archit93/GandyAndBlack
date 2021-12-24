import axios from "axios";
import { makeApiRequestHeader } from "../utils/makeApiRequestHeader";
import {
  SET_PRODUCT_LIST,
  SET_ERROR,
  SET_KANBAN_DETAILS,
  SET_USER_DETAILS,
  SET_IS_LOADING,
  SET_TOTAL_AMOUNT,
} from "../constants/actionTypes";

const baseUrl = "http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8080";

export const getProductsApiCall = async ({
  dispatch,
  history,
  signInResponse,
  email,
  moveToNextPage = true,
}) => {
  const apiRequestHeader = makeApiRequestHeader(
    "GET",
    {
      "x-auth-token": signInResponse.authToken
    },
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
            axios.get(
              `${baseUrl}/order/customers/email?email=${email}`,
              apiRequestHeader
            ),
            axios.get(
              `${baseUrl}/cart/getDetails?userId=${email}`,
              apiRequestHeader
            ),
          ])
          .then(
            axios.spread((customerDetails, customerOrders, customerCart) => {
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

              const customerCartApiResponse =
                customerCart && customerCart.data ? customerCart.data : [];
              const cartDetailsFromService = [];
              const cartDetails = [];

              customerCartApiResponse &&
                Object.keys(customerCartApiResponse).length > 0 &&
                customerCartApiResponse.productidcartmap &&
                Object.keys(customerCartApiResponse.productidcartmap).length >
                0 &&
                Object.keys(customerCartApiResponse.productidcartmap).map(
                  (key) =>
                    cartDetailsFromService.push({
                      productid: key,
                      quantity: customerCart.data.productidcartmap[key],
                    })
                );

              cartDetailsFromService &&
                cartDetailsFromService.length > 0 &&
                cartDetailsFromService.map((productincart) => {
                  const findProduct = apiResponse.data.find((product) => {
                    return product.productid === productincart.productid;
                  });
                  const findIndexOfTheRowInProductList =
                    apiResponse.data.findIndex((product) => {
                      return product.productid === productincart.productid;
                    });
                  apiResponse.data[findIndexOfTheRowInProductList] =
                    Object.assign(
                      {},
                      {
                        ...findProduct,
                        quantity: productincart.quantity,
                      }
                    );
                });

              apiResponse.data.forEach((product) => {
                if (product.quantity && product.quantity !== 0) {
                  cartDetails.push({
                    ...product,
                    vat: product.vat * product.quantity,
                  });
                }
              });
              dispatch({
                type: SET_TOTAL_AMOUNT,
                payload: {
                  shippingCost:
                    customerCartApiResponse &&
                      Object.keys(customerCartApiResponse).length > 0 &&
                      customerCartApiResponse.ordershippingcost
                      ? customerCartApiResponse.ordershippingcost
                      : 0,
                  subTotalAmount:
                    customerCartApiResponse &&
                      Object.keys(customerCartApiResponse).length > 0 &&
                      customerCartApiResponse.subtotal
                      ? customerCartApiResponse.subtotal
                      : 0,
                  totalVatAmount:
                    customerCartApiResponse &&
                      Object.keys(customerCartApiResponse).length > 0 &&
                      customerCartApiResponse.totalvat
                      ? customerCartApiResponse.totalvat
                      : 0,
                  totalAmount: 0,
                },
              });
              dispatch({
                type: SET_USER_DETAILS,
                payload: customerDetails.data,
                orderDetails: customerOrders.data,
                shippingAddressDetails,
                productList: apiResponse.data,
                cartDetails: cartDetails,
              });
              if (moveToNextPage) {
                history.push("/producttypes");
              }
            })
          );
        // history.push("/productlist");
      }

      if (signInResponse.userType.toUpperCase() === "ADMIN") {
        axios
          .all([
            axios.get(
              `${baseUrl}/admin/user/management/GANDYS_USER`,
              apiRequestHeader
            ),
            axios.get(
              `${baseUrl}/product/TAProductRates/all`,
              apiRequestHeader
            ),
            axios.get(
              `${baseUrl}/order/all?ordertype=INSTA_SITE`,
              apiRequestHeader
            ),
            axios.get(
              `${baseUrl}/order/all?ordertype=SHOPIFY`,
              apiRequestHeader
            ),
            axios.get(
              `${baseUrl}/order/all?ordertype=PHARMA`,
              apiRequestHeader
            ),
            axios.get(
              `${baseUrl}/order/fetchcompletedorders?ordertype=INSTA_SITE`,
              apiRequestHeader
            ),
            axios.get(
              `${baseUrl}/order/fetchcompletedorders?ordertype=SHOPIFY`,
              apiRequestHeader
            ),
            axios.get(
              `${baseUrl}/order/fetchcompletedorders?ordertype=PHARMA`,
              apiRequestHeader
            )
            
            
          ])
          .then(
            axios.spread((allUsers, taProductRates, allOrders, shopifydata, pharmadata, instaCompletedOrders, shopifyCompletedOrders, pharmaCompletedOrders ) => {
              const allCustomersData = [];
              allUsers &&
                allUsers.data &&
                allUsers.data.map((user) => {
                  allCustomersData.push({
                    ...user,
                    username: `${user.firstname ? user.firstname : ""} ${
                      user.lastname ? user.lastname : ""
                      }`,
                    postcode:
                      user.address && user.address.length > 0
                        ? user.address[0].postcode
                        : "",
                  });
                });

              dispatch({
                type: SET_KANBAN_DETAILS,
                payload: allOrders.data,
                customerList: allCustomersData,
                taProductRates: taProductRates.data,
                shopifycrm: shopifydata.data,
                pharmacrm: pharmadata.data,
                instaCompletedOrders: instaCompletedOrders.data,
                shopifyCompletedOrders: shopifyCompletedOrders.data,
                pharmaCompletedOrders: pharmaCompletedOrders.data
              });
            })
          );
        if (moveToNextPage) {
          history.push("/admin_product_list");
        }
      }
    })
    .catch(() => {
      dispatch({ type: SET_IS_LOADING, payload: false });
      dispatch({
        type: SET_ERROR,
      });
    });
};
