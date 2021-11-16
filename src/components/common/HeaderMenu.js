import * as React from "react";
import { useHistory } from "react-router-dom";

const HeaderMenu = ({ cartCount }) => {
  const history = useHistory();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white header-shadow navbar-fixed">
      <div className="container-fluid">
        <button className="navbar-brand" href="#">
          <img src="./GD LOGOS-01.jpeg" alt="logo" className="logo" />
        </button>
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
        <div className="collapse navbar-collapse" id="main_nav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <button className="nav-link">Products</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" href="#">
                About Us
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" href="#">
                Contact Us
              </button>
            </li>
            <li className="nav-item dropdown" id="myDropdown">
              <button
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                My Profile
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" href="#">
                    My Orders
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" href="#">
                    Update Profile
                  </button>
                </li>
              </ul>
            </li>
            <li
              className="nav-item"
              style={!cartCount ? { pointerEvents: "none" } : null}
            >
              <button
                className="nav-link"
                // onClick={history.push("/customercart_details")}
              >
                <i className="fa fa-shopping-cart"></i>
                <span className="position-absolute translate-middle badge rounded-pill bg-secondary">
                  {cartCount}
                </span>
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" href="#">
                <i className="fa fa-sign-out"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default HeaderMenu;
