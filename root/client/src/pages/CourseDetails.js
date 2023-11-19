import React from "react";
import CourseDescription from "../components/CourseDescription";
import CourseSideBar from "../components/CourseSideBar";

const CoursePage = (props) => {
  const { selectedCourse, relatedCourses, onCourseSelect } = props;

  const pageStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "00px", // Add overall padding
    height: "100%", // Ensure the container takes the full height of the viewport
  };

  const sideBarStyle = {
    overflowY: "auto", // Enable vertical scrolling for CourseSideBar
    maxHeight: "100%", // Ensure CourseSideBar takes the full height of the container
    padding: "0 54px", // Add some padding on the right to separate from CourseDescription
  };

  const descriptionStyle = {
    overflowY: "auto", // Enable vertical scrolling for CourseDescription
    flex: 1, // Allow CourseDescription to take remaining space
  };

  return (
    <div style={pageStyle}>
      <div style={sideBarStyle}>
        <CourseSideBar
          relatedCourses={relatedCourses}
          onCourseSelect={(selectedCourse) =>
            onCourseSelect(selectedCourse, relatedCourses)
          }
        />
      </div>
      <div style={descriptionStyle}>
        <CourseDescription selectedCourse={selectedCourse} />
      </div>
    </div>
  );
};

export default CoursePage;
