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

  // set background colour on even rows again, this looks bad, should be using CSS classes
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
        {/* <Table responsive>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Paid with</th>
              <th>Order placed on</th>
              <th>Products purchased</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0579a08d4110</td>
              <td>POD</td>
              <td>Wed Nov 03 17:14:50 GMT 2021</td>
              <td>Lidocaine 20ml - 1pc X 1</td>
              <td>23.95</td>
            </tr>
            <tr>
              <td>0579a08d4110</td>
              <td>POD</td>
              <td>Wed Nov 03 17:14:50 GMT 2021</td>
              <td>Lidocaine 20ml - 1pc X 1</td>
              <td>23.95</td>
            </tr>
            <tr>
              <td>0579a08d4110</td>
              <td>POD</td>
              <td>Wed Nov 03 17:14:50 GMT 2021</td>
              <td>Lidocaine 20ml - 1pc X 1</td>
              <td>23.95</td>
            </tr>
          </tbody>
        </Table> */}
      </div>
    </div>
  );
};

export default MyOrders;
