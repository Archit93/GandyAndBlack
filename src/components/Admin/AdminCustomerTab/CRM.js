import React from "react";
import ReactDOM from "react-dom";

import data from "./data.json";
import Board from "react-trello";
// import CustomCard from "./CustomCard.js";
import {Sidebar} from './Sidebar.js';

const CRM = (props) => {

    return (
        <div className="App">
          {/* <Sidebar /> */}
            <h1>Kanban</h1>
            <div class="col-sm p-3">
              <Board 
              data={data} 
              style={{ height: 'calc(100vh - 57px)'}}
              cardDraggable={false} 
              hideCardDeleteIcon 
              >
              </Board>
              </div>
        </div>
      );
    
}


const rootElement = document.getElementById("root");
ReactDOM.render(<CRM />, rootElement);

export default CRM;