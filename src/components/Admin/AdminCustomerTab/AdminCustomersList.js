import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { PromoCodeColumn } from './PromoCodeColumn';
import PromoCodeModal from './PromoCodeModal';

import AdminHeaderMenu from '../../common/AdminHeaderMenu';


const AdminCustomersList = (props) => {

    const { applicationState, dispatch } = props;
    const [gridApi, setGridApi] = React.useState(null);
    const [gridColumnApi, setGridColumnApi] = React.useState(null);
    const [showModal, setShowModal] = React.useState(false);

    const onGridReady = params => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi)
        params.api.sizeColumnsToFit()
    }

    const frameWorkComponentChange = ({ api }) => {
    }

    const columnDefs = [
        { field: 'username', headerName: "Username" },
        { field: 'email', headerName: "Email" },
        { field: 'instagramId', headerName: "Instagram Name" },
        { field: 'mobileNumber', headerName: "Mobile Number" },
        { field: 'userType', headerName: "User Type" },
        { field: 'postCode', headerName: "Postal Code" },
        { field: 'promoCode', headerName: "Promocode", cellRendererFramework: PromoCodeColumn }
    ];

    const rowData = () => {
        const customerlistArray = [];
        applicationState.customerList.map((rowdetail) => {
            const customerListObject = Object.assign({});
            customerListObject.username = rowdetail.username;
            customerListObject.email = rowdetail.email;
            customerListObject.instagramId = rowdetail.instagramId;
            customerListObject.mobileNumber = Number(rowdetail.mobileNumber);
            customerListObject.userType = rowdetail.userType;
            customerListObject.postCode = rowdetail.postCode;
            customerListObject.promoCode = rowdetail.promoCode;
            customerlistArray.push(customerListObject);
        });
        return customerlistArray
    };

    const defaultColDef = React.useMemo(() => ({
        resizable: true,
        sortable: true
    }), []);

    const onFilterTextBoxChanged = (event) => {
        gridApi.setQuickFilter(event.target.value);
    }
    const showPromocodeModal = (showModalValue) => {
        setShowModal(showModalValue);
    }

    return (
        <div id="admincustlist">
           <div>
                <AdminHeaderMenu />
            </div>
           
            <div className="" >
                <div className="container-fluid">
                    {/* Customer Details */}
                    <div className="image-overlap-container">
                        <div class="image-container"><img src="./world-map.png" /></div>
                        <div className="pd-20 bg-main rounded">
                            <div className="row form-card">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 px-0">
                                    <label><strong>Number Of Orders Made :-</strong> 2</label>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 px-0">
                                    <label><strong>Total Amount:-</strong> 299.9</label>
                                </div>
                            {/* </div>
                            <div className="row form-card mt-3"> */}
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 px-0">
                                    <label><strong>Total Amount Paid :-</strong> 124</label> 
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 px-0">
                                    <label><strong>Balance :-</strong> 23.45</label> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <input className="mt-4 search-bottom-margin" type="text" id="filter-text-box" placeholder="Filter..." onChange={(event) => onFilterTextBoxChanged(event)} />
                        <div className="ag-theme-alpine" style={{ height: 'calc(100vh - 315px)', width: '100%' }}>
                            <AgGridReact
                                rowData={rowData()}
                                columnDefs={columnDefs}
                                defaultColDef={defaultColDef}
                                onGridReady={onGridReady}
                                context={{
                                    frameWorkComponentChange: frameWorkComponentChange,
                                    showPromocodeModal: showPromocodeModal
                                }}
                            >
                            </AgGridReact>
                        </div>
                    </div>
                    <PromoCodeModal title="Add Promocode" onClose={() =>  showPromocodeModal(false)} show={showModal}>
                        <p><strong>Please enter promotional code to be applied:</strong></p>
                        <input
                        type="text"
                        name="fname"
                        className=""
                        placeholder="Enter code"
                        />
                    </PromoCodeModal>
                    
                </div>
            </div>
        </div>
    )
}

export default AdminCustomersList;
