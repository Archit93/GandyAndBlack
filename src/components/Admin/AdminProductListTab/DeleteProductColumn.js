import React from 'react';

export const DeleteProductColumn = (params) => {
    const { api, data, column, node, context } = params;
    return (
        <div>
            <>
                <button
                    type="button"
                    className="btn btn-main"
                    onClick={() => context.showDeleteProductModal(true)}>
                    <i className="fa fa-delete"></i>
                </button>
            </>
        </div>

    );
}