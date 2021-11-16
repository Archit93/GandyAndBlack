import React from 'react';

export const MobileViewColumnBrand = (params) => {
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
        <div>
            <p> Brand : {data.brand}</p>
            <p> Product Type : {data.producttype}</p>
            <p> Product Description : {data.productdesc} </p>
            <p> Sales Per Unit : {data.salepriceperunit} </p>
            <div>
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
            

            </div>
        </div>
    );
}