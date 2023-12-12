import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function CourseCard(props) {
  const {
    course_department,
    course_number,
    course_title,
    primary_instructor,
    enrollment,
    avgGrade,
    section_number,
  } = props;
  const courseCode =
    course_department + " " + course_number + " " + section_number;

  const cardStyle = {
    display: "flex",
    width: "368px",
    height: "173px",
    margin: "auto",
  };

  const cardContentStyle = {
    display: "flex",
    padding: "24px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "12px",
    width: "100%",
  };

  const courseStatStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  };

  return (
    <Card
      sx={{ ...cardStyle, border: "2px solid #1E2EDE", borderRadius: "12px" }}
    >
      <CardActionArea component={Link} to={`/course-details/${courseCode}`}>
        <CardContent style={cardContentStyle}>
          <Typography component="div" variant="h5">
            {courseCode}
          </Typography>
          <Typography component="div" variant="subtitle1">
            {course_title}
          </Typography>
          <div style={courseStatStyle}>
            <Typography component="div" variant="subtitle2">
              {primary_instructor ? primary_instructor : ""}
            </Typography>
            <Typography component="div" variant="subtitle2">
              {}
            </Typography>
            <Typography component="div" variant="subtitle2">
              {}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
