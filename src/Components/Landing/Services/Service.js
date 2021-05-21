import React from "react";

import "./Service.css";

import { Link } from "react-router-dom"


function Service() {

    return (

        <div className="service">
           
            <div className="head">
                <h2>Our Services</h2>
            </div>
            <div className="container">
                <div className="service_card_contianer">
                    
                    <Link to="/medicine">
                    <div className="service_card">
                        <div className="card_image">
                            <img src="https://cdn.dribbble.com/users/20079/screenshots/4333912/brick_pills_dribbble.gif" alt="medicine"/>
                        </div>
                        <p>Medicine</p>                       
                    </div>
                    </Link>

                    <Link to="/oxygen">
                    <div className="service_card">
                        <div className="card_image">
                            <img src="https://cdn.dribbble.com/users/1030395/screenshots/3846817/oxygen.jpg?compress=1&resize=400x300" alt="oxygen"/>
                            <p>oxygen</p>
                        </div>  
                    </div>
                    </Link>

                    <Link to="/hospital">
                    <div className="service_card">
                            <div className="card_image">
                                <img src="https://www.pngitem.com/pimgs/m/125-1258983_computer-in-hospital-png-hospital-clipart-transparent-png.png" alt="hospital"/>
                            </div>
                            <p>Hospital</p> 
                        </div>
                    </Link>
                    
                    <Link to="/shops">
                    <div className="service_card">
                            <div className="card_image">
                                <img src="https://cdn.dribbble.com/users/97870/screenshots/1425320/store.gif" alt="shop"/>
                            </div>
                            <p>Shop</p>                       
                        </div>
                    </Link>

                    <Link to="/food">
                        <div className="service_card">
                            <div className="card_image">
                                <img src="https://i.pinimg.com/originals/ae/fd/92/aefd923a3ffae7b66feefff0a38de6b1.gif" alt="food for free"/>
                            </div>
                            <p>Food for free</p>
                        </div>
                    </Link>

                    <Link to="/">
                        <div div className="service_card">
                            <div className="card_image">
                                <img src="https://i.pinimg.com/originals/9d/0b/de/9d0bdec34936a8d1f6af537cd7a4b7e9.gif" alt=" safe root "/>
                            </div>
                            <p>Safe Route</p>
                        </div>
                    </Link>
                    
                </div>
            </div>
           
        </div>
        
    );
}

export default Service;
