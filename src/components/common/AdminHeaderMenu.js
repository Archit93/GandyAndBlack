import * as React from "react";
import { useHistory } from "react-router-dom";
import { RESET_ALL_DATA } from "../../constants/actionTypes";

const AdminHeaderMenu = ({ cartCount, dispatch }) => {
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
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => history.push("/admin_product_list")}
              >
                Products
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => history.push("/customer_list")}
              >
                Customers
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => history.push("/place_order")}
              >
                Place Order
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => history.push("/crm")}>
                CRM
              </button>
            </li>
            <li className="nav-item dropdown" id="myDropdown">
              <button
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Utility
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => history.push("/cppPage1")}
                  >
                    CPP
                  </button>
                </li>
              </ul>
            </li>
            {/* <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => history.push("/aboutus")}
              >
                About Us
              </button>
            </li> */}
            {/* <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => history.push("/admin_profile")}
              >
                My Profile
              </button>
            </li> */}
            <li className="nav-item">
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
export default AdminHeaderMenu;
