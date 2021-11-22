import * as React from "react";
import ReactDOM from "react-dom";

import data from "./data.json";
import Board from "react-trello";

import PromoCodeModal from './PromoCodeModal';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {createCRMData} from '../../../utils/createCRMData';


const CRM = (props) => {
  const { applicationState } = props;
  // const { crmDetails } = applicationState;
  // if(applicationState?.crmDetails) {
  //   createCRMData(applicationState.crmDetails);
  // }
  const [showModal, setShowModal] = React.useState(false);

  const showPromocodeModal = (showModalValue) => {
    setShowModal(showModalValue);
  }

  const onCardClick = (cardId, metadata, laneId) => {
    showPromocodeModal(true);
  }

  return (
    <div className="row crm" style={{ height: '100vh' }}>
      {/* <div className="col-lg-1 p-0">
                <Header />
            </div> */}

      <div className="col-lg-12 p-0" style={{ width: '100%', height: '100%' }}>
        <h1>Kanban</h1>
        <div>
          {applicationState?.crmDetails && <Board
            //data={createCRMData(applicationState.crmDetails)}
            data={data}
            style={{ height: 'calc(100vh - 57px)' }}
            cardDraggable={false}
            hideCardDeleteIcon
            onCardClick={onCardClick}
          >
          </Board>}
        </div>
      </div>
      <PromoCodeModal title="Stage - Order Placed" onClose={() => showPromocodeModal(false)} show={showModal}>
        <Tabs>
          <TabList>
            <Tab>Order Details</Tab>
            <Tab>Customer Details</Tab>
            <Tab>Products Ordered</Tab>
          </TabList>
          {/* Order Details */}
          <TabPanel>
            <div className="row form-card mt-5">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <label><strong>Order Id -</strong></label> SDE4242
                      </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <label><strong>Order Date -</strong></label> Thu Nov 11 11:34:42 GMT 2021
                      </div>
            </div>
            <div className="row form-card mt-3">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <label><strong>Order No -</strong></label> 4242
                      </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <label><strong>Order Amount -</strong></label> 284.95
                      </div>
            </div>
            <div className="row form-card mt-3">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <label><strong>Order Payment Method -</strong></label> POD
                      </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <label><strong>Order Shipping cost  -</strong></label> Next day delivery 9.95 GBP(Pound Sterling)
                      </div>
            </div>
            <div className="row form-card mt-3">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <label><strong>Products Warehouse -</strong></label> Liverpool
                      </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <label><strong>Promocode Discount -</strong></label> false
                      </div>
            </div>
          </TabPanel>
          {/* Customer Details */}
          <TabPanel>
            <div className="row form-card mt-5">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <label><strong>Customer Name -</strong></label> Daisy-May Jones
                      </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <label><strong>Customer Mobile -</strong></label> 07534445525
                      </div>
            </div>
            <div className="row form-card mt-3">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <label><strong>Customer Email -</strong></label> daisy-mayjones@hotmail.co.uk
                      </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <label><strong>Delivery Address -</strong></label> 4 Bridgeways, Conduit lane east, Hoddesdon, Hertfordshire, EN11 8DZ, Postal Code - EN118DZ
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
            <div className="text-align-center mrt-20">
              <button className="btn btn-primary">Save</button>
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