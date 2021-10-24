import React from 'react';

export const ColumnQuantity = (params) => {
    const { api, data, column, node, context } = params;
    let quantityValue = Number(data.quantity);

    const onIncrement = () => {
        const incrementQuantity = Number(quantityValue) + 1;
        node.setDataValue(column.colId, incrementQuantity);
        context.frameWorkComponentChange({ api })
    }

    const onDecrement = () => {
        const decrementQuantity = Number(quantityValue) <= 0 ? 0 : Number(quantityValue) - 1;
        node.setDataValue(column.colId, decrementQuantity);
        context.frameWorkComponentChange({ api })
    }

    const onInputChange = (event) => {
        quantityValue = event.target.value;
        node.setDataValue(column.colId, quantityValue);
    }
    const onInputBlur = () => {
        node.setDataValue(column.colId, quantityValue);
        context.frameWorkComponentChange({ api })
    }
    
    return (
        <span className="my-renderer">
            {params.value != null &&
                <>
                    <button onClick={(event) => onIncrement(event)}>+</button>
                    <input id="demoInput" type="number" value={quantityValue} 
                        onChange={(event) =>  onInputChange(event)} 
                        onBlur ={() =>  onInputBlur()} />

                    <button onClick={(event) => onDecrement(event)}>-</button>

                </>
            }
        </span>
    );
}