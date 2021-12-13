import * as React from "react";
import { useHistory } from "react-router";
import AdminHeaderMenu from "../../common/AdminHeaderMenu";
import { SET_CPP_DETAILS } from "../../../constants/actionTypes";

const CppPage1 = (props) => {
  const { applicationState, dispatch } = props;
  const history = useHistory();
  const { productList, taProductRates, cppFinalDetails } = applicationState;
  const [cppDetails, setCppDetails] = React.useState({
    trainerName: cppFinalDetails.trainerName,
    trainingAcademy: cppFinalDetails.trainingAcademy,
    noOfStudents: cppFinalDetails.noOfStudents,
    productsTrainedOn: cppFinalDetails.productsTrainedOn,
    noOfBoxes: cppFinalDetails.noOfBoxes,
    minimumProfit: cppFinalDetails.minimumProfit,
    overhead: cppFinalDetails.overhead,
  });

  const [cppDetailsError, setCppDetailsError] = React.useState({
    trainerNameError: "",
    trainingAcademyError: "",
    noOfStudentsError: "",
    productsTrainedOnError: "",
    noOfBoxesError: "",
    minimumProfitError: "",
    overheadError: "",
  });
  const [emptyCredentialsError, setEmptyCredentialsError] = React.useState("");
  const {
    trainerName,
    trainingAcademy,
    noOfStudents,
    productsTrainedOn,
    noOfBoxes,
    minimumProfit,
    overhead,
  } = cppDetails;

  const {
    trainerNameError,
    trainingAcademyError,
    noOfStudentsError,
    productsTrainedOnError,
    noOfBoxesError,
    minimumProfitError,
    overheadError,
  } = cppDetailsError;

  const validateValue = (value, fieldName) => {
    value === ""
      ? setCppDetailsError({
          ...cppDetailsError,
          [`${fieldName}Error`]: "Please enter a proper value",
        })
      : setCppDetailsError({
          ...cppDetailsError,
          [`${fieldName}Error`]: "",
        });
    if (fieldName === "minimumProfit" || fieldName === "overhead") {
      value === "0" &&
        setCppDetailsError({
          ...cppDetailsError,
          [`${fieldName}Error`]: "Value should be greater than 0",
        });
    }
  };
  const validateSubmit = (e) => {
    e.preventDefault();
    if (
      trainerNameError ||
      trainingAcademyError ||
      noOfStudentsError ||
      productsTrainedOnError ||
      noOfBoxesError ||
      minimumProfitError ||
      overheadError
    ) {
      setEmptyCredentialsError(
        "Looks like you're missing something! Do you want to give it another try?"
      );
    } else if (
      trainerName === "" ||
      trainingAcademy === "" ||
      noOfStudents === "" ||
      productsTrainedOn === "" ||
      noOfBoxes === "" ||
      minimumProfit === "" ||
      overhead === ""
    ) {
      setEmptyCredentialsError(
        "Looks like you're missing something! Do you want to give it another try?"
      );
    } else {
      const totalBoxesPurchasedWeekly = Number(noOfStudents * noOfBoxes);
      const totalBoxesPurchasedMonthly = 4 * totalBoxesPurchasedWeekly;
      const selectedProduct = taProductRates.filter(
        (prod) => prod?.product?.productid === productsTrainedOn
      );
      const effectiveCost =
        getSellingPrice(
          selectedProduct,
          productsTrainedOn,
          totalBoxesPurchasedMonthly
        ) -
        selectedProduct[0]?.cost -
        overhead -
        minimumProfit;
      const totalTAProfitShare = Math.round(
        Number(effectiveCost * 0.1 * totalBoxesPurchasedMonthly)
      );
      let total = 0,
        year1 = 0,
        year2 = 0,
        year3 = 0;
      for (let month = 2; month <= 36; month++) {
        total = total + totalTAProfitShare * (month - 1);
        if (month === 12) {
          year1 = Math.round(total);
        } else if (month === 24) {
          year2 = Math.round(total);
        } else if (month === 36) {
          year3 = Math.round(total);
        }
      }
      const cppFinalDetails = {
        selectedProduct,
        totalBoxesPurchasedWeekly,
        totalBoxesPurchasedMonthly,
        effectiveCost,
        totalTAProfitShare,
        trainerName,
        trainingAcademy,
        noOfStudents,
        productsTrainedOn,
        noOfBoxes,
        minimumProfit,
        overhead,
        year1,
        year2,
        year3,
      };
      dispatch({ type: SET_CPP_DETAILS, cppFinalDetails });
      history.push("/cppPage2");
    }
  };

  const getSellingPrice = (selectedProduct, productType, purchaseCount) => {
    if (purchaseCount <= 20) {
      return selectedProduct[0]?.boxRate1To20;
    } else if (purchaseCount > 20 && purchaseCount <= 50) {
      return selectedProduct[0]?.boxRate21To50;
    } else {
      return selectedProduct[0]?.boxRateMoreThan51;
    }
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
                GANDY & BLACK
                <p>COST PLUS PROFIT (CPP)</p>
                <p> SCHEME FOR ACADEMICS</p>
              </div>
              <div className="cpp-image-subtitle mt-5">
                SAVE ON AESTHETIC PRODUCTS AND EARN AS EACH OF YOUR STUDENTS
                PLACE THEIR ORDERS WITH GANDY & BLACK
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
                      id="trainerName"
                      placeholder="Name"
                      value={trainerName}
                      onChange={(e) => {
                        setCppDetails({
                          ...cppDetails,
                          trainerName: e.target.value,
                        });
                        setCppDetailsError({
                          ...cppDetailsError,
                          trainerNameError: "",
                        });
                        setEmptyCredentialsError("");
                      }}
                      onBlur={(e) =>
                        validateValue(e.target.value, "trainerName")
                      }
                    />
                    <label htmlFor="trainerName">Name</label>
                  </div>
                  {trainerNameError ? (
                    <span className="error">{trainerNameError}</span>
                  ) : (
                    <React.Fragment />
                  )}
                  <div className="form-floating pass-wrapper">
                    <input
                      type="text"
                      className="form-control"
                      id="trainingAcademy"
                      placeholder="Training Academy Name"
                      value={trainingAcademy}
                      onChange={(e) => {
                        setCppDetails({
                          ...cppDetails,
                          trainingAcademy: e.target.value,
                        });
                        setCppDetailsError({
                          ...cppDetailsError,
                          trainingAcademyError: "",
                        });
                        setEmptyCredentialsError("");
                      }}
                      onBlur={(e) =>
                        validateValue(e.target.value, "trainingAcademy")
                      }
                    />
                    <label htmlFor="trainingAcademy">
                      Training Academy Name
                    </label>
                  </div>
                  {trainingAcademyError ? (
                    <span className="error">{trainingAcademyError}</span>
                  ) : (
                    <React.Fragment />
                  )}
                  <div className="form-floating pass-wrapper">
                    <input
                      type="number"
                      className="form-control"
                      id="noOfStudents"
                      placeholder="Number of students trained per month"
                      value={noOfStudents}
                      onChange={(e) => {
                        setCppDetails({
                          ...cppDetails,
                          noOfStudents: e.target.value,
                        });
                        setCppDetailsError({
                          ...cppDetailsError,
                          noOfStudentsError: "",
                        });
                        setEmptyCredentialsError("");
                      }}
                      onBlur={(e) =>
                        validateValue(e.target.value, "noOfStudents")
                      }
                    />
                    <label htmlFor="noOfStudents">
                      Number of students trained per month
                    </label>
                  </div>
                  {noOfStudentsError ? (
                    <span className="error">{noOfStudentsError}</span>
                  ) : (
                    <React.Fragment />
                  )}
                  <div className="form-floating pass-wrapper">
                    <select
                      className="form-select"
                      id="productsTrainedOn"
                      name="productsTrainedOn"
                      value={productsTrainedOn}
                      onChange={(e) => {
                        setCppDetails({
                          ...cppDetails,
                          productsTrainedOn: e.target.value,
                        });
                        setCppDetailsError({
                          ...cppDetailsError,
                          productsTrainedOnError: "",
                        });
                        setEmptyCredentialsError("");
                      }}
                      onBlur={(e) =>
                        validateValue(e.target.value, "productsTrainedOn")
                      }
                    >
                      <option value="">Please select</option>
                      {taProductRates?.map((prod) => (
                        <option
                          value={prod?.product?.productid}
                        >{`${prod?.product?.brand} ${prod?.product?.producttype} ${prod?.product?.productdesc}`}</option>
                      ))}
                    </select>
                    <label htmlFor="productsTrainedOn">
                      Products trained on
                    </label>
                  </div>
                  {productsTrainedOnError ? (
                    <span className="error">{productsTrainedOnError}</span>
                  ) : (
                    <React.Fragment />
                  )}
                  <div className="form-floating pass-wrapper">
                    <input
                      type="number"
                      className="form-control"
                      id="noOfBoxes"
                      placeholder="Number of boxes purchased per week"
                      value={noOfBoxes}
                      onChange={(e) => {
                        setCppDetails({
                          ...cppDetails,
                          noOfBoxes: e.target.value,
                        });
                        setCppDetailsError({
                          ...cppDetailsError,
                          noOfBoxesError: "",
                        });
                        setEmptyCredentialsError("");
                      }}
                      onBlur={(e) => validateValue(e.target.value, "noOfBoxes")}
                    />
                    <label htmlFor="noOfBoxes">
                      Number of boxes purchased per week
                    </label>
                  </div>
                  {noOfBoxesError ? (
                    <span className="error">{noOfBoxesError}</span>
                  ) : (
                    <React.Fragment />
                  )}
                  <div className="form-floating pass-wrapper">
                    <input
                      type="number"
                      className="form-control"
                      id="minimumProfit"
                      placeholder="Minimum profit"
                      value={minimumProfit}
                      onChange={(e) => {
                        setCppDetails({
                          ...cppDetails,
                          minimumProfit: e.target.value,
                        });
                        setCppDetailsError({
                          ...cppDetailsError,
                          minimumProfitError: "",
                        });
                        setEmptyCredentialsError("");
                      }}
                      onBlur={(e) =>
                        validateValue(e.target.value, "minimumProfit")
                      }
                    />
                    <label htmlFor="minimumProfit">Minimum profit</label>
                  </div>
                  {minimumProfitError ? (
                    <span className="error">{minimumProfitError}</span>
                  ) : (
                    <React.Fragment />
                  )}
                  <div className="form-floating pass-wrapper">
                    <input
                      type="number"
                      className="form-control"
                      id="overhead"
                      placeholder="Overhead"
                      value={overhead}
                      onChange={(e) => {
                        setCppDetails({
                          ...cppDetails,
                          overhead: e.target.value,
                        });
                        setCppDetailsError({
                          ...cppDetailsError,
                          overheadError: "",
                        });
                        setEmptyCredentialsError("");
                      }}
                      onBlur={(e) => validateValue(e.target.value, "overhead")}
                    />
                    <label htmlFor="overhead">Overhead</label>
                  </div>
                  {overheadError ? (
                    <span className="error">{overheadError}</span>
                  ) : (
                    <React.Fragment />
                  )}
                  <div className="form mt-4">
                    {emptyCredentialsError ? (
                      <div className="mrb-20 error">
                        {emptyCredentialsError}
                      </div>
                    ) : (
                      <React.Fragment />
                    )}
                    <button
                      className="btn btn-lg btn-main"
                      type="submit"
                      onClick={(e) => validateSubmit(e)}
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
