import React from "react";
import "./Smallcontentbox.css";
import Shops from "../Assets/shop 1.svg";

function Smallcontentbox() {
    return (
        <div className="Smallcontentbox">
            <div className="contentbox">
                <div className="icon">
                    <img src={Shops} />
                </div>
                <div className="boxcontent">
                    <h4>Shop shops</h4>
                    <p>
                        <b>Contact no.</b> 24789496857
                    </p>
                    <p className="address">
                        <b>Address:</b> Mumbai local street
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Smallcontentbox;
