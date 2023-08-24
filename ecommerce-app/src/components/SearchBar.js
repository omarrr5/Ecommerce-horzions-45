import React, { useState } from 'react';
import "../SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); 
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search now!"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;