import React from "react";
import "./App.css";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from "./components/NavBar";
import "@fontsource/inter";
import CourseDescription from "./components/CourseDescription";

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
  },
  shape: {
    borderRadius: 12,
  },
  palette: {
    primary: {
      main: "#1E2EDE",
    },
    background: {
      default: "#F8F8FD",
    },
  },
});

const bodyStyle = {
  marginTop: "105px",
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navbar />
        <div style={bodyStyle}>
          <CourseDescription />
        </div>
      </div>
    </ThemeProvider>
  );
}
