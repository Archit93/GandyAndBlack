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
import HeaderMenu from "../common/Header";

const ProductList = (props) => {
  const { applicationState, dispatch } = props;
  const [gridApi, setGridApi] = React.useState(null);
  const [gridColumnApi, setGridColumnApi] = React.useState(null);
  const [isLocalCartEmpty, setIsLocalCartEmpty] = React.useState(
    applicationState?.isCartEmpty ?? true
  );
  const history = useHistory();

  // React.useEffect(() => {
  //   props.dispatch({ type: SET_INITIAL_RESPONSE });
  // }, applicationState?.productList);

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
        tempArray.push(node.data);
      }
    });
    tempArray.length === 0
      ? setIsLocalCartEmpty(true)
      : setIsLocalCartEmpty(false);
    dispatch({
      type: EDIT_PRODUCT_QUANTITY,
      payload: productlistArray,
    });
  };
  const rowData = () => {
    const productlistArray = [];
    applicationState?.productList &&
      applicationState.productList.map((rowdetail) => {
        const productListObject = Object.assign({});
        productListObject.productId = rowdetail.productId;
        productListObject.brand = rowdetail.brand;
        productListObject.productType = rowdetail.productType;
        productListObject.description = rowdetail.description;
        productListObject.quantity = Number(rowdetail.quantity);
        productListObject.salesPerUnit = rowdetail.salesPerUnit;
        productlistArray.push(productListObject);
      });
    return productlistArray;
  };

  const columnDefs = ({ frameWorkComponentChange }) =>
    applicationState?.mobileView
      ? [
          {
            field: "brand",
            headerName: "Brand",
            cellRendererFramework: MobileViewColumnBrand,
          },
          {
            field: "productType",
            headerName: "Product Type",
            cellRendererFramework: MobileViewColumnProductType,
          },
          { field: "description", headerName: "Description" },
        ]
      : [
          { field: "brand", headerName: "Brand" },
          { field: "productType", headerName: "Product Type" },
          { field: "description", headerName: "Description" },
          {
            field: "quantity",
            headerName: "Quantity",
            editable: true,
            cellRendererFramework: ColumnQuantity,
          },
          { field: "salesPerUnit", headerName: "Sales Per Unit" },
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

  const getRowHeight = () => (applicationState?.mobileView ? "50px" : "25px");

  const onProceed = (e) => {
    let customerCartArray = [];
    gridApi.forEachNode((node) => {
      if (node.data.quantity !== 0) {
        customerCartArray.push({
          productId: node.data.productId,
          brand: node.data.brand,
          productType: node.data.productType,
          description: node.data.description,
          quantity: node.data.quantity,
          availabilty: true,
          salesPerUnit: node.data.salesPerUnit,
        });
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

  return (
    <div>
      <div>
        <HeaderMenu />
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
            getRowHeight={getRowHeight()}
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
