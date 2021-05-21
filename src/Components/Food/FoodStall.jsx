import {FoodData} from "./FoodData";

import "./FoodStall.css"

import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

function FoodStall (props) {
    
    return (
        FoodData.map((item)=>(


        <div className="container Bigcontentbox">
            <div className="contentboxs">
                <div className="icons">
                    <img src="./shop.svg" alt="shop" />
                </div>
                <div className="boxcontents">
                    <div className="content_one">
                        <h4>{item.shop_name} </h4>
                        <p>
                            <b>Contact no.</b> <span> {item.shop_contact} </span>
                        </p>
                        <p className="addresss">
                            <b>Address:</b> <span> {item.shop_address} </span>
                        </p>
                    </div>
                    <div className="content_two">
                    <h4> Food Available </h4>
                    <ul className="beds_grid">
                            <div>
                                <li className="boxpurple"> Bread <span style={{textAlign: "center",fontSize: "1.9rem",fontWeight: "bold"}}> {item.total_beds} </span>  </li>
                            </div>
                            <div>
                                <li className="boxred"> Rice <span style={{textAlign: "center",fontSize: "1.9rem",fontWeight: "bold"}}> {item.isolation_bed} </span> </li>
                            </div>
                            <div>
                                <li className="boxgreen"> Porotha <span style={{textAlign: "center",fontSize: "1.9rem",fontWeight: "bold"}}> {item.ventilator_bed} </span> </li>
                            </div>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    ))

    );
}

export default FoodStall;
