import React from 'react';

export const StockFlagColumn = (params) => {
    const { data } = params;
    const { numberofstock, threshold, breakpoint } = data;
    const flagColor = Number(numberofstock) > Number(threshold) ? '#00ff00' : Number(numberofstock) > Number(breakpoint) ? '#FFBF00' : '#FF0000';
    return (
        <div>
            <>
                <i className="fa fa-flag fa-2x" style={{ color: flagColor }}></i>

            </>
        </div>

    );
}