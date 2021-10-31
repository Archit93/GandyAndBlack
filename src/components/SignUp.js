import * as React from "react";
import { useHistory } from "react-router-dom";
import {
  isValidName,
  isValidEmail,
  isValidPassword,
} from "../utils/regexUtils";

const SignUp = () => {
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
    if (e.target.id === "signup-firstname") {
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
    if (id === "signup-firstname") {
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
      history.push("/customercart_details");
    }
  };

  return (
    <div className="row">
      <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
        <div id="world-map-wrapper">
          <img
            src="./GB-COLLECTIONS-DERMAL-FILLERS.jpg"
            alt="login background image"
          />
        </div>
      </div>
      <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
        <header id="header">
          <img src="./newlogo.png" alt="" />
        </header>
        <div id="signup">
          <div role="main">
            <form method="post">
              <div className="form">
                <label for="signup-firstname" className="label">
                  Firstname
                </label>
                <input
                  id="signup-firstname"
                  onChange={(e) => onNameChange(e)}
                  onBlur={(e) => validateName(e)}
                  value={firstName}
                  required
                />
              </div>
              {firstNameError ? (
                <span>{firstNameError}</span>
              ) : (
                <React.Fragment />
              )}
              <div className="form">
                <label for="signup-lastname" className="label">
                  Lastname
                </label>
                <input
                  id="signup-lastname"
                  onChange={(e) => onNameChange(e)}
                  onBlur={(e) => validateName(e)}
                  value={lastName}
                  required
                />
              </div>
              {lastNameError ? (
                <span>{lastNameError}</span>
              ) : (
                <React.Fragment />
              )}
              <div className="form">
                <label for="signup-email" className="label">
                  Email
                </label>
                <input
                  id="signup-email"
                  type="email"
                  onChange={(e) => onEmailChange(e)}
                  onBlur={(e) => validateEmail(e)}
                  value={email}
                  required
                />
              </div>
              {emailError ? <span>{emailError}</span> : <React.Fragment />}
              <div className="form pass-wrapper">
                <label for="signup-password" className="label">
                  Create your password
                </label>
                <input
                  id="signup-password"
                  type={passwordShown ? "text" : "password"}
                  onChange={(e) => onPasswordChange(e)}
                  onBlur={(e) => validatePassword(e)}
                  value={password}
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
                <span>{passwordError}</span>
              ) : (
                <React.Fragment />
              )}
              <div className="form">
                <button
                  className="btn-link"
                  type="submit"
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  Already have an account? Login
                </button>
              </div>
              {emptyCredentialsError ? (
                <span>{emptyCredentialsError}</span>
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
            </form>
          </div>
          <footer>
            <p>
              <small>&copy; 2021 Copyright. GANDY & BLACK AESTHETICS</small>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
