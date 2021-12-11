import * as React from "react";
import { useHistory } from "react-router-dom";
import { RESET_ALL_DATA, SET_TILE_CLICKED } from "../../constants/actionTypes";

const HeaderMenu = (props) => {
  const { cartCount, dispatch } = props;
  const history = useHistory();
  const logout = (e) => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      window.sessionStorage.clear("cart");
      dispatch({
        type: RESET_ALL_DATA,
      });
      history.push("/");
    } else {
      e.preventDefault();
    }
  };

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
          <div className="mobile-hide d-flex">
            <button
              className="nav-link"
              onClick={() => history.push("/customercart_details")}
            >
              <i className="fa fa-shopping-cart"></i>
              <span className="position-absolute translate-middle badge rounded-pill bg-secondary">
                {cartCount}
              </span>
            </button>
            <button className="nav-link" onClick={(e) => logout(e)}>
              <i className="fa fa-sign-out"></i>
            </button>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="main_nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => {
                  dispatch({
                    type: SET_TILE_CLICKED,
                    payload: "",
                  });
                  history.push("/producttypes");
                }}
              >
                Products
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => history.push("/aboutus")}
              >
                About Us
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
                  <button
                    className="dropdown-item pb-2 border-bottom"
                    onClick={() => history.push("/my_orders")}
                  >
                    My Orders
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => history.push("/my_profile")}
                  >
                    Update Profile
                  </button>
                </li>
              </ul>
            </li>
            <li
              className="nav-item mx-2"
              style={!cartCount ? { pointerEvents: "none" } : null}
            >
              <button
                className="nav-link"
                onClick={() => history.push("/customercart_details")}
              >
                <i className="fa fa-shopping-cart"></i>
                <span className="position-absolute translate-middle badge rounded-pill bg-secondary">
                  {cartCount}
                </span>
              </button>
            </li>
            <li className="nav-item mx-2">
              <button className="nav-link" onClick={(e) => logout(e)}>
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
