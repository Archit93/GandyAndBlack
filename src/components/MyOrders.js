import * as React from 'react';
import Header from './common/Header.js';
import Table from 'react-bootstrap/Table'

const MyOrders = (props) => {
    return(
        <div id="myorders">
			<div>
				<Header />
			</div>
			<div className="container-fluid">
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Paid with</th>
                            <th>Order placed on</th>
                            <th>Products purchased</th>
                            <th>Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0579a08d4110</td>
                            <td>POD</td>
                            <td>Wed Nov 03 17:14:50 GMT 2021</td>
                            <td>Lidocaine 20ml - 1pc X 1</td>
                            <td>23.95</td>
                        </tr>
                        <tr>
                            <td>0579a08d4110</td>
                            <td>POD</td>
                            <td>Wed Nov 03 17:14:50 GMT 2021</td>
                            <td>Lidocaine 20ml - 1pc X 1</td>
                            <td>23.95</td>
                        </tr>
                        <tr>
                            <td>0579a08d4110</td>
                            <td>POD</td>
                            <td>Wed Nov 03 17:14:50 GMT 2021</td>
                            <td>Lidocaine 20ml - 1pc X 1</td>
                            <td>23.95</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default MyOrders;