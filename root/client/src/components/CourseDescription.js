import { Typography } from "@mui/material";
import React from "react";
import LecRecTable from "./LecRecTable";

const CourseDescription = () => {
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
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "56px",
  };

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "8px",
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
            Course Code
          </Typography>
          <Typography variant="h5" style={subtitleStyle}>
            Course Name
          </Typography>
        </div>
        <div>course stats here</div>
        <div style={courseInformationStyle}>
          <div style={columnStyle}>
            <div style={rowStyle}>
              <Typography style={labelStyle}>Enrolled</Typography>
              <Typography style={valueStyle}>54/100</Typography>
            </div>
            <div style={rowStyle}>
              <Typography style={labelStyle}>Enrolled</Typography>
              <Typography style={valueStyle}>54/100</Typography>
            </div>
            <div style={rowStyle}>
              <Typography style={labelStyle}>Enrolled</Typography>
              <Typography style={valueStyle}>54/100</Typography>
            </div>
          </div>
          <div style={columnStyle}>
            <div style={rowStyle}>
              <Typography style={labelStyle}>Enrolled</Typography>
              <Typography style={valueStyle}>54/100</Typography>
            </div>
            <div style={rowStyle}>
              <Typography style={labelStyle}>Enrolled</Typography>
              <Typography style={valueStyle}>54/100</Typography>
            </div>
            <div style={rowStyle}>
              <Typography style={labelStyle}>Enrolled</Typography>
              <Typography style={valueStyle}>54/100</Typography>
            </div>
          </div>
        </div>
        <div style={textSectionStyle}>
          <Typography variant="h6" style={textTitleStyle}>
            Description
          </Typography>
          <Typography variant="body1" style={textStyle}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
        </div>
        <div style={textSectionStyle}>
          <Typography variant="h6" style={textTitleStyle}>
            Prerequisites
          </Typography>
          <Typography variant="body1" style={textStyle}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
        </div>
        <LecRecTable />
        <LecRecTable />
      </div>
    </div>
  );
};

export default CourseDescription;
