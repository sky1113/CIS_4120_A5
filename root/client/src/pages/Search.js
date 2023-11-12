import React from 'react';
import CourseCarousel from '../components/CourseCarousel';
import SearchBar from '../components/SearchBar';

const Search = () => {
  const searchContainerStyle = {
    marginBottom: '100px', // Adjust the margin as needed
  };

  return (
    <div style={searchContainerStyle}>
      <SearchBar />
      <div>
        <CourseCarousel />
      </div>
      <div>
        <CourseCarousel />
      </div>
      <div>
        <CourseCarousel />
      </div>
    </div>
  );
};

export default Search;
