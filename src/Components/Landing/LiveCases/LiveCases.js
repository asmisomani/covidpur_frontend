import React from "react";
import livecases_clases from "./LiveCases.module.css";

function LiveCases() {
    return (
        <>
            <div className={livecases_clases.livebed}>
                <div className="container">
                    <div className="row">
                        <div className="up col-6 col-lg-3">
                            <img src="./hospital_bed.svg" alt=" hospital bed"/>
                            <div>
                                <h4>Total Cases </h4>
                                <p>2,5,57,976</p>
                            </div>
                        </div>
                        <div className="up col-6 col-lg-3">
                        <img src="./hospital_bed.svg" alt=" hospital bed"/>
                            <div>
                                <h4> Total Active Cases</h4>
                                <p>32,39,799</p>
                            </div>
                        </div>
                        <div className="up col-6 col-lg-3">
                        <img src="./hospital_bed.svg" alt=" hospital bed"/>
                            <div>
                                <h4>Total Recovered</h4>
                                <p>2,19,25,253</p>
                            </div>
                        </div>
                        <div className="up col-6 col-lg-3">
                        <img src="./hospital_bed.svg" alt=" hospital bed"/>
                            <div>
                                <h4>Total Cases of Death</h4>
                                <p>2,82,547</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LiveCases;
