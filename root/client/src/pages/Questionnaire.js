import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const Questionnaire = () => {
  const [major, setMajor] = useState("");
  const [minor, setMinor] = useState("");

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  };

  const inputContainerStyle = {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const buttonsContainerStyle = {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50px",
  };

  const outlinedButtonStyle = {
    border: "3px solid",
  };

  const handleMajorChange = (event) => {
    setMajor(event.target.value);
  };

  const handleMinorChange = (event) => {
    setMinor(event.target.value);
  };

  return (
    <div style={containerStyle}>
      <div>
        <div style={inputContainerStyle}>
          <Typography variant="h6" style={{ marginBottom: "10px" }}>
            Input your Major
          </Typography>
          <TextField
            label="Major"
            variant="outlined"
            value={major}
            onChange={handleMajorChange}
            style={{ width: "400px" }} // Adjust the width as needed
          />
        </div>
        <div style={inputContainerStyle}>
          <Typography variant="h6" style={{ marginBottom: "10px" }}>
            Input your Minor
          </Typography>
          <TextField
            label="Minor"
            variant="outlined"
            value={minor}
            onChange={handleMinorChange}
            sx={{ width: "400px" }} // You can also use sx prop for custom styles
          />
        </div>
        <div style={buttonsContainerStyle}>
          <Link to="/search">
            <Button
              variant="contained"
              disableElevation
              color="primary"
              size="large"
            >
              Confirm
            </Button>
          </Link>
          <Link to="/register">
            <Button
              variant="outlined"
              color="primary"
              size="large"
              style={outlinedButtonStyle}
            >
              Cancel
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
