import * as React from "react";
import HeaderMenu from "./common/HeaderMenu.js";

const AboutUs = (props) => {
  return (
    <div id="aboutus">
      <div>
        <HeaderMenu />
      </div>
      <div id="about">
        {/* Welcome Section */}
        <div className="container-fluid">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <div className="title">Welcome to Gandy & Black</div>
            <p>
              We are a team with over 40 years combined experience and expertise
              in business specialising in logistics and service. Utilising our
              network of contacts in finance and digital marketing we are
              dedicated to bring you the very best products on the market at
              competitive prices. Our core values underpin our vision to deliver
              a 5 star service that our customers will become our Raving Fans.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="values">
          <div className="container-fluid text-center">
            <h1>OUR VALUES</h1>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <i className="fa fa-smile-o fa-4x service-icon"></i>
                <h2>SERVICE</h2>
                <p>
                  We will deliver a five star service that exceeds customers
                  expectations.
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <i className="fa fa-shopping-cart fa-4x service-icon"></i>
                <h2>PASSION</h2>
                <p>
                  Enjoy the journey with us. We want your experience with us to
                  be a positive one.
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <i className="fa fa-shopping-cart fa-4x service-icon"></i>
                <h2>QUALITY</h2>
                <p>You can trust us to deliver 100% genuine products.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="container-fluid text-center">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <img
                  src="./GB-PN-INSERT-CLIENT.jpg"
                  alt="login background image"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <h1>OUR STORY</h1>
                <p>
                  Starting from humble beginnings in Liverpool by a budding
                  entrepreneur who imported his first batch of aesthetics
                  products and hand delivered them around his home city; Gandy &
                  Black was formed from his mums basement in Anfield. Gandy had
                  a vision, the energy and drive to deliver products to
                  customers that needed their fillers last minute at any time of
                  the day or night. The business would soon develop into what
                  would become a partnership of two families, Gandy & Black. We
                  are a technology driven business that drives performance
                  through our bespoke systems, providing solutions and making
                  order processing faster, easy and efficient. A forward
                  thinking company that puts the needs of our customers first.
                  Great products, at competitive pricing, delivered on time. The
                  story continues.......
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div
          className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-dark-grey"
          id="contact"
        >
          <div className="container image-overlap-container">
            <div className="image-container">
              <img src="./world-map.png" />
            </div>
            <div className="title-padding text-center">
              <h1 className="font-weight-bolder">CONTACT US</h1>
            </div>
            <div className="row text-center">
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <i className="fa fa-map-marker fa-3x"></i>
                <h2>LOCATION</h2>
                <p>
                  LIVERPOOL DISTRIBUTION CENTRE: 9 Bridle Way, Liverpool, L30
                  4UA
                </p>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <i className="fa fa-map-marker fa-3x"></i>
                <h2>LOCATION</h2>
                <p>
                  GLASGOW SALES OFFICE: Hyde Park Business Centre, Unit 15, 60
                  Mollinsburn Street, Glasgow G21 4SF
                </p>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <i className="fa fa-phone fa-3x"></i>
                <h2>CALL</h2>
                <p>07831377981</p>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <i className="fa fa-envelope fa-3x"></i>
                <h2>EMAIL</h2>
                <p>info@gandyandblack.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container">
					<div className="row">
						<div className="text-center mt-5"><h1 className="font-weight-bold">CONTACT US</h1></div>
						<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
							<h2>LOCATION</h2>
							<p>LIVERPOOL DISTRIBUTION CENTRE:
							9 Bridle Way, Liverpool, L30 4UA</p>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
							<h2>SERVICE</h2>
							<p>We will deliver a five star service that exceeds customers expectations.</p>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
							<h2>PASSION</h2>
							<p>Enjoy the journey with us. We want your experience with us to be a positive one.</p>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
							<h2>QUALITY</h2>
							<p>You can trust us to deliver 100% genuine products.</p>
						</div>
					</div>
				</div> */}

        {/* Footer Section */}
        <div className="text-center bg-grey footer-padding">
          <p>
            <small>&copy; 2021 Copyright. GANDY & BLACK AESTHETICS</small>
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
