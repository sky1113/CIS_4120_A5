import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function MediaControlCard() {
  const cardStyle = {
    display: "flex",
    width: "368px",
    height: "173px",
    border: "1px solid ##1E2EDE", // Add this line for the outline
    borderRadius: "8px", // Optional: Add border-radius for rounded corners
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
    <Card style={cardStyle}>
      <CardContent style={cardContentStyle}>
        <Typography component="div" variant="h5">
          Course Code
        </Typography>
        <Typography component="div" variant="subtitle1">
          Course Name
        </Typography>
        <div class="course-stats" style={courseStatStyle}>
          <Typography component="div" variant="subtitle2">
            Prof. Name
          </Typography>
          <Typography component="div" variant="subtitle2">
            Curr. Enrollment
          </Typography>
          <Typography component="div" variant="subtitle2">
            Avg. Grade
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
