import React from "react";
import "./index.css";
import FilterBox from "../../components/FilterBox";
import Products from "../../components/Products";

function Index({ setIsHomePage }) {
  setIsHomePage(false);

  return (
    <div className="searchpage">
      <div className="searchpage-heading">Search Results</div>
      <div className="searchpage-body">
        <FilterBox />
        <Products />
      </div>
    </div>
  );
}

export default Index;
