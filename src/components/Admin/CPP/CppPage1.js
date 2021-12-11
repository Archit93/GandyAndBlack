import * as React from "react";
import AdminHeaderMenu from '../../common/AdminHeaderMenu';

const CppPage1 = (props) => {
  return (
    <div className="admin" id="cpp" 
    // style={{backgroundColor:"#fff"}}
    >
      <div>
        <AdminHeaderMenu />
      </div>
      <div>
      <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 p-0">
            <div className="cpp-image-wrapper">
              <img
                src="./Practitioner image 2.jpg"
                alt="cpp background image"
              />
            </div>
            <div className="cpp-text-overlap text-white">
              <div className="cpp-image-title">
                GANDY & BLACK 
                <p>COST PLUS PROFIT (CPP)</p>
                <p> SCHEME FOR ACADEMICS</p>
              </div>
              <div className="cpp-image-subtitle mt-5">
                SAVE ON AESTHETIC PRODUCTS AND EARN AS EACH OF YOUR STUDENTS PLACE THEIR ORDERS WITH GANDY & BLACK
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="container-fluid">
              <div role="main">
                <form method="post">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Name"
                      // value={email}
                    />
                    <label htmlFor="floatingInput">Name</label>
                  </div>
                  
                  <div className="form-floating pass-wrapper">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingAcademy"
                      placeholder="Training Academy Name"
                      // value={password}
                    />
                    <label htmlFor="floatingAcademy">Training Academy Name</label>
                    
                  </div>

                  <div className="form-floating pass-wrapper">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingStudentsTrained"
                      placeholder="Number of students trained per month"
                      // value={password}
                    />
                    <label htmlFor="floatingStudentsTrained">Number of students trained per month</label>
                  </div>

                  <div className="form-floating pass-wrapper">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingProductsTrainedOn"
                      placeholder="Products trained on"
                      // value={password}
                    />
                    <label htmlFor="floatingProductsTrainedOn">Products trained on</label>
                  </div>

                  <div className="form-floating pass-wrapper">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingBoxesPurchased"
                      placeholder="Number of boxes purchased per week"
                      // value={password}
                    />
                    <label htmlFor="floatingBoxesPurchased">Number of boxes purchased per week</label>
                  </div>
                  
                  <div className="form-floating pass-wrapper">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingMinimumProfit"
                      placeholder="Minimum profit"
                      // value={password}
                    />
                    <label htmlFor="floatingMinimumProfit">Minimum profit</label>
                  </div>

                  <div className="form-floating pass-wrapper">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingOverhead"
                      placeholder="Overhead"
                      // value={password}
                    />
                    <label htmlFor="floatingOverhead">Overhead</label>
                  </div>

                  <div className="form mt-4">
                    <button
                      className="btn btn-lg btn-main"
                      type="submit"
                      
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CppPage1;
