import React from "react";
import { TextField, Button, Container, Typography, Grid } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router";

const containerStyle = {
  margin: "auto",
};

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const loginData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        loginData
      );
      navigate("/search");
    } catch (error) {
      console.error("Login error:", error.response);
    }
  };

  return (
    <Container maxWidth="xs" style={containerStyle}>
      <Typography variant="h4" sx={{ fontWeight: "600", mb: 2 }}>
        Log in
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
          Log In
        </Button>
      </form>
    </Container>
  );
};

export default Login;
