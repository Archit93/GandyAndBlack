import React from 'react';

export const RemoveItemColumn = (params) => {
    const { api, data, column, node, context } = params;
    return (
        <div>
            <>
                <button
                    type="button"
                    className="btn btn-icon"
                    onClick={() => context.showRemoveItemModal(true)}>
                    <i className="fa fa-trash icon-red"></i>
                </button>
            </>
        </div>

    );
}