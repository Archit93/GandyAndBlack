import * as React from "react";
import { useHistory } from "react-router";
import AdminHeaderMenu from "../../common/AdminHeaderMenu";

const CppPage3 = (props) => {
  const { applicationState, dispatch } = props;
  const history = useHistory();
  const { cppFinalDetails } = applicationState;
  return (
    <div className="admin" id="cpp">
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
                COST PLUS PROFIT (CPP)
                <p>PROJECTIONS</p>
              </div>
              <div className="cpp-image-subtitle mt-5">
                YOU CAN SEE YOUR PROJECTED EARNINGS FOR THE NEXT 3 YEARS
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="container-fluid">
              <h4 className="text-center mt-3">
                TRACK YOUR CURRENT & FUTURE EARNINGS
              </h4>
              <p className="text-center mt-3" style={{ color: "#808080" }}>
                Below shows you your projected earnings
              </p>
              <div role="main">
                <form method="post">
                  <div className="form-floating pass-wrapper">
                    <input
                      type="text"
                      className="form-control"
                      id="Year1"
                      placeholder="Year 1"
                      value={cppFinalDetails.year1}
                    />
                    <label htmlFor="Year1">Year 1</label>
                  </div>

                  <div className="form-floating pass-wrapper">
                    <input
                      type="text"
                      className="form-control"
                      id="Year2"
                      placeholder="Year 2"
                      value={cppFinalDetails.year2}
                    />
                    <label htmlFor="Year2">Year 2</label>
                  </div>

                  <div className="form-floating pass-wrapper">
                    <input
                      type="text"
                      className="form-control"
                      id="Year3"
                      placeholder="Year 3"
                      value={cppFinalDetails.year3}
                    />
                    <label htmlFor="Year3">Year 3</label>
                  </div>

                  <div className="form mt-5">
                    <button
                      style={{ flexGrow: "1" }}
                      className="btn btn-lg btn-main"
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        history.push("cppPage2");
                      }}
                    >
                      Back to Reports
                    </button>
                    <button
                      style={{ flexGrow: "1" }}
                      className="btn btn-lg btn-main"
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        history.push("cppPage1");
                      }}
                    >
                      Back to CPP home
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
export default CppPage3;
