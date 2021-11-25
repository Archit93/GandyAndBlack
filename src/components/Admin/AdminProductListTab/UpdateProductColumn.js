import React from 'react';

export const UpdateProductColumn = (params) => {
    const { api, data, column, node, context } = params;
    return (
        <div>
            <>
                <button
                    type="button"
                    className="btn btn-main"
                    onClick={() => context.showUpdateProductModal(true)}>

                    <i className="fa fa-edit"></i>

                </button>


            </>
        </div>

    );
}