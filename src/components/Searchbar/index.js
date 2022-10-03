import React, { useState } from "react";
import "./index.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Index() {
  const [SearchText, setSearchText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchText("");
  };
  return (
    <div className="searchbar-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="searchbar">
          <input
            onChange={(e) => setSearchText(e.target.value)}
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
