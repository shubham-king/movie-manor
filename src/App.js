import React, { useState } from "react";
import "./App.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Header from "../src/components/Header";
import Card from "../src/components/Card";
import { AllRoutes } from "./routes/AllRoutes";
import { createTheme } from "@mui/material/styles";

const linksArray = ["Home", "Popular", "Top Rated", "Upcoming"];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        links={linksArray}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Card />
      <AllRoutes />
    </ThemeProvider>
  );
}

export default App;
