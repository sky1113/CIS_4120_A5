import { Typography } from "@mui/material";
import React from "react";
import LecRecTable from "./LecRecTable";

const CourseDescription = (props) => {
  const { selectedCourse } = props;

  const dummyData = {
    difficulty: "3.0",
    workload: "3.0",
    profRating: "3.0",
    offeredIn: "Spring",
    credits: "3",
    syllabus: "doc",
    website: "www.cis.com",
    description: "Introduction to Computer Programming is the first course i",
    prerequisites:
      "Introduction to Computer Programming is the first course in our series introducing students to computer science. In this class you will learn.",
    lectureTime: "MWF 12:00-12:59 PM",
    sectionNumber: "001",
    location: "McNeil 102",
  };

  const {
    difficulty,
    workload,
    profRating,
    offeredIn,
    credits,
    syllabus,
    website,
    description,
    prerequisites,
    lectureTime,
    sectionNumber,
    location,
  } = dummyData;

  const courseDescriptionStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FFF",
    alignItems: "center",
  };

  const courseDescriptionContentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "33px",
    flexShrink: "0",
    width: "90%",
    height: "90%",
    justifyContent: "center",
    margin: "48px 0",
  };

  const courseDescriptionTitleStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const courseInformationStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  };

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "8px",
    flexBasis: "70%",
  };

  const rowStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "12px",
  };

  const labelStyle = {
    color: "#1F1F1F",
    fontSize: "20px",
    fontWeight: "bold",
  };

  const valueStyle = {
    color: "#1F1F1F",
    fontSize: "20px",
  };

  const titleStyle = {
    fontWeight: "bold",
  };

  const subtitleStyle = {
    fontWeight: "bold",
  };

  const textSectionStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const textTitleStyle = {
    fontWeight: "bold",
  };

  const textStyle = {
    textAlign: "left",
  };

  return (
    <div style={courseDescriptionStyle}>
      <div style={courseDescriptionContentStyle}>
        <div style={courseDescriptionTitleStyle}>
          <Typography variant="h4" style={titleStyle}>
            {selectedCourse.courseCode}
          </Typography>
          <Typography variant="h5" style={subtitleStyle}>
            {selectedCourse.courseName}
          </Typography>
        </div>
        {/* <div>course stats here</div> */}
        <div style={courseInformationStyle}>
          <div style={columnStyle}>
            <div style={rowStyle}>
              <Typography style={labelStyle}>Enrolled</Typography>
              <Typography style={valueStyle}>
                {selectedCourse.enrollment}
              </Typography>
            </div>
            <div style={rowStyle}>
              <Typography style={labelStyle}>Credits</Typography>
              <Typography style={valueStyle}>{credits}</Typography>
            </div>
            <div style={rowStyle}>
              <Typography style={labelStyle}>Offered In</Typography>
              <Typography style={valueStyle}>{offeredIn}</Typography>
            </div>
          </div>
          <div style={columnStyle}>
            <div style={rowStyle}>
              <Typography style={labelStyle}>Credits</Typography>
              <Typography style={valueStyle}>{credits}</Typography>
            </div>
            <div style={rowStyle}>
              <Typography style={labelStyle}>Professor</Typography>
              <Typography style={valueStyle}>
                {selectedCourse.professorName}
              </Typography>
            </div>
            <div style={rowStyle}>
              <Typography style={labelStyle}>Syllabus</Typography>
              <Typography style={valueStyle}>{syllabus}</Typography>
            </div>
          </div>
        </div>
        <div style={textSectionStyle}>
          <Typography variant="h6" style={textTitleStyle}>
            Description
          </Typography>
          <Typography variant="body1" style={textStyle}>
            {description}
          </Typography>
        </div>
        <div style={textSectionStyle}>
          <Typography variant="h6" style={textTitleStyle}>
            Prerequisites
          </Typography>
          <Typography variant="body1" style={textStyle}>
            {prerequisites}
          </Typography>
        </div>
        <LecRecTable />
        <LecRecTable />
      </div>
    </div>
  );
};

export default CourseDescription;
