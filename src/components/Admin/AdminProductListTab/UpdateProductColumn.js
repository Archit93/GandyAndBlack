import React from 'react';

export const UpdateProductColumn = (params) => {
    const { api, data, column, node, context } = params;
    return (
        <div>
            <>
                <button
                    type="button"
                    className="btn btn-icon"
                    onClick={() => context.showUpdateProductModal(true)}>

                    <i className="fa fa-edit icon-blue"></i>

                </button>


            </>
        </div>

    );
}