import React, { useState } from "react";
import "./App.css";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from "./components/NavBar";
import CourseDetails from "./pages/CourseDetails";
import "@fontsource/inter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Questionnaire from "./pages/Questionnaire";

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
  display: "inherit",
};

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [relatedCourses, setRelatedCourses] = useState([]);
  const [major, setMajor] = useState("");
  const [minor, setMinor] = useState("");

  const handleCourseSelection = (course, relatedCoursesData) => {
    console.log("Selected course:", course);
    setSelectedCourse(course);
    setRelatedCourses(relatedCoursesData);
  };

  const handleMajorChange = (event) => {
    setMajor(event.target.value);
  };

  const handleMinorChange = (event) => {
    setMinor(event.target.value);
  };

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
              <Route
                path="/search"
                element={
                  <Search
                    major={major}
                    minor={minor}
                    onCourseSelect={handleCourseSelection}
                  />
                }
              />
              <Route
                path="/course-details/:courseCode"
                element={
                  <CourseDetails
                    selectedCourse={selectedCourse}
                    relatedCourses={relatedCourses}
                    onCourseSelect={handleCourseSelection}
                  />
                }
              />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/questionnaire"
                element={
                  <Questionnaire
                    major={major}
                    minor={minor}
                    onMajorChange={handleMajorChange}
                    onMinorChange={handleMinorChange}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}
