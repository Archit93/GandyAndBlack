import * as React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderDetailsTab from './OrderDetailsTab';
import CustomerDetailsTab from './CustomerDetailsTab';
import ProductDetailsTab from './ProductDetailsTab';

const CRMTabList = ({ orderInfo }) => {
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
          <OrderDetailsTab orderInfo={orderInfo} />
        </TabPanel>
        {/* Customer Details */}
        <TabPanel className="tab-content">
          <CustomerDetailsTab orderInfo={orderInfo} />
        </TabPanel>
        <TabPanel className="tab-content">
          <ProductDetailsTab orderInfo={orderInfo} />
        </TabPanel>
      </Tabs>
      <div className="text-center mt-3">
        <button className="btn btn-main">
          Save
      </button>
        <button className="btn btn-secondary">
          Close
      </button>
      </div>
    </>
  );
}
export default CRMTabList