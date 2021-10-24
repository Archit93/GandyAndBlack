import * as React from "react";
import { useHistory } from "react-router-dom";
import { isValidEmail } from "../utils/regexUtils";

const ForgotPassword = (props) => {
  const history = useHistory();
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
      history.push("/productlist");
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
        <div id="forgot-password">
          <div role="main">
            <form method="post">
              <div className="form">
                <label for="signup-firstname" className="label">
                  Enter your email
                </label>
                <input
                  id="signup-firstname"
                  type="email"
                  onChange={(e) => onEmailChange(e)}
                  onBlur={(e) => validateEmail(e)}
                  value={email}
                  required
                />
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

export default ForgotPassword;
