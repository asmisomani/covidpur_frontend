import React from "react";
import { Link } from "react-router-dom";
import logo from "../Navigation/covidpur.png";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="container foot">
                <div className="row">
                    <div className="logopart col-md-4 col-lg-4">
                        <Link to="/" className="footer-logo">
                            <img className="footlogoimg" src={logo} alt="covidpur"/>
                        </Link>
                        <h2 style={{width: "15rem"}}>
                            We at ABHEDYA have come up with this platform to help
                            defeat the deadly Coronavirus.
                        </h2>
                    </div>
                    <div className="links col-sm-12 col-md-5 col-lg-5">
                        <div className="row">
                            <div className="link col-sm-6 col-md-6 col-lg-6">
                                <h2>Company</h2>
                                <a className="footer_links" href="#">About Us</a>
                                <br />
                                <a className="footer_links" href="#">Careers</a>
                                <br />
                                <a className="footer_links" href="#">Blogs</a>
                                <br />
                                <a className="footer_links" href="#">Privacy Policy</a>
                                <br />
                                <a className="footer_links" href="#">Terms and Conditions</a>
                                <br />
                            </div>
                            <div className="link col-sm-6 col-md-6 col-lg-6">
                                <h2> Quick Links </h2>
                                <a className="footer_links" href="/medicine">Medicine</a>
                                <br />
                                <a className="footer_links" href="/food">Food</a>
                                <br />
                                <a className="footer_links" href="/hospital">Hospital</a>
                                <br />
                                <a className="footer_links" href="/oxygen">Oxygen</a>
                                <br />
                                <a className="footer_links" href="#">Plasma</a>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="subscriptionbox col-md-3 col-lg-3">
                        <h2> Contact Us</h2>
                        <h3> abhedyasupport@gmail.com </h3>

                        <button href="#" className="register_to_help_btn"> Register to help </button>
                        <button href="#" className="get_vacinated_btn"> Get Vaccinated </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
