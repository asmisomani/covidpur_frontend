import React from "react";

import "./HeroSection.css";

import 'bootstrap/dist/css/bootstrap.min.css';

function HeroSection () {

    return (

        <>

            <section className="home_herosection_container">

                <div className="container">

                    <div className="herosection_grid">

                        <div className="covid_help_container">
                            <h1> Covidpur </h1>
                            <p> The coronavirus (Covid-19) situation is dire, but the ability to make light of awful situations is an historic  marker of Indian coping mechanisms. </p>
                            <h2> We at ABHEDYA have come up with this platform to help defeat the deadly Coronavirus. </h2>
                        </div>

                        <div>
                            <img src="./covidpur.svg" alt="covid help herosection"/>
                        </div>

                    </div>

                </div>

            </section>

        </>

    )

}

export default HeroSection;