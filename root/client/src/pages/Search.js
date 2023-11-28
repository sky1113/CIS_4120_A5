import React from "react";
import CourseCarousel from "../components/CourseCarousel";
import SearchBar from "../components/SearchBar";

const Search = (props) => {
  const { onCourseSelect } = props;

  const personalizedMajorData = {
    title: "Recommended for Your Major (CIS)",
    cardData: [
      {
        courseCode: "CIS 3200",
        courseName: "Introduction to Algorithms",
        professorName: "Erik Weingarten",
        enrollment: 120,
        avgGrade: "A-",
      },
      {
        courseCode: "CIS 3500",
        courseName: "Software Design/Engineering",
        professorName: "Eric Noel Fouh Mbindi",
        enrollment: 90,
        avgGrade: "B+",
      },
      {
        courseCode: "CIS 3800",
        courseName: "Computer Operating Systems",
        professorName: "Travis Mcgaha",
        enrollment: 120,
        avgGrade: "A",
      },
      {
        courseCode: "CIS 4230",
        courseName: "Ethical Algorithm Design",
        professorName: "Michael Kearns",
        enrollment: 90,
        avgGrade: "B",
      },
    ],
  };

  const personalizedMinorData = {
    title: "Recommended for Your Minor (MATH)",
    cardData: [
      {
        courseCode: "MATH 3140",
        courseName: "Advanced Linear Algebra",
        professorName: "Julia Hartmann",
        enrollment: 120,
        avgGrade: "A-",
      },
      {
        courseCode: "MATH 3120",
        courseName: "Linear Algebra",
        professorName: "Irfan Alam",
        enrollment: 90,
        avgGrade: "B+",
      },
      {
        courseCode: "MATH 4250",
        courseName: "Partial Differential Equations",
        professorName: "Ching-Li Chai",
        enrollment: 120,
        avgGrade: "A",
      },
      {
        courseCode: "MATH 4100",
        courseName: "Complex Analysis",
        professorName: "Mona Merling",
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
        <CourseCarousel
          cardData={personalizedMajorData.cardData}
          onCourseSelect={(selectedCourse) =>
            onCourseSelect(selectedCourse, personalizedMajorData.cardData)
          }
        />
      </div>
      <div style={carouselContainerStyle}>
        <CourseCarousel
          cardData={personalizedMinorData.cardData}
          onCourseSelect={(selectedCourse) =>
            onCourseSelect(selectedCourse, personalizedMajorData.cardData)
          }
        />
      </div>
    </div>
  );
};

export default Search;
