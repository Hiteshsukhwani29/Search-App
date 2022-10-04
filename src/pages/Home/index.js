import React, { useState } from "react";
import "./index.css";
import Searchbar from "../../components/Searchbar";
import Logo from "../../assets/logo.png";
import ProductCard from "../../components/ProductCard";

function Index() {
  const [SearchIsFocused, setSearchIsFocused] = useState(false);
  console.log(SearchIsFocused);
  return (
    <div className="home">
      <div
        className="home-img-container"
        onClick={(e) => setSearchIsFocused(false)}
      >
        <img src={Logo} />
      </div>
      <Searchbar
        SearchIsFocused={SearchIsFocused}
        setSearchIsFocused={setSearchIsFocused}
      />
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
