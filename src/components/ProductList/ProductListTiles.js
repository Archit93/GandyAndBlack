import React from "react";
import HeaderMenu from "../common/HeaderMenu";

const ProductListTiles = (props) => {
    return (
        <div id="producttype">
            <div>
                <HeaderMenu />
            </div>
            <div
                
                style={{ width: "100%", height: "100%" }}
            >
                <div className="row fill-height-or-more">
                    <button className="col-lg-4 tile-btn">
                        <div className="rectangle-202-uEBdwN">
                            <div className="poppins-normal-white-24px">
                                SHOP DERMAL FILLERS
		        </div>
                        </div>
                    </button>
                    <button className="col-lg-4 tile-btn">
                        <div className="rectangle-203-uEBdwN">
                            <div className="poppins-normal-white-24px">
                                SHOP BODY FILLERS
	          	</div>
                        </div>
                    </button>
                    <button className="col-lg-4 tile-btn">
                        <div className="rectangle-204-uEBdwN">
                            <div className="about-gandy-black-uEBdwN poppins-normal-white-24px">
                                SHOP SKIN BOOSTERS
	          	</div>
                        </div>
                    </button>
                </div>
                <div className="row fill-height-or-more">
                    <button className="col-lg-4 tile-btn">
                        <div className="rectangle-205-uEBdwN">
                            <div className="poppins-normal-white-24px">
                                SHOP FAT DISSOLVERS
		        </div>
                        </div>
                    </button>
                    <button className="col-lg-4 tile-btn">
                        <div className="rectangle-201-uEBdwN">
                            <div className="poppins-normal-white-24px">
                                SHOP CONSUMABLES
	          	</div>
                        </div>
                    </button>
                    <button className="col-lg-4 tile-btn">
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
