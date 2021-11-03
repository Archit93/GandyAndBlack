import * as React from "react";

const HeaderMenu = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white header-shadow navbar-fixed">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="./GD LOGOS-01.jpeg" alt="logo" className="logo" />
        </a>
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
              <a className="nav-link">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item dropdown" id="myDropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                My Profile
              </a>
              <ul className="dropdown-menu">
                <li>
                  
                  <a className="dropdown-item" href="#">
                    
                    My Orders
                  </a>
                </li>
                <li>
                  
                  <a className="dropdown-item" href="#">
                    
                    Update Profile
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-shopping-cart"></i>
                <span className="position-absolute translate-middle badge rounded-pill bg-secondary">
                  0
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                
                <i className="fa fa-sign-out"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default HeaderMenu;
