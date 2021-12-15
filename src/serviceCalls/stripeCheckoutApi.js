import axios from "axios";
import { SET_ERROR, SET_IS_LOADING } from "../constants/actionTypes";
import { placeOrderApiCall } from "./placeOrderApiCall";

export const stripeCheckoutApi = async ({
  dispatch,
  history,
  token,
  addresses,
  applicationState,
}) => {
  await axios
    .post("http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8000/checkout", {
      token,
      product: {
        name: "Gandy & Black Asthetic Supplies",
        price: applicationState.totalAmount,
      },
    })
    .then((response) => {
      const { success } = response.data;
      if (success) {
        const itemList = applicationState?.cartDetails?.map((item) => [
          item.productid,
          item.quantity,
        ]);
        let productidcartmap = Object.fromEntries(itemList);
        const placeOrderRequest = {
          address: applicationState?.shippingAddressDetails?.address || "",
          cart: {
            ordershippingcost: Number(applicationState?.shippingCost),
            productidcartmap,
            subtotal: applicationState?.subTotalAmount,
            totalvat: applicationState?.totalVatAmount,
            userId: applicationState?.shippingAddressDetails?.email || "",
          },
          cppcode: "",
          email: applicationState?.shippingAddressDetails?.email || "",
          firstname: applicationState?.shippingAddressDetails?.firstName || "",
          lastname: applicationState?.shippingAddressDetails?.lastName || "",
          mobileno: applicationState?.shippingAddressDetails?.phoneNo || "",
          paymentMethod: "CARD",
          postalcode: applicationState?.shippingAddressDetails?.postCode || "",
        };
        placeOrderApiCall({
          dispatch,
          history,
          placeOrderRequest,
          authToken: applicationState?.config?.authToken,
        });
      } else {
        dispatch({ type: SET_IS_LOADING, payload: false });
        history.push("/customerfail");
      }
    })
    .catch((error) => {
      dispatch({ type: SET_ERROR });
      history.push("/customerfail");
    });
};
