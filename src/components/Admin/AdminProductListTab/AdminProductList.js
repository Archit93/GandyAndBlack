import React from "react";
import { AgGridReact } from "ag-grid-react";
import { useHistory } from "react-router-dom";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Spinner } from "react-bootstrap";
import { Alert } from "@material-ui/lab";
import { UpdateProductColumn } from "./UpdateProductColumn";
import UpdateProductModal from "./UpdateProductModal";
import { DeleteProductColumn } from "./DeleteProductColumn";
import DeleteProductModal from "./DeleteProductModal";
import AdminHeaderMenu from "../../common/AdminHeaderMenu";
import AddProductModal from "./AddProductModal";
import { StockFlagColumn } from "./StockFlagColumn";
import FileUpload from "./FileUpload";
import {
  SET_IS_LOADING,
  SET_ADD_DELETE_NEW_PRODUCT,
} from "../../../constants/actionTypes";
import { exportProducts } from "../../../serviceCalls/exportProducts";

const AdminProductList = (props) => {
  const { applicationState, dispatch } = props;
  const { isLoading, config, productList, addDeleteStatus, alertMessage } =
    applicationState;
  const history = useHistory();

  const [gridApi, setGridApi] = React.useState(null);
  const [gridColumnApi, setGridColumnApi] = React.useState(null);
  const [dataForUpdateModal, setDataForUpdateModal] = React.useState({});
  const [dataForDeleteModal, setDataForDeleteModal] = React.useState({});
  const [showUpdateModal, setUpdateProductModal] = React.useState(false);
  const [showDeleteModal, setDeleteProductModal] = React.useState(false);
  const [showAddModal, setAddProductModal] = React.useState(false);
  const [showFileUploadModal, setFileUploadModal] = React.useState(false);

  const closeAlert = () => {
    dispatch({
      type: SET_ADD_DELETE_NEW_PRODUCT,
      payload: "",
      message: "",
    });
  };

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
    params.api.sizeColumnsToFit();
  };

  const frameWorkComponentChange = ({ api, data, column, node, context }) => {
    setDataForUpdateModal(node.data);
    showUpdateProductModal(true);
  };

  const deleteComponentClick = ({ api, data, column, node, context }) => {
    setDataForDeleteModal(node.data);
    setDeleteProductModal(true);
  };

  const columnDefs = () => [
    {
      field: "stockFlag",
      headerName: "Stock Flag",
      cellRenderer: "stockFlagComponent",
    },
    { field: "brand", headerName: "Brand" },
    { field: "producttype", headerName: "Product type" },
    { field: "productdesc", headerName: "Product description" },
    { field: "numberofstock", headerName: "Product quantity" },
    { field: "salepriceperunit", headerName: "Sales Price Per Unit" },
    {
      field: "update",
      headerName: "Update",
      cellRendererFramework: UpdateProductColumn,
    },
    {
      field: "delete",
      headerName: "Delete",
      cellRendererFramework: DeleteProductColumn,
    },
  ];

  const rowData = () => {
    return productList ? productList : [];
  };

  const defaultColDef = React.useMemo(
    () => ({
      resizable: true,
      sortable: true,
      // minWidth: 256,
    }),
    []
  );

  const onFilterTextBoxChanged = (event) => {
    gridApi.setQuickFilter(event.target.value);
  };
  const showUpdateProductModal = (showModalValue) => {
    setUpdateProductModal(showModalValue);
  };

  const showDeleteProductModal = (showModalValue) => {
    setDeleteProductModal(showModalValue);
  };
  const showAddProductModal = (showModalValue) => {
    setAddProductModal(showModalValue);
  };

  const exportProductList = (e) => {
    e.preventDefault();
    dispatch({ type: SET_IS_LOADING, payload: true });
    exportProducts({
      dispatch,
      authToken: config.authToken,
    });
  };
  // set background colour on even rows again, this looks bad, should be using CSS classes
  const getRowStyle = (params) => {
    if (params.node.rowIndex % 2 === 0) {
      return { background: "#f7f7f7" };
    }
  };
  return (
    <div id="adminproductlist" className="admin">
      {isLoading && (
        <div className="d-flex justify-content-center loader">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      <div>
        <AdminHeaderMenu dispatch={dispatch} />
      </div>
      <div className="container-fluid">
        {addDeleteStatus && (
          <Alert
            variant="filled"
            className="mb-2"
            severity={addDeleteStatus}
            onClose={() => closeAlert()}
          >
            {alertMessage}
          </Alert>
        )}
        <div className="card">
          <input
            className="search-bottom-margin mt-4"
            type="text"
            id="filter-text-box"
            placeholder="Filter..."
            onChange={(event) => onFilterTextBoxChanged(event)}
          />

          <div
            className="ag-theme-alpine"
            // style={{ height: "calc(100vh - 309px)", width: "100%" }}
            style={{ height: "520px", width: "100%" }}
          >
            <AgGridReact
              getRowStyle={getRowStyle}
              rowData={rowData()}
              columnDefs={columnDefs()}
              defaultColDef={defaultColDef}
              onGridReady={onGridReady}
              context={{
                frameWorkComponentChange: frameWorkComponentChange,
                deleteComponentClick: deleteComponentClick,
                showUpdateProductModal: showUpdateProductModal,
                showDeleteProductModal: showDeleteProductModal,
              }}
              rowSelection={"multiple"}
              paginationAutoPageSize={true}
              pagination={true}
              frameworkComponents={{
                stockFlagComponent: StockFlagColumn,
              }}
            ></AgGridReact>
          </div>
        </div>
        <div className="text-center mrt-20">
          <button
            className="btn btn-main"
            type="submit"
            name="btn-checkout"
            id="btn-checkout"
            disabled={false}
            onClick={() => showAddProductModal(true)}
          >
            Add Product
          </button>
          <button
            className="btn btn-secondary"
            type="submit"
            name="btn-checkout"
            id="btn-checkout"
            disabled={false}
            onClick={() => setFileUploadModal(!showFileUploadModal)}
          >
            Import Product (.csv, .xls)
          </button>
          <button
            className="btn btn-secondary"
            type="submit"
            name="btn-checkout"
            id="btn-checkout"
            disabled={false}
            onClick={(e) => exportProductList(e)}
          >
            Export Products
          </button>
        </div>
        {/* {showFileUploadModal && <FileUpload />} */}
        {productList && (
          <>
            <UpdateProductModal
              onClose={() => showUpdateProductModal(false)}
              show={showUpdateModal}
              dataForUpdateModal={dataForUpdateModal}
              config={config}
              history={history}
              dispatch={dispatch}
            />
            <DeleteProductModal
              title="Delete Product"
              onClose={() => showDeleteProductModal(false)}
              show={showDeleteModal}
              dataForDeleteModal={dataForDeleteModal}
              config={config}
              history={history}
              dispatch={dispatch}
            >
              <p>
                <strong>Are you sure you want to delete this product?</strong>
              </p>
            </DeleteProductModal>
            <AddProductModal
              onClose={() => showAddProductModal(false)}
              show={showAddModal}
              config={config}
              history={history}
              dispatch={dispatch}
            />
            <FileUpload
              onClose={() => setFileUploadModal(false)}
              show={showFileUploadModal}
              dispatch={dispatch}
              authToken={config.authToken}
              config={config}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AdminProductList;
