import * as React from "react";
import HeaderMenu from "../common/HeaderMenu.js";
import { useHistory } from "react-router-dom";
import CheckoutProgressBar from "./CheckoutProgressBar";
import CustomerAmountDetails from "./CustomerAmountDetails";
import {
  isValidName,
  isValidEmail,
  isValidAddress,
  isValidPostcode,
  isValidPhone,
} from "../../utils/regexUtils";
import {
  SET_CUSTOMER_BILLING_DETAILS,
  SET_TOTAL_AMOUNT,
} from "../../constants/actionTypes";
import { updateCustomerDetails } from "../../serviceCalls/updateCustomerDetails";
import ToggleButton from "react-toggle-button";
import AdminHeaderMenu from "../common/AdminHeaderMenu.js";

const CustomerShippingInformation = (props) => {
  const history = useHistory();
  const { applicationState, dispatch } = props;
  const {
    cartDetails,
    subTotalAmount,
    totalVatAmount,
    totalAmount,
    shippingCost,
    config,
  } = applicationState;

  React.useEffect(() => {
    const cartData = JSON.parse(window.sessionStorage.getItem("cart"));
    if (cartData) {
      setTempCart(cartData);
    }
  }, []);

  const [tempCart, setTempCart] = React.useState(cartDetails);
  const [shippingAddressDetails, setShippingAddressDetails] = React.useState({
    firstName: applicationState?.shippingAddressDetails?.firstName ?? "",
    lastName: applicationState?.shippingAddressDetails?.lastName ?? "",
    email: applicationState?.shippingAddressDetails?.email ?? "",
    phoneNo: applicationState?.shippingAddressDetails?.phoneNo ?? "",
    address: applicationState?.shippingAddressDetails?.address ?? "",
    postCode: applicationState?.shippingAddressDetails?.postCode ?? "",
    instagramId: applicationState?.shippingAddressDetails?.instagramId ?? "",
    tradeOfBusiness:
      applicationState?.shippingAddressDetails?.tradeOfBusiness ?? "",
  });

  const [shippingAddressDetailsError, setShippingAddressDetailsError] =
    React.useState({
      firstNameError: "",
      lastNameError: "",
      emailError: "",
      phoneNoError: "",
      addressError: "",
      postCodeError: "",
      instagramIdError: "",
      tradeOfBusinessError: "",
    });

  const [billingAddressDetails, setBillingAddressDetails] = React.useState({
    firstNameBilling: applicationState?.shippingAddressDetails?.firstName ?? "",
    lastNameBilling: applicationState?.shippingAddressDetails?.lastName ?? "",
    emailBilling: applicationState?.shippingAddressDetails?.email ?? "",
    phoneNoBilling: applicationState?.shippingAddressDetails?.phoneNo ?? "",
    billingAddress: applicationState?.shippingAddressDetails?.address ?? "",
    billingPostCode: applicationState?.shippingAddressDetails?.postCode ?? "",
  });

  const [billingAddressDetailsError, setBillingAddressDetailsError] =
    React.useState({
      firstNameBillingError: "",
      lastNameBillingError: "",
      emailBillingError: "",
      phoneNoBillingError: "",
      billingAddressError: "",
      billingPostCodeError: "",
    });

  const [emptyCredentialsError, setEmptyCredentialsError] = React.useState("");
  const [isSameAddress, setIsSameAddress] = React.useState(
    applicationState?.isSameAddress ?? true
  );

  const onShippingFieldChange = (e) => {
    setShippingAddressDetails({
      ...shippingAddressDetails,
      [e.target.id]: e.target.value,
    });
    setShippingAddressDetailsError({
      ...shippingAddressDetailsError,
      [`${e.target.id}Error`]: "",
    });
  };

  const onBillingFieldChange = (e) => {
    setBillingAddressDetails({
      ...billingAddressDetails,
      [e.target.id]: e.target.value,
    });
    setBillingAddressDetailsError({
      ...billingAddressDetailsError,
      [`${e.target.id}Error`]: "",
    });
  };

  const toggleIsSameAddress = () => {
    setBillingAddressDetails({
      firstNameBilling: shippingAddressDetails.firstName,
      lastNameBilling: shippingAddressDetails.lastName,
      emailBilling: shippingAddressDetails.email,
      phoneNoBilling: shippingAddressDetails.phoneNo,
      billingAddress: shippingAddressDetails.address,
      billingPostCode: shippingAddressDetails.postCode,
    });
    setIsSameAddress(!isSameAddress);
  };

  const validateName = (e) => {
    const { id, value } = e?.target;
    switch (id) {
      case "firstName":
        setShippingAddressDetailsError({
          ...shippingAddressDetailsError,
          firstNameError: isValidName(value),
        });
        break;
      case "lastName":
        setShippingAddressDetailsError({
          ...shippingAddressDetailsError,
          lastNameError: isValidName(value),
        });
      case "firstNameBilling":
        setBillingAddressDetailsError({
          ...billingAddressDetailsError,
          firstNameBillingError: isValidName(value),
        });
      case "lastNameBilling":
        setBillingAddressDetailsError({
          ...billingAddressDetailsError,
          lastNameBillingError: isValidName(value),
        });
    }
  };

  const validateEmail = (e) => {
    const { id, value } = e?.target;
    if (id === "email") {
      setShippingAddressDetailsError({
        ...shippingAddressDetailsError,
        emailError: isValidEmail(value),
      });
    } else {
      setBillingAddressDetailsError({
        ...billingAddressDetailsError,
        emailBillingError: isValidEmail(value),
      });
    }
  };

  const validateAddress = (e) => {
    const { id, value } = e?.target;
    if (id === "address") {
      setShippingAddressDetailsError({
        ...shippingAddressDetailsError,
        addressError: isValidAddress(value),
      });
    } else {
      setBillingAddressDetailsError({
        ...billingAddressDetailsError,
        billingAddressError: isValidAddress(value),
      });
    }
  };

  const validatePostcode = (e) => {
    const { id, value } = e?.target;
    if (id === "postCode") {
      setShippingAddressDetailsError({
        ...shippingAddressDetailsError,
        postCodeError: isValidPostcode(value),
      });
    } else {
      setBillingAddressDetailsError({
        ...billingAddressDetailsError,
        billingPostCodeError: isValidPostcode(value),
      });
    }
  };

  const validatePhone = (e) => {
    const { id, value } = e?.target;
    if (id === "phoneNo") {
      setShippingAddressDetailsError({
        ...shippingAddressDetailsError,
        phoneNoError: isValidPhone(value),
      });
    } else {
      setBillingAddressDetailsError({
        ...billingAddressDetailsError,
        phoneNoBillingError: isValidPhone(value),
      });
    }
  };

  const validateSubmit = (e) => {
    if (
      shippingAddressDetailsError.firstNameError ||
      shippingAddressDetailsError.lastNameError ||
      shippingAddressDetailsError.emailError ||
      shippingAddressDetailsError.addressError ||
      shippingAddressDetailsError.phoneNoError
    ) {
      e.preventDefault();
    } else if (
      shippingAddressDetails.firstName === "" ||
      shippingAddressDetails.lastName === "" ||
      shippingAddressDetails.email === "" ||
      shippingAddressDetails.address === "" ||
      shippingAddressDetails.phoneNo === "" ||
      (!isSameAddress &&
        (billingAddressDetails.firstNameBilling === "" ||
          billingAddressDetails.lastNameBilling === "" ||
          billingAddressDetails.emailBilling === "" ||
          billingAddressDetails.phoneNoBilling === "" ||
          billingAddressDetails.billingAddress === "" ||
          billingAddressDetails.billingPostCode === ""))
    ) {
      e.preventDefault();
      setEmptyCredentialsError(
        "Looks like you're missing something! Do you want to give it another try?"
      );
    } else {
      dispatch({
        type: SET_CUSTOMER_BILLING_DETAILS,
        payload: {
          shippingAddressDetails,
          billingAddressDetails,
          isSameAddress,
        },
      });
      history.push("/customerpayment_info");
    }
  };

  const settingAmountDetails = (shippingCost) => {
    dispatch({
      type: SET_TOTAL_AMOUNT,
      payload: {
        shippingCost,
        subTotalAmount: subTotalAmount,
        totalVatAmount: totalVatAmount,
        totalAmount: (
          subTotalAmount +
          totalVatAmount +
          Number(shippingCost)
        ).toFixed(2),
      },
    });
  };

  return (
    <div>
      <div>
        {config?.userType === "ADMIN" ? (
          <AdminHeaderMenu dispatch={dispatch} />
        ) : (
          <HeaderMenu dispatch={dispatch} cartCount={tempCart.length} />
        )}
      </div>
      <div
        id="checkout"
        className={` ${config?.userType === "ADMIN" ? "admin" : ""}`}
      >
        <div className="container-fluid">
          <div className="card px-0 pb-0 mb-3">
            <div className="row">
              <div className="col-md-12 mx-0 px-0">
                <form id="msform">
                  <CheckoutProgressBar
                    progressItem="Billing"
                    userType={config?.userType}
                  />
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 order-md-first order-last px-0 admin-shipaddress">
                      <fieldset>
                        <h2 className="fs-title">Shipping Address</h2>
                        <div className="form-card">
                          <input
                            type="text"
                            name="firstName"
                            className="form-control"
                            id="firstName"
                            placeholder="First Name*"
                            onChange={(e) => onShippingFieldChange(e)}
                            onBlur={(e) => validateName(e)}
                            value={shippingAddressDetails.firstName}
                          />
                          {shippingAddressDetailsError.firstNameError ? (
                            <span className="error">
                              {shippingAddressDetailsError.firstNameError}
                            </span>
                          ) : (
                            <React.Fragment />
                          )}
                          <input
                            type="text"
                            name="lastName"
                            className="form-control"
                            id="lastName"
                            placeholder="Last Name*"
                            onChange={(e) => onShippingFieldChange(e)}
                            onBlur={(e) => validateName(e)}
                            value={shippingAddressDetails.lastName}
                          />
                          {shippingAddressDetailsError.lastNameError ? (
                            <span className="error">
                              {shippingAddressDetailsError.lastNameError}
                            </span>
                          ) : (
                            <React.Fragment />
                          )}
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="Email*"
                            onChange={(e) => onShippingFieldChange(e)}
                            onBlur={(e) => validateEmail(e)}
                            value={shippingAddressDetails.email}
                          />
                          {shippingAddressDetailsError.emailError ? (
                            <span className="error">
                              {shippingAddressDetailsError.emailError}
                            </span>
                          ) : (
                            <React.Fragment />
                          )}
                          <input
                            type="text"
                            name="phoneNo"
                            id="phoneNo"
                            className="form-control"
                            placeholder="Contact No."
                            onChange={(e) => onShippingFieldChange(e)}
                            onBlur={(e) => validatePhone(e)}
                            value={shippingAddressDetails.phoneNo}
                          />
                          {shippingAddressDetailsError.phoneNoError ? (
                            <span className="error">
                              {shippingAddressDetailsError.phoneNoError}
                            </span>
                          ) : (
                            <React.Fragment />
                          )}
                          <input
                            type="text"
                            name="instagramId"
                            id="instagramId"
                            className="form-control"
                            placeholder="Instagram Name"
                            onChange={(e) => onShippingFieldChange(e)}
                            value={shippingAddressDetails.instagramId}
                          />
                          <input
                            type="text"
                            name="address"
                            id="address"
                            placeholder="Delivery Address*"
                            className="form-control"
                            onChange={(e) => onShippingFieldChange(e)}
                            onBlur={(e) => validateAddress(e)}
                            value={shippingAddressDetails.address}
                          />
                          {shippingAddressDetailsError.addressError ? (
                            <span className="error">
                              {shippingAddressDetailsError.addressError}
                            </span>
                          ) : (
                            <React.Fragment />
                          )}
                          <input
                            type="text"
                            name="postCode"
                            id="postCode"
                            className="form-control"
                            placeholder="Post Code*"
                            onChange={(e) => onShippingFieldChange(e)}
                            onBlur={(e) => validatePostcode(e)}
                            value={shippingAddressDetails.postCode}
                          />
                          {shippingAddressDetailsError.postCodeError ? (
                            <span className="error">
                              {shippingAddressDetailsError.postCodeError}
                            </span>
                          ) : (
                            <React.Fragment />
                          )}
                          <label>Trade of business</label>
                          <select
                            className="select"
                            id="tradeOfBusiness"
                            className="form-control"
                            name="tradeOfBusiness"
                            onChange={(e) => onBillingFieldChange(e)}
                            value={shippingAddressDetails.tradeOfBusiness}
                          >
                            <option value="Mobile Practitioners">
                              Mobile Practitioners
                            </option>
                            <option value="Prescriber">Prescriber</option>
                            <option value="Clinics">Clinics</option>
                            <option value="Training Academy">
                              Training Academy
                            </option>
                          </select>
                          {/* toggle */}
                          <div className="toggle mrt-20 pdb-30">
                            <span>
                              <ToggleButton
                                value={isSameAddress}
                                onToggle={() =>
                                  toggleIsSameAddress(!isSameAddress)
                                }
                                thumbStyle={{ borderRadius: 2 }}
                                trackStyle={{ borderRadius: 2 }}
                              />
                            </span>
                            <span className="float-left mrl-15">
                              Is billing address same as shipping address?
                            </span>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mobile-padding">
                      <CustomerAmountDetails
                        subTotalAmount={subTotalAmount}
                        finalVatAmount={totalVatAmount}
                        totalAmount={totalAmount}
                        shippingCost={shippingCost}
                        changeShippingCost={(newShippingCost) =>
                          settingAmountDetails(newShippingCost)
                        }
                        dispatch={dispatch}
                      />
                    </div>
                  </div>
                  {!isSameAddress && (
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 order-md-first order-last">
                        <fieldset>
                          <h2 className="fs-title">Billing Address</h2>
                          <div className="form-card">
                            <input
                              type="text"
                              name="firstNameBilling"
                              className="form-control"
                              id="firstNameBilling"
                              placeholder="First Name*"
                              onChange={(e) => onBillingFieldChange(e)}
                              onBlur={(e) => validateName(e)}
                              value={billingAddressDetails.firstNameBilling}
                            />
                            {billingAddressDetailsError.firstNameBillingError ? (
                              <span className="error">
                                {
                                  billingAddressDetailsError.firstNameBillingError
                                }
                              </span>
                            ) : (
                              <React.Fragment />
                            )}
                            <input
                              type="text"
                              name="lastNameBilling"
                              className="form-control"
                              id="lastNameBilling"
                              placeholder="Last Name*"
                              onChange={(e) => onBillingFieldChange(e)}
                              onBlur={(e) => validateName(e)}
                              value={billingAddressDetails.lastNameBilling}
                            />
                            {billingAddressDetailsError.lastNameBillingError ? (
                              <span className="error">
                                {
                                  billingAddressDetailsError.lastNameBillingError
                                }
                              </span>
                            ) : (
                              <React.Fragment />
                            )}
                            <input
                              type="text"
                              name="emailBilling"
                              id="emailBilling"
                              className="form-control"
                              placeholder="Email*"
                              onChange={(e) => onBillingFieldChange(e)}
                              onBlur={(e) => validateEmail(e)}
                              value={billingAddressDetails.emailBilling}
                            />
                            {billingAddressDetailsError.emailBillingError ? (
                              <span className="error">
                                {billingAddressDetailsError.emailBillingError}
                              </span>
                            ) : (
                              <React.Fragment />
                            )}
                            <input
                              type="text"
                              name="phoneNoBilling"
                              id="phoneNoBilling"
                              className="form-control"
                              placeholder="Billing Contact No."
                              onChange={(e) => onBillingFieldChange(e)}
                              onBlur={(e) => validatePhone(e)}
                              value={billingAddressDetails.phoneNoBilling}
                            />
                            {billingAddressDetailsError.phoneNoBillingError ? (
                              <span className="error">
                                {billingAddressDetailsError.phoneNoBillingError}
                              </span>
                            ) : (
                              <React.Fragment />
                            )}
                            <input
                              type="text"
                              name="billingAddress"
                              id="billingAddress"
                              placeholder="Billing Address*"
                              className="form-control"
                              onChange={(e) => onBillingFieldChange(e)}
                              onBlur={(e) => validateAddress(e)}
                              value={billingAddressDetails.billingAddress}
                            />
                            {billingAddressDetailsError.billingAddressError ? (
                              <span className="error">
                                {billingAddressDetailsError.billingAddressError}
                              </span>
                            ) : (
                              <React.Fragment />
                            )}
                            <input
                              type="text"
                              name="billingPostCode"
                              id="billingPostCode"
                              className="form-control"
                              placeholder="Billing Post Code*"
                              onChange={(e) => onBillingFieldChange(e)}
                              onBlur={(e) => validatePostcode(e)}
                              value={billingAddressDetails.billingPostCode}
                            />
                            {billingAddressDetailsError.billingPostCodeError ? (
                              <span className="error">
                                {
                                  billingAddressDetailsError.billingPostCodeError
                                }
                              </span>
                            ) : (
                              <React.Fragment />
                            )}
                          </div>
                        </fieldset>
                      </div>
                    </div>
                  )}
                  <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 order-md-first order-last admin-mb">
                    {emptyCredentialsError ? (
                      <div className="mb-4 error">{emptyCredentialsError}</div>
                    ) : (
                      <React.Fragment />
                    )}
                    <button
                      className="previous action-button-previous btn-secondary"
                      type="submit"
                      onClick={() => {
                        config?.userType === "ADMIN"
                          ? history.push("/place_order")
                          : history.push("/customercart_details");
                      }}
                    >
                      Back
                    </button>
                    <button
                      className="next action-button btn-main"
                      type="submit"
                      onClick={validateSubmit}
                    >
                      Proceed to Pay
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

export default CustomerShippingInformation;
