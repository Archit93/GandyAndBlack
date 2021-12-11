import React from 'react';

export const CustomerEmailColumn = (params) => {
    const { api, data, column, node, context } = params;
    return (
        <div onClick={() => context.onEmailClicked(params)}>
            <p>{data.email}</p>
        </div>
    );
}