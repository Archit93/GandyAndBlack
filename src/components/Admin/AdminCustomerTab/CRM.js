import React from "react";
import ReactDOM from "react-dom";

import data from "./data.json";
import Board from "react-trello";
import Sidebar from './Sidebar.js';

import PromoCodeModal from './PromoCodeModal';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CRM = (props) => {

  const [showModal, setShowModal] = React.useState(false);

  const showPromocodeModal = (showModalValue) => {
    setShowModal(showModalValue);
}

  const onCardClick = (cardId, metadata, laneId) => {
    showPromocodeModal(true);
  }

    return (
      <div className="row crm">
          {/* <div className="col-lg-1 col-md-1 col-sm-1 col-xs-2 p-0">
            <Sidebar />
          </div> */}
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0">
            <h1>Kanban</h1>
            <div class="">
              <Board 
              data={data} 
              style={{ height: 'calc(100vh - 57px)'}}
              cardDraggable={false} 
              hideCardDeleteIcon
              onCardClick={onCardClick} 
              >
              </Board>
              </div>
            </div>
              <PromoCodeModal title="Stage - Order Placed" onClose={() =>  showPromocodeModal(false)} show={showModal}>
                <Tabs>
                  <TabList>
                    <Tab>Order Details</Tab>
                    <Tab>Customer Details</Tab>
                    <Tab>Products Ordered</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="row form-card mt-5">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                    </div>
                    <div className="row form-card mt-3">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                    </div>
                    <div className="row form-card mt-3">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                    </div>
                    <div className="row form-card mt-3">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                    </div>
                    <div className="row form-card mt-3">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                  <div className="row form-card mt-5">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                    </div>
                    <div className="row form-card mt-3">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                    </div>
                    <div className="row form-card mt-3">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                    </div>
                    <div className="row form-card mt-3">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                    </div>
                    <div className="row form-card mt-3">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                  <div className="row form-card mt-5">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                    </div>
                    <div className="row form-card mt-3">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                    </div>
                    <div className="row form-card mt-3">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                    </div>
                    <div className="row form-card mt-3">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                    </div>
                    <div className="row form-card mt-3">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <label><strong>Order Id -</strong></label> SDE4242
                      </div>
                    </div>
                  </TabPanel>
                </Tabs>
              </PromoCodeModal>
        </div>
      );
    
}


const rootElement = document.getElementById("root");
ReactDOM.render(<CRM />, rootElement);

export default CRM;