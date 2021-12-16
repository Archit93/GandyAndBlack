import React from 'react';
import { CSSTransition } from "react-transition-group";

const AdminOrderDetailsModal = (props) => {
    return (
      <div className="crm-modal">
        <CSSTransition
        in={props.show}
        unmountOnExit
        timeout={{ enter: 0, exit: 300 }}
      >
        <div className="modal">
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
            {/* <button className="btn btn-shadow mx-0 mt-0 mb-0">
              Move to Next Stage
            </button>   */}
          </div>
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer text-align-center">
            <button className="btn btn-main">
              Save
            </button>
            <button onClick={props.onClose} className="btn floating-modal-btn">
              Close
            </button>         
          </div>
        </div>
      </div>
      </CSSTransition>
      </div>
    )
}

export default AdminOrderDetailsModal;