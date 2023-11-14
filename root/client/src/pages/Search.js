import React from "react";
import CourseCarousel from "../components/CourseCarousel"; // Assuming you have a CourseCarousel component
import SearchBar from "../components/SearchBar"; // Import the SearchBar component

const Search = () => {
  const carouselContainerStyle = {
    marginBottom: "20px", // Adjust the margin as needed
  };

  return (
    <div style={{ maxWidth: "100vw" }}>
      <SearchBar />
      <div style={carouselContainerStyle}>
        <CourseCarousel />
      </div>
      <div style={carouselContainerStyle}>
        <CourseCarousel />
      </div>
      <div style={carouselContainerStyle}>
        <CourseCarousel />
      </div>
    </div>
  );
};

export default Search;
