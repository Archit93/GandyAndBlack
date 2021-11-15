import * as React from 'react';

const UserProfileHeaderSection = (props) => {
    return (
        <>
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
                                    <button type="button" className="btn btn-main" onClick = {() => props.showUpdatePassowrdModal(true)}>
                                        Update Password
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfileHeaderSection