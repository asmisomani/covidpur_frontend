import React from "react";
import "./ShopsContainer.css";
import SearchIcon from '@material-ui/icons/Search';
import Shop from "./Shop.jsx";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
const ShopsContainer = () => {

  return (

    <>

      <Navigation/>

        <section className="shop_container">
          <div className="shop_top">
            <h1>Shops</h1>
            <form>
            <input type="text" id="shop_search_input" name="search" />
            <button type="submit">
              <SearchIcon className="searchicon"/>
            </button>
            </form><br/>
          </div>

        <div style={{marginTop:"1rem"}}>
           <Shop/>
        </div>
        </section>

      <Footer/>

      </>
  );
};
export default ShopsContainer;