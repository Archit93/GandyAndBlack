import React from "react";
import { AgGridReact } from "ag-grid-react";
import { useHistory } from "react-router-dom";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import HeaderMenu from "../../common/Header";

const AdminProductList = (props) => {
    const { applicationState, dispatch } = props;
    const [gridApi, setGridApi] = React.useState(null);
    const [gridColumnApi, setGridColumnApi] = React.useState(null);
    const history = useHistory();

    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
        params.api.sizeColumnsToFit();
    };

    const frameWorkComponentChange = ({ api }) => {
        console.log(api)
    };

    const defaultColDef = React.useMemo(() => ({
            resizable: true,
            sortable: true,
        }),
        []
    );

    const rowData = () => {
        const productlistArray = [];
        // applicationState.productList.map((rowdetail) => {
        //   const productListObject = Object.assign({});
        //   productListObject.productId = rowdetail.productId;
        //   productListObject.brand = rowdetail.brand;
        //   productListObject.productType = rowdetail.productType;
        //   productListObject.description = rowdetail.description;
        //   productListObject.quantity = Number(rowdetail.quantity);
        //   productListObject.salesPerUnit = rowdetail.salesPerUnit;
        //   productlistArray.push(productListObject);
        // });
        return productlistArray;
    };

    const columnDefs = ({ frameWorkComponentChange }) => [
        {
            field: "stockFlag",
            headerName: "Stock Flag"
        },
        {
            field: "brand",
            headerName: "Brand"
        },
        {
            field: "productType",
            headerName: "Product Type"
        },
        {
            field: "description",
            headerName: "Product description"
        },
        {
            field: "quantity",
            headerName: "Product Quantity",
        },
        {
            field: "salesPerUnit",
            headerName: "Sales price per unit"
        },
        {
            field: "update",
            headerName: "Update"
        },
        {
            field: "delete",
            headerName: "Delete"
        }
    ]
    return (
        <div>
            {/* <div>
                <HeaderMenu />
            </div> */}
            <div className="container-fluid" style={{ width: "100%", height: "100%" }}>
                <div
                    className="ag-theme-alpine"
                    style={{ height: "calc(100vh - 315px)", width: "100%" }}
                >
                    <AgGridReact
                        rowData={rowData()}
                        columnDefs={columnDefs({
                            frameWorkComponentChange: frameWorkComponentChange,
                        })}
                        defaultColDef={defaultColDef}
                        onGridReady={onGridReady}
                        context={{ frameWorkComponentChange: frameWorkComponentChange }}
                    ></AgGridReact>
                </div>
            </div>
        </div>
    )
}

export default AdminProductList;