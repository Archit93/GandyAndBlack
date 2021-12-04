import * as React from "react";
import Board from "react-trello";

import CRMModal from './CRMModal';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { createCRMData } from '../../../utils/createCRMData';
import CRMTabList from './CRMTabList'

import AdminHeaderMenu from '../../common/AdminHeaderMenu';

const CRM = (props) => {
  const { applicationState } = props;
  const [showModal, setShowModal] = React.useState(false);
  const [orderInfo, setOrderInfo] = React.useState('');
  const [stageId, setStageId] = React.useState('');

  const showPromocodeModal = (showModalValue) => {
    setShowModal(showModalValue);
  }

  const onCardClick = (cardId, metadata, laneId) => {
    const {crmDetails} = applicationState;
    
    setOrderInfo(crmDetails.find((crmElement) => crmElement.id === cardId));
    setStageId(laneId);

    showPromocodeModal(true);
  }
  
  return (
    <div className="crm" id="crm">
      <div>
        <AdminHeaderMenu />
      </div>

      <div className="col-lg-12 p-0">
        
        <div>

          {applicationState ?.crmDetails && <Board
            data={createCRMData(applicationState.crmDetails)}
            style={{ height: 'calc(100vh - 70px)' }}
            cardDraggable={false}
            hideCardDeleteIcon
            onCardClick={onCardClick}
          >
          </Board>}
        </div>
      </div>
      <CRMModal title={`Stage - ${stageId}`} onClose={() => showPromocodeModal(false)} show={showModal}>
        <CRMTabList orderInfo={orderInfo}/>
      </CRMModal>
    </div>
  );

}

export default CRM;