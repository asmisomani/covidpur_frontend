import {ShopData} from "./ShopData";

import React from "react";

import shop_classes from  "./Shop.module.css";

import 'bootstrap/dist/css/bootstrap.min.css';

function Shop(props) {

    return (

        ShopData.map((item)=>(


        <div className={shop_classes.shop_container}>
            
            <div>
                <img src="./shop.svg" alt="shop" />
            </div>
            
            <div className={shop_classes.shop_grid}>
    
                <div>
                    <ul>
                        <li> {item.shop_name}  </li>
                        <li> <b>Contact no.</b> <span> {item.shop_contact} </span> </li>
                        <li> <b>Address:</b> <span> {item.shop_address} </span> </li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li> Timings: </li>
                        <li> {item.timing} </li>
                    </ul>
                </div>

            </div>
        
        </div>
    ))

    );
}

export default Shop;