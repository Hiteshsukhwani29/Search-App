import React from "react";
import "./index.css";

function Index({ ProductImg, ProductName }) {
  return (
    <div className="product-card">
      <img src={ProductImg} />
      <div className="product-card-title">{ProductName}</div>
    </div>
  );
}

export default Index;
