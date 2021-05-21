import React from "react";

import "./OxygenDonateForm.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "../Navigation/Navigation";

import Footer from "../Footer/Footer";

import { useFormik } from "formik";

import { checkPhone } from "../PhoneValidation/PhoneValidation";

const initialValues = {

    oxygen_donator_name: "",

    oxygen_donator_addresss: "",

    oxygen_donator_contact: "",

    oxygen_donator_email: ""

}

const onSubmit =  values => {
    console.log ("from data", values)
}

const validate = values => {

    let errors  = {  }

    if (!values.oxygen_donator_name) {
        
        errors.oxygen_donator_name = " user must enter oxygen donator's name ";

    } 

    if (!values.oxygen_donator_addresss) {
        
        errors.oxygen_donator_addresss = " user must enter oxygen donator's address ";

    }


    if (!values.oxygen_donator_contact) {
        
        errors.oxygen_donator_contact = "user must enter any contact no";

    }

    else if (!checkPhone(values.oxygen_donator_contact)) {
        
        errors.oxygen_donator_contact = "mobile no is not valid ";

    }

    if (!values.oxygen_donator_email) {
        
        errors.oxygen_donator_email = "user must enter any email id";

    }

    else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.oxygen_donator_email)
      ) {
        errors.oxygen_donator_email = 'Invalid email address';
      }

    return errors

}

const DonatePlasmaForm = () => {

    const formik = useFormik ({

        initialValues , 

        onSubmit ,

        validate 

    })

    console.log("from values", formik.values)
    

    return (

        <>
            <Navigation />

            <section className="donate_container">
                <div className="container">
                    <div className="donate_top">
                        <h1>Donate Oxygen </h1>
                    </div>

                    <div className="donate_form">
                        <form onSubmit={formik.handleSubmit}>
                            <label htmlFor="oxygen_donator_name">
                                <span>Full Name</span>
                                <br />
                                <input id="oxygen_donator_name" name="oxygen_donator_name" type="text"
                                onChange={formik.handleChange} value={formik.values.oxygen_donator_name} />
                                {formik.touched.oxygen_donator_name && formik.errors.oxygen_donator_name ? <div className="error_msg"> {formik.errors.oxygen_donator_name} </div> : null}
                            </label>

                            <br />
                            <label htmlFor="oxygen_donator_addresss" className="location_container">
                                <span>Address</span>
                                <br />
                                <input id="oxygen_donator_addresss" name="oxygen_donator_addresss" type="text"
                                 onChange={formik.handleChange} value={formik.values.oxygen_donator_addresss} />
                                {formik.touched.oxygen_donator_addresss && formik.errors.oxygen_donator_addresss ? <div className="error_msg"> {formik.errors.oxygen_donator_addresss} </div> : null}
                                

                                <a href="#">
                                    <img
                                        className="location_img"
                                        src="./location_icon.svg"
                                        alt="address"
                                    />
                                </a>
                            </label>
                            <br />

                            <label htmlFor="oxygen_donator_contact">
                                <span>Mobile Number</span>
                                <br />
                                <input id="oxygen_donator_contact" name="oxygen_donator_contact" type="text" 
                                onChange={formik.handleChange} value={formik.values.oxygen_donator_contact} />
                                {formik.touched.oxygen_donator_contact && formik.errors.oxygen_donator_contact ? <div className="error_msg"> {formik.errors.oxygen_donator_contact} </div> : null}
                            </label>
                            <br />

                            <label htmlFor="plasma_donator_contact">
                                <span>E mail</span>
                                <br />
                                <input id="oxygen_donator_email" name="oxygen_donator_email" type="email" 
                                onChange={formik.handleChange} value={formik.values.oxygen_donator_email} />
                                {formik.touched.oxygen_donator_email && formik.errors.oxygen_donator_email ? <div className="error_msg"> {formik.errors.oxygen_donator_email} </div> : null}
                            </label>
                            <br />

                            <button type="submit">Donate</button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};
export default DonatePlasmaForm;
