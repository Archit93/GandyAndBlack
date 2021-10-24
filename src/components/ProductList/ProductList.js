// import React, { Component } from "react";
// import { render } from "react-dom";
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-enterprise";
// import "ag-grid-community/dist/styles/ag-grid.css";
// import "ag-grid-community/dist/styles/ag-theme-alpine.css";

// const ProductList = (props) => {

//     const [gridApi , setGridApi] = React.useState(null);
//     const [gridColumnApi, setGridColumnApi] = React.useState(null);

//     const onGridReady = params => {
//         this.gridApi = params.api;
//         this.gridColumnApi = params.columnApi;

//         const httpRequest = new XMLHttpRequest();
//         const updateData = data => {
//           this.setState({ rowData: data });
//         };

//         httpRequest.open(
//           "GET",
//           "https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json"
//         );
//         httpRequest.send();
//         httpRequest.onreadystatechange = () => {
//           if (httpRequest.readyState === 4 && httpRequest.status === 200) {
//             updateData(JSON.parse(httpRequest.responseText));
//           }
//         };
//       };
//       return (
//         <div style={{ width: "100%", height: "100%" }}>
//           <div
//             id="myGrid"
//             style={{
//               height: "100vh",
//               width: "95vw"
//             }}
//             className="ag-theme-alpine"
//           >
//             <AgGridReact
//               columnDefs={this.state.columnDefs}
//               defaultColDef={this.state.defaultColDef}
//               frameworkComponents={this.state.frameworkComponents}
//               onGridReady={this.onGridReady}
//               rowData={this.state.rowData}
//             />
//           </div>
//         </div>
//       );
// }

// export default ProductList


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import IconButton from '@material-ui/core/IconButton';

// //Icons
// import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
// import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';

// /*------------------------- IMPORTS ---------------------------*/

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// const ProductList = (props) => {
//   const classes = useStyles();


//   const [calories, setCalories] = React.useState(rows);// set initial state is used only once

//   console.log(calories);


//   const onDecrement = key => () => {     
//         setCalories( calories.map( (item, index) => item.name === key ? 
//           {...item, calories: item.calories -1} : item));          
//   };

//   const onIncrement = key => () => {     
//         setCalories( calories.map( (item, index) => item.name === key ? 
//           {...item, calories: item.calories +1} : item));          
//   };


//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} size="small" aria-label="a dense table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {calories.map(row => (
//             <TableRow key={row.name}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>



//               <TableCell align="right">
//               <IconButton onClick={ onDecrement(row.name) }>
//               <RemoveCircleOutlineRoundedIcon />
//               </IconButton> 
//               {row.calories} 
//               <IconButton onClick={ onIncrement(row.name)  }>
//               <AddCircleOutlineRoundedIcon />
//               </IconButton>
//               </TableCell>



//               <TableCell align="right">{row.fat}</TableCell>

//               <TableCell align="right">{row.carbs}</TableCell>

//               <TableCell align="right">{row.protein}</TableCell>

//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
// export default ProductList;

import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


import {EDIT_PRODUCT_QUANTITY} from '../../constants/actionTypes';

import {MobileViewColumnProductType} from './MobileViewColumnProductType';
import {MobileViewColumnBrand} from './MobileViewColumnBrand';
import {ColumnQuantity} from './ColumnQuantity';

const ProductList = (props) => {
    
    const {applicationState, dispatch} = props;
    const [gridApi, setGridApi] = React.useState(null);
    const [gridColumnApi, setGridColumnApi] = React.useState(null);

    const onGridReady = params => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi)
    }

    const frameWorkComponentChange = ({ api, buttonName }) => {
        const productlistArray = [];
        api.forEachNode((node)=> {
            productlistArray.push(node.data);
        })
        dispatch({
            type: EDIT_PRODUCT_QUANTITY,
            payload: productlistArray
        })
    }
    const rowData = () => {
        const productlistArray = [];
        console.log(applicationState.productList);
        applicationState.productList.map((rowdetail)=>{
            const productListObject = Object.assign({});
            productListObject.brand = rowdetail.brand;
            productListObject.productType = rowdetail.productType;
            productListObject.description = rowdetail.description;
            productListObject.quantity = Number(rowdetail.quantity);
            productListObject.salesPerUnit = rowdetail.salesPerUnit;
            productlistArray.push(productListObject);
        });
        return productlistArray
    };

    

    const columnDefs = ({ frameWorkComponentChange }) => applicationState.mobileView ? [
        { field: 'brand', headerName: "Brand", cellRendererFramework: MobileViewColumnBrand },
        { field: 'productType', headerName: "Product Type", cellRendererFramework: MobileViewColumnProductType },
        { field: 'description', headerName: "Description" },
        
    ] : [
        { field: 'brand', headerName: "Brand" },
        { field: 'productType', headerName: "Product Type" },
        { field: 'description', headerName: "Description" },
        { field: 'quantity', headerName: "Quantity", 
        editable: true,
        cellRendererFramework: ColumnQuantity, 
        onCellValueChanged: ({ api }) => frameWorkComponentChange({ api, buttonName: null }) },
        { field: 'salesPerUnit', headerName: "Sales Per Unit" }
    ];

    const defaultColDef = React.useMemo(() => ({
        resizable: true,
        sortable: true
    }), []);

    const onFilterTextBoxChanged = (event) => {
        gridApi.setQuickFilter(event.target.value);
    }

    const getRowHeight = () => applicationState.mobileView ? '50px' : '25px';

    return (<div>
        <input type="text" id="filter-text-box" placeholder="Filter..." onChange={(event)=> onFilterTextBoxChanged(event)}/>
        <div className="ag-theme-alpine" style={{ height: 400, width: 1000, textAlign:"center" }}>
            <AgGridReact
                getRowHeight={getRowHeight()}
                rowData={rowData()}
                columnDefs={columnDefs({frameWorkComponentChange: frameWorkComponentChange})}
                defaultColDef={defaultColDef}
                onGridReady={onGridReady}
                context={{ frameWorkComponentChange: frameWorkComponentChange }}
            >
            </AgGridReact>
        </div>
        </div>
    );
};
export default ProductList;