import React from "react";
import "./styles.css";

function Search() {
  return (
    <div className="searchContainer">
      <h1 className="mainheading">Find the best deals today in India</h1>
      <div className="searchItemsCont">
        <input
          className="input"
          placeholder="Search for coupons, deals, stores etc."
          type="text"
        />
        <button className="searchButton" type="button">Search</button>
      </div>
    </div>
  );
}

export default Search;
