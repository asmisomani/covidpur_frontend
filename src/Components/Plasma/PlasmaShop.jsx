import { PlasmaData } from "./PlasmaData";

import React from "react";

import "./PlasmaShop.css";

import "bootstrap/dist/css/bootstrap.min.css";

function PlasmaShop(props) {
  return PlasmaData.map((item) => (
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
            <h4>Timings:</h4>
            <p>{item.timing}</p>
          </div>
        </div>
      </div>
    </div>
  ));
}

export default PlasmaShop;
