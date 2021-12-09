import React from "react";
import HeaderMenu from "../common/HeaderMenu";
import { useHistory } from "react-router-dom";
import { SET_TILE_CLICKED } from "../../constants/actionTypes";

const ProductListTiles = (props) => {
    const { applicationState, dispatch } = props;
    const { cartDetails } = applicationState;
    const history = useHistory();
    const onTileClick = (tileClicked) => {
        dispatch({
            type: SET_TILE_CLICKED,
            payload: tileClicked
        })
        history.push("/productlist");
    }

    return (
        <div id="producttype">
            <div>
                <HeaderMenu dispatch={dispatch} cartCount={cartDetails ? cartDetails.length : 0} />
            </div>
            <div
                style={{ width: "100%", height: "100%" }}
            >
                <div className="row">
                    <button className="col-lg-4 col-md-4 col-sm-6 col-xs-12 tile-btn tile-one" onClick={() => onTileClick("Dermal Filler")}>
                        <div className="poppins-normal-white-24px">
                                SHOP DERMAL FILLERS
		                </div>
                    </button>
                    <button className="col-lg-4 col-md-4 col-sm-6 col-xs-12 tile-btn tile-two" onClick={() => onTileClick("Body Filler")}>
                        <div className="poppins-normal-white-24px">
                                SHOP BODY FILLERS
	          	        </div>
                    </button>
                    <button className="col-lg-4 col-md-4 col-sm-6 col-xs-12 tile-btn tile-three" onClick={() => onTileClick("Skin Booster")}>
                        <div className="about-gandy-black-uEBdwN poppins-normal-white-24px">
                                SHOP SKIN BOOSTERS
                        </div>
                    </button>
                    <button className="col-lg-4 col-md-4 col-sm-6 col-xs-12 tile-btn tile-four" onClick={() => onTileClick("Fat Dissolver")}>
                        <div className="poppins-normal-white-24px">
                                SHOP FAT DISSOLVERS
		                </div>
                    </button>
                    <button className="col-lg-4 col-md-4 col-sm-6 col-xs-12 tile-btn tile-five" onClick={() => onTileClick("Consumable")}>
                        <div className="poppins-normal-white-24px">
                                SHOP CONSUMABLES
	          	        </div>
                    </button>
                    <button className="col-lg-4 col-md-4 col-sm-6 col-xs-12 tile-btn tile-six" onClick={() => onTileClick("Extras")}>
                        <div className="about-gandy-black-uEBdwN poppins-normal-white-24px">
                                SHOP EXTRAS
	          	        </div>
                    </button>
                    <button className="col-lg-4 col-md-4 col-sm-6 col-xs-12 tile-btn display-none" onClick={() => onTileClick("Extras")}>
                        <div className="about-gandy-black-uEBdwN poppins-normal-white-24px">
                                
	          	        </div>
                    </button>
                    <button className="col-lg-4 col-md-4 col-sm-6 col-xs-12 tile-btn tile-two" onClick={() => onTileClick("Extras")}>
                        <div className="about-gandy-black-uEBdwN poppins-normal-white-24px">
                        SHOP TOXINS
	          	        </div>
                    </button>
                    <button className="col-lg-4 col-md-4 col-sm-6 col-xs-12 tile-btn display-none" onClick={() => onTileClick("Extras")}>
                        <div className="about-gandy-black-uEBdwN poppins-normal-white-24px">
                                
	          	        </div>
                    </button>
                </div>
            </div>
        </div>
    )
};
export default ProductListTiles;
