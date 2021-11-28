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
                    <button className="col-lg-4 tile-btn" onClick={() => onTileClick("Dermal Filler")}>
                        <div className="rectangle-202-uEBdwN">
                            <div className="poppins-normal-white-24px">
                                SHOP DERMAL FILLERS
		        </div>
                        </div>
                    </button>
                    <button className="col-lg-4 tile-btn" onClick={() => onTileClick("Body Filler")}>
                        <div className="rectangle-203-uEBdwN">
                            <div className="poppins-normal-white-24px">
                                SHOP BODY FILLERS
	          	</div>
                        </div>
                    </button>
                    <button className="col-lg-4 tile-btn" onClick={() => onTileClick("Skin Booster")}>
                        <div className="rectangle-204-uEBdwN">
                            <div className="about-gandy-black-uEBdwN poppins-normal-white-24px">
                                SHOP SKIN BOOSTERS
	          	</div>
                        </div>
                    </button>
                </div>
                <div className="row">
                    <button className="col-lg-4 tile-btn" onClick={() => onTileClick("Fat Dissolver")}>
                        <div className="rectangle-205-uEBdwN">
                            <div className="poppins-normal-white-24px">
                                SHOP FAT DISSOLVERS
		        </div>
                        </div>
                    </button>
                    <button className="col-lg-4 tile-btn" onClick={() => onTileClick("Body Filler")}>
                        <div className="rectangle-201-uEBdwN">
                            <div className="poppins-normal-white-24px">
                                SHOP CONSUMABLES
	          	</div>
                        </div>
                    </button>
                    <button className="col-lg-4 tile-btn" onClick={() => onTileClick("Body Filler")}>
                        <div className="rectangle-206-uEBdwN">
                            <div className="about-gandy-black-uEBdwN poppins-normal-white-24px">
                                SHOP EXTRAS
	          	</div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
};
export default ProductListTiles;
