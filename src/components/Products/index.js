import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import ProductItem from "./ProductItem";

function Index() {
  const [Products, setProducts] = useState([]);
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetchData();
  }, []);
  const url = "https://fakestoreapi.com/products";

  const fetchData = async () => {
    let TempList = [];
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

  console.log(Products);

  return (
    <div className="products">
      {Products.map((product) =>
        product.category.toUpperCase().includes("MEN") ||
        product.category.toUpperCase().includes("ELECTRONICS") ? (
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
          )
        ) : (
          <></>
        )
      )}

      {/* <ProductItem
        ProductName="Shirt with puffed sleeves"
        ProductPriceOld={300}
        ProductPriceNew={200}
        ProductRating={3.5}
        ProductRatingCount={250}
      />
      <ProductItem
        ProductName="Shirt with puffed sleeves"
        ProductPriceOld={300}
        ProductPriceNew={200}
        ProductRating={3.5}
        ProductRatingCount={250}
      />
      <ProductItem
        ProductName="Shirt with puffed sleeves"
        ProductPriceOld={300}
        ProductPriceNew={200}
        ProductRating={3.5}
        ProductRatingCount={250}
      />
      <ProductItem
        ProductName="Shirt with puffed sleeves"
        ProductPriceOld={300}
        ProductPriceNew={200}
        ProductRating={3.5}
        ProductRatingCount={250}
      />
      <ProductItem
        ProductName="Shirt with puffed sleeves"
        ProductPriceOld={300}
        ProductPriceNew={200}
        ProductRating={3.5}
        ProductRatingCount={250}
      /> */}
    </div>
  );
}

export default Index;
