import React from "react";

// export const ColumnQuantity = (params) => {
//   const { api, data, column, node, context } = params;
//   let quantityValue = data.quantity ? Number(data.quantity) : 0;

//   const onIncrement = () => {
//     const incrementQuantity = Number(quantityValue) + 1;
//     node.setDataValue(column.colId, incrementQuantity);
//     context.frameWorkComponentChange({ api });
//   };

//   const onDecrement = () => {
//     const decrementQuantity =
//       Number(quantityValue) <= 0 ? 0 : Number(quantityValue) - 1;
//     node.setDataValue(column.colId, decrementQuantity);
//     context.frameWorkComponentChange({ api });
//   };

//   const onInputChange = (event) => {
//     quantityValue = event.target.value;
//   };
//   const onInputBlur = () => {
//     node.setDataValue(column.colId, Number(quantityValue));
//     context.frameWorkComponentChange({ api });
//   };

//   return (
//     <span className="my-renderer">
//         <>
//           <button
//             className="btn-quantity"
//             onClick={(event) => onIncrement(event)}
//           >
//             +
//           </button>
//           <input
//             className="quantity-inputbtn"
//             id="demoInput"
//             type="number"
//             value={quantityValue}
//             onChange={(event) => onInputChange(event)}
//             onBlur={() => onInputBlur()}
//           />

//           <button
//             className="btn-quantity"
//             onClick={(event) => onDecrement(event)}
//           >
//             -
//           </button>
//         </>

//     </span>
//   );
// };
export const ColumnQuantity = React.forwardRef((props, ref) => {
  const [value, setValue] = React.useState(parseInt(props.value));
  const refInput = React.useRef(null);

  React.useEffect(() => {
    // focus on the input
    setTimeout(() => refInput.current.focus());
  }, []);

  /* Component Editor Lifecycle methods */
  React.useImperativeHandle(ref, () => {
    return {
      // the final value to send to the grid, on completion of editing
      getValue() {
        // this simple editor doubles any value entered into the input
        return Number(value);
      },

      // Gets called once before editing starts, to give editor a chance to
      // cancel the editing before it even starts.
      isCancelBeforeStart() {
        return false;
      },

      // Gets called once when editing is finished (eg if Enter is pressed).
      // If you return true, then the result of the edit will be ignored.
      isCancelAfterEnd() {
        // our editor will reject any value greater than 1000
        return Number(value) > Number(props.data.numberofstock);
      }
    };
  });

  return (
<>
    <span className="my-renderer">
        <button
          className="btn-quantity"
          onClick={() => setValue(value ? Number(value) + 1 : 1)}
          disabled={value === Number(props.data.numberofstock)}
        >+</button>
        <input type="number"
          className="quantity-inputbtn"
          ref={refInput}
          value={value}
          onChange={event => setValue(event.target.value ? Number(event.target.value) : event.target.value)}
        />

        <button
          className="btn-quantity"
          onClick={() =>
            setValue(value ? Number(value) - 1 : 0)
          }
          disabled={value <= 0}
        >-</button>
    </span>
    </>
  );
});