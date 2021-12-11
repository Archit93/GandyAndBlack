import React from 'react';

export const CustomerUserNameColumn = (params) => {
    const { api, data, column, node, context } = params;
    return (
        <div onClick={() => context.onUserNameClicked(data)}>
            <p>{data.username.trim() ? data.username : "Username is unavailable"}</p>
        </div>
    );
}