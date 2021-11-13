import * as React from 'react';
import Header from './common/Header.js';

const MyProfile = (props) => {
    return(
		<div id="myprofile">
			<div>
				<Header />
			</div>
			<div id="profile">
                <div className="my-profile-banner">
                    <img src="./GB-PN-INSERT-CLIENT.jpg" alt="login background image" />
                </div>
                <div className="row mrlr-40">
                    <div className="profile-content">
                        <div className="row align-items-end">
                            <div className="col-sm">
                                <div className="d-flex align-items-end mt-3 mt-sm-0">
                                    <div className="flex-shrink-0">
                                        <div className="avatar-xxl me-3">
                                            <img src="./GB-PN-INSERT-CLIENT.jpg" alt="" className="img-fluid rounded-circle d-block img-thumbnail" /> 
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <div>
                                            <h5 className="font-size-16 mb-1">Hello, </h5>
                                            <p className="text-muted font-size-13 mb-2 pb-2">Rutuja Shah</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-auto">
                                <div className="d-flex align-items-start gap-2 mb-2 mt-4">
                                    <div>
                                    {/* <!-- Button trigger modal --> */}
                                    <button type="button" className="btn btn-main" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Update Password
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="bg-primary">Personal Details</div>
                    <div className="row form-card mt-4">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-floating mb-3">
                                <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="First Name"
                                />
                                <label for="floatingInput">First Name</label>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-floating mb-3">
                                <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Last Name"
                                />
                                <label for="floatingInput">Last Name</label>
                            </div>
                        </div>
                    </div>
                    <div className="row form-card mt-3">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-floating mb-3">
                                <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Email"
                                />
                                <label for="floatingInput">Email Id</label>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-floating mb-3">
                                <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Phone Number"
                                />
                                <label for="floatingInput">Phone Number</label>
                            </div>
                        </div>
                    </div>
                    <div className="row form-card mt-3">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-floating mb-3">
                                <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Instagram Id"
                                />
                                <label for="floatingInput">Instagram Id</label>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-floating mb-3">
                                <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Address"
                                />
                                <label for="floatingInput">Address</label>
                            </div>
                        </div>
                    </div>
                    <div className="row form-card mt-3">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-floating mb-3">
                                <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Postcode"
                                />
                                <label for="floatingInput">Postcode</label>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="form-floating">
                                <select className="form-select" id="trade_business" name="trade_business">
                                    <option selected>Select Option</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <label for="trade_business">Trade of business</label>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button type="text" className="btn btn-main">Update</button>   
                    </div>

                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Update Password</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-floating mb-3 mt-4">
                                        <input
                                        type="password"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="Password"
                                        />
                                        <label for="floatingInput">Password</label>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-main">Save changes</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
	        </div>
	    </div>
    )
}

export default MyProfile;