import React from "react";
import { AgGridReact } from "ag-grid-react";
import { useHistory } from "react-router-dom";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

// import { PromoCodeColumn } from './PromoCodeColumn';
// import PromoCodeModal from './PromoCodeModal';

import { CustomerUserNameColumn } from "./CustomerUserNameColumn";
import { CustomerEmailColumn } from "./CustomerEmailColumn";
import { CustomerNotificationColumn } from "./CustomerNotificationColumn";
import AdminHeaderMenu from "../../common/AdminHeaderMenu";
import {
  SET_IS_LOADING,
  UPDATE_CUSTOMER_DETAILS,
} from "../../../constants/actionTypes";
import { getOrderListOfCustomerForAdmin } from "../../../serviceCalls/getOrderListOfCustomerForAdmin";
import { Spinner } from "react-bootstrap";
import { updateCustomerNotificationApiCall } from "../../../serviceCalls/updateCustomerNotificationApiCall";


const AdminCustomersList = (props) => {
  const { applicationState, dispatch } = props;
  const {
    config: { authToken },
  } = applicationState;
  const history = useHistory();

  const [gridApi, setGridApi] = React.useState(null);
  const [gridColumnApi, setGridColumnApi] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const [rerender, setRerender] = React.useState(false);
  let notificationValue = {};

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
    params.api.sizeColumnsToFit();
  };

  const frameWorkComponentChange = ({ api }) => { };

  const onEmailClicked = (params) => {
    dispatch({ type: SET_IS_LOADING, payload: true });
    getOrderListOfCustomerForAdmin({
      dispatch: dispatch,
      history: history,
      authToken: authToken,
      email: params.data.email,
    });
  };

  const onUserNameClicked = (customerData) => {
    dispatch({ type: UPDATE_CUSTOMER_DETAILS, payload: customerData });
    history.push("/customer_profile");
  };

  const columnDefs = [
    {
      field: "username",
      headerName: "Username",
      cellRenderer: "usernamecolumn",
    },
    { field: "email", headerName: "Email", cellRenderer: "emailcolumn" },
    { field: "instaname", headerName: "Instagram Name" },
    { field: "mobileno", headerName: "Mobile Number" },
    { field: "tradeofbuisness", headerName: "User Type" },
    { field: "postcode", headerName: "Postal Code" },
    { field: "notification", headerName: "Notification", cellRenderer: "notificationcolumn" }
  ];

  const rowData = () => {
    const customerlistArray = [];
    applicationState.customerList && applicationState.customerList.map((rowdetail) => {
      if (notificationValue.email === rowdetail.email)
        rowdetail.notification = notificationValue.value
      customerlistArray.push({ ...rowdetail });
    });
    return customerlistArray;
  };

  const defaultColDef = React.useMemo(
    () => ({
      resizable: true,
      sortable: true,
    }),
    []
  );

  const onFilterTextBoxChanged = (event) => {
    gridApi.setQuickFilter(event.target.value);
  };
  const showPromocodeModal = (showModalValue) => {
    setShowModal(showModalValue);
  };

  const getRowStyle = (params) => {
    if (params.node.rowIndex % 2 === 0) {
      return { background: "#f7f7f7" };
    }
  };

  const changeNotification = (value, data, isNotification) => {
    notificationValue = {
      email: data.email,
      value: value
    }
    applicationState.customerList.map((rowdetail) => {
      if (rowdetail.email === notificationValue.email)
        updateCustomerNotificationApiCall({ dispatch, email: notificationValue.email, isNotificationEnabled: notificationValue.value, authToken: authToken, history })
    })
  }

  return (
    <div id="admincustlist" className="admin">
      <div>
        <AdminHeaderMenu dispatch={dispatch} />
      </div>
      {applicationState.isSpinnerEnabled && <div className="d-flex justify-content-center loader">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>}
      <div className="container-fluid">
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
            style={{ height: "calc(100vh - 210px)", width: "100%" }}
          >
            <AgGridReact
              rowData={rowData()}
              getRowStyle={getRowStyle}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              onGridReady={onGridReady}
              frameworkComponents={{
                usernamecolumn: CustomerUserNameColumn,
                emailcolumn: CustomerEmailColumn,
                notificationcolumn: (params) => CustomerNotificationColumn(params, changeNotification)
              }}
              context={{
                frameWorkComponentChange: frameWorkComponentChange,
                showPromocodeModal: showPromocodeModal,
                onEmailClicked: onEmailClicked,
                onUserNameClicked: onUserNameClicked,
              }}
              paginationAutoPageSize={true}
              pagination={true}
            ></AgGridReact>
          </div>
          {/* <PromoCodeModal title="Add Promocode" onClose={() => showPromocodeModal(false)} show={showModal}>
                        <p><strong>Please enter promotional code to be applied:</strong></p>
                        <input
                            type="text"
                            name="fname"
                            className=""
                            placeholder="Enter code"
                        />
                    </PromoCodeModal> */}
        </div>
      </div>
    </div>
  );
};

export default AdminCustomersList;
