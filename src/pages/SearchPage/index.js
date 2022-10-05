import React, { useState } from "react";
import "./index.css";
import FilterBox from "../../components/FilterBox";
import Products from "../../components/Products";

function Index({ setIsHomePage }) {
  const [MensClothing, setMensClothing] = useState(false);
  const [Jewelery, setJewelery] = useState(false);
  const [Electronics, setElectronics] = useState(false);
  const [WomenClothing, setWomenClothing] = useState(false);
  const [PriceRange, setPriceRange] = useState(1000);
  
  setIsHomePage(false);
  return (
    <div className="searchpage">
      <div className="searchpage-heading">Search Results</div>
      <div className="searchpage-body">
        <FilterBox MensClothing={MensClothing} setMensClothing={setMensClothing} Jewelery={Jewelery} setJewelery={setJewelery} Electronics={Electronics} setElectronics={setElectronics} WomenClothing={WomenClothing} setWomenClothing={setWomenClothing} PriceRange={PriceRange} setPriceRange={setPriceRange} />
        <Products MensClothing={MensClothing} setMensClothing={setMensClothing} Jewelery={Jewelery} setJewelery={setJewelery} Electronics={Electronics} setElectronics={setElectronics} WomenClothing={WomenClothing} setWomenClothing={setWomenClothing} PriceRange={PriceRange} setPriceRange={setPriceRange} />
      </div>
    </div>
  );
}

export default Index;
