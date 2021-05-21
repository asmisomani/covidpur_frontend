import React from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Hands from "./Hands/Hands";
import HeroSection from "./hero_section/HeroSection";
import landing_classes from "./Landing.module.css";
import Livebed from "./live_bed/Livebed";
import Service from "./Services/Service";
import LiveCases from "./LiveCases/LiveCases";
import CustomizeSearch from "./CusmotizeSearch/CustomizeSearch";
import Login from "../Login/Login";

function Landing() {
    return (
        <div className={landing_classes.landin}>
            <Navigation />
            <HeroSection />
            <Login/>
            <CustomizeSearch/>
            <Livebed />
            <LiveCases />
            <Service />
            <Hands />
            <div className={landing_classes.landingimg}>
                <img src="./banner.jpg" alt="covid_banner" />
            </div>
            <Footer />
        </div>
    );
}

export default Landing;
