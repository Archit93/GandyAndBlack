import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { useHistory } from "react-router-dom";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { PromoCodeColumn } from './PromoCodeColumn';
import PromoCodeModal from './PromoCodeModal';

import AdminHeaderMenu from '../../common/AdminHeaderMenu';
import { SET_IS_LOADING } from '../../../constants/actionTypes';
import {getOrderListOfCustomerForAdmin} from '../../../serviceCalls/getOrderListOfCustomerForAdmin';


const AdminCustomersList = (props) => {

    const { applicationState, dispatch } = props;
    const {config: {authToken}} = applicationState;
    const history = useHistory();

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

    const onRowClicked = params => {
        dispatch({ type: SET_IS_LOADING, payload: true });
        getOrderListOfCustomerForAdmin({
            dispatch: dispatch,
            history: history,
            authToken: authToken,
            email: params.data.email
        })
        
    }

    const columnDefs = [
        { field: 'username', headerName: "Username" },
        { field: 'email', headerName: "Email" },
        { field: 'instaname', headerName: "Instagram Name" },
        { field: 'mobileno', headerName: "Mobile Number" },
        { field: 'tradeofbuisness', headerName: "User Type" },
        { field: 'postcode', headerName: "Postal Code" },
        //{ field: 'promoCode', headerName: "Promocode", cellRendererFramework: PromoCodeColumn }
    ];

    const rowData = () => {
        const customerlistArray = [];
        applicationState.customerList.map((rowdetail) => {
            // const customerListObject = Object.assign({});
            // customerListObject.username = rowdetail.username;
            // customerListObject.email = rowdetail.email;
            // customerListObject.instaname = rowdetail.instaname;
            // customerListObject.mobileno = rowdetail.mobileno;
            // customerListObject.tradeofbuisness = rowdetail.tradeofbuisness;
            // customerListObject.postcode = rowdetail.postcode;
            //customerListObject.promoCode = rowdetail.promoCode;
            //customerlistArray.push(customerListObject);

            customerlistArray.push({ ...rowdetail });
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

    const getRowStyle = (params) => {
        if (params.node.rowIndex % 2 === 0) {
            return { background: "#f7f7f7" };
        }
    };

    return (
        <div id="admincustlist" className="admin">
           <div>
                <AdminHeaderMenu />
            </div>

            <div className="container-fluid">
                <div className="card">
                    <input className="search-bottom-margin mt-4" type="text" id="filter-text-box" placeholder="Filter..." onChange={(event) => onFilterTextBoxChanged(event)} />
                    <div className="ag-theme-alpine" style={{ height: 'calc(100vh - 210px)', width: '100%' }}>
                        <AgGridReact
                            rowData={rowData()}
                            getRowStyle={getRowStyle}
                            columnDefs={columnDefs}
                            defaultColDef={defaultColDef}
                            onGridReady={onGridReady}
                            context={{
                                frameWorkComponentChange: frameWorkComponentChange,
                                showPromocodeModal: showPromocodeModal
                            }}
                            paginationAutoPageSize={true}
                            pagination={true}
                            onRowClicked={onRowClicked}
                        >
                        </AgGridReact>
                    </div>
                    {/* <PromoCodeModal title="Add Promocode" onClose={() => showPromocodeModal(false)} show={showModal}>
                        <p><strong>Please enter promotional code to be applied:</strong></p>
                        <input
                            type="text"
                            name="fname"
                            className=""
                            placeholder="Enter code"
                        />
                    </PromoCodeModal> */}

                </div>
            </div>
        </div>
    )
}

export default AdminCustomersList;
