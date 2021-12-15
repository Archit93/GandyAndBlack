import * as React from "react";
import Board from "react-trello";

import "react-tabs/style/react-tabs.css";
import { Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { createCRMShopifyData } from "../../../utils/createCRMShopifyData";

import CRMTabList from "./CRMTabList";
import CRMModal from "./CRMModal";
import Status1Modal from "../NextStatusModal/Status1Modal";
import Status2Modal from "../NextStatusModal/Status2Modal";
import Status3Modal from "../NextStatusModal/Status3Modal";

import AdminHeaderMenu from "../../common/AdminHeaderMenu";

import { SET_IS_LOADING } from "../../../constants/actionTypes";
import { moveToNextStatusApiCall } from "../../../serviceCalls/moveToNextStatusApiCall";

const CRMShopify = (props) => {
  const { applicationState, dispatch } = props;
  const { isLoading, config, shopifycrm } = applicationState;
  const [showModal, setShowModal] = React.useState(false);
  const [orderInfo, setOrderInfo] = React.useState("");
  const [stageId, setStageId] = React.useState("");
  const [stageModal, setStageModal] = React.useState(false);
  const [currentStage, setCurrentStage] = React.useState("");
  const history = useHistory();
  React.useEffect(() => {
    if (currentStage) {
      showStageModal(true);
    }
  }, [currentStage, shopifycrm]);

  const showPromocodeModal = (showModalValue) => {
    setShowModal(showModalValue);
  };

  const showStageModal = (showStageModalValue) => {
    setStageModal(showStageModalValue);
  };

  const onCardClick = (cardId, metadata, laneId) => {
    setOrderInfo(shopifycrm.find((crmElement) => crmElement.id === cardId));
    setStageId(laneId);
    showPromocodeModal(true);
  };

  const onMoveToNextStage = (data) => {
    setCurrentStage(data.currentstage);
    showPromocodeModal(false);
  };

  const nextStageApiCall = ({ orderid, warehouse = null, email = null }) => {
    const statuses = {
      "status-1": "statustwo",
      "status-2": "statusthree",
      "status-3": "statusfour",
      "status-4": "statusfive",
      "status-5": "statussix"
    };
    const moveToStatus = statuses[currentStage];
    setOrderInfo("");
    setCurrentStage("");
    showStageModal(false);
    const requestBody = {
      orderid: orderid,
      orderstagewarehouse: warehouse,
      stagecompletedby: email
    };
    if (!requestBody.orderstagewarehouse) {
      delete requestBody.orderstagewarehouse;
    }
    if(!requestBody.stagecompletedby) {
      delete requestBody.stagecompletedby;
    }
    dispatch({ type: SET_IS_LOADING, payload: true });
    moveToNextStatusApiCall({
      dispatch: dispatch,
      history: history,
      requestBody: requestBody,
      authToken: config.authToken,
      moveToStatus: moveToStatus,
      signInResponse: config,
      email: null,
      moveToNextPage: false,
    });
  };

  const statusModalToDisplay = () => {
    switch (currentStage) {
      case "status-1":
        return (
          <Status1Modal
            title="Move to Status 2"
            show={stageModal}
            onClose={() => {
              setCurrentStage("");
              showStageModal(false);
            }}
            nextStageApiCall={nextStageApiCall}
            orderid={orderInfo.id}
          />
        );
      case "status-2":
        return (
          <Status2Modal
            title="Move to Status 3"
            show={stageModal}
            onClose={() => {
              setCurrentStage("");
              showStageModal(false);
            }}
            nextStageApiCall={nextStageApiCall}
            orderid={orderInfo.id}
          />
        );
      case "status-3":
        return (
          <Status2Modal
            title="Move to Status 4"
            show={stageModal}
            onClose={() => {
              setCurrentStage("");
              showStageModal(false);
            }}
            nextStageApiCall={nextStageApiCall}
            orderid={orderInfo.id}
          />
        );
        case "status-4":
        return (
          <Status2Modal
            title="Move to Status 5"
            show={stageModal}
            onClose={() => {
              setCurrentStage("");
              showStageModal(false);
            }}
            nextStageApiCall={nextStageApiCall}
            orderid={orderInfo.id}
          />
        );
        case "status-5":
        return (
          <Status3Modal
            title="Move to Status 6"
            show={stageModal}
            onClose={() => {
              setCurrentStage("");
              showStageModal(false);
            }}
            nextStageApiCall={nextStageApiCall}
            orderid={orderInfo.id}
            config={config}
          />
        );
      default:
        return <div></div>;
    }
  };

  return (
    <>
      {isLoading && (
        <div className="d-flex justify-content-center loader">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      <div className="admin crm" id="crm">
        <div>
          <AdminHeaderMenu dispatch={dispatch} />
        </div>
        <div className="col-lg-12 p-0">
          <div>
            {applicationState?.shopifycrm && (
              <Board
                data={createCRMShopifyData(applicationState.shopifycrm)}
                style={{ height: "calc(100vh - 70px)" }}
                cardDraggable={false}
                hideCardDeleteIcon
                onCardClick={onCardClick}
              ></Board>
            )}
          </div>
        </div>
        <CRMModal
          title={`Stage - ${stageId}`}
          onClose={() => showPromocodeModal(false)}
          show={showModal}
          onMoveToNextStage={onMoveToNextStage}
          orderInfo={orderInfo}
        >
          <CRMTabList orderInfo={orderInfo} />
        </CRMModal>
        {statusModalToDisplay()}
      </div>
    </>
  );
};

export default CRMShopify;
