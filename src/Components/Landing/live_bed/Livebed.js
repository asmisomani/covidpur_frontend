import React from "react";
import "./Livebed.css";

function Livebed() {
    return (
        <>
            <div className="livebed">
                <div className="container">
                    <div className="row">
                        <div className="up col-6 col-lg-3">
                            <img src="./hospital_bed.svg" alt=" hospital bed"/>
                            <div>
                                <h4>Total bed</h4>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className="up col-6 col-lg-3">
                        <img src="./hospital_bed.svg" alt=" hospital bed"/>
                            <div>
                                <h4>Ventilator bed</h4>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className="up col-6 col-lg-3">
                        <img src="./hospital_bed.svg" alt=" hospital bed"/>
                            <div>
                                <h4>Quarantine bed</h4>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className="up col-6 col-lg-3">
                        <img src="./hospital_bed.svg" alt=" hospital bed"/>
                            <div>
                                <h4>ICU bed</h4>
                                <p>1000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Livebed;
