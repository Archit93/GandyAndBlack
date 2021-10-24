import React from 'react';

export const ColumnQuantity = (params) => {
    const { api, data, column, node, context } = params;
    // let quantityVlaue = 
    const onIncrement = () => {
        const incrementQuantity = Number(data.quantity) + 1;
        node.setDataValue(column.colId, incrementQuantity);
        context.frameWorkComponentChange({ api, buttonName: "INCREMENT" })
    }

    const onInputChange = (event) => {
        node.setDataValue(column.colId, event.target.value);
        context.frameWorkComponentChange({ api, buttonName: "INCREMENT" })
    }
    
    return (
        <span className="my-renderer">
            {params.value != null &&
                <>
                    <button onClick={(event) => onIncrement(event)}>+</button>
                    <input id="demoInput" type="number" value={data.quantity} 
                        onChange={(event) =>  onInputChange(event)} 
                        onBlur ={() =>  onInputChange(event)} />

                    <button >-</button>

                </>
            }
        </span>
    );
}