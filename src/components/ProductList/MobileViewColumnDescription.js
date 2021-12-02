import React from 'react';

export const MobileViewColumnDescription = (params) => {
    const { api, data, column, node, context } = params;
    return (
        <div>
            <p>{data.productdesc}</p>
        </div>
    );
}