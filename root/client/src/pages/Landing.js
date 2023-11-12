import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Landing = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  };

  const descriptionStyle = {
    marginTop: "20px",
  };

  const welcomeStyle = {
    display: "flex", // Use flexbox for alignment
    alignItems: "center", // Align items vertically
    gap: "10px", // Gap between logo and text
    fontWeight: "bold",
  };
  const buttonsContainerStyle = {
    display: "flex",
    gap: "20px", // Adjust the gap between buttons
    alignItems: "center", // Align buttons in the center
    justifyContent: "center",
    marginTop: "50px",
  };

  const logoStyle = {
    height: "75px",
    width: "auto",
  };

  const outlinedButtonStyle = {
    border: "3px solid",
  };

  return (
    <div style={containerStyle}>
      <div>
        <div>
          <Typography variant="h3" style={welcomeStyle}>
            Welcome to <Logo style={logoStyle} /> !
          </Typography>
          <Typography variant="h6" style={descriptionStyle}>
            Discover, plan, and enroll in courses in
            <br />
          </Typography>
          <Typography variant="h6" sx={{ fontStyle: "italic" }}>
            less than 15 minutes!
          </Typography>
        </div>
        <div style={buttonsContainerStyle}>
          <Button
            variant="contained"
            disableElevation
            color="primary"
            size="large"
          >
            Sign up
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            style={outlinedButtonStyle}
          >
            Log in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
