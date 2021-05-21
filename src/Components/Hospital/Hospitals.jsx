import {HospitalData} from "./HospitalData";

import React from "react";

import hospital_classes from "./Hospitals.module.css";

import 'bootstrap/dist/css/bootstrap.min.css';

function Hospitals (props) {
    
    return (

        HospitalData.map((item)=>(


        <section className="container">

            <div className={hospital_classes.hospital_container}>

                <div>
                    <img id="icon_show_hide" src="./shop.svg" alt="shop" />
                </div>

                <div className={hospital_classes.hospital_beds_grid}>

                    <div>
                        <h4>{item.hospital_name} </h4>
                        <p>
                            <b>Contact no.</b> <span> {item.hospital_contact} </span>
                        </p>
                        <p>
                            <b>Address:</b> <span> {item.hospital_address} </span>
                        </p>
                    </div>

                    <div className={hospital_classes.content_two}>
                        <h4>Beds </h4>
                        <ul className={hospital_classes.beds_grid}>
                            <div>
                                <li className={hospital_classes.boxpurple}> Total beds: <span style={{textAlign: "center",fontSize: "1.9rem",fontWeight: "bold"}}> {item.total_beds} </span>  </li>
                            </div>
                            <div>
                                <li className={hospital_classes.boxred}> Isolation beds:  <span style={{textAlign: "center",fontSize: "1.9rem",fontWeight: "bold"}}> {item.isolation_bed} </span> </li>
                            </div>
                            <div>
                                <li className={hospital_classes.boxgreen}> Ventolator beds: <span style={{textAlign: "center",fontSize: "1.9rem",fontWeight: "bold"}}> {item.ventilator_bed} </span> </li>
                            </div>
                            <div>
                                <li className={hospital_classes.boxyellow}> Oxygen bed: <span style={{textAlign: "center",fontSize: "1.9rem",fontWeight: "bold"}}> {item.oxygen_ben} </span> </li>
                            </div>
                        </ul>
                    </div>
                
                </div>

            </div>

            <br/>

        </section>
    ))

    );
}

export default Hospitals;
