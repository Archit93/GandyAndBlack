import * as React from "react";
import { useHistory } from "react-router-dom";
import CheckoutProgressBar from "./CheckoutProgressBar";
import CustomerAmountDetails from "./CustomerAmountDetails";
import {
  isValidName,
  isValidEmail,
  isValidAddress,
  isValidPostcode,
} from "../../utils/regexUtils";

const CustomerShippingInformation = (props) => {
  const history = useHistory();
  const selectedProducts = [
    {
      productId: 35,
      brand: "JBP",
      productType: "Body Filler",
      description: "22g x 70 mm",
      quantity: 4,
      availabilty: true,
      salesPerUnit: "8.00",
    },
    {
      productId: 37,
      brand: "Lidocaine",
      productType: "Classic-S Body Filler",
      description: "1 x 10ml",
      quantity: 2,
      availabilty: true,
      salesPerUnit: "24.00",
    },
  ];

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmailAddress] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [addressError, setAddressError] = React.useState("");
  const [postcode, setPostcode] = React.useState("");
  const [postcodeError, setPostcodeError] = React.useState("");
  const [firstNameError, setFirstNameError] = React.useState("");
  const [lastNameError, setLastNameError] = React.useState("");
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

  const validateSubmit = (e) => {
    if (firstNameError || lastNameError || emailError || addressError) {
      e.preventDefault();
    } else if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      address === ""
    ) {
      e.preventDefault();
      setEmptyCredentialsError(
        "Looks like you're missing something! Do you want to give it another try?"
      );
    } else {
      history.push("/customerpayment_info");
    }
  };

  return (
    <div id="checkout">
      <div className="container">
        <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
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
                          name="phno"
                          placeholder="Contact No."
                        />
                        <input
                          type="text"
                          name="instaid"
                          placeholder="Instagram Name"
                        />
                        <input
                          type="text"
                          name="delivery_address"
                          placeholder="Delivery Address*"
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
                        <label className="h5">Trade of business</label>
                        <select
                          className="select"
                          id="trade_business"
                          name="trade_business"
                        >
                          <option value="Mobile Practitioners" selected>
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
                    </fieldset>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <CustomerAmountDetails
                      selectedProducts={selectedProducts}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerShippingInformation;
