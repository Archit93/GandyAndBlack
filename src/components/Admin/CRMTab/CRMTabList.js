import * as React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderDetailsTab from './OrderDetailsTab';
import CustomerDetailsTab from './CustomerDetailsTab';
import ProductDetailsTab from './ProductDetailsTab';

const CRMTabList = ({ orderInfo, showEmailPopUp, dispatch, history, config, onClose }) => {
  return (
    <>
      <Tabs style={{ padding: "20px" }}>
        <TabList>
          <Tab>Order Details</Tab>
          <Tab>Customer Details</Tab>
          <Tab>Products Ordered</Tab>
        </TabList>
        {/* Order Details */}
        <TabPanel className="tab-content">
          <OrderDetailsTab orderInfo={orderInfo} showEmailPopUp={showEmailPopUp} />
        </TabPanel>
        {/* Customer Details */}
        <TabPanel className="tab-content">
          <CustomerDetailsTab orderInfo={orderInfo} showEmailPopUp={showEmailPopUp} />
        </TabPanel>
        <TabPanel className="tab-content">
          <ProductDetailsTab
            orderInfo={orderInfo}
            showEmailPopUp={showEmailPopUp}
            dispatch={dispatch}
            history={history}
            config={config}
            onClose={onClose} />
        </TabPanel>
      </Tabs>
    </>
  );
}
export default CRMTabList