import * as React from "react";
import { useHistory } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import CustomerProfileHeaderSection from "./CustomerProfileHeaderSection";
import CustomerProfileSection from "./CustomerProfileSection";
import UpdateCustomerPasswordModal from "./UpdateCustomerPasswordModal";
import {
  isValidName,
  isValidEmail,
  isValidAddress,
  isValidPostcode,
  isValidPhone,
  isValidPassword,
} from "../../../utils/regexUtils";
import {
  SET_CUSTOMER_BILLING_DETAILS,
  SET_IS_LOADING,
  SET_PROFILE_UPDATE_STATUS,
} from "../../../constants/actionTypes";
import { updateCustomerDetailsByAdmin } from "../../../serviceCalls/updateCustomerDetailsByAdmin";
import AdminHeaderMenu from "../../common/AdminHeaderMenu";
import Alert from "@material-ui/lab/Alert";

const CustomerProfile = (props) => {
  const history = useHistory();
  const { applicationState, dispatch } = props;
  const { customerDetails, config, isLoading, profileUpdateStatus } =
    applicationState;
  const [profileDetails, setProfileDetails] = React.useState({
    ...customerDetails,
    tradeofbuisness: customerDetails.tradeofbuisness
      ? customerDetails.tradeofbuisness
      : "Mobile Practitioners",
  });
  const [profileDetailsError, setProfileDetailsError] = React.useState({
    firstNameError: "",
    lastNameError: "",
    addressError: "",
    postCodeError: "",
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
      setProfileDetails({ ...profileDetails, firstname: e.target.value });
      setProfileDetailsError({ ...profileDetailsError, firstNameError: "" });
    } else {
      setProfileDetails({ ...profileDetails, lastname: e.target.value });
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
    const changeAddressBody = profileDetails.address;
    changeAddressBody[0].addressbody = e.target.value;
    setProfileDetails({ ...profileDetails, address: changeAddressBody });
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
    const changePostCode = profileDetails.address;
    changePostCode[0].postcode = e.target.value;
    setProfileDetails({ ...profileDetails, address: changePostCode });
    setProfileDetailsError({ ...profileDetailsError, postCodeError: "" });
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
    setProfileDetails({ ...profileDetails, mobileno: e.target.value });
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
      const customerDetails = {
        ...profileDetails,
        password: password,
      };
      props.dispatch({ type: SET_IS_LOADING, payload: true });
      updateCustomerDetailsByAdmin({
        dispatch,
        customerDetails,
        config,
        history,
        flag: true,
      });
      setShowModal(false);
    }
  };

  const validateSubmit = (e) => {
    if (
      profileDetailsError.firstNameError ||
      profileDetailsError.lastNameError ||
      profileDetailsError.emailError ||
      profileDetailsError.addressError ||
      profileDetailsError.phoneNoError ||
      profileDetailsError.postcodeError
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
      profileDetails.phoneNo === "" ||
      profileDetails.postCode === ""
    ) {
      setEmptyCredentialsError(
        "Looks like you're missing something! Do you want to give it another try?"
      );
      e.preventDefault();
    } else {
      props.dispatch({ type: SET_IS_LOADING, payload: true });
      dispatch({
        type: SET_CUSTOMER_BILLING_DETAILS,
        payload: profileDetails,
      });
      const customerDetails = {
        ...profileDetails,
      };
      updateCustomerDetailsByAdmin({
        dispatch,
        customerDetails,
        config,
        history,
        flag: false,
      });
    }
  };

  const showUpdatePassowrdModal = (showModalValue) => {
    setShowModal(showModalValue);
  };

  const closeAlert = () => {
    dispatch({
      type: SET_PROFILE_UPDATE_STATUS,
      payload: "",
    });
  };

  return (
    <>
      {isLoading && (
        <div className="d-flex justify-content-center loader">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      <div id="myprofile">
        <div>
          <AdminHeaderMenu dispatch={dispatch} />
        </div>
        <div id="profile">
          <CustomerProfileHeaderSection
            showUpdatePassowrdModal={showUpdatePassowrdModal}
            profileDetails={profileDetails}
          />
          <div className="container-fluid">
            {profileUpdateStatus && (
              <Alert className="mb-4" severity="success" onClose={closeAlert}>
                {profileUpdateStatus}
              </Alert>
            )}
            <CustomerProfileSection
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
            <UpdateCustomerPasswordModal
              title="Please enter new password:"
              onClose={() => showUpdatePassowrdModal(false)}
              show={showModal}
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
              {passwordError ? (
                <span className="error">{passwordError}</span>
              ) : (
                <React.Fragment />
              )}
            </UpdateCustomerPasswordModal>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerProfile;
