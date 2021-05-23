import React from "react";

import { connect } from "react-redux";

import dist_search_classes from "./DistrictSearch.module.css";
 

function InputMirror(props) {

    return (

        <>

            <section>

                <div className={dist_search_classes.dist_search_container}>
                    <div className="container">
                        <label htmlFor="search_dist"> Enter your district to get customized search result </label>
                        <input value={props.inputValue} onChange={props.inputChange} id="search_dist" name="search_dist" placeholder="enter your district here"/>
                    </div>
                </div>

              <div className={dist_search_classes.marquee_container}>
                <div className="container">
                    <marquee behavior="" direction=""> <h1> Customized Search Result for Dist : {props.inputValue} </h1>  </marquee>
                </div>
              </div>

            </section>
            
        </>

    )

}

const mapStateProps = (state)=>{
    return {
        inputValue: state.inputValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputChange: (evt) =>{
            console.log("change", evt.target.value);
            const action = {type: "input_change", text: evt.target.value };
            dispatch (action);
        }
    }
}

export default connect(mapStateProps, mapDispatchToProps)(InputMirror);


