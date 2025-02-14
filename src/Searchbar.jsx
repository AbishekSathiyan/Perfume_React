import React, { useState } from "react";
import "./style.css"; // Ensure you have styles for the search bar

const Searchbar = () => {
  // Create state to hold the search query
  const [query, setQuery] = useState("");

  // Handle the input change
  const handleSearchChange = (e) => {
    setQuery(e.target.value); // Update the state with input value
  };

  return (
    <div className="search">
      <input 
        type="text" 
        placeholder="Search..." 
        id="search"
        value={query}  // Bind value to query state
        onChange={handleSearchChange} // Update state on input change
      />
    </div>
  );
}

export default Searchbar;
