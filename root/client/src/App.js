import React from "react";
import "./App.css";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from "./components/NavBar";
import CourseDetails from "./pages/CourseDetails";
import "@fontsource/inter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import CourseCarousel from "./components/CourseCarousel";

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

const appStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
};

const bodyStyle = {
  marginTop: "105px",
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App" style={appStyle}>
          <Navbar />
          <div style={bodyStyle}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/landing" element={<Landing />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}
