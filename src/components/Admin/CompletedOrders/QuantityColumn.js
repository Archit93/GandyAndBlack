import React from 'react';

export const QuantityColumn = (params) => {
    const { api, data, column, node, context } = params;
    return (
        <div>
            <p>{data.orderdetailList.length}</p>
        </div>
    );
}