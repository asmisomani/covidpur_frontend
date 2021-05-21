import React, { useState } from "react";

import "./Medicine.css";

import MedicineShop from "./MedicineShop";

import SearchIcon from '@material-ui/icons/Search';

import { Container, Row, Col } from "react-bootstrap";

import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

export default function Medicine() {
  const [activeone, setactiveone] = useState("#01cfbc");
  const [activetwo, setactivetwo] = useState("#f6f5fa");
  const [getshow, setshow] = useState(true);
  const [getfontcolor, setfontcolor] = useState("#fff");
  const [getfontcolortwo, setfontcolortwo] = useState("black");

  const HandleChange = () => {
    setactiveone("#01cfbc");
    setactivetwo("#f6f5fa");
    setfontcolor("#f6f5fa");
    setfontcolortwo("black");
    setshow(true);
  };
  const HandleChangetwo = () => {
    setactiveone("#f6f5fa");
    setfontcolor("black");

    setactivetwo("#58547E");
    setfontcolortwo("#fff");
    setshow(false);
  };
  return (
    <>

    <Navigation/>

    <div className="medicine_container">
      <Container>
        <Row>
          <Col>
            <div
              style={{

                marginTop:"1rem",
                
                color: "#58547E",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 30,
              }}
            >
              Medicine
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <div className="button_center">
             <div className="button_container">
             <button class="toggle_btn"
                style={{
                  background: activeone,
                  color: getfontcolor,
                }}
                // variant={activeone}
                onClick={HandleChange}
              >
                {" "}
                Search By Pin
              </button>{" "}
              <button
              class="toggle_btn"
                style={{
                  background: activetwo,
                  color: getfontcolortwo,
                }}
                variant={activetwo}
                onClick={HandleChangetwo}
              >
                Search By District
              </button>
             </div>
            </div>
          </Col>
        </Row>
      </Container>

        <form className="medicine_form">
            <input type="text" name="search" />
            <button type="submit">
              <SearchIcon className="searchicon"/>
            </button>
        </form>

      <section className="shop_container">
        <MedicineShop/>
      </section>
    
    </div>

    <Footer/>

    </>
  );
}
