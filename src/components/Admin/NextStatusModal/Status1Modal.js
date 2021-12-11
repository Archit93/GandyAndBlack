import React from 'react';
import { CSSTransition } from "react-transition-group";

const Status1Modal = (props) => {
    const [warehouse, setWareHouse] = React.useState('Liverpool');

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
                            <select
                                className="form-select"
                                id="productWarehouse"
                                name="productWarehouse"
                                value={warehouse}
                                onChange={(e) =>
                                    setWareHouse(e.target.value)
                                }
                            >
                                <option value="Liverpool">Liverpool</option>
                                <option value="Glasgow">Glasgow</option>
                            </select>
                            <label htmlFor="productWarehouse">Shipping Warehouse</label>
                        </div>
                        <button className="btn btn-main" onClick={() => props.nextStageApiCall({ orderid: props.orderid, warehouse: warehouse })}>
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

export default Status1Modal;