import React from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Container, Typography, Grid } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router";

const containerStyle = {
  margin: "auto",
};

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const userData = {
      email: formData.get("email"),
      first_name: formData.get("firstName"),
      last_name: formData.get("lastName"),
      password: formData.get("password"),
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/register",
        userData
      );
      navigate("/questionnaire");
    } catch (error) {
      console.error("Registration error:", error.response);
    }
  };

  return (
    <Container maxWidth="xs" style={containerStyle}>
      <Typography variant="h4" sx={{ fontWeight: "600", mb: 2 }}>
        Sign up
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="fname"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
            />
          </Grid>
        </Grid>
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
        <Link to="/questionnaire">
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
        </Link>
      </form>
    </Container>
  );
};

export default Register;
