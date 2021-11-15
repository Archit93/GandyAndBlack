import * as React from "react";

const UserProfileSection = (props) => {
  const {
    profileDetails,
    profileDetailsError,
    emptyCredentialsError,
    validateName,
    onNameChange,
    validateEmail,
    onEmailChange,
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
              value={profileDetails.firstName}
            />
            <label for="floatingInput">First Name</label>
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
              value={profileDetails.lastName}
            />
            <label for="floatingInput">Last Name</label>
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
              onChange={(e) => onEmailChange(e)}
              onBlur={(e) => validateEmail(e)}
              value={profileDetails.email}
            />
            <label for="floatingInput">Email Id</label>
          </div>
          {profileDetailsError.emailError ? (
            <span>{profileDetailsError.emailError}</span>
          ) : (
            <React.Fragment />
          )}
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
              value={profileDetails.phoneNo}
            />
            <label for="floatingInput">Phone Number</label>
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
                  instagramId: e.target.value,
                })
              }
              onBlur={(e) =>
                setProfileDetails({
                  ...profileDetails,
                  instagramId: e.target.value,
                })
              }
              value={profileDetails.instagramId}
            />
            <label for="floatingInput">Instagram Id</label>
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
              value={profileDetails.address}
            />
            <label for="floatingInput">Address</label>
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
              value={profileDetails.postcode}
            />
            <label for="floatingInput">Postcode</label>
          </div>
          {profileDetailsError.postcodeError ? (
            <span>{profileDetailsError.postcodeError}</span>
          ) : (
            <React.Fragment />
          )}
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="form-floating">
            <select
              className="form-select"
              id="tradeOfBusiness"
              name="tradeOfBusiness"
              onChange={(e) =>
                setProfileDetails({
                  ...profileDetails,
                  tradeOfBusiness: e.target.value,
                })
              }
              value={profileDetails.tradeOfBusiness}
            >
              <option value="Mobile Practitioners">Mobile Practitioners</option>
              <option value="Prescriber">Prescriber</option>
              <option value="Clinics">Clinics</option>
              <option value="Training Academy">Training Academy</option>
            </select>
            <label for="trade_business">Trade of business</label>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        {emptyCredentialsError ? (
          <div className="mrb-20">{emptyCredentialsError}</div>
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

export default UserProfileSection;
