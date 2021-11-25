import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { UpdateProductColumn } from './UpdateProductColumn';
import UpdateProductModal from './UpdateProductModal';

import {DeleteProductColumn} from './DeleteProductColumn';
import DeleteProductModal from './DeleteProductModal';


const AdminProductList = (props) => {

    const { applicationState, dispatch } = props;
    const [gridApi, setGridApi] = React.useState(null);
    const [gridColumnApi, setGridColumnApi] = React.useState(null);
    const [showUpdateModal, setUpdateProductModal] = React.useState(false);
    const [showDeleteModal, setDeleteProductModal] = React.useState(false);

    const onGridReady = params => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi)
        params.api.sizeColumnsToFit()
    }

    const frameWorkComponentChange = ({ api }) => {
        console.log(api);
    }

    const columnDefs = [
        { field: 'stockFlag', headerName: "Stock Flag" },
        { field: 'brand', headerName: "Brand" },
        { field: 'producttype', headerName: "Product type" },
        { field: 'productdesc', headerName: "Product description" },
        { field: 'numberofstock', headerName: "Product quantity" },
        { field: 'salepriceperunit', headerName: "Sales Price Per Unit" },
        { field: 'update', headerName: "Update", cellRendererFramework: UpdateProductColumn },
        { field: 'delete', headerName: "Delete", cellRendererFramework: DeleteProductColumn }

    ];

    const rowData = () => {
        return applicationState ?.productList || [];
    };

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
    }
    const showUpdateProductModal = (showModalValue) => {
        setUpdateProductModal(showModalValue);
    }

    const showDeleteProductModal = (showModalValue) => {
        setDeleteProductModal(showModalValue);
    }

    return (
        <div className="row" style={{ height: '100vh' }}>
            {/* <div className="col-lg-1 p-0">
                <Sidebar />
            </div> */}

            <div className="col-lg-12 p-0" style={{ width: '100%', height: '100%' }}>
                <div className="p-3">
                    <input className="search-bottom-margin" type="text" id="filter-text-box" placeholder="Filter..." onChange={(event) => onFilterTextBoxChanged(event)} />
                    <div className="ag-theme-alpine" style={{ height: 'calc(100vh - 160px)', width: '100%' }}>
                        <AgGridReact
                            rowData={rowData()}
                            columnDefs={columnDefs}
                            defaultColDef={defaultColDef}
                            onGridReady={onGridReady}
                            context={{
                                frameWorkComponentChange: frameWorkComponentChange,
                                showUpdateProductModal: showUpdateProductModal,
                                showDeleteProductModal: showDeleteProductModal
                            }}
                        >
                        </AgGridReact>
                    </div>
                    <UpdateProductModal onClose={() => showUpdateProductModal(false)} show={showUpdateModal} />
                    <DeleteProductModal title="Delete Product" onClose={() =>  showDeleteProductModal(false)} show={showDeleteModal}>
                        <p><strong>Are you sure you want to delete this product?</strong></p>
                    </DeleteProductModal>

                </div>
            </div>
        </div>
    )
}

export default AdminProductList;
