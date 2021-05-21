import React from "react";
import "./Bigcontentbox.css";

function Bigcontentbox(props) {
    return (
        <div className="Bigcontentbox">
            <div className="contentboxs">
                <div className="icons">
                    <img src="./shop.svg" alt="shop" />
                </div>
                <div className="boxcontents">
                    <div className="content_one">
                        <h4>Shop shops</h4>
                        <p>
                            <b>Contact no.</b> 24789496857
                        </p>
                        <p className="addresss">
                            <b>Address:</b> Mumbai local street
                        </p>
                    </div>
                    <div className="content_two">
                        <h4>Timings:</h4>
                        <p>08:00 AM to 09:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bigcontentbox;
