import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const Questionnaire = (props) => {
  const { major, minor, onMajorChange, onMinorChange } = props;

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
            onChange={onMajorChange}
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
            onChange={onMinorChange}
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
              Continue
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
