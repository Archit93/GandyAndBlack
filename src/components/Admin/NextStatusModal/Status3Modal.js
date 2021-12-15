import React from 'react';
import { CSSTransition } from "react-transition-group";

const Status3Modal = (props) => {
    const { config } = props;
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
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder="email"
                                value={config.email}
                                readOnly
                            />
                            <label htmlFor="floatingInput">Email</label>
                        </div>
                    </div>
                    <div className="modal-footer text-align-center">
                        <button className="btn btn-main" onClick={() => props.nextStageApiCall({ orderid: props.orderid, warehouse: null, email: config.email })}>
                            Submit
            </button>
                        <button onClick={props.onClose} className="btn btn-secondary">
                            Close
            </button>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

export default Status3Modal;