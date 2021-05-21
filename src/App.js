import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Plasma from "./Components/Plasma/Plasma.jsx";
import Food from "./Components/Food/FoodForFreeContainer";
import Guidlines from "./Components/Guidelines/Guidlines";
import HospitalContainer from "./Components/Hospital/HospitalContainer";
import Medicine from "./Components/Medicine/Medicine";
import ShopsContainer from "./Components/Shop/ShopsContainer";
import Vaccine from "./Components/Vaccinated/Vaccine";
import DonatePlasma from "./Components/DonatePlasma/DonatePlasma";
import Initiative from "./Components/Initiative/Initiative";
import DonatePlasmaForm from "./Components/DonatePlasma/DonatePlasmaForm";
import OxygenContainer from "./Components/Oxygen/OxygenContainer";
import DonateOxygenForm from "./Components/Oxygen/OxygenDonateForm";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/plasma" component={Plasma} />

                    <Route exact path="/food" component={Food} />
                    <Route exact path="/Guidlines" component={Guidlines} />
                    <Route
                        exact
                        path="/hospital"
                        component={HospitalContainer}
                    />
                    <Route exact path="/medicine" component={Medicine} />
                    <Route exact path="/oxygen" component={OxygenContainer} />
                    <Route exact path="/shops" component={ShopsContainer} />
                    <Route exact path="/vaccinated" component={Vaccine} />
                    <Route
                        exact
                        path="/donate_plasma"
                        component={DonatePlasma}
                    />
                    <Route
                        exact
                        path="/donateOxygen"
                        component={DonateOxygenForm}
                    />
                    <Route exact path="/donate" component={DonatePlasmaForm} />
                    <Route exact path="/initiative" component={Initiative} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
