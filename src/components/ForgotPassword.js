import * as React from "react";
import { useHistory } from "react-router-dom";
import { isValidEmail } from "../utils/regexUtils";
import { forgotPasswordApiCall } from "../serviceCalls/forgotPasswordApiCall";

const ForgotPassword = (props) => {
  const history = useHistory();
  const {
    applicationState: { forgotPasswordError },
  } = props;
  const [email, setEmailAddress] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  const validateEmail = (e) => {
    const { value } = e?.target;
    setEmailError(isValidEmail(value));
  };

  const onEmailChange = (e) => {
    setEmailAddress(e.target.value);
    setEmailError("");
  };

  const validateSubmit = (e) => {
    if (emailError || email === "") {
      e.preventDefault();
    } else {
      forgotPasswordApiCall({
        dispatch: props.dispatch,
        history: history,
        email: email,
      });
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
        <div id="forgot-password">
          <div role="main">
            {/* <form method="post"> */}
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
              <label htmlFor="floatingInput">Email address</label>
            </div>
            {emailError ? <span>{emailError}</span> : <React.Fragment />}
            <div className="form">
              <button
                className="btn btn-lg btn-main"
                onClick={(e) => {
                  validateSubmit(e);
                }}
                type="submit"
              >
                Send
              </button>
            </div>
            <div className="form">
              <button
                className="btn-link"
                type="submit"
                onClick={(e) => {
                  history.push("/signup");
                }}
              >
                Not a member? Register
              </button>
            </div>
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
            {/* </form> */}
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

export default ForgotPassword;
