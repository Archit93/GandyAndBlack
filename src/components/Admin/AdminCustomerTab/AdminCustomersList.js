import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const AdminCustomersList = (props) => { 

    const {applicationState, dispatch} = props;
    const [gridApi, setGridApi] = React.useState(null);
    const [gridColumnApi, setGridColumnApi] = React.useState(null);

    const onGridReady = params => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi)
    }

    const columnDefs  = [
        { field: 'username', headerName: "Username" },
        { field: 'email', headerName: "Email" },
        { field: 'instagramId', headerName: "Instagram Name" },
        { field: 'mobileNumber', headerName: "Mobile Number"},
        { field: 'userType', headerName: "User Type" },
        { field: 'postCode', headerName: "Postal Code"},
        { field: 'promoCode', headerName: "Promocode"}
    ];

    const rowData = () => {
        const customerlistArray = [];
        applicationState.customerList.map((rowdetail)=>{
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

    return(<>
    <input type="text" id="filter-text-box" placeholder="Filter..." onChange={(event)=> onFilterTextBoxChanged(event)}/>
        <div className="ag-theme-alpine" style={{ height: 400, width: 1000, textAlign:"center" }}>
            <AgGridReact
                rowData={rowData()}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                onGridReady={onGridReady}
            >
            </AgGridReact>
        </div>
    </>)
}

export default AdminCustomersList;
