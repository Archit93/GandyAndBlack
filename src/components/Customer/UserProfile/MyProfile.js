import * as React from 'react';
import Header from '../../common/Header.js';
import UserProfileHeaderSection from './UserProfileHeaderSection';
import UserProfileSection from './UserProfileSection';
import UpdatePasswordModal from './UpdatePasswordModal';


const MyProfile = (props) => {
    const [showModal, setShowModal] = React.useState(false);

    const showUpdatePassowrdModal = (showModalValue) => {
        setShowModal(showModalValue);
    }
    return(
		<div id="myprofile">
			<div>
				<Header />
			</div>
			<div id="profile">
                <UserProfileHeaderSection showUpdatePassowrdModal={showUpdatePassowrdModal}/>
                <div className="container-fluid">
                <UserProfileSection/>
                <UpdatePasswordModal title="Update Password" onClose={() =>  showUpdatePassowrdModal(false)} show={showModal}>
                        <p><strong>Please enter new password:</strong></p>
                        <input
                        type="text"
                        name="fname"
                        className=""
                        placeholder="Enter password"
                        />
                    </UpdatePasswordModal>
                    </div>
	        </div>
	    </div>
    )
}

export default MyProfile;