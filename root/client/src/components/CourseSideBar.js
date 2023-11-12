import React from "react";
import SearchBar from './SearchBar';
import CourseCard from './CourseCard';
import Typography from '@mui/material/Typography';

const CourseSideBar = () => {
    const searchResultsStyle = {
      display: 'flex',
        maxWidth: '370px',
        margin: 'auto',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
      };

      const typographyStyle = {
        alignSelf: 'flex-start', // Move Typography to the left
      };    

      const courseSearchBarStyle = {
        width:'100%',
      }
  

    return (
      <div style={searchResultsStyle}>
        <SearchBar style={courseSearchBarStyle}/>
        <Typography variant="body" style={typographyStyle}>
            800 Results
            </Typography>
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
      </div>
    );
  };
  
  export default CourseSideBar;