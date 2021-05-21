import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Searchbar.css";

function Searchbar() {
    return (
        <div className="searchbar">
            <form>
                <input type="text" name="search" />
                <button type="submit">
                    <SearchIcon className="searchicon" />
                </button>
            </form>
        </div>
    );
}

export default Searchbar;
