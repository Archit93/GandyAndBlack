import axios from "axios";
import { SET_ERROR, SET_IS_LOADING } from "../constants/actionTypes";

export const stripeCheckoutApi = async ({
  dispatch,
  history,
  token,
  addresses,
  totalAmount,
}) => {
  await axios
    .post("http://localhost:8080/checkout", {
      token,
      product: {
        name: "Gandy & Black Asthetic Supplies",
        price: totalAmount,
      },
    })
    .then((response) => {
      const { success } = response.data;
      dispatch({ type: SET_IS_LOADING, payload: false });
      success
        ? history.push("/customerpayment_success")
        : history.push("/customerfail");
    })
    .catch((error) => {
      dispatch({ type: SET_ERROR });
      history.push("/customerfail");
    });
};
