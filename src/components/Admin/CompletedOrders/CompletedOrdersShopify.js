import * as React from "react";
import { AgGridReact } from "ag-grid-react";
import { useHistory } from "react-router-dom";
import AdminHeaderMenu from "../../common/AdminHeaderMenu";
import {QuantityColumn} from './QuantityColumn';
import {BalanceColumn} from './BalanceColumn'
// import AdminOrderDetailsModal from "./AdminOrderDetailsModal";
// import CRMTabList from "../CRMTab/CRMTabList";

const CompletedOrdersShopify = (props) => {
  const history = useHistory();
  const { applicationState, dispatch } = props;
  const { getCustomerOrderList, shopifyCompletedOrders } = applicationState;

  const [gridApi, setGridApi] = React.useState(null);
  const [gridColumnApi, setGridColumnApi] = React.useState(null);

//   const [showModal, setShowModal] = React.useState(false);
//   const [orderInfo, setOrderInfo] = React.useState("");

const [completedShopifyOrders, setCompletedShopifyOrders] = React.useState(shopifyCompletedOrders);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
    params.api.sizeColumnsToFit();
  };



//   const onRowClicked = (params) => {
//     const xyz = crmDetails.find((crmElement) => {
//       return crmElement.id === params.data.orderid;
//     });

//     //setOrderInfo(crmDetails[0]); // This is temporary as Paresh is fixing backend to map correct orderids
//     setOrderInfo(crmDetails.find((crmElement) => crmElement.id === params.data.orderid));
//     setShowModal(true);
//   };

  const frameWorkComponentChange = ({ api }) => {};


  const columnDefs = () => [
    { field: "customerEmail", headerName: "Email" },
    { field: "id", headerName: "Order Id" },
    { field: "orderdetailList", headerName: "Quantity", cellRenderer: "quantityColumnComponent" },
    { field: "orderDate", headerName: "Order placed on" },
    { field: "amount", headerName: "Total Amount" },
    { field: "amountpaid", headerName: "Amount Paid" },
    { field: "balance", headerName: "Balance", cellRenderer: "balanceColumnComponent" },
  ];

  const defaultColDef = React.useMemo(
    () => ({
      resizable: true,
      sortable: true,
    }),
    []
  );

  const getRowStyle = (params) => {
    if (params.node.rowIndex % 2 === 0) {
      return { background: "#f7f7f7" };
    }
  };

  const onFilterTextBoxChanged = (event) => {
    gridApi.setQuickFilter(event.target.value);
  };

  return (
    <div className="admin crm" id="admincustorder">
      <div>
        <AdminHeaderMenu dispatch={dispatch} />
      </div>
      <div className="container-fluid">
        <div className="card mt-4">
          <input
            className="search-bottom-margin mt-4"
            type="text"
            id="filter-text-box"
            placeholder="Filter..."
            onChange={(event) => onFilterTextBoxChanged(event)}
          />
          <div
            id="myGrid"
            className="ag-theme-alpine product-detail-table"
            style={{ height: "calc(100vh - 335px)",width: '100%'}}
          >
            <AgGridReact
              getRowStyle={getRowStyle}
              rowData={completedShopifyOrders}
              columnDefs={columnDefs()}
              defaultColDef={defaultColDef}
              onGridReady={onGridReady}
              rowSelection={"multiple"}
              paginationAutoPageSize={true}
              pagination={true}
              frameworkComponents={{
                quantityColumnComponent: QuantityColumn,
                balanceColumnComponent: BalanceColumn
              }}
            //   onRowClicked={onRowClicked}
            ></AgGridReact>
          </div>
        </div>
      </div>
      {/* <AdminOrderDetailsModal
        title={`Order Id`}
        onClose={() => setShowModal(false)}
        show={showModal}
        orderInfo={orderInfo}
      >
        <CRMTabList 
          orderInfo={orderInfo}
          dispatch={dispatch}
          history={history}
          config={config}
          onClose={() => setShowModal(false)}
           />
      </AdminOrderDetailsModal> */}
    </div>
  );
};

export default CompletedOrdersShopify;
