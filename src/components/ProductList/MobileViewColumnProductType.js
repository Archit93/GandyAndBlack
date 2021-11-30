import React from 'react';

export const MobileViewColumnProductType = (params) => {
    const { api, data, column, node, context } = params;
    return (
        <div>
            <p>{data.producttype}</p>
            <p>{data.salepriceperunit}</p>
        </div>
    );
}