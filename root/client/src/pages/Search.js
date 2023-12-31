import React, { useState, useEffect } from "react";
import CourseCarousel from "../components/CourseCarousel";
import SearchBar from "../components/SearchBar";
import { CircularProgress } from "@mui/material";

const Search = (props) => {
  const { onCourseSelect, major, minor } = props;

  const [majorCourseData, setMajorCourseData] = useState(null);
  const [minorCourseData, setMinorCourseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/external-data/${major}`,
          {
            headers: {
              Authorization: `Bearer YOUR_ACCESS_TOKEN`,
            },
          }
        );
        const data = await response.json();
        setMajorCourseData(data.result_data);
      } catch (error) {
        console.error("Failed to fetch major data", error);
      }
    };

    fetchData();
  }, [major]); // Depend on majorName

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/external-data/${minor}`,
          {
            headers: {
              Authorization: `Bearer YOUR_ACCESS_TOKEN`,
            },
          }
        );
        const data = await response.json();
        setMinorCourseData(data.result_data);
      } catch (error) {
        console.error("Failed to fetch minor data", error);
      }
    };

    fetchData();
  }, [minor]); // Depend on minorName

  const carouselContainerStyle = {
    marginBottom: "20px", // Adjust the margin as needed
  };

  // Handle loading state separately for major and minor courses
  if (!majorCourseData || !minorCourseData) {
    return <CircularProgress style={{ margin: "auto" }} />;
  }

  return (
    <div style={{ maxWidth: "100vw", margin: "auto" }}>
      {/* <SearchBar /> */}
      <div style={carouselContainerStyle}>
        {majorCourseData && (
          <CourseCarousel
            title={"Recommended For Your Major (" + major + ")"}
            cardData={majorCourseData}
            onCourseSelect={(selectedCourse) =>
              onCourseSelect(selectedCourse, majorCourseData)
            }
          />
        )}
      </div>
      <div style={carouselContainerStyle}>
        {minorCourseData && (
          <CourseCarousel
            title={"Recommended For Your Minor (" + minor + ")"}
            cardData={minorCourseData}
            onCourseSelect={(selectedCourse) =>
              onCourseSelect(selectedCourse, minorCourseData)
            }
          />
        )}
      </div>
    </div>
  );
};

export default Search;
