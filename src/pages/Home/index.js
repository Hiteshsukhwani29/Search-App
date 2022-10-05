import React, { useEffect, useState } from "react";
import "./index.css";
import LatestBox from "../../components/LatestBox";

function Index({
  SearchIsFocused,
  setSearchIsFocused,
  setIsHomePage,
  setSearchText,
}) {
  setIsHomePage(true);
  return (
    <div className="home">
      <div className="home-bottom" onClick={() => setSearchIsFocused(false)}>
        {SearchIsFocused ? (
          <div className="home-latestbox" onClick={(e) => e.stopPropagation()}>
            <LatestBox
              setSearchText={setSearchText}
              SearchIsFocused={SearchIsFocused}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Index;
