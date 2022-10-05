import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import ProductItem from "./ProductItem";

function Index({ MensClothing, setMensClothing, Jewelery, setJewelery, Electronics, setElectronics, WomenClothing, setWomenClothing, PriceRange, setPriceRange }) {
  const [Products, setProducts] = useState([]);
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetchData();
    console.log(PriceRange)
  }, [MensClothing,Jewelery,Electronics,PriceRange]);

  const fetchData = async () => {
    let TempList = [];
    if(!MensClothing&&!Jewelery&&!Electronics){
      const url = "https://fakestoreapi.com/products";
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
  }
  if(MensClothing){
    const url = "https://fakestoreapi.com/products/category/men's%20clothing";
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
  }
  if(Electronics){
    const url = "https://fakestoreapi.com/products/category/electronics";
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
  }
  if(Jewelery){
    const url = "https://fakestoreapi.com/products/category/jewelery";
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
  }
    setProducts(TempList);
  };

  console.log(Products);

  return (
    <div className="products">
      {Products.map((product) =>
      PriceRange>product.price?(
          product.title.toUpperCase().includes(id.toUpperCase()) ? (
            <ProductItem
              ProductImg={product.image}
              ProductName={product.title}
              ProductPriceOld={300}
              ProductPriceNew={product.price}
              ProductRating={product.rating.rate}
              ProductRatingCount={product.rating.count}
            />
          ) : (
            <></>
        )):(<></>)
      )}
    </div>
  );
}

export default Index;
