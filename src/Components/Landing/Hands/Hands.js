import React from "react";
import "./Hands.css";
import first from "./pics/washing-1.png";
import second from "./pics/washing-2.png";
import third from "./pics/washing-3.png";
import fourth from "./pics/washing-4.png";
import fifth from "./pics/washing-5.png";
import sixth from "./pics/washing-6.png";

function Hands() {
    return (
        <div className="hands">
            <section className="washing_process_area pad_btm">
                <div className="container">
                    <div className="main_title text-center white">
                        <h5>Hand washing process</h5>
                        <h2>How to wash your Hands</h2>
                    </div>
                    <div className="washing_process_inner row">
                        <div
                            className="col-lg-2 col-sm-4 col-6 wow fadeIn"
                            data-wow-delay="400ms"
                            style={{
                                visibility: "visible",
                                animationDelay: "400ms",
                                animationName: "fadeIn",
                            }}
                        >
                            <div className="washing_item">
                                <div className="icon">
                                    <img className="imgg" src={first} alt="" />
                                    <div className="number">1</div>
                                </div>
                                <p>
                                    <span>Apply soap</span> and ruv your hands
                                    together
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-2 col-sm-4 col-6 wow fadeIn"
                            data-wow-delay="500ms"
                            style={{
                                visibility: "visible",
                                animationDelay: "900ms",
                                animationName: "fadeIn",
                            }}
                        >
                            <div className="washing_item">
                                <div className="icon">
                                    <img className="imgg" src={second} alt="" />
                                    <div className="number">2</div>
                                </div>
                                <p>
                                    <span>Use one hand</span> to rub the back of
                                    the other hand and vice versa
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-2 col-sm-4 col-6 wow fadeIn"
                            data-wow-delay="600ms"
                            style={{
                                visibility: "visible",
                                animationDelay: "900ms",
                                animationName: "fadeIn",
                            }}
                        >
                            <div className="washing_item">
                                <div className="icon">
                                    <img className="imgg" src={third} alt="" />
                                    <div className="number">3</div>
                                </div>
                                <p>
                                    <span>Rub your hands</span> together and
                                    clean between your fingers
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-2 col-sm-4 col-6 wow fadeIn"
                            data-wow-delay="700ms"
                            style={{
                                visibility: "visible",
                                animationDelay: "700ms",
                                animationName: "fadeIn",
                            }}
                        >
                            <div className="washing_item">
                                <div className="icon">
                                    <img className="imgg" src={fourth} alt="" />
                                    <div className="number">4</div>
                                </div>
                                <p>
                                    <span>Rub the back</span> of your fingers
                                    against your palms
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-2 col-sm-4 col-6 wow fadeIn"
                            data-wow-delay="800ms"
                            style={{
                                visibility: "visible",
                                animationDelay: "800ms",
                                animationName: "fadeIn",
                            }}
                        >
                            <div className="washing_item">
                                <div className="icon">
                                    <img className="imgg" src={fifth} alt="" />
                                    <div className="number">5</div>
                                </div>
                                <p>
                                    <span>Rub your thumb</span> using your other
                                    hand and vice versa
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-2 col-sm-4 col-6 wow fadeIn"
                            data-wow-delay="900ms"
                            style={{
                                visibility: "visible",
                                animationDelay: "900ms",
                                animationName: "fadeIn",
                            }}
                        >
                            <div className="washing_item">
                                <div className="icon">
                                    <img className="imgg" src={sixth} alt="" />
                                    <div className="number">6</div>
                                </div>
                                <p>
                                    <span>Rub your tips</span> of your fingers
                                    on the palm of your other hand and vice
                                    versa
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hands;
