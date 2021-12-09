import React from 'react';
import { CSSTransition } from "react-transition-group";

import { deleteProductsApiCall } from "../../../serviceCalls/deleteProductsApiCall";
import { SET_IS_LOADING } from "../../../constants/actionTypes"

const DeleteProductModal = (props) => {
  
  const deleteProduct = () => {
    const { config, dispatch, dataForDeleteModal, onClose, history } = props;
    deleteProductsApiCall({
      dispatch: dispatch,
      authToken: config.authToken,
      productid: dataForDeleteModal.productid,
      history: history,
      config: config
    })
    onClose();
  }
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
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer text-align-center">
            <button className="btn btn-main" onClick={() => deleteProduct()}>
              Delete
            </button>
            <button onClick={props.onClose} className="btn floating-modal-btn btn-secondary">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}

export default DeleteProductModal;