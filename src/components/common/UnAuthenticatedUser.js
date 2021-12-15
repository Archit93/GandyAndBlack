import * as React from "react";
import { useHistory } from "react-router-dom";

const UnAuthenticatedUser = (props) => {
  const { cartCount, dispatch } = props;
  const history = useHistory();

  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm navbar-fixed">
      <div className="container-fluid">
        <button>
          <img src="./GD LOGOS-01.jpeg" alt="logo" className="logo" />
        </button>
        <div className="d-flex float-right">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="main_nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => {
                  history.push("/signin");
                }}
              >
                Sign In
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => history.push("/signup")}
              >
                Sign Up
              </button>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default UnAuthenticatedUser;
