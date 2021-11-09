import React from "react";
import ReactDOM from "react-dom";

import data from "./data.json";
import Board from "react-trello";
// import CustomCard from "./CustomCard.js";
import {Sidebar} from './Sidebar.js';

import PromoCodeModal from './PromoCodeModal';

const CRM = (props) => {

  const [showModal, setShowModal] = React.useState(false);

  const showPromocodeModal = (showModalValue) => {
    setShowModal(showModalValue);
}

  const onCardClick = (cardId, metadata, laneId) => {
    showPromocodeModal(true);
  }
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
              onCardClick={onCardClick} 
              >
              </Board>
              </div>
              <PromoCodeModal title="My Modal" onClose={() =>  showPromocodeModal(false)} show={showModal}>
        <p>This is modal body</p>
      </PromoCodeModal>
        </div>
      );
    
}


const rootElement = document.getElementById("root");
ReactDOM.render(<CRM />, rootElement);

export default CRM;