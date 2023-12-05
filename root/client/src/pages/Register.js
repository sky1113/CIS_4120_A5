import React from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import axios from "axios";

const containerStyle = {
  margin: "auto",
};

const Register = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const userData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await axios.post(
        "localhost:8000/api/register/",
        userData
      );
      console.log(response.data);
      // Handle successful registration (e.g., redirect to login or dashboard)
    } catch (error) {
      console.error("Registration error:", error.response);
      // Handle errors (e.g., show error message to user)
    }
  };

  return (
    <Container maxWidth="xs" style={containerStyle}>
      <Typography variant="h4" sx={{ fontStyle: "bold" }}>
        Sign up
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          variant="contained"
          disableElevation
          color="primary"
          size="large"
          sx={{ mt: 2 }}
        >
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default Register;
