import * as React from "react";
import { AgGridReact } from "ag-grid-react";
import { useHistory } from "react-router-dom";
import HeaderMenu from "./common/HeaderMenu";

const MyOrders = (props) => {
  const history = useHistory();
  const { applicationState, dispatch } = props;
  const { cartDetails } = applicationState;
  const [tempCart, setTempCart] = React.useState(cartDetails);
  const [gridApi, setGridApi] = React.useState(null);
  const [gridColumnApi, setGridColumnApi] = React.useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
    params.api.sizeColumnsToFit();
  };

  const getRowHeight = () => (applicationState.mobileView ? 300 : 40);

  const frameWorkComponentChange = ({ api }) => {

  };

  const rowData = () =>
    applicationState?.orderDetails ? applicationState.orderDetails : [];

  const columnDefs = () => [
    { field: "id", headerName: "Order Id" },
    { field: "orderpaymentmethod", headerName: "Paid with" },
    { field: "orderDate", headerName: "Order placed on" },
    { field: "productsPurchased", headerName: "Products purchased" },
    { field: "amount", headerName: "Total Amount" },
  ];

  const defaultColDef = React.useMemo(
    () => ({
      resizable: true,
      sortable: true,
      minWidth: 256,
    }),
    []
  );

const getRowStyle = params => {
  if (params.node.rowIndex % 2 === 0) {
      return { background: '#e3adab' };
  }
};

const setAutoHeight = () => {
  gridApi.setDomLayout('autoHeight');
  document.querySelector('#myGrid').style.height = '';
};

  return (
    <div id="myorders">
      <div>
        <HeaderMenu dispatch={dispatch} cartCount={tempCart.length} />
      </div>
      <div className="container-fluid">
        <div
          id="myGrid"
          className="ag-theme-alpine"
          style={{
            height: '100%',
            width: '100%',
          }}
         >
          <AgGridReact
            getRowStyle={getRowStyle}
            getRowHeight={getRowHeight}
            rowData={rowData()}
            columnDefs={columnDefs()}
            
            defaultColDef={defaultColDef}
            onGridReady={onGridReady}

            statusBar={{ items: [{ component: 'agAggregationComponent' }] }}
            domLayout={'autoHeight'}
          ></AgGridReact>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
