import React, { useState } from "react";
import "./index.css";
import { Rating } from "react-simple-star-rating";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";

function Index({
  ProductImg,
  ProductName,
  ProductPriceOld,
  ProductPriceNew,
  ProductRating,
  ProductRatingCount,
}) {
  const [Liked, setLiked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div>
      <div
        className="productitem"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="productitem-img">
          {!Liked ? (
            <div
              className="productitem-img-unliked"
              onClick={() => setLiked(!Liked)}
            >
              <OutlineHeartIcon />
            </div>
          ) : (
            <div
              className="productitem-img-liked"
              onClick={() => setLiked(!Liked)}
            >
              <HeartIcon />
            </div>
          )}
          <img src={ProductImg} />
          {isHovering && (
            <div className="productitem-img-viewproduct">View Product</div>
          )}
        </div>
        <div className="productitem-title">{ProductName}</div>
        <div className="productitem-price">
          <div className="productitem-price-old">{ProductPriceOld}$</div>
          <div className="productitem-price-new">{ProductPriceNew}$</div>
        </div>
        <div className="productitem-rating">
          <Rating
            allowFraction
            readonly
            initialValue={ProductRating}
            size={18}
          />
          <div className="productitem-rating-count">({ProductRatingCount})</div>
        </div>
      </div>
    </div>
  );
}

export default Index;
