import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ReactComponent as Logo } from "../assets/logo.svg";

const Landing = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full height of the viewport
  };

  const descriptionStyle = {
    marginTop:'20px',
  };

  const welcomeStyle = {
    fontWeight: 'bold',
  };


  const buttonsContainerStyle = {
    display: 'flex',
    gap: '10px', // Adjust the gap between buttons
    alignItems: 'center', // Align buttons in the center
    justifyContent: 'center',
    marginTop: '50px',
  };

  const logoStyle = {
    height: "75px",
    width: "auto",
  };


  return (
    <div style={containerStyle}>
      <div >
        <div>
      <Typography variant="h3" style={welcomeStyle}>
        Welcome to <Logo style={logoStyle} /> !
        </Typography>
        <Typography variant="h6" style={descriptionStyle} >
        Discover, plan, and enroll in courses in<br/> 
        </Typography>
        <Typography variant="h6" sx = {{fontStyle: 'italic'}} >
        less than 15 minutes!
        </Typography>
        </div>
        <div style={buttonsContainerStyle}>
          <Button variant="contained" disableElevation color="primary">
            Sign in
          </Button>
          <Button variant="outlined" color="primary">
            Log in 
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
