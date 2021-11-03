import React from "react";
import ReactDOM from "react-dom";

import data from "./data.json";
import Board from "react-trello";


const CRM = (props) => {

    return (
        <div className="App">
            <h1>Kanban</h1>
          <Board data={data} style={{ height: 'calc(100vh - 57px)'}} cardDraggable={false} hideCardDeleteIcon/>
        </div>
      );
    
}
const rootElement = document.getElementById("root");
ReactDOM.render(<CRM />, rootElement);

export default CRM;