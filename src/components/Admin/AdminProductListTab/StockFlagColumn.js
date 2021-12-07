import React from 'react';

export const StockFlagColumn = (params) => {
    const { data } = params;
    const { numberofstock, threshold, breakpoint } = data;
    const flagColor = Number(numberofstock) > Number(threshold) ? '#3fdf2c' : Number(numberofstock) > Number(breakpoint) ? '#FFBF00' : '#d91c1c';
    return (
        <div>
            <>
                <i className="fa fa-flag fa-2x" style={{ color: flagColor }}></i>

            </>
        </div>

    );
}