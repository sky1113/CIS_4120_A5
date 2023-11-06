import React from "react";
import "./App.css";
import { Button, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button>hello!</Button>
      </div>
    </ThemeProvider>
  );
}
