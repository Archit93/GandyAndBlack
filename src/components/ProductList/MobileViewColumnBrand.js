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
    }
    const onInputBlur = () => {
        context.frameWorkComponentChange({ api })
    }

    return (
        <div>
            <p> {data.brand}</p>
            {/* <p> Product Type : {data.producttype}</p>
            <p> Product Description : {data.productdesc} </p>
            <p> Sales Per Unit : {data.salepriceperunit} </p> */}
            <div>
                {/*  style={{width: "calc(100vw - 185px)"}} */}
                <span className="my-renderer">
                    {params.value != null &&
                        <>
                            <button className="btn btn-quantity"
                                onClick={(event) => onIncrement(event)}
                                disabled={quantityValue === Number(data.numberofstock)}>
                                +
                            </button>
                            <input
                                id={`quantity-input-${data.productid}`}
                                type="number"
                                value={quantityValue}
                                className="quantity-inputbtn"
                                onChange={(event) => onInputChange(event)}
                                onBlur={() => onInputBlur()}
                                disabled={data.numberofstock === 0} />

                            <button className="btn btn-quantity"
                                onClick={(event) => onDecrement(event)}
                                disabled={quantityValue <= 0}>-</button>

                        </>
                    }
                </span>
            </div>
        </div>
    );
}

// export const MobileViewColumnBrand = React.forwardRef((props, ref) => {
//     const { api, node, column, context } = props;
//     const [value, setValue] = React.useState(parseInt(props.value));
//     const refInput = React.useRef(null);

//     React.useImperativeHandle(ref, () => {
//         return {
//             getValue() {

//                 return Number(value);
//             },
//             isCancelBeforeStart() {
//                 return false;
//             },
//             isCancelAfterEnd() {
//                 return Number(value) > Number(props.data.numberofstock);
//             }
//         };
//     });

//     // const onInputBlur = () => {
//     //     if (value && Number(value) <= Number(props.data.numberofstock)) {
//     //         node.setDataValue(column.colId, Number(value));
//     //     }
//     //     else {
//     //         setValue(0);
//     //         node.setDataValue(column.colId, 0);
//     //     }
//     //     context.frameWorkComponentChange({ api: api });
//     // }

//     return (
//         <>
//             <p>{props.data.brand}</p>
//             <span className="my-renderer">
//                 <button
//                     className="btn btn-quantity"
//                     onClick={() => setValue(value ? Number(value) + 1 : 1)}
//                     disabled={value === Number(props.data.numberofstock)}
//                 >+</button>
//                 <input type="number"
//                     className="quantity-inputbtn"
//                     ref={refInput}
//                     value={value}
//                     min="0"
//                     max={props.data.numberofstock}
//                     onChange={event => setValue(event.target.value ? Number(event.target.value) : event.target.value)}
//                 />

//                 <button
//                     className="btn btn-quantity"
//                     onClick={() =>
//                         setValue(value ? Number(value) - 1 : 0)
//                     }
//                     disabled={value <= 0}
//                 >-</button>
//             </span>
//         </>
//     );
// });
