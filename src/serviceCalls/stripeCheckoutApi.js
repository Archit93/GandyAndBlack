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
    .post("http://localhost:8080/checkout", {
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
        console.log(applicationState?.customerDetails);
        console.log(productidcartmap);
        const placeOrderRequest = {
          address: applicationState?.customerDetails?.address || "",
          cart: {
            ordershippingcost: Number(applicationState?.shippingCost),
            productidcartmap,
            subtotal: applicationState?.subTotalAmount,
            totalvat: applicationState?.totalVatAmount,
            userId: applicationState?.customerDetails?.email || "",
          },
          cppcode: "",
          email: applicationState?.customerDetails?.email || "",
          firstname: applicationState?.customerDetails?.firstName || "",
          lastname: applicationState?.customerDetails?.lastName || "",
          mobileno: applicationState?.customerDetails?.phoneNo || "",
          paymentMethod: "CARD",
          postalcode: applicationState?.customerDetails?.postCode || "",
        };
        console.log(placeOrderRequest);
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
