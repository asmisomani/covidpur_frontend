import React from "react";
import "./Navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navigation() {
    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                variant="light"
                style={{ backgroundColor: "#fff" }}
                className="navigation_container"
            >
                <div className="container">
                    <Link to="/">
                        <Navbar.Brand>
                            <div className="nav_logo_container">
                                <div>
                                    <img
                                        src="./covidpur.svg"
                                        alt="covid helo logo"
                                    />
                                </div>
                            </div>
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto nav_links_container">
                            <Link className="nav_links" to="/medicine">
                                Medicine
                            </Link>
                            <Link className="nav_links" to="/food">
                                Food
                            </Link>
                            <Link className="nav_links" to="/hospital">
                                Hospital
                            </Link>
                            <Link className="nav_links" to="/oxygen">
                                Oxygen
                            </Link>
                            <Link className="nav_links" to="/donate_plasma">
                                Plasma
                            </Link>
                            <Link className="nav_links" to="/shops">
                                Shop
                            </Link>
                            <Link className="nav_links" to="/initiative">
                                Initiative
                            </Link>
                            <Link className="nav_links" to="/Guidlines">
                                Guidline
                            </Link>

                            {/* <Link className="nav_links" to="/admin">
                                Admin Panel
                            </Link> */}
                        </Nav>
                        <Nav>
                            <Link eventKey={2} to="/vaccinated">
                                <button className="get_vaccin_btn">
                                    Get Vaccinated
                                </button>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </>
    );
}

export default Navigation;
