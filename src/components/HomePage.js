import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const HomePage = (props) => {
  const history = useHistory();
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-white navbar-fixed">
      <div className="container-fluid">
        <button onClick={() => history.push("/")}>
          <img src="./GD LOGOS-01.jpeg" alt="logo" className="logo" />
        </button>
      </div>
    </nav>
    {/* main content */}
    <div className="container-center-horizontal">
        <div className="g-b-insta-landing-page screen">
          {/* Bg image section */}
          <img className="mask-group-1-uEBdwN" src="mask-group-1@1x.png" />
          <div className="rectangle-201-uEBdwN"></div>
          <h1 className="supplier-s-of-p-hetics-products-uEBdwN">
            SUPPLIERS OF PREMIUM AESTHETICS PRODUCTS
          </h1>
          {/* View product button */}
          <div className="viewproduct-main-container">
            <div className="rectangle-205-uEBdwN">
              <div className="poppins-normal-white-24px" onClick={() => history.push("/productlist")}>
                VIEW PRODUCTS
              </div>
            </div>
          </div>
          {/* col 3 */}
          <div className="row">
            <div className="col-lg-4 rectangle-202-uEBdwN"
              onClick={() => history.push("/sign-in")}>
              <div className="poppins-normal-white-24px">
                VIEW MY ACCOUNT
              </div>
            </div>
            <div className="col-lg-4 rectangle-203-uEBdwN"
              onClick={() => history.push("/signup")}>
              <div className="poppins-normal-white-24px">
                CREATE MY ACCOUNT
              </div>
            </div>
            <div className="col-lg-4 rectangle-204-uEBdwN"
              onClick={() => history.push("/aboutus")}>
              <div className="about-gandy-black-uEBdwN poppins-normal-white-24px">
                ABOUT GANDY &amp; BLACK
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
