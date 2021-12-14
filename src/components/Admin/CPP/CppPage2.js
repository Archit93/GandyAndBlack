import * as React from "react";
import { useHistory } from "react-router";
import AdminHeaderMenu from "../../common/AdminHeaderMenu";

const CppPage2 = (props) => {
  const { applicationState, dispatch } = props;
  const history = useHistory();
  const { cppFinalDetails } = applicationState;
  const productName =
    cppFinalDetails?.selectedProduct[0]?.product?.brand +
    " " +
    cppFinalDetails?.selectedProduct[0]?.product?.producttype +
    " " +
    cppFinalDetails?.selectedProduct[0]?.product?.productdesc;
  const [profitShare, setProfitShare] = React.useState(
    cppFinalDetails?.selectedProduct[0]?.profitSharePercentage
  );
  const [taProfitShare, setTaProfitShare] = React.useState(
    cppFinalDetails.totalTAProfitShare
  );
  const calculateTAProfitShare = () => {
    const totalTAProfitShare = Math.round(
      Number(
        cppFinalDetails?.effectiveCost *
          (profitShare / 100) *
          cppFinalDetails?.totalBoxesPurchasedMonthly
      )
    );
    setTaProfitShare(totalTAProfitShare);
  };
  return (
    <div className="admin" id="cpp">
      <div>
        <AdminHeaderMenu dispatch={dispatch} />
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
                <p>REPORTS</p>
              </div>
              <div className="cpp-image-subtitle mt-5">
                CHECK YOUR ORDERING HISTORY IN
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="container-fluid">
              <h4 className="text-center mt-3">
                TRACK YOUR WEEKLY & MONTHLY ORDERING
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
                      id="ProfitShare"
                      placeholder="Profit Share"
                      value={profitShare}
                      onChange={(e) => setProfitShare(e.target.value)}
                      onBlur={() => calculateTAProfitShare()}
                    />
                    <label htmlFor="ProfitShare">Profit Share</label>
                  </div>

                  <div className="form-floating pass-wrapper">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingBoxesPurchasedWeekly"
                      placeholder="Total boxes purchased weekly"
                      defaultValue={cppFinalDetails.totalBoxesPurchasedWeekly}
                    />
                    <label htmlFor="floatingBoxesPurchasedWeekly">
                      Total boxes purchased weekly
                    </label>
                  </div>

                  <div className="form-floating pass-wrapper">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingBoxesPurchasedWeekly"
                      placeholder="Total boxes purchased monthly"
                      defaultValue={cppFinalDetails.totalBoxesPurchasedMonthly}
                    />
                    <label htmlFor="floatingBoxesPurchasedWeekly">
                      Total boxes purchased monthly
                    </label>
                  </div>

                  <div className="form-floating pass-wrapper">
                    <input
                      type="text"
                      className="form-control"
                      id="productPurchased"
                      placeholder="Product Purchased"
                      defaultValue={productName ?? ""}
                    />
                    <label htmlFor="productPurchased">Product Purchased</label>
                  </div>

                  <div className="form-floating pass-wrapper">
                    <input
                      type="text"
                      className="form-control"
                      id="taProfitShare"
                      placeholder="TA profit Share"
                      value={taProfitShare}
                      disabled
                    />
                    <label htmlFor="taProfitShare">TA profit Share</label>
                  </div>

                  <div className="form mt-5">
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
                    <button
                      style={{ flexGrow: "1" }}
                      className="btn btn-lg btn-main"
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        history.push("cppPage3");
                      }}
                    >
                      Projections
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
export default CppPage2;
