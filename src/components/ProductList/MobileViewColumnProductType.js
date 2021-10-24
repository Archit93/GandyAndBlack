import React from 'react';

export const MobileViewColumnProductType = (params) => {
    const { api, data, column, node, context } = params;
    return (
        <div>
            <p>{data.productType} {data.salesPerUnit}</p>
        </div>
    );
}