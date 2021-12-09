import * as React from "react";
import { AgGridReact } from "ag-grid-react";
import { useHistory } from "react-router-dom";
import AdminHeaderMenu from "../../common/AdminHeaderMenu";
import AdminOrderDetailsModal from "./AdminOrderDetailsModal";
import CRMTabList from "../CRMTab/CRMTabList";

const AdminCustomerOrderList = (props) => {
    const history = useHistory();
    const { applicationState, dispatch } = props;
    const { getCustomerOrderList, crmDetails } = applicationState;


    const [gridApi, setGridApi] = React.useState(null);
    const [gridColumnApi, setGridColumnApi] = React.useState(null);

    const [showModal, setShowModal] = React.useState(false);
    const [orderInfo, setOrderInfo] = React.useState('');


    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
        params.api.sizeColumnsToFit();
    };

    const onRowClicked = params => {
        const xyz = crmDetails.find((crmElement) => {
            return crmElement.id === params.data.orderid
        });

        setOrderInfo(crmDetails[0]); // This is temporary as Paresh is fixing backend to map correct orderids
        // setOrderInfo(crmDetails.find((crmElement) => crmElement.id === params.data.orderid));
        setShowModal(true);
    }

    const frameWorkComponentChange = ({ api }) => {

    };

    const rowData = () =>
        getCustomerOrderList.customerorderlist ? getCustomerOrderList.customerorderlist : [];

    const columnDefs = () => [
        { field: "email", headerName: "Email" },
        { field: "orderid", headerName: "Order Id" },
        { field: "quantity", headerName: "Quantity" },
        { field: "orderDate", headerName: "Order placed on" },
        { field: "orderamount", headerName: "Total Amount" },
        { field: "orderamountpaid", headerName: "Amount Paid" },
        { field: "balance", headerName: "Balance" }
    ];

    const defaultColDef = React.useMemo(
        () => ({
            resizable: true,
            sortable: true,
        }),
        []
    );

    const getRowStyle = params => {
        if (params.node.rowIndex % 2 === 0) {
            return { background: '#e3adab' };
        }
    };

    const onFilterTextBoxChanged = (event) => {
        gridApi.setQuickFilter(event.target.value);
    }

    return (
        <div id="admincustorder">
            <div>
                <AdminHeaderMenu />
            </div>
            <div className="container-fluid" >
                <div className="image-overlap-container">
                    <div className="image-container"><img src="./world-map.png" /></div>
                    <div className="pd-20 bg-main rounded">
                        <div className="row form-card">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 px-0">
                                <label><strong>Number Of Orders Made : </strong> {getCustomerOrderList.numberoforders}</label>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 px-0">
                                <label><strong>Total Amount: </strong> £{getCustomerOrderList.totalamount}</label>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 px-0">
                                <label><strong>Total Amount Paid : </strong> £{getCustomerOrderList.totalamountpaid}</label>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 px-0">
                                <label><strong>Balance : </strong> £{(Number(getCustomerOrderList.totalamount) - Number(getCustomerOrderList.totalamountpaid)).toFixed(2)}</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <input className="search-bottom-margin mt-4" type="text" id="filter-text-box" placeholder="Filter..." onChange={(event) => onFilterTextBoxChanged(event)} />
                    <div
                        id="myGrid"
                        className="ag-theme-alpine"
                        style={{
                            height: "calc(100vh - 335px)",
                            width: '100%',
                        }}
                    >
                        <AgGridReact
                            getRowStyle={getRowStyle}
                            rowData={rowData()}
                            columnDefs={columnDefs()}
                            defaultColDef={defaultColDef}
                            onGridReady={onGridReady}
                            rowSelection={'multiple'}
                            paginationAutoPageSize={true}
                            pagination={true}
                            onRowClicked={onRowClicked}
                        ></AgGridReact>
                    </div>
                </div>
            </div>
            <AdminOrderDetailsModal title={`Order Id`} onClose={() => setShowModal(false)} show={showModal}>
                <CRMTabList orderInfo={orderInfo} />
            </AdminOrderDetailsModal>
        </div >
    );
};

export default AdminCustomerOrderList;
