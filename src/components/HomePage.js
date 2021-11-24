import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const HomePage = (props) => {
  const history = useHistory();
  return (
    <>
      <input
        type="hidden"
        id="anPageName"
        name="page"
        value="g-b-insta-landing-page"
      />
      <div className="container-center-horizontal">
        <div className="g-b-insta-landing-page screen">
          <img className="mask-group-1-uEBdwN" src="mask-group-1@1x.png" />
          <div className="rectangle-201-uEBdwN"></div>
          <div className="group-1-uEBdwN">
            <img className="path-1-WeV53s" src="path-1@1x.png" />
          </div>
          <img className="group-2-uEBdwN" src="group-2@1x.png" />
          <img className="group-3-uEBdwN" src="group-3@1x.png" />
          <div className="products-custom-profile-logout-uEBdwN">
            Products&nbsp;&nbsp;&nbsp;&nbsp; About
            Us&nbsp;&nbsp;&nbsp;&nbsp;Contact Us
          </div>
          <h1 className="supplier-s-of-p-hetics-products-uEBdwN">
            SUPPLIERS OF PREMIUM AESTHETICS PRODUCTS
          </h1>
          <div
            className="rectangle-202-uEBdwN"
            onClick={() => history.push("/signin")}
          ></div>
          <div className="rectangle-205-uEBdwN"></div>
          <div
            className="rectangle-203-uEBdwN"
            onClick={() => history.push("/signup")}
          ></div>
          <div
            className="rectangle-204-uEBdwN"
            onClick={() => history.push("/aboutus")}
          ></div>
          <div
            className="view-my-account-uEBdwN poppins-normal-white-30px"
            onClick={() => history.push("/signin")}
          >
            VIEW MY ACCOUNT
          </div>
          <div className="view-products-uEBdwN poppins-normal-white-30px">
            VIEW PRODUCTS
          </div>
          <div
            className="create-my-account-uEBdwN poppins-normal-white-30px"
            onClick={() => history.push("/signup")}
          >
            CREATE MY ACCOUNT
          </div>
          <div
            className="about-gandy-black-uEBdwN poppins-normal-white-30px"
            onClick={() => history.push("/aboutus")}
          >
            ABOUT GANDY &amp; BLACK
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
