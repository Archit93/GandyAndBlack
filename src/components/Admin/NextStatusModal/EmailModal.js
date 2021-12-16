import React from 'react';
import { CSSTransition } from "react-transition-group";

const EmailModal = (props) => {
    const [emailId, setEmailId] = React.useState(props.emailIdForModal);
    const [subject, setSubject] = React.useState("Hello");
    const [emailBody, setEmailBody] = React.useState("Hello");
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
                                value={emailId}
                                readOnly
                            />
                            <label htmlFor="floatingInput">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="subject"
                                placeholder="subject"
                                // value={props.emailIdForModal}
                            />
                            <label htmlFor="floatingInput">Subject</label>
                        </div>
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Enter your message" 
                            style={{height: "100px"}} id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Message</label>
                        </div>
                    </div>
                    <div className="modal-footer text-align-center">
                        <button className="btn btn-main" onClick={() => props.onClose()}>
                            Send Email
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

export default EmailModal;