import * as React from 'react';

const UserProfileSection = (props) => {
    return(
        <>
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
                </>
    )
}

export default UserProfileSection;