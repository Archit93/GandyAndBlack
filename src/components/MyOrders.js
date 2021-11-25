import * as React from "react";
import { AgGridReact } from "ag-grid-react";
import { useHistory } from "react-router-dom";
import HeaderMenu from "./common/HeaderMenu";
import Table from "react-bootstrap/Table";

const MyOrders = (props) => {
  const history = useHistory();
  const { applicationState, dispatch } = props;
  const { cartDetails } = applicationState;
  const [tempCart, setTempCart] = React.useState(cartDetails);
  const [gridApi, setGridApi] = React.useState(null);
  const [gridColumnApi, setGridColumnApi] = React.useState(null);

  React.useEffect(() => {
    const cartData = JSON.parse(window.sessionStorage.getItem("cart"));
    if (cartData) {
      setTempCart(cartData);
    }
  }, []);

  const getRowHeight = () => (applicationState.mobileView ? 300 : 65);

  const frameWorkComponentChange = ({ api }) => {
    const productlistArray = [];
    const tempArray = [];
    api.forEachNode((node) => {
      productlistArray.push(node.data);
      if (node.data.quantity !== 0) {
        tempArray.push({
          ...node.data,
          quantity: node.data.quantity ? Number(node.data.quantity) : 0,
        });
      }
    });
  };

  const rowData = () =>
    applicationState?.orderDetails ? applicationState.orderDetails : [];

  const columnDefs = () => [
    { field: "orderId", headerName: "Order Id" },
    { field: "paidWith", headerName: "Paid with" },
    { field: "orderPlacedOn", headerName: "Order placed on" },
    { field: "productsPurchased", headerName: "Products purchased" },
    { field: "totalAmount", headerName: "Total Amount" },
  ];

  const defaultColDef = React.useMemo(
    () => ({
      resizable: true,
      sortable: true,
      minWidth: 256,
    }),
    []
  );

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
    params.api.sizeColumnsToFit();
  };

  return (
    <div id="myorders">
      <div>
        <HeaderMenu dispatch={dispatch} cartCount={tempCart.length} />
      </div>
      <div className="container-fluid">
        <div
          className="ag-theme-alpine"
          style={{ height: "calc(100vh - 315px)", width: "100%" }}
        >
          <AgGridReact
            getRowHeight={getRowHeight}
            rowData={rowData()}
            columnDefs={columnDefs()}
            defaultColDef={defaultColDef}
            onGridReady={onGridReady}
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
