import React from "react";
import { useHistory } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import * as XLSX from "xlsx";
import { importProducts } from "../../../serviceCalls/importProducts";
import { SET_IS_LOADING } from "../../../constants/actionTypes";

const FileUpload = ({ dispatch, onClose, show, authToken }) => {
  const [items, setItems] = React.useState([]);
  const [fileToUpload, setFile] = React.useState([]);
  const history = useHistory();
  const readExcel = (file) => {
    if (file) {
      let formData = new FormData();
      formData.append("file", file);
      setFile(formData);
      const promise = new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);

        fileReader.onload = (e) => {
          const bufferArray = e.target.result;
          const workBook = XLSX.read(bufferArray, { type: "buffer" });
          const workSheetName = workBook.SheetNames[0];
          const workSheet = workBook.Sheets[workSheetName];
          const data = XLSX.utils.sheet_to_json(workSheet);
          resolve(data);
        };

        fileReader.onerror = (error) => {
          reject(error);
        };
      });

      promise.then((d) => {
        setItems(d);
      });
    }
  };

  const uploadFile = (e) => {
    e.preventDefault();
    dispatch({ type: SET_IS_LOADING, payload: true });
    importProducts({
      dispatch,
      history,
      fileToUpload,
      authToken,
    });
  };

  const cancelUpload = () => {
    setItems([]);
    onClose();
  };

  return (
    <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
      <div className="modal">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">Upload Product List</h4>
          </div>
          <div className="modal-body">
            <input
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                readExcel(file);
              }}
              accept=".xlsx, .xls, .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            ></input>
          </div>
          <div className="modal-footer text-align-center">
            <button className="btn btn-main" onClick={(e) => uploadFile(e)}>
              Upload
            </button>
            <button
              onClick={() => cancelUpload()}
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

export default FileUpload;
