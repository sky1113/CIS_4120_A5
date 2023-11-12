import React from "react";
import "./App.css";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from "./components/NavBar";
import Landing from "./pages/Landing";
import "@fontsource/inter";

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
      <div className="App" style={appStyle}>
        <Navbar />
        <div style={bodyStyle}>
          <Landing />
        </div>
      </div>
    </ThemeProvider>
  );
}
