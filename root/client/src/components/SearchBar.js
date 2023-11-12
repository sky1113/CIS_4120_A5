import React from "react";
import { Search } from "react-feather";

const SearchBar = () => {
  const searchBarStyle = {
    position: "relative",
    //display: "inline-block",
    width: "80%", // Adjust width to 100% of the parent element
    maxWidth: "1100px", // Set a maximum width if necessary
    marginTop: '47px',
  };

  const searchInputStyle = {
    width: "100%", // Adjust width to 100% of the parent element
    padding: "12px 20px 12px 40px", // Adjust padding to make room for the icon
    borderRadius: "16px",
    border: "2px solid #1E2EDE",
    background: "#FFF",
    outline: "none", // Removes the default focus outline
    fontSize: "16px", // Adjust font size as needed
  };

  const searchIconStyle = {
    color: "#1E2EDE",
    position: "absolute",
    left: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none", // Makes the icon non-interactive
  };

  return (
    <div style={searchBarStyle}>
      <Search style={searchIconStyle} />
      <input
        type="text"
        style={searchInputStyle}
        placeholder="search for a class..."
      />
    </div>
  );
};

export default SearchBar;
