import React from 'react';

export const SalesPricePerUnitEditor = React.forwardRef((props, ref) => {
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
                return value;
            },

            // Gets called once before editing starts, to give editor a chance to
            // cancel the editing before it even starts.
            isCancelBeforeStart() {
                return false;
            },

            // Gets called once when editing is finished (eg if Enter is pressed).
            // If you return true, then the result of the edit will be ignored.
            isCancelAfterEnd() {
                console.log(value);
                // our editor will reject any value greater than 1000
                return value > 1000;
            }
        };
    });

    return (
        <input type="number"
               ref={refInput}
               value={value}
               onChange={event => setValue(event.target.value)}
               style={{width: "100%"}}
        />
    );
});