import React from 'react';

export const ProductsPurchasedColumnForMyOrders = (params) => {
    const { api, data, column, node, context } = params;
    const myOrdersInformation  = Object.entries(node.data.productspurchased);
    
    return (
        <div>
            
        {
            myOrdersInformation.map(order => {
                return <><span>{`${order[0]} X ${order[1]}` }</span><br/></>
            })
        }
        </div>
    );
}



