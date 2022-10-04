import React, { useState } from "react";
import "./index.css";
import ProductCard from "../../components/ProductCard";

function Index({SearchIsFocused, setSearchIsFocused,setIsHomePage}) {
  console.log(SearchIsFocused);
  setIsHomePage(true);
  return (
    <div className="home">
      
      <div className="home-bottom" onClick={(e) => setSearchIsFocused(false)}>
        {SearchIsFocused ? (
          <div className="home-latestbox" onClick={(e) => e.stopPropagation()}>
            <div>Latest Trends</div>
            <div className="home-latestbox-latesttrends">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
            <div className="home-latestbox-popularsuggestions">
              <div>Popular Collections</div>
              <div className="home-latestbox-popularsuggestions-title">
                Striped shirt dress
              </div>
              <div className="home-latestbox-popularsuggestions-title">
                Satin shirts
              </div>
              <div className="home-latestbox-popularsuggestions-title">
                Striped shirt dress
              </div>
              <div className="home-latestbox-popularsuggestions-title">
                Striped shirt dress
              </div>
              <div className="home-latestbox-popularsuggestions-title">
                Striped shirt dress
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Index;
