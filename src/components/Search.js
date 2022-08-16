import React from "react";

function Search({search, handleSearch}) {
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => handleSearch(e.target.value)}
        value={search}
      />
    </div>
  );
}

export default Search;
