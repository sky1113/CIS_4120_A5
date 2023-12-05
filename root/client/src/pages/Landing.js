import React from "react";
import { Link } from "react-router-dom";
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
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontWeight: "bold",
  };

  const buttonsContainerStyle = {
    display: "flex",
    gap: "20px",
    alignItems: "center",
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
          <Link to="/register">
            <Button
              variant="contained"
              disableElevation
              color="primary"
              size="large"
            >
              Sign up
            </Button>
          </Link>
          <Link to="/login">
            <Button
              variant="outlined"
              color="primary"
              size="large"
              style={outlinedButtonStyle}
            >
              Log in
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
