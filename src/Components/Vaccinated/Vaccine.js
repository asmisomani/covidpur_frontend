import React, { useState } from "react";

import "./Vaccine.css";

import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";

import Navigation from "../Navigation/Navigation";

import Footer from "../Footer/Footer";

export default function Vaccine() {
  const [activeone, setactiveone] = useState("#01cfbc");
  const [activetwo, setactivetwo] = useState("#fff");
  const [getshow, setshow] = useState(true);
  const [getfontcolor, setfontcolor] = useState("#fff");
  const [getfontcolortwo, setfontcolortwo] = useState("black");

  const HandleChange = () => {
    setactiveone("#01cfbc");
    setactivetwo("#fff");
    setfontcolor("#fff");
    setfontcolortwo("black");
    setshow(true);
  };
  const HandleChangetwo = () => {
    setactiveone("#fff");
    setfontcolor("black");

    setactivetwo("#58547E");
    setfontcolortwo("#fff");
    setshow(false);
  };
  return (

    <>

    <Navigation/>

      <div className="get_vaccin_container">
        <Container>
          <Row>
            <Col>
              <div
                style={{
                  color: "#58547E",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 30,
                }}
              >
                Check your nearest Vaccination center and slots availablility
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <div
                style={{
                  justifyContent: "center",
                  justifyItems: "center",
                  textAlign: "center",
                  display: "flex",
                  margin: "2rem",
                }}
              >
                <button
                  className="vacc_toggle_btn"
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
                  className="vacc_toggle_btn"
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
            </Col>
          </Row>
        </Container>
        {getshow ? (
          <Container>
            <Row>
              <Col
                style={{
                  justifyContent: "center",
                  justifyItems: "center",
                  textAlign: "center",
                  display: "flex",
                  margin: "1rem",
                }}
              >
                <Form.Group as={Row}>
                  <Col sm="8">
                    <Form.Control type="text" placeholder="Enter Pin code" />
                  </Col>
                  <Col sm="4">
                    <Button variant="info">Search</Button>
                  </Col>
                </Form.Group>
              </Col>
            </Row>
          </Container>
        ) : (
          <Container>
            <Row
              style={{
                justifyContent: "center",
                justifyItems: "center",
                textAlign: "center",
                display: "flex",
                margin: "1rem",
                marginBottom: "2rem",
              }}
            >
              <Col sm="4">
                <Form.Control as="select">
                  <option>Select State</option>
                </Form.Control>
              </Col>
              <Col sm="4">
                <Form.Control as="select">
                  <option> Select District</option>
                </Form.Control>
              </Col>
              <Col sm="2">
                <Button variant="info">Search</Button>
              </Col>
            </Row>
          </Container>
        )}
        <Container>
          <Row>
            <Col>
              <Table striped bordered hover responsive>
                <thead style={{ backgroundColor: "black", color: "white" }}>
                  <tr>
                    <th>#</th>
                    <th colSpan="2">Hospital Name</th>
                    <th>May 2021</th>
                    <th> June 2021</th>
                    <th> July 2021</th>
                    <th> August 2021</th>
                    <th> September 2021</th>
                  </tr>
                </thead>
                <tbody
                  style={{
                    justifyContent: "center",
                    textAlign: "center",
                    color: "#58547E",
                    fontWeight: "bold",
                  }}
                >
                  <tr>
                    <td>1</td>
                    <td colSpan="2">
                      Aggarwal Charitable Hospital, Shakti Nagar Central Delhi{" "}
                      <br />
                      pin 110005
                    </td>
                    <td>100</td>
                    <td>200</td>
                    <td>250</td>
                    <td>400</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td colSpan="2">
                      Indraprastha Apollo Hospitals South East Delhi <br /> pin
                      110019
                    </td>
                    <td>100</td>
                    <td>700</td>
                    <td>150</td>
                    <td>400</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan="2">
                      Rajiv Gandhi Cancer Hospital, Gautam Nagar South Delhi{" "}
                      <br /> pin 110019
                    </td>
                    <td>200</td>
                    <td>200</td>
                    <td>150</td>
                    <td>400</td>
                    <td>200</td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td colSpan="2">
                      Ram Lal Kundan Lal Hospital, Pandav Nagar ,East Delhi <br />{" "}
                      pin 110092
                    </td>
                    <td>150</td>
                    <td>150</td>
                    <td>150</td>
                    <td>350</td>
                    <td>400</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td colSpan="2">
                      Flt. Lt. Rajan Dhall Hospital FORTIS ,New Delhi <br /> pin
                      110001
                    </td>
                    <td>150</td>
                    <td>750</td>
                    <td>550</td>
                    <td>350</td>
                    <td>600</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td colSpan="2">
                      Max Sepe Speciality Hospital Shalimar Bagh , New Delhi{" "}
                      <br /> pin 110001
                    </td>
                    <td>150</td>
                    <td>250</td>
                    <td>350</td>
                    <td>250</td>
                    <td>100</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer/>

  </>

  );
}
