import * as React from "react";
import { useHistory } from "react-router-dom";
import { isValidEmail, isValidPassword } from "../utils/regexUtils";
import {SET_INITIAL_RESPONSE} from "../constants/actionTypes";

const SignIn = (props) => {
  const history = useHistory();
  const [email, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordShown, setPasswordShown] = React.useState(false);
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [emptyCredentialsError, setEmptyCredentialsError] = React.useState("");

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
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const validateLogin = (e) => {
    if (emailError || passwordError) {
      e.preventDefault();
    } else if (email === "" || password === "") {
      e.preventDefault();
      setEmptyCredentialsError(
        "Looks like you're missing something! Do you want to give it another try?"
      );
    } else {
      props.dispatch({ type: SET_INITIAL_RESPONSE })
      //history.push("/productlist");
      history.push("/customer_list");
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
          <img src="./GD LOGOS-01.jpeg" alt="" />
        </header>
        <div id="login">
          <div role="main">
            <form method="post">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={(e) => onEmailChange(e)}
                  onBlur={(e) => validateEmail(e)}
                  value={email}
                />
                <label for="floatingInput">Email address</label>
              </div>
              {emailError ? <span>{emailError}</span> : <React.Fragment />}
              <div className="form-floating pass-wrapper">
                <input
                  type={passwordShown ? "text" : "password"}
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={(e) => onPasswordChange(e)}
                  onBlur={(e) => validatePassword(e)}
                  value={password}
                />
                <label for="floatingPassword">Password</label>
                <i
                  className={`fa ${passwordShown ? `fa-eye-slash` : `fa-eye`}`}
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
                    history.push("/forgot_password");
                  }}
                >
                  Forgot password ?
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
                    validateLogin(e);
                  }}
                >
                  Login
                </button>
              </div>
              <div className="form">
                <button
                  className="btn-link"
                  type="submit"
                  onClick={() => {
                    history.push("/signup");
                  }}
                >
                  Not a member? Register
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
export default SignIn;
