import React, { useEffect, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard";

function Index({ setSearchText, SearchIsFocused }) {
  const [Products, setProducts] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  console.log(SearchIsFocused);
  const fetchData = async () => {
    let TempList = [];
    const url = "https://fakestoreapi.com/products?limit=4";
    try {
      const response = await fetch(url);
      const json = await response.json();
      json.forEach((element) => {
        TempList.push(element);
      });
      console.log(TempList);
    } catch (error) {
      console.log("error", error);
    }
    setProducts(TempList);
  };
  return (
    <>
      <div className="home-latestbox-latesttrends-title">Latest Trends</div>
      <div className="home-latestbox-latesttrends">
        {Products.map((product) => (
          <ProductCard ProductImg={product.image} ProductName={product.title} />
        ))}
      </div>
      <div className="home-latestbox-popularsuggestions">
        <div>Popular Collections</div>
        <div
          className="home-latestbox-popularsuggestions-title"
          onClick={() => {
            setSearchText("Shirt");
            navigate(`/search/Shirt`);
          }}
        >
          Shirt
        </div>
        <div
          className="home-latestbox-popularsuggestions-title"
          onClick={() => {
            setSearchText("Hard Drive");
            navigate(`/search/Hard Drive`);
          }}
        >
          Hard Drive
        </div>
        <div
          className="home-latestbox-popularsuggestions-title"
          onClick={() => {
            setSearchText("Disk");
            navigate(`/search/Disk`);
          }}
        >
          Disk
        </div>
        <div
          className="home-latestbox-popularsuggestions-title"
          onClick={() => {
            setSearchText("Gold");
            navigate(`/search/Gold`);
          }}
        >
          Gold
        </div>
        <div
          className="home-latestbox-popularsuggestions-title"
          onClick={() => {
            setSearchText("Women's");
            navigate(`/search/Women's`);
          }}
        >
          Women's
        </div>
      </div>
    </>
  );
}

export default Index;
