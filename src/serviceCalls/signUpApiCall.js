import axios from "axios";
import { makeApiRequestHeader } from "../utils/makeApiRequestHeader";
import { SET_SIGN_UP_DATA, SET_ERROR } from "../constants/actionTypes";

const baseUrl = "http://gnb-lb-1855188215.ap-south-1.elb.amazonaws.com:8080";

export const signUpApiCall = async ({
  dispatch,
  history,
  firstName,
  lastName,
  email,
}) => {
  const apiRequestHeader = makeApiRequestHeader("POST", null, null, null);
  const apiUrl = `${baseUrl}/user/signup`;
  const requestBody = {
    address: [
      {
        addressbody: "test address",
        addresstype: "Billing",
        postcode: "G40SW",
      },
    ],
    email,
    firstname: firstName,
    id: "abc",
    instaname: "sasbh",
    isuserloggedin: "assa",
    lastname: lastName,
    mobileno: "07000970009",
    profilepic: "na",
    roles: {
      id: "1234",
      role: "USER",
    },
    salt: "assa",
    tradeofbuisness: "Mobile",
    usercredebility: "as",
  };
  await axios
    .post(apiUrl, requestBody, { headers: apiRequestHeader })
    .then((apiResponse) => {
      dispatch({
        type: SET_SIGN_UP_DATA,
        payload: apiResponse.data.body,
      });
      //history.push("/signin");
    })
    .catch(() => {
      dispatch({
        type: SET_ERROR,
      });
    });
};
