import React from 'react';

export const MobileViewColumnBrand = (params) => {
    const { api, data, column, node, context } = params;
    const onIncrement = (event) => {
        
        node.setDataValue(column.colId, event.target.value);
        context.frameWorkComponentChange({ api, buttonName: "INCREMENT" })
    }
    return (
        <div>
            <p>{data.brand}</p>
            <div>
            <span className="my-renderer">
            {params.value != null &&
                <>
                    <button onClick={(event) => onIncrement(event)}>+</button>
                    <input id="demoInput" type="number" onChange={(event) =>  onIncrement(event)} />

                    <button >-</button>

                </>
            }
        </span>
            </div>
        </div>
    );
}