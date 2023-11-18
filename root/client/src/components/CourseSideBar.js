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

    const cardData = [
        {
          courseCode: "CIS101",
          courseName: "Introduction to Computer Science",
          professorName: "Dr. Smith",
          enrollment: 120,
          avgGrade: "A-",
        },
        {
          courseCode: "MAT202",
          courseName: "Linear Algebra",
          professorName: "Prof. Johnson",
          enrollment: 90,
          avgGrade: "B+",
        },
        {
          courseCode: "CIS105",
          courseName: "Data Exploration",
          professorName: "Arvind",
          enrollment: 120,
          avgGrade: "A",
        },
        {
          courseCode: "PHYS350",
          courseName: "Quantum Mechanics",
          professorName: "Prof. J",
          enrollment: 90,
          avgGrade: "B",
        },
      ];

    return (
        <div style={searchResultsStyle}>
            <SearchBar />
            <Typography variant="body" style={typographyStyle}>
                {cardData.length} Results
            </Typography>
            {cardData.map((data, index) => (
            <div key={index}>
              <CourseCard {...data} />
            </div>
          ))}
        </div>
    );
};

export default CourseSideBar;
