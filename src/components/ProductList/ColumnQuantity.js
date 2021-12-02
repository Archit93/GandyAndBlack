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
    if (event.target.value &&
      !isNaN(event.target.value) &&
      (Number(event.target.value) <= Number(data.numberofstock))
    ) {
      quantityValue = Number(event.target.value);

    } else if (event.target.value &&
      !isNaN(event.target.value) &&
      (Number(event.target.value) > Number(data.numberofstock))) {
      quantityValue = quantityValue;
    }
    else {
      quantityValue = 0;
    }
    document.getElementById(`quantity-input-${data.productid}`).innerHTML = quantityValue;
    node.setDataValue(column.colId, Number(quantityValue));
  };
  const onInputBlur = () => {
    context.frameWorkComponentChange({ api });
  };

  return (
    <span className="my-renderer">
      <>
        <button
          className="btn-quantity"
          onClick={(event) => onIncrement(event)}
          disabled={quantityValue === Number(data.numberofstock)}
        >
          +
          </button>
        <input
          id={`quantity-input-${data.productid}`}
          type="number"
          value={quantityValue}
          className="quantity-inputbtn"
          onChange={(event) => onInputChange(event)}
          onBlur={() => onInputBlur()}
          disabled={data.numberofstock === 0} 
        />

        <button
          className="btn-quantity"
          onClick={(event) => onDecrement(event)}
          disabled={quantityValue <= 0}
        >
          -
          </button>
      </>

    </span>
  );
};

// export const ColumnQuantity = React.forwardRef((props, ref) => {
//   const { api, node, column, context } = props;
//   const [value, setValue] = React.useState(parseInt(props.value));
//   const refInput = React.useRef(null);

//   React.useEffect(() => {
//     setTimeout(() => refInput.current.focus());
//   }, []);

//   React.useImperativeHandle(ref, () => {
//     return {
//       getValue() {
//         node.setDataValue(column.colId, Number(value));
//         context.frameWorkComponentChange({ api: api });
//         return Number(value);
//       },
//       isCancelBeforeStart() {
//         return false;
//       },
//       isCancelAfterEnd() {
//         return Number(value) > Number(props.data.numberofstock);
//       }
//     };
//   });

//   return (
// <>
//     <span className="my-renderer">
//         <button
//           className="btn-quantity"
//           onClick={() => setValue(value ? Number(value) + 1 : 1)}
//           disabled={value === Number(props.data.numberofstock)}
//         >+</button>
//         <input type="number"
//           className="quantity-inputbtn"
//           ref={refInput}
//           value={value}
//           onChange={event => setValue(event.target.value ? Number(event.target.value) : event.target.value)}
//         />

//         <button
//           className="btn-quantity"
//           onClick={() =>
//             setValue(value ? Number(value) - 1 : 0)
//           }
//           disabled={value <= 0}
//         >-</button>
//     </span>
//     </>
//   );
// });