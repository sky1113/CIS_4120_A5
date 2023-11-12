import React from 'react';
import CourseCarousel from '../components/CourseCarousel'; // Assuming you have a CourseCarousel component
import SearchBar from '../components/SearchBar'; // Import the SearchBar component

const Search = () => {
    


  return (
    <div>
    <div>
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
    </div>
  );
};

const carouselContainerStyle = {
  marginBottom: '20px', // Adjust the margin as needed
};

export default Search;
