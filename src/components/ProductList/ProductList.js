import React from "react";
import { AgGridReact } from "ag-grid-react";
import { useHistory } from "react-router-dom";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import { EDIT_PRODUCT_QUANTITY } from "../../constants/actionTypes";

import { MobileViewColumnProductType } from "./MobileViewColumnProductType";
import { MobileViewColumnBrand } from "./MobileViewColumnBrand";
import { ColumnQuantity } from "./ColumnQuantity";
import {
  SET_CUSTOMER_CART_DETAILS,
  IS_CART_EMPTY,
  SET_INITIAL_RESPONSE,
} from "../../constants/actionTypes";
import { updateCartDetails } from "../../serviceCalls/updateCartDetails";
import HeaderMenu from "../common/HeaderMenu";

const ProductList = (props) => {
  const { applicationState, dispatch } = props;
  const [gridApi, setGridApi] = React.useState(null);
  const [gridColumnApi, setGridColumnApi] = React.useState(null);
  const [isLocalCartEmpty, setIsLocalCartEmpty] = React.useState(
    applicationState?.isCartEmpty ?? true
  );
  const [cartCount, setCartCount] = React.useState(0);
  const [tempCart, setTempCart] = React.useState([]);
  const history = useHistory();

  React.useEffect(() => {
    const cartData = JSON.parse(window.sessionStorage.getItem("cart"));
    if (cartData) {
      setCartCount(cartData.length);
    }
  }, []);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
    params.api.sizeColumnsToFit();
  };

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
    tempArray.length === 0
      ? setIsLocalCartEmpty(true)
      : setIsLocalCartEmpty(false);

    setCartCount(tempArray.length);
    setTempCart(tempArray);
    dispatch({
      type: SET_CUSTOMER_CART_DETAILS,
      payload: tempArray,
    });
    dispatch({
      type: EDIT_PRODUCT_QUANTITY,
      payload: productlistArray,
    });
    window.sessionStorage.setItem("cart", JSON.stringify(tempArray));
  };
  const rowData = () => {
    const productlistArray = [];
    applicationState?.productList &&
      applicationState.productList.map((rowdetail) => {
        let productListObject = Object.assign({});
        productListObject = {
          ...rowdetail,
          quantity: rowdetail.quantity ? Number(rowdetail.quantity) : 0,
        };
        productlistArray.push(productListObject);
      });
    return productlistArray;
  };

  const columnDefs = ({ frameWorkComponentChange }) =>
    applicationState?.mobileView
      ? [
          {
            field: "quantity",
            headerName: "Product List",
            cellRendererFramework: MobileViewColumnBrand,
          },
        ]
      : [
          { field: "brand", headerName: "Brand" },
          { field: "producttype", headerName: "Product Type" },
          { field: "productdesc", headerName: "Description" },
          {
            field: "quantity",
            headerName: "Quantity",
            editable: true,
            cellRendererFramework: ColumnQuantity,
          },
          { field: "salepriceperunit", headerName: "Sales Per Unit" },
        ];

  const defaultColDef = React.useMemo(
    () => ({
      resizable: true,
      sortable: true,
      minWidth: 256,
    }),
    []
  );

  const onFilterTextBoxChanged = (event) => {
    gridApi.setQuickFilter(event.target.value);
  };

  const getRowHeight = () => (applicationState.mobileView ? 300 : 65);

  const onProceed = (e) => {
    let customerCartArray = [];
    gridApi.forEachNode((node) => {
      if (node.data.quantity !== 0) {
        customerCartArray.push(node.data);
      }
    });
    dispatch({
      type: SET_CUSTOMER_CART_DETAILS,
      payload: customerCartArray,
    });
    dispatch({
      type: IS_CART_EMPTY,
      payload: isLocalCartEmpty,
    });
    // updateCartDetails(dispatch, customerCartArray, history);
    history.push("/customercart_details");
  };


// set background colour on even rows again, this looks bad, should be using CSS classes
const getRowStyle = params => {
    if (params.node.rowIndex % 2 === 0) {
        return { background: '#e3adab' };
    }
};
  return (
    <div id="productlist">
      <div>
        <HeaderMenu cartCount={cartCount} />
      </div>
      <div
        className="container-fluid"
        style={{ width: "100%", height: "100%" }}
      >
        <input
          className="search-bottom-margin"
          type="text"
          id="filter-text-box"
          placeholder="Filter..."
          onChange={(event) => onFilterTextBoxChanged(event)}
        />
        <div
          className="ag-theme-alpine"
          style={{ height: "calc(100vh - 315px)", width: "100%" }}
        >
          <AgGridReact
            getRowStyle={getRowStyle}
            getRowHeight={getRowHeight}
            rowData={rowData()}
            columnDefs={columnDefs({
              frameWorkComponentChange: frameWorkComponentChange,
            })}
            defaultColDef={defaultColDef}
            onGridReady={onGridReady}
            context={{ frameWorkComponentChange: frameWorkComponentChange }}
          ></AgGridReact>
        </div>
        <div className="text-center mrt-20">
          <button
            className="btn btn-main"
            type="submit"
            name="btn-checkout"
            id="btn-checkout"
            onClick={(e) => onProceed(e)}
            disabled={isLocalCartEmpty}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductList;
