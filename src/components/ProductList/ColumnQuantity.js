import React from "react";

export const ColumnQuantity = (params) => {
  const { api, data, column, node, context } = params;
  let quantityValue = data.quantity ? Number(data.quantity) : 0;

  const onIncrement = () => {
    const incrementQuantity = Number(quantityValue) + 1;
    node.setDataValue(column.colId, incrementQuantity);
    context.frameWorkComponentChange({ api });
  };

  const onDecrement = () => {
    const decrementQuantity =
      Number(quantityValue) <= 0 ? 0 : Number(quantityValue) - 1;
    node.setDataValue(column.colId, decrementQuantity);
    context.frameWorkComponentChange({ api });
  };

  const onInputChange = (event) => {
    quantityValue = event.target.value;
  };
  const onInputBlur = () => {
    node.setDataValue(column.colId, Number(quantityValue));
    context.frameWorkComponentChange({ api });
  };

  return (
    <span className="my-renderer">
        <>
          <button
            className="btn-quantity"
            onClick={(event) => onIncrement(event)}
          >
            +
          </button>
          <input
            className="quantity-inputbtn"
            id="demoInput"
            type="number"
            value={quantityValue}
            onChange={(event) => onInputChange(event)}
            onBlur={() => onInputBlur()}
          />

          <button
            className="btn-quantity"
            onClick={(event) => onDecrement(event)}
          >
            -
          </button>
        </>
      
    </span>
  );
};
