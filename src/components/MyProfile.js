import * as React from 'react';
import Header from './common/Header.js';

const MyProfile = (props) => {
    return(
		<div id="myprofile">
			<div>
				<Header />
			</div>
			<div id="profile">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="form-card">
                                <div class="bg-secondary">Personal Details</div>
                                <div class="form-floating mb-3 mt-4">
                                    <input
                                    type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="First Name"
                                    />
                                    <label for="floatingInput">First Name</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input
                                    type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="Last Name"
                                    />
                                    <label for="floatingInput">Last Name</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="Email"
                                    />
                                    <label for="floatingInput">Email Id</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input
                                    type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="Phone Number"
                                    />
                                    <label for="floatingInput">Phone Number</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input
                                    type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="Instagram Id"
                                    />
                                    <label for="floatingInput">Instagram Id</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input
                                    type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="Address"
                                    />
                                    <label for="floatingInput">Address</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input
                                    type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="Postcode"
                                    />
                                    <label for="floatingInput">Postcode</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <label className="h5">Trade of business</label>
                                    <select className="select" id="trade_business" name="trade_business">
                                        <option selected></option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="form-card">
                                <div class="bg-secondary">Update Password</div>
                                <div class="form-floating mb-3 mt-4">
                                    <input
                                    type="password"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="Password"
                                    />
                                    <label for="floatingInput">Password</label>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary">Update</button>
                    </div>

                </div>
	        </div>
	    </div>
    )
}

export default MyProfile;