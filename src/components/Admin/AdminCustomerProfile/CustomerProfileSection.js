import * as React from "react";

const CustomerProfileSection = (props) => {
  const {
    profileDetails,
    profileDetailsError,
    emptyCredentialsError,
    validateName,
    onNameChange,
    validateAddress,
    onAddressChange,
    validatePostcode,
    onPostcodeChange,
    validatePhone,
    onPhoneChange,
    setProfileDetails,
    validateSubmit,
  } = props;
  return (
    <>
      <div className="bg-primary">Personal Details</div>
      <div className="row form-card mt-4">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="fname"
              placeholder="First Name"
              onChange={(e) => onNameChange(e)}
              onBlur={(e) => validateName(e)}
              value={profileDetails.firstname}
            />
            <label htmlFor="floatingInput">First Name</label>
          </div>
          {profileDetailsError.firstNameError ? (
            <span>{profileDetailsError.firstNameError}</span>
          ) : (
            <React.Fragment />
          )}
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="lname"
              placeholder="Last Name"
              onChange={(e) => onNameChange(e)}
              onBlur={(e) => validateName(e)}
              value={profileDetails.lastname}
            />
            <label htmlFor="floatingInput">Last Name</label>
          </div>
          {profileDetailsError.lastNameError ? (
            <span>{profileDetailsError.lastNameError}</span>
          ) : (
            <React.Fragment />
          )}
        </div>
      </div>
      <div className="row form-card mt-3">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={profileDetails.email}
              disabled
            />
            <label htmlFor="floatingInput">Email Id</label>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="phoneNo"
              placeholder="Phone Number"
              onChange={(e) => onPhoneChange(e)}
              onBlur={(e) => validatePhone(e)}
              value={profileDetails.mobileno}
            />
            <label htmlFor="floatingInput">Phone Number</label>
          </div>
          {profileDetailsError.phoneNoError ? (
            <span>{profileDetailsError.phoneNoError}</span>
          ) : (
            <React.Fragment />
          )}
        </div>
      </div>
      <div className="row form-card mt-3">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="instagramId"
              placeholder="Instagram Id"
              onChange={(e) =>
                setProfileDetails({
                  ...profileDetails,
                  instaname: e.target.value,
                })
              }
              onBlur={(e) =>
                setProfileDetails({
                  ...profileDetails,
                  instaname: e.target.value,
                })
              }
              value={profileDetails.instaname}
            />
            <label htmlFor="floatingInput">Instagram Id</label>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Address"
              onChange={(e) => onAddressChange(e)}
              onBlur={(e) => validateAddress(e)}
              value={
                profileDetails.address && profileDetails.address.length > 0
                  ? profileDetails.address[0].addressbody
                  : ""
              }
            />
            <label htmlFor="floatingInput">Address</label>
          </div>
          {profileDetailsError.addressError ? (
            <span>{profileDetailsError.addressError}</span>
          ) : (
            <React.Fragment />
          )}
        </div>
      </div>
      <div className="row form-card mt-3">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="postcode"
              placeholder="Postcode"
              onChange={(e) => onPostcodeChange(e)}
              onBlur={(e) => validatePostcode(e)}
              value={
                profileDetails.address && profileDetails.address.length > 0
                  ? profileDetails.address[0].postcode
                  : ""
              }
            />
            <label htmlFor="floatingInput">Postcode</label>
          </div>
          {profileDetailsError.postCodeError ? (
            <span>{profileDetailsError.postCodeError}</span>
          ) : (
            <React.Fragment />
          )}
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="form-floating">
            <select
              className="form-select"
              id="tradeofbuisness"
              name="tradeofbuisness"
              onChange={(e) =>
                setProfileDetails({
                  ...profileDetails,
                  tradeofbuisness: e.target.value,
                })
              }
              value={profileDetails.tradeofbuisness}
            >
              <option value="Mobile Practitioners">Mobile Practitioners</option>
              <option value="Prescriber">Prescriber</option>
              <option value="Clinics">Clinics</option>
              <option value="Training Academy">Training Academy</option>
            </select>
            <label htmlFor="trade_business">Trade of business</label>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        {emptyCredentialsError ? (
          <div className="mrb-20 error">{emptyCredentialsError}</div>
        ) : (
          <React.Fragment />
        )}
        <button type="text" className="btn btn-main" onClick={validateSubmit}>
          Update
        </button>
      </div>
    </>
  );
};

export default CustomerProfileSection;
