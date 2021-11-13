import React from 'react';
import PromoCodeModal from './PromoCodeModal';

export const PromoCodeColumn = (params) => {
    const { api, data, column, node, context } = params;
    const [show, setShow] = React.useState(false);
    return (
        <div>
            <>
                {/* <!-- Button trigger modal --> */}
                {/* <button 
                    type="button" 
                    className="btn btn-main" 
                    data-bs-toggle="modal" 
                    data-bs-target="#exampleModal">
                    Add Promocode
                </button> */}
                <button 
                    type="button" 
                    className="btn btn-main" 
                    onClick = {() => context.showPromocodeModal(true)}>
                    Add Promocode
                </button>
                

            </>
        </div>

    );
}
