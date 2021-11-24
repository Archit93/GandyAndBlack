import * as React from "react";
import HeaderMenu from "../common/HeaderMenu.js";
import { useHistory } from "react-router-dom";
import CheckoutProgressBar from "./CheckoutProgressBar";
import CustomerAmountDetails from "./CustomerAmountDetails";
import {
  isValidName,
  isValidEmail,
  isValidAddress,
  isValidPostcode,
  isValidPhone,
} from "../../utils/regexUtils";
import { SET_CUSTOMER_BILLING_DETAILS } from "../../constants/actionTypes";
import { updateCustomerDetails } from "../../serviceCalls/updateCustomerDetails";

const CustomerShippingInformation = (props) => {
  const history = useHistory();
  const { applicationState, dispatch } = props;
  const { cartDetails } = applicationState;
  const [tempCart, setTempCart] = React.useState(cartDetails);
  React.useEffect(() => {
    const cartData = JSON.parse(window.sessionStorage.getItem("cart"));
    if (cartData) {
      setTempCart(cartData);
    }
  }, []);

  const [firstName, setFirstName] = React.useState(
    applicationState?.customerDetails?.firstname ?? ""
  );
  const [lastName, setLastName] = React.useState(
    applicationState?.customerDetails?.lastname ?? ""
  );
  const [email, setEmailAddress] = React.useState(
    applicationState?.customerDetails?.email ?? ""
  );
  const [emailError, setEmailError] = React.useState("");
  const [address, setAddress] = React.useState(
    applicationState?.customerDetails?.address ?? ""
  );
  const [addressError, setAddressError] = React.useState("");
  const [postcode, setPostcode] = React.useState(
    applicationState?.customerDetails?.postcode ?? ""
  );
  const [postcodeError, setPostcodeError] = React.useState("");
  const [firstNameError, setFirstNameError] = React.useState("");
  const [lastNameError, setLastNameError] = React.useState("");
  const [phoneNo, setPhoneNo] = React.useState(
    applicationState?.customerDetails?.mobileno ?? ""
  );
  const [phoneNoError, setPhoneNoError] = React.useState("");
  const [instagramId, setInstagramId] = React.useState(
    applicationState?.customerDetails?.instaname ?? ""
  );
  const [tradeOfBusiness, setTradeOfBusiness] = React.useState(
    applicationState?.customerDetails?.tradeofbuisness ?? "Mobile Practitioners"
  );
  const [emptyCredentialsError, setEmptyCredentialsError] = React.useState("");

  const onNameChange = (e) => {
    if (e.target.id === "fname") {
      setFirstName(e.target.value);
      setFirstNameError("");
    } else {
      setLastName(e.target.value);
      setLastNameError("");
    }
    setEmptyCredentialsError("");
  };

  const validateName = (e) => {
    const { id, value } = e?.target;
    if (id === "fname") {
      setFirstNameError(isValidName(value));
    } else {
      setLastNameError(isValidName(value));
    }
  };

  const validateEmail = (e) => {
    const { value } = e?.target;
    setEmailError(isValidEmail(value));
  };

  const onEmailChange = (e) => {
    setEmailAddress(e.target.value);
    setEmailError("");
  };

  const validateAddress = (e) => {
    const { value } = e?.target;
    setAddressError(isValidAddress(value));
  };

  const onAddressChange = (e) => {
    setAddress(e.target.value);
    setAddressError("");
  };

  const validatePostcode = (e) => {
    const { value } = e?.target;
    setPostcodeError(isValidPostcode(value));
  };

  const onPostcodeChange = (e) => {
    setPostcode(e.target.value);
    setPostcodeError("");
  };

  const validatePhone = (e) => {
    const { value } = e?.target;
    setPhoneNoError(isValidPhone(value));
  };

  const onPhoneChange = (e) => {
    setPhoneNo(e.target.value);
    setPhoneNoError("");
  };

  const validateSubmit = (e) => {
    if (
      firstNameError ||
      lastNameError ||
      emailError ||
      addressError ||
      phoneNoError
    ) {
      e.preventDefault();
    } else if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      address === "" ||
      phoneNo === ""
    ) {
      e.preventDefault();
      setEmptyCredentialsError(
        "Looks like you're missing something! Do you want to give it another try?"
      );
    } else {
      const customerDetails = {
        firstName,
        lastName,
        email,
        instagramId,
        address,
        postcode,
        tradeOfBusiness,
      };
      dispatch({
        type: SET_CUSTOMER_BILLING_DETAILS,
        payload: customerDetails,
      });
      // updateCustomerDetails(dispatch, customerDetails, history);
      history.push("/customerpayment_info");
    }
  };

  return (
    <div>
      <div>
        <HeaderMenu cartCount={tempCart.length} />
      </div>
      <div id="checkout">
        <div className="container-fluid">
          <div className="card px-0 pb-0 mb-3">
            <div className="row">
              <div className="col-md-12 mx-0">
                <form id="msform">
                  <CheckoutProgressBar progressItem="Billing" />
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 order-md-first order-last">
                      <fieldset>
                        <h2 className="fs-title">Billing Address</h2>
                        <div className="form-card">
                          <input
                            type="text"
                            name="fname"
                            className="form-control"
                            id="fname"
                            placeholder="First Name*"
                            onChange={(e) => onNameChange(e)}
                            onBlur={(e) => validateName(e)}
                            value={firstName}
                          />
                          {firstNameError ? (
                            <span>{firstNameError}</span>
                          ) : (
                            <React.Fragment />
                          )}
                          <input
                            type="text"
                            name="lname"
                            className="form-control"
                            id="lname"
                            placeholder="Last Name*"
                            onChange={(e) => onNameChange(e)}
                            onBlur={(e) => validateName(e)}
                            value={lastName}
                          />
                          {lastNameError ? (
                            <span>{lastNameError}</span>
                          ) : (
                            <React.Fragment />
                          )}
                          <input
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Email*"
                            onChange={(e) => onEmailChange(e)}
                            onBlur={(e) => validateEmail(e)}
                            value={email}
                          />
                          {emailError ? (
                            <span>{emailError}</span>
                          ) : (
                            <React.Fragment />
                          )}
                          <input
                            type="text"
                            name="phoneNo"
                            className="form-control"
                            placeholder="Contact No."
                            onChange={(e) => onPhoneChange(e)}
                            onBlur={(e) => validatePhone(e)}
                            value={phoneNo}
                          />
                          {phoneNoError ? (
                            <span>{phoneNoError}</span>
                          ) : (
                            <React.Fragment />
                          )}
                          <input
                            type="text"
                            name="instagramId"
                            className="form-control"
                            placeholder="Instagram Name"
                            onChange={(e) => setInstagramId(e.target.value)}
                            value={instagramId}
                          />
                          <input
                            type="text"
                            name="delivery_address"
                            placeholder="Delivery Address*"
                            className="form-control"
                            onChange={(e) => onAddressChange(e)}
                            onBlur={(e) => validateAddress(e)}
                            value={address}
                          />
                          {addressError ? (
                            <span>{addressError}</span>
                          ) : (
                            <React.Fragment />
                          )}
                          <input
                            type="text"
                            name="postcode"
                            className="form-control"
                            placeholder="Post Code"
                            onChange={(e) => onPostcodeChange(e)}
                            onBlur={(e) => validatePostcode(e)}
                            value={postcode}
                          />
                          {postcodeError ? (
                            <span>{postcodeError}</span>
                          ) : (
                            <React.Fragment />
                          )}
                          <label>Trade of business</label>
                          <select
                            className="select"
                            id="tradeOfBusiness"
                            className="form-control"
                            name="tradeOfBusiness"
                            onChange={(e) => setTradeOfBusiness(e.target.value)}
                            value={tradeOfBusiness}
                          >
                            <option value="Mobile Practitioners">
                              Mobile Practitioners
                            </option>
                            <option value="Prescriber">Prescriber</option>
                            <option value="Clinics">Clinics</option>
                            <option value="Training Academy">
                              Training Academy
                            </option>
                          </select>
                        </div>
                        {emptyCredentialsError ? (
                          <div>{emptyCredentialsError}</div>
                        ) : (
                          <React.Fragment />
                        )}
                        <div className="mt-4">
                          <button
                            className="previous action-button-previous"
                            type="submit"
                            onClick={() => {
                              history.push("/customercart_details");
                            }}
                          >
                            Back
                          </button>
                          <button
                            className="next action-button"
                            type="submit"
                            onClick={validateSubmit}
                          >
                            Proceed to Pay
                          </button>
                        </div>
                      </fieldset>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                      <CustomerAmountDetails
                        cartDetails={tempCart}
                        dispatch={dispatch}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerShippingInformation;
