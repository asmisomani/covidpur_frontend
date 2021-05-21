import React from "react";

import "./DonatePlasmaForm.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "../Navigation/Navigation";

import Footer from "../Footer/Footer";

import { useFormik } from "formik";

import { checkPhone } from "../PhoneValidation/PhoneValidation";

const initialValues = {

    plasma_donator_name: "",

    plasma_donator_addresss: "",

    plasma_donator_blood_group: "",

    plasma_donator_contact: "",

    plasma_donator_email: ""

}

const onSubmit =  values => {
    console.log ("from data", values)
}

const validate = values => {

    let errors  = {  }

    if (!values.plasma_donator_name) {
        
        errors.plasma_donator_name = " user must enter plasma donator's name ";

    } 

    if (!values.plasma_donator_addresss) {
        
        errors.plasma_donator_addresss = " user must enter plasma donator's address ";

    }

    if (!values.plasma_donator_blood_group) {
        
        errors.plasma_donator_blood_group = "user must enter plasma donator's blood group";

    }



    if (!values.plasma_donator_contact) {
        
        errors.plasma_donator_contact = "user must enter any contact no";

    }

    else if (!checkPhone(values.plasma_donator_contact)) {
        
        errors.plasma_donator_contact = "mobile no is not valid ";

    }

    if (!values.plasma_donator_email) {
        
        errors.plasma_donator_email = "user must enter any email id";

    }

    else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.plasma_donator_email)
      ) {
        errors.plasma_donator_email = 'Invalid email address';
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
                        <h1>Donate PLASMA</h1>
                    </div>

                    <div className="donate_form">
                        <form onSubmit={formik.handleSubmit}>
                            <label htmlFor="plasma_donator_name">
                                <span>Full Name</span>
                                <br />
                                <input id="plasma_donator_name" name="plasma_donator_name" type="text"
                                onChange={formik.handleChange} value={formik.values.plasma_donator_name} />
                                {formik.touched.plasma_donator_name && formik.errors.plasma_donator_name ? <div className="error_msg"> {formik.errors.plasma_donator_name} </div> : null}
                            </label>

                            <br />
                            <label htmlFor="plasma_donator_addresss" className="location_container">
                                <span>Address</span>
                                <br />
                                <input id="plasma_donator_addresss" name="plasma_donator_addresss" type="text"
                                 onChange={formik.handleChange} value={formik.values.plasma_donator_addresss} />
                                {formik.touched.plasma_donator_addresss && formik.errors.plasma_donator_addresss ? <div className="error_msg"> {formik.errors.plasma_donator_addresss} </div> : null}
                                

                                <a href="#">
                                    <img
                                        className="location_img"
                                        src="./location_icon.svg"
                                        alt="address"
                                    />
                                </a>
                            </label>
                            <br />
                            <label htmlFor="plasma_donator_blood_group">
                                <span>Blood group</span>
                                <br />
                                <select id="plasma_donator_blood_group" name="plasma_donator_blood_group"  
                                onChange={formik.handleChange} value={formik.values.plasma_donator_blood_group} >
                                    <option>A+</option>
                                    <option>B+</option>
                                    <option>AB+</option>
                                    <option>O+</option>
                                    <option>A-</option>
                                    <option>B-</option>
                                    <option>AB-</option>
                                    <option>O-</option>
                                </select>
                                {formik.touched.plasma_donator_blood_group && formik.errors.plasma_donator_blood_group ? <div className="error_msg"> {formik.errors.plasma_donator_blood_group} </div> : null}

                            </label>
                            <br />
                            <label htmlFor="plasma_donator_contact">
                                <span>Mobile Number</span>
                                <br />
                                <input id="plasma_donator_contact" name="plasma_donator_contact" type="text" 
                                onChange={formik.handleChange} value={formik.values.plasma_donator_contact} />
                                {formik.touched.plasma_donator_contact && formik.errors.plasma_donator_contact ? <div className="error_msg"> {formik.errors.plasma_donator_contact} </div> : null}
                            </label>

                            <label htmlFor="plasma_donator_contact">
                                <span>E mail</span>
                                <br />
                                <input id="plasma_donator_email" name="plasma_donator_email" type="email" 
                                onChange={formik.handleChange} value={formik.values.plasma_donator_email} />
                                {formik.touched.plasma_donator_email && formik.errors.plasma_donator_email ? <div className="error_msg"> {formik.errors.plasma_donator_email} </div> : null}
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
