import * as React from "react";
import AdminHeaderMenu from '../../common/AdminHeaderMenu';

const CppPage1 = (props) => {
  return (
    <div id="aboutus">
      <div>
        <AdminHeaderMenu />
      </div>
      <div id="about">
        
        {/* Footer Section */}
        <div className="text-center bg-grey footer-padding">
          <p>
            <small>&copy; 2021 Copyright. GANDY & BLACK AESTHETICS</small>
          </p>
        </div>
      </div>
    </div>
  );
};
export default CppPage1;
