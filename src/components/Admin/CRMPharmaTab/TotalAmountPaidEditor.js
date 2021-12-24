import React from "react";

export const TotalAmountPaidEditor = (params) => {
  const { api, data, column, node, context } = params;
  let amountPaidValue = data.amountpaid ? Number(data.amountpaid) : 0;

  const onInputChange = (event) => {
    if (event.target.value &&
      !isNaN(event.target.value)
    ) {
      amountPaidValue = Number(event.target.value);
    } else if (event.target.value &&
      isNaN(event.target.value)) {
      amountPaidValue = amountPaidValue;
    }
    else {
      amountPaidValue = 0;
    }
    document.getElementById(`amountPaid-input-${data.id}`).innerHTML = amountPaidValue;
    node.setDataValue(column.colId, Number(amountPaidValue));
  };
  const onInputBlur = () => {
    context.frameWorkComponentChange({ api });
  };

  const componentToDisplay = () => {
    return (
      <>
        <input
          id={`amountPaid-input-${data.id}`}
          type="number"
          value={amountPaidValue}
          className="amountPaid-inputbtn"
          onChange={(event) => onInputChange(event)}
          onBlur={() => onInputBlur()}
          style={{width: "100%"}}
        />
      </>
    )
  }

  return (
    <>{componentToDisplay()}</>
  );
};

// import React from 'react';

// export const TotalAmountPaidEditor = React.forwardRef((props, ref) => {
//     const [value, setValue] = React.useState(parseInt(props.value));
//     const refInput = React.useRef(null);

//     React.useEffect(() => {
//         // focus on the input
//         setTimeout(() => refInput.current.focus());
//     }, []);

//     /* Component Editor Lifecycle methods */
//     React.useImperativeHandle(ref, () => {
//         return {
//             // the final value to send to the grid, on completion of editing
//             getValue() {
//                 // this simple editor doubles any value entered into the input
//                 return value;
//             },

//             // Gets called once before editing starts, to give editor a chance to
//             // cancel the editing before it even starts.
//             isCancelBeforeStart() {
//                 return false;
//             },

//             // Gets called once when editing is finished (eg if Enter is pressed).
//             // If you return true, then the result of the edit will be ignored.
//             isCancelAfterEnd() {
//                 // our editor will reject any value greater than 1000
//                 return value > 1000;
//             }
//         };
//     });

//     return (
//         <input type="number"
//                ref={refInput}
//                value={value}
//                onChange={event => setValue(event.target.value)}
//                style={{width: "100%"}}
//         />
//     );
// });