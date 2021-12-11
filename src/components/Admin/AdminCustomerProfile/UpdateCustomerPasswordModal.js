import * as React from "react";
import { CSSTransition } from "react-transition-group";

const UpdateCustomerPasswordModal = (props) => {
  const { show, title, children, onClose, updatePassword } = props;
  return (
    <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
      <div className="modal">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer text-align-center">
            <button className="btn btn-main" onClick={updatePassword}>
              Update Password
            </button>
            <button
              onClick={onClose}
              className="btn floating-modal-btn btn-secondary"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default UpdateCustomerPasswordModal;
