import React from 'react';
import { CSSTransition } from "react-transition-group";

const Status2Modal = (props) => {

    return (
        <CSSTransition
            in={props.show}
            unmountOnExit
            timeout={{ enter: 0, exit: 300 }}
        >
            <div className="modal">
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h4 className="modal-title">{props.title}</h4>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure to move it to next status?</p>
                        <button className="btn btn-main" onClick={() => props.nextStageApiCall({ orderid: props.orderid, warehouse: null })}>
                            Submit
            </button>
                    </div>
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
    )
}

export default Status2Modal;