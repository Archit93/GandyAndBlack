import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { ProductQuantityEditor } from './ProductQuantityEditor';
import { ProductVatEditor } from './ProductVatEditor';
import { SalesPricePerUnitEditor } from './SalesPricePerUnitEditor';
import { TotalAmountEditor } from './TotalAmountEditor';
import { TotalAmountPaidEditor } from './TotalAmountPaidEditor';


const ProductDetailsTab = ({ orderInfo, showEmailPopUp }) => {

  const [gridApi, setGridApi] = React.useState(null);
  const [gridColumnApi, setGridColumnApi] = React.useState(null);

  const onGridReady = params => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi)
    params.api.sizeColumnsToFit()
  }

  const frameWorkComponentChange = ({ api }) => {

  }

  const columnDefs = ({ frameWorkComponentChange }) => [
    { field: 'brand', headerName: "Brand" },
    { field: 'producttype', headerName: "Product Type" },
    { field: 'productdesc', headerName: "Product Description" },
    {
      field: 'quantity',
      headerName: "Product Quantity",
      cellEditor: "productQuantityEditor",
      editable: true
    },
    {
      field: 'price',
      headerName: "Sales Price Unit",
      cellEditor: "salesPricePerUnitEditor",
      editable: true
    },
    {
      field: 'vat',
      headerName: "Product vat",
      cellEditor: "productVatEditor",
      editable: true
    },
    {
      field: 'amount',
      headerName: "Total",
      cellEditor: "totalAmountEditor",
      editable: true
    },
    {
      field: 'amountpaid',
      headerName: "Amount Paid",
      cellEditor: "totalAmountPaidEditor",
      editable: true
    },
  ];

  const rowData = () => {
    const productOrderedListArray = [];
    orderInfo.orderdetailList.map((rowdetail) => {
      productOrderedListArray.push({
        ...rowdetail
      })
    });
    return productOrderedListArray
  };


  const defaultColDef = React.useMemo(() => ({
    resizable: true,
    sortable: true
  }), []);

  return (<>
    <div
      className="ag-theme-alpine product-detail-table"
      // style={{ height: "calc(100vh - 315px)", width: "100%" }}
      style={{ height: "520px", width: "100%" }}
    >
      <AgGridReact
        rowData={rowData()}
        columnDefs={columnDefs({
          frameWorkComponentChange: frameWorkComponentChange,
        })}
        defaultColDef={defaultColDef}
        onGridReady={onGridReady}
        context={{ frameWorkComponentChange: frameWorkComponentChange }}
        frameworkComponents={{
          productQuantityEditor: ProductQuantityEditor,
          productVatEditor: ProductVatEditor,
          salesPricePerUnitEditor: SalesPricePerUnitEditor,
          totalAmountEditor: TotalAmountEditor,
          totalAmountPaidEditor: TotalAmountPaidEditor
        }}
        paginationAutoPageSize={true}
        pagination={true}
      ></AgGridReact>
    </div>
    <div className="text-center mt-3">
    <button className="btn btn-main" onClick= {() => showEmailPopUp(orderInfo)}>
        Send Email
      </button>
      <button className="btn btn-secondary">
        Save Updates
      </button>
    </div>
  </>)

}
export default ProductDetailsTab