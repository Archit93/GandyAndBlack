import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import PlaceOrderAddItemModal from './PlaceOrderAddItemModal';
import { RemoveItemColumn } from './RemoveItemColumn';
import RemoveItemModal from './RemoveItemModal';
import AdminHeaderMenu from '../../common/AdminHeaderMenu';

const AdminPlaceOrder = (props) => {

    const { applicationState, dispatch } = props;
    const { adminPlaceOrder, productList } = applicationState
    const [gridApi, setGridApi] = React.useState(null);
    const [gridColumnApi, setGridColumnApi] = React.useState(null);

    const [placeOrderData, setplaceOrderData] = React.useState(adminPlaceOrder);

    const [showRemoveItem, setRemoveItemModal] = React.useState(false);
    const [showPlaceOrder, setPlaceOrderItemModal] = React.useState(false);

    const onGridReady = params => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi)
        params.api.sizeColumnsToFit();
    }

    const frameWorkComponentChange = ({ api }) => {
    }

    const columnDefs = () => [
        { field: 'srno', headerName: "Sr. no" },
        { field: 'product', headerName: "Product" },
        { field: 'quantity', headerName: "Quantity" },
        { field: 'totalprice', headerName: "Total Price" },
        { field: 'totalvat', headerName: "Total Vat" },
        { field: 'totalcost', headerName: "Total Cost" },
        { field: 'delete', headerName: "Delete", cellRendererFramework: RemoveItemColumn }
    ];

    const rowData = () => {
        return applicationState ?.placeOrderData || [];
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
    }

    const showRemoveItemModal = (showModalValue) => {
        setRemoveItemModal(showModalValue);
    }

    const showPlaceOrderItemModal = (showModalValue) => {
        setPlaceOrderItemModal(showModalValue);
    }

    const updateOrders = (placeOrderData) => {
        setplaceOrderData(placeOrderData);
    }

    // set background colour on even rows again, this looks bad, should be using CSS classes
    const getRowStyle = params => {
        if (params.node.rowIndex % 2 === 0) {
            return { background: '#e3adab' };
        }
    };


    return (
        <div id="productlist">
            <div>
                <AdminHeaderMenu />
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
                        rowData={rowData()}
                        columnDefs={columnDefs()}
                        defaultColDef={defaultColDef}
                        onGridReady={onGridReady}
                        context={{
                            frameWorkComponentChange: frameWorkComponentChange,
                            showRemoveItemModal: showRemoveItemModal
                        }}
                        rowSelection={'single'}
                    >
                    </AgGridReact>
                </div>
                <div className="text-center mrt-20">
                    <button
                        className="btn btn-main"
                        type="submit"
                        name="btn-checkout"
                        id="btn-checkout"
                        disabled={false}
                        onClick={() => showPlaceOrderItemModal(true)}
                    >
                        Add Item
          </button>
                    <button
                        className="btn btn-secondary"
                        type="submit"
                        name="btn-checkout"
                        id="btn-checkout"
                        disabled={false}
                    >
                        Place Order
          </button>
                </div>
                <PlaceOrderAddItemModal
                    adminPlaceOrder={placeOrderData}
                    productList={productList}
                    onClose={() => showPlaceOrderItemModal(false)}
                    gridApi={gridApi}
                    show={showPlaceOrder}
                />
                <RemoveItemModal
                    title="Remove Item"
                    onClose={() => showRemoveItemModal(false)}
                    show={showRemoveItem}
                    gridApi={gridApi}>
                    <p><strong>Are you sure you want to remove this item from order list?</strong></p>
                </RemoveItemModal>

            </div>
        </div>
    )
}

export default AdminPlaceOrder;
