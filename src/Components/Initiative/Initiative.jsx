import React from "react";

import "./Initiative.css";

import Navigation from  "../Navigation/Navigation";

import Footer from "../Footer/Footer";

function Initiative() {

  return (

    <>

    <Navigation/>
   
      <section className="covid_form_background">
          <div className="container covid_form_main">
            <div className="covid_form_container">
            <form className="covid_form">
              <label>
                <span>Full Name</span>
                <br />
                <input type="text" />
              </label>
              <br />
              <label>
                <span>Email</span>
                <br />
                <input type="text" />
              </label>
              <br />
              <label>
                <span>Phone No.(Optional)</span>
                <br />
                <input type="text" />
              </label>
              <br />
              <label>
                <span>State</span>
                <br />
                <select>
                  <option></option>
                  <option>Maharashtra</option>
                  <option>Delhi</option>
                  <option>MP</option>
                </select>
              </label>
              <br />
              <label>
                <span>District</span>
                <br />
                <select>
                  <option></option>
                  <option>Nagpur</option>
                  <option>Mumbai</option>
                  <option>Aurangabadh</option>
                </select>
              </label>
              <br />
              <label>
                <span>Language</span>
                <br />
                <select>
                  <option></option>
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Marathi</option>
                </select>
              </label>
              <br />

              <button>Submit</button>
            </form>
          </div>

          <div className="covid_form_container2">
            <h1>About the initiative</h1>

            <p>
              Dummy text: Its function as a filler or as a tool for comparing the
              visual impression of different typefaces Dummy text is text that is
              used in the publishing industry or by web designers to occupy the
              space which will later be filled with 'real' content. This is
              required when, for example, the final text is not yet available.
              Dummy text is also known as 'fill text'. It is said that song
              composers of the past used dummy texts as lyrics when writing
              melodies in order to have a 'ready-made' text to sing with the
              melody. Dummy texts have been in use by typesetters since the 16th
              century.
            </p>
          </div>
          </div>

      </section>

      <Footer/>
      
    </>
  );
}

export default Initiative;
