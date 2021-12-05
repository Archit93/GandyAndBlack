import React from "react";
import { AgGridReact } from "ag-grid-react";
import { useHistory } from "react-router-dom";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import { EDIT_PRODUCT_QUANTITY } from "../../constants/actionTypes";

import { MobileViewColumnProductType } from "./MobileViewColumnProductType";
import { MobileViewColumnBrand } from "./MobileViewColumnBrand";
import { MobileViewColumnDescription } from "./MobileViewColumnDescription";
import { ColumnQuantity } from "./ColumnQuantity";
import { IS_CART_EMPTY, SET_TILE_CLICKED } from "../../constants/actionTypes";
import { updateCartDetails } from "../../serviceCalls/updateCartDetails";
import HeaderMenu from "../common/HeaderMenu";

const ProductList = (props) => {
  const { applicationState, dispatch } = props;
  const { cartDetails } = applicationState;

  const [gridApi, setGridApi] = React.useState(null);
  const [gridColumnApi, setGridColumnApi] = React.useState(null);

  const [isLocalCartEmpty, setIsLocalCartEmpty] = React.useState(
    !(cartDetails && cartDetails.length > 0)
  );

  //const [cartCount, setCartCount] = React.useState(cartDetails.length);
  const [tempCart, setTempCart] = React.useState(cartDetails);

  const history = useHistory();

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
    params.api.sizeColumnsToFit();
  };

  const frameWorkComponentChange = ({ api }) => {
    const { productList } = applicationState;
    const productlistArray = productList;
    const tempArray = [];
    api.forEachNode((node) => {
      const findIndexOfTheRowInProductList = productlistArray.findIndex(
        (product) => {
          return product.productid === node.data.productid;
        }
      );
      productlistArray[findIndexOfTheRowInProductList] = node.data;
    });

    productlistArray.forEach((product) => {
      if (product.quantity && product.quantity !== 0) {
        tempArray.push({
          ...product,
          vat: product.vat * product.quantity,
        });
      }
    });
    // api.forEachNode((node) => {
    //   if (node.data.quantity !== 0) {
    //     tempArray.push({
    //       ...node.data,
    //       quantity: node.data.quantity ? Number(node.data.quantity) : 0,
    //     });
    //   }
    // });
    tempArray.length === 0
      ? setIsLocalCartEmpty(true)
      : setIsLocalCartEmpty(false);

    //setCartCount(tempArray.length);
    setTempCart(tempArray);

    // dispatch({
    //   type: SET_CUSTOMER_CART_DETAILS,
    //   payload: tempArray,
    // });
    dispatch({
      type: EDIT_PRODUCT_QUANTITY,
      payload: productlistArray,
      cartDetails: tempArray,
    });
    window.sessionStorage.setItem("cart", JSON.stringify(tempArray));
  };

  const rowData = () => {
    const { productList, tileClicked } = applicationState;
    const productlistArray = [];
    if (
      productList &&
      productList.length > 0 &&
      tileClicked &&
      tileClicked.length > 0
    ) {
      const filteredProductList = productList.filter((product) => {
        return product.producttype === tileClicked;
      });
      filteredProductList.forEach((rowdetail) => {
        productlistArray.push({
          ...rowdetail,
          quantity: rowdetail.quantity ? Number(rowdetail.quantity) : 0,
        });
        return productlistArray;
      });
      return productlistArray;
    } else {
      return productlistArray;
    }
  };

  const columDefsForMobile = () => [
    {
      field: "quantity",
      headerName: "Quantity",
      editable: false,
      cellRenderer: "mobileQuantityEditor",
    },
    {
      field: "producttype",
      headerName: "Product List",
      cellRendererFramework: MobileViewColumnProductType,
    },
    {
      field: "productdesc",
      headerName: "Product Description",
      cellRendererFramework: MobileViewColumnDescription,
    },
  ];

  const columnDefs = ({ frameWorkComponentChange }) => {
    return applicationState.mobileView
      ? [
          {
            field: "quantity",
            headerName: "Brand",
            editable: false,
            cellRenderer: "mobileQuantityEditor",
          },
          {
            field: "producttype",
            headerName: "Product List",
            cellRendererFramework: MobileViewColumnProductType,
          },
          {
            field: "productdesc",
            headerName: "Product Description",
            cellRendererFramework: MobileViewColumnDescription,
          },
        ]
      : [
          { field: "brand", headerName: "Brand" },
          { field: "producttype", headerName: "Product Type" },
          { field: "productdesc", headerName: "Description" },
          {
            field: "quantity",
            headerName: "Quantity",
            editable: false,
            cellRenderer: "columnQuantityEditor",
          },
          { field: "salepriceperunit", headerName: "Sales Per Unit" },
        ];
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

  const getRowHeight = () => (applicationState.mobileView ? 110 : 65);
  const onProceed = (e) => {
    const itemList = applicationState?.cartDetails?.map((item) => [
      item.productid,
      item.quantity,
    ]);
    let productidcartmap = Object.fromEntries(itemList);
    const customerCartArray = {
      ordershippingcost: Number(applicationState?.shippingCost),
      productidcartmap,
      subtotal: Number(applicationState?.subTotalAmount),
      totalvat: Number(applicationState?.totalVatAmount),
      userId: applicationState?.shippingAddressDetails?.email || "",
    };
    updateCartDetails({
      dispatch,
      customerCartArray,
      history,
      authToken: applicationState?.config?.authToken,
    });
    // history.push("/customercart_details");
  };

  // set background colour on even rows again, this looks bad, should be using CSS classes
  const getRowStyle = (params) => {
    if (params.node.rowIndex % 2 === 0) {
      return { background: "#e3adab" };
    }
  };

  return (
    <div id="productlist">
      <div>
        <HeaderMenu
          dispatch={dispatch}
          cartCount={cartDetails ? cartDetails.length : 0}
        />
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
          // className="ag-theme-alpine"
          // style={{ height: "calc(100vh - 335px)", width: "100%" }}
          id="myGrid"
          className="table-mb ag-theme-alpine"
          style={{
            height: "100%",
            width: "100%",
          }}
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
            domLayout={"autoHeight"}
            frameworkComponents={{
              mobileQuantityEditor: MobileViewColumnBrand,
              columnQuantityEditor: ColumnQuantity,
            }}
          ></AgGridReact>
        </div>
        <div className="fixed-bottom text-center mrt-20">
          <button
            className="btn btn-secondary"
            type="submit"
            name="btn-checkout"
            id="btn-checkout"
            onClick={() => {
              dispatch({
                type: SET_TILE_CLICKED,
                payload: "",
              });
              history.push("/producttypes");
            }}
          >
            Back
          </button>
          <button
            className="btn btn-main"
            type="submit"
            name="btn-checkout"
            id="btn-checkout"
            onClick={(e) => onProceed(e)}
            disabled={isLocalCartEmpty}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductList;
