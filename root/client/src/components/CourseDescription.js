import { Typography } from "@mui/material";
import React from "react";
import LecRecTable from "./LecRecTable";

const CourseDescription = (props) => {
  const { selectedCourse } = props;
  console.log(selectedCourse);

  const courseDescriptionStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FFF",
    alignItems: "center",
    minHeight: "calc(100vh - 105px)",
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
            {selectedCourse.course_department +
              " " +
              selectedCourse.course_number +
              " " +
              selectedCourse.section_number}
          </Typography>
          <Typography variant="h5" style={subtitleStyle}>
            {selectedCourse.course_title}
          </Typography>
        </div>
        {/* <div>course stats here</div> */}
        <div style={courseInformationStyle}>
          <div style={columnStyle}>
            <div style={rowStyle}>
              <Typography style={labelStyle}>Enrolled</Typography>
              <Typography style={valueStyle}>
                {selectedCourse.section_enrollment +
                  "/" +
                  selectedCourse.max_enrollment}
              </Typography>
            </div>
            <div style={rowStyle}>
              <Typography style={labelStyle}>Credits</Typography>
              <Typography style={valueStyle}>
                {selectedCourse.credits}
              </Typography>
            </div>
          </div>
          <div style={columnStyle}>
            <div style={rowStyle}>
              <Typography style={labelStyle}>Professor</Typography>
              <Typography style={valueStyle}>
                {selectedCourse.primary_instructor
                  ? selectedCourse.primary_instructor
                  : ""}
              </Typography>
            </div>
          </div>
        </div>
        <div style={textSectionStyle}>
          <Typography variant="h6" style={textTitleStyle}>
            Description
          </Typography>
          <Typography variant="body1" style={textStyle}>
            {selectedCourse.course_description}
          </Typography>
        </div>
        {/* <div style={textSectionStyle}>
          <Typography variant="h6" style={textTitleStyle}>
            Prerequisites
          </Typography>
          <Typography variant="body1" style={textStyle}>
            {}
          </Typography>
        </div> */}
        <LecRecTable meetings={selectedCourse.meetings} />
      </div>
    </div>
  );
};

export default CourseDescription;
