import React from 'react';
import { Search } from "react-feather";

const SearchBar = () => {
  const searchBarStyle = {
    position: 'relative',
    display: 'inline-block',
  };

  const searchInputStyle = {
    display: 'flex',
    width: '1152px',
    padding: '12px 20px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '10px',
    borderRadius: '16px',
    border: '1px solid #1E2EDE',
    background: '#FFF',
  };

  const searchIconStyle = {
    position: 'absolute',
    left: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
  };

  return (
    <div style={searchBarStyle}>
      <Search style={searchIconStyle} />
      <input type="text" style={searchInputStyle} placeholder="Search..." />
    </div>
  );
};

export default SearchBar;
