import * as React from 'react';

const HeaderMenu = (props) => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-white header-shadow navbar-fixed">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src="./GD LOGOS-01.jpeg" alt="logo" className="logo" />
            </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="main_nav">
            <ul class="navbar-nav">
              <li class="nav-item active"> <a class="nav-link" href="#">Products </a> </li>
              <li class="nav-item"><a class="nav-link" href="#"> About Us </a></li>
              <li class="nav-item"><a class="nav-link" href="#"> Contact Us </a></li>
              <li class="nav-item dropdown" id="myDropdown">
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> My Profile </a>
                <ul class="dropdown-menu">
                  <li> <a class="dropdown-item" href="#"> My Orders </a></li>
                  <li> <a class="dropdown-item" href="#"> Update Profile </a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"> 
                  <i class="fa fa-shopping-cart"></i> 
                  <span class="position-absolute translate-middle badge rounded-pill bg-secondary">0</span>
                </a>
                </li>
              <li class="nav-item"><a class="nav-link" href="#"> <i class="fa fa-sign-out"></i> </a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
export default HeaderMenu;