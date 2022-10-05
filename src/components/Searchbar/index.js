import React, { useEffect, useState } from "react";
import "./index.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useNavigate, useParams } from "react-router-dom";

function Index({
  SearchText,
  setSearchText,
  SearchIsFocused,
  setSearchIsFocused,
}) {
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${SearchText}`);
  };
  return (
    <div className="searchbar-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="searchbar">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={(e) => setSearchIsFocused(true)}
            value={SearchText}
            placeholder="Search"
          />
          <MagnifyingGlassIcon className="searchbar-icon" />
        </div>
      </form>
    </div>
  );
}

export default Index;
