import React from "react";
import SearchBar from './SearchBar';
import CourseCard from './CourseCard';
import Typography from '@mui/material/Typography';

const CourseSideBar = () => {
    const searchResultsStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Align items to the left
        maxWidth: '450px',
        margin: 'auto',
        gap: '24px',
        marginBottom: "50px",
    };

    const typographyStyle = {
        alignSelf: 'flex-start', // Move Typography to the left
        fontWeight: 'bold', // Added bold style for emphasis
    };    

    return (
        <div style={searchResultsStyle}>
            <SearchBar />
            <Typography variant="body" style={typographyStyle}>
                800 Results
            </Typography>
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
        </div>
    );
};

export default CourseSideBar;
