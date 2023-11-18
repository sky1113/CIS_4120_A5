import React from "react";
import CourseCarousel from "../components/CourseCarousel"; // Assuming you have a CourseCarousel component
import SearchBar from "../components/SearchBar"; // Import the SearchBar component

const Search = () => {
  const personalizedMajorData = {
    title: "Recommended for Your Major (CIS)",
    cardData: [
      {
        courseCode: "CIS101",
        courseName: "Introduction to Computer Science",
        professorName: "Dr. Smith",
        enrollment: 120,
        avgGrade: "A-",
      },
      {
        courseCode: "MATH202",
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
    ],
  };

  const personalizedMinorData = {
    title: "Recommended for Your Minor (MATH)",
    cardData: [
      {
        courseCode: "CIS101",
        courseName: "Introduction to Computer Science",
        professorName: "Dr. Smith",
        enrollment: 120,
        avgGrade: "A-",
      },
      {
        courseCode: "MATH202",
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
    ],
  };

  const carouselContainerStyle = {
    marginBottom: "20px", // Adjust the margin as needed
  };

  return (
    <div style={{ maxWidth: "100vw" }}>
      <SearchBar />
      <div style={carouselContainerStyle}>
        <CourseCarousel {...personalizedMajorData} />
      </div>
      <div style={carouselContainerStyle}>
        <CourseCarousel {...personalizedMinorData} />
      </div>
    </div>
  );
};

export default Search;
