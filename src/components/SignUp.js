import * as React from "react";
import { useHistory } from "react-router-dom";
import {
  isValidName,
  isValidEmail,
  isValidPassword,
} from "../utils/regexUtils";
import Footer from "./common/Footer";
import { signUpApiCall } from "../serviceCalls/signUpApiCall";
import { SET_IS_LOADING } from "../constants/actionTypes";
import { signInApiCall } from "../serviceCalls/signInApiCall";

const SignUp = (props) => {
  const history = useHistory();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmailAddress] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstNameError, setFirstNameError] = React.useState("");
  const [lastNameError, setLastNameError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [passwordShown, setPasswordShown] = React.useState(false);
  const [emptyCredentialsError, setEmptyCredentialsError] = React.useState("");

  const onNameChange = (e) => {
    if (e.target.id === "floatingFirstName") {
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
    if (id === "floatingFirstName") {
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

  const validatePassword = (e) => {
    const { value } = e?.target;
    setPasswordError(isValidPassword(value));
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
    setEmptyCredentialsError("");
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const validateSignup = (e) => {
    if (firstNameError || lastNameError || passwordError) {
      e.preventDefault();
    } else if (firstName === "" || lastName === "" || password === "") {
      e.preventDefault();
      setEmptyCredentialsError(
        "Looks like you're missing something! Do you want to give it another try?"
      );
    } else {
      e.preventDefault();
      props.dispatch({ type: SET_IS_LOADING, payload: true });
      signUpApiCall({
        dispatch: props.dispatch,
        history: history,
        firstName,
        lastName,
        email,
        password,
      });
    }
  };

  return (
    <div className="row">
      <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12 p-0">
        <div id="world-map-wrapper">
          <img
            src="./GB-COLLECTIONS-DERMAL-FILLERS.jpg"
            alt="login background image"
          />
        </div>
      </div>
      <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
        <header id="header">
          <img src="./GD LOGOS-01.jpeg" alt="" />
        </header>
        <div id="signup">
          <div role="main">
            <form method="post">
              <div className="form-floating mb-2">
                <input
                  className="form-control"
                  id="floatingFirstName"
                  onChange={(e) => onNameChange(e)}
                  onBlur={(e) => validateName(e)}
                  value={firstName}
                  placeholder="firstname"
                  required
                />
                <label htmlFor="floatingFirstName">Firstname</label>
              </div>
              {firstNameError ? (
                <span>
                  <div className="error">{firstNameError}</div>
                </span>
              ) : (
                <React.Fragment />
              )}
              <div className="form-floating mb-2">
                <input
                  id="floatingLastName"
                  className="form-control"
                  onChange={(e) => onNameChange(e)}
                  onBlur={(e) => validateName(e)}
                  value={lastName}
                  placeholder="lastname"
                  required
                />
                <label htmlFor="floatingLastName">Lastname</label>
              </div>
              {lastNameError ? (
                <span>
                  <div className="error">{lastNameError}</div>
                </span>
              ) : (
                <React.Fragment />
              )}
              <div className="form-floating mb-2">
                <input
                  id="floatingEmail"
                  className="form-control"
                  onChange={(e) => onEmailChange(e)}
                  onBlur={(e) => validateEmail(e)}
                  value={email}
                  placeholder="email"
                  required
                />
                <label htmlFor="floatingEmail">Email</label>
              </div>
              {emailError ? (
                <span>
                  <div className="error">{emailError}</div>
                </span>
              ) : (
                <React.Fragment />
              )}
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
                <label htmlFor="floatingPassword" className="label">
                  Create your password
                </label>
                <i
                  className={`fa ${
                    passwordShown ? `fa-eye-slash` : `fa-eye`
                  } sign-up-icon`}
                  onClick={() => togglePasswordVisiblity()}
                ></i>
              </div>
              {passwordError ? (
                <span>
                  <div className="error">{passwordError}</div>
                </span>
              ) : (
                <React.Fragment />
              )}
              {emptyCredentialsError ? (
                <span>
                  <div className="error">{emptyCredentialsError}</div>
                </span>
              ) : (
                <React.Fragment />
              )}
              <div className="form">
                <button
                  className="btn btn-lg btn-main"
                  type="submit"
                  onClick={(e) => {
                    validateSignup(e);
                  }}
                >
                  Signup
                </button>
              </div>
              <div className="form">
                <button
                  className="btn-link"
                  type="submit"
                  onClick={() => {
                    history.push("/signin");
                  }}
                >
                  Already have an account? Login
                </button>
              </div>
            </form>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
