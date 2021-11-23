import * as React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderDetailsTab from './OrderDetailsTab';
import CustomerDetailsTab from './CustomerDetailsTab';
import ProductDetailsTab from './ProductDetailsTab';

const CRMTabList = ({orderInfo}) => {
  console.log(orderInfo);
    return(
        <Tabs>
          <TabList>
            <Tab>Order Details</Tab>
            <Tab>Customer Details</Tab>
            <Tab>Products Ordered</Tab>
          </TabList>
          {/* Order Details */}
          <TabPanel>
            <OrderDetailsTab orderInfo={orderInfo}/>
          </TabPanel>
          {/* Customer Details */}
          <TabPanel>
            <CustomerDetailsTab orderInfo={orderInfo}/>
          </TabPanel>
          <TabPanel>
            <ProductDetailsTab orderInfo={orderInfo}/>
          </TabPanel>
        </Tabs>
    );
}
export default CRMTabList