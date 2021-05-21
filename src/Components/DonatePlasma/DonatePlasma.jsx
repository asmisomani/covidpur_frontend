import React from "react";
import "./DonatePlasma.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const DonatePlasma = () => {
    return (
        <>
            <Navigation />

            <section className="plasma_container">
                <div className="container">
                    <div className="plasma_top">
                        <h1 className="plasma_heading">Please Donate PLASMA</h1>
                        <Link to="donate">
                            <button className="plasma_donate_button">
                                Donate
                            </button>
                        </Link>
                    </div>
                
                    <div className="plasma_blood">
                        <h2>Blood groups</h2>
                        <br />
                        <div className="plasma_blood_group">
                            <button>AB+</button>
                            <button>A+</button>
                            <button>B+</button>
                            <button>O+</button>
                        </div>
                        <div className="plasma_blood_group">
                            <button>AB- </button>
                            <button>A-</button>
                            <button>B-</button>
                            <button>O-</button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};
export default DonatePlasma;
