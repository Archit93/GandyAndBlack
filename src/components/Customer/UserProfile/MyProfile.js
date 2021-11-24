import * as React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../common/HeaderMenu.js";
import UserProfileHeaderSection from "./UserProfileHeaderSection";
import UserProfileSection from "./UserProfileSection";
import UpdatePasswordModal from "./UpdatePasswordModal";
import {
  isValidName,
  isValidEmail,
  isValidAddress,
  isValidPostcode,
  isValidPhone,
  isValidPassword,
} from "../../../utils/regexUtils";
import { UPDATE_CUSTOMER_DETAILS } from "../../../constants/actionTypes";

const MyProfile = (props) => {
  const history = useHistory();
  const { applicationState, dispatch } = props;
  const { cartDetails } = applicationState;
  const [profileDetails, setProfileDetails] = React.useState({
    firstName: applicationState?.customerDetails?.firstname ?? "",
    lastName: applicationState?.customerDetails?.lastname ?? "",
    email: applicationState?.customerDetails?.email ?? "",
    address: applicationState?.customerDetails?.address ?? "",
    postcode: applicationState?.customerDetails?.postcode ?? "",
    phoneNo: applicationState?.customerDetails?.mobileno ?? "",
    instagramId: applicationState?.customerDetails?.instaname ?? "",
    tradeOfBusiness:
      applicationState?.customerDetails?.tradeofbuisness ??
      "Mobile Practitioners",
  });
  const [profileDetailsError, setProfileDetailsError] = React.useState({
    firstNameError: "",
    lastNameError: "",
    addressError: "",
    postcodeError: "",
    phoneNoError: "",
    tradeOfBusinessError: "",
  });
  const [emptyCredentialsError, setEmptyCredentialsError] = React.useState("");
  const [passwordShown, setPasswordShown] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);

  const validateName = (e) => {
    const { id, value } = e?.target;
    if (id === "fname") {
      setProfileDetailsError({
        ...profileDetailsError,
        firstNameError: isValidName(value),
      });
    } else {
      setProfileDetailsError({
        ...profileDetailsError,
        lastNameError: isValidName(value),
      });
    }
  };

  const onNameChange = (e) => {
    if (e.target.id === "fname") {
      setProfileDetails({ ...profileDetails, firstName: e.target.value });
      setProfileDetailsError({ ...profileDetailsError, firstNameError: "" });
    } else {
      setProfileDetails({ ...profileDetails, lastName: e.target.value });
      setProfileDetailsError({ ...profileDetailsError, lastNameError: "" });
    }
    setEmptyCredentialsError("");
  };

  const validateAddress = (e) => {
    const { value } = e?.target;
    setProfileDetailsError({
      ...profileDetailsError,
      addressError: isValidAddress(value),
    });
  };

  const onAddressChange = (e) => {
    setProfileDetails({ ...profileDetails, address: e.target.value });
    setProfileDetailsError({ ...profileDetailsError, addressError: "" });
    setEmptyCredentialsError("");
  };

  const validatePostcode = (e) => {
    const { value } = e?.target;
    setProfileDetailsError({
      ...profileDetailsError,
      postcodeError: isValidPostcode(value),
    });
  };

  const onPostcodeChange = (e) => {
    setProfileDetails({ ...profileDetails, postcode: e.target.value });
    setProfileDetailsError({ ...profileDetailsError, postcodeError: "" });
    setEmptyCredentialsError("");
  };

  const validatePhone = (e) => {
    const { value } = e?.target;
    setProfileDetailsError({
      ...profileDetailsError,
      phoneNoError: isValidPhone(value),
    });
  };

  const onPhoneChange = (e) => {
    setProfileDetails({ ...profileDetails, phoneNo: e.target.value });
    setProfileDetailsError({ ...profileDetailsError, phoneNoError: "" });
    setEmptyCredentialsError("");
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const validatePassword = (e) => {
    const { value } = e?.target;
    setPasswordError(isValidPassword(value));
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
    setEmptyCredentialsError("");
  };

  const updatePassword = (e) => {
    if (passwordError) {
      e.preventDefault();
    } else if (password === "") {
      e.preventDefault();
      setPasswordError(isValidPassword(e.target.value));
    } else {
      console.log("Update successful");
      setShowModal(false);
    }
  };

  const validateSubmit = (e) => {
    if (
      profileDetailsError.firstNameError ||
      profileDetailsError.lastNameError ||
      profileDetailsError.emailError ||
      profileDetailsError.addressError ||
      profileDetailsError.phoneNoError
    ) {
      setEmptyCredentialsError(
        "Looks like there is something wrong with the details! Do you want to give it another try?"
      );
      e.preventDefault();
    } else if (
      profileDetails.firstName === "" ||
      profileDetails.lastName === "" ||
      profileDetails.email === "" ||
      profileDetails.address === "" ||
      profileDetails.phoneNo === ""
    ) {
      setEmptyCredentialsError(
        "Looks like you're missing something! Do you want to give it another try?"
      );
      e.preventDefault();
    } else {
      dispatch({
        type: UPDATE_CUSTOMER_DETAILS,
        payload: profileDetails,
      });
      // updateCustomerDetails(dispatch, customerDetails, history);
      // history.push("/customerpayment_info");
    }
  };

  const showUpdatePassowrdModal = (showModalValue) => {
    setShowModal(showModalValue);
  };
  return (
    <div id="myprofile">
      <div>
        <Header />
      </div>
      <div id="profile">
        <UserProfileHeaderSection
          showUpdatePassowrdModal={showUpdatePassowrdModal}
          customerDetails={applicationState.customerDetails}
        />
        <div className="container-fluid">
          <UserProfileSection
            validateName={validateName}
            onNameChange={onNameChange}
            validateAddress={validateAddress}
            onAddressChange={onAddressChange}
            validatePostcode={validatePostcode}
            onPostcodeChange={onPostcodeChange}
            validatePhone={validatePhone}
            onPhoneChange={onPhoneChange}
            setProfileDetails={setProfileDetails}
            validateSubmit={validateSubmit}
            profileDetails={profileDetails}
            profileDetailsError={profileDetailsError}
            emptyCredentialsError={emptyCredentialsError}
          />
          <UpdatePasswordModal
            title="Please enter new password:"
            onClose={() => showUpdatePassowrdModal(false)}
            show={showModal}
            passwordError={passwordError}
            updatePassword={updatePassword}
          >
            <div className="form-floating mb-3">
              <input
                id="floatingPassword"
                className="form-control"
                type={passwordShown ? "text" : "password"}
                onChange={(e) => onPasswordChange(e)}
                onBlur={(e) => validatePassword(e)}
                value={password}
                placeholder="password"
                required
              />
              <i
                className={`fa ${
                  passwordShown ? `fa-eye-slash` : `fa-eye`
                } sign-up-icon`}
                onClick={togglePasswordVisiblity}
              ></i>
            </div>
            {passwordError ? <span>{passwordError}</span> : <React.Fragment />}
          </UpdatePasswordModal>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
