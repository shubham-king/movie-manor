import React, { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import AllRoutes from "./routes/AllRoutes";
import { createTheme } from "@mui/material/styles";

const linksArray = ["Home", "Popular", "Upcoming"];

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
      <div style={{ marginTop: "78px" }}>
        <AllRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;

// Now Playing:
// https://api.themoviedb.org/3/movie/now_playing?api_key=23b631df0322d474f7811f15a02c4a86

// Top Rated:
// https://api.themoviedb.org/3/movie/top_rated?api_key=23b631df0322d474f7811f15a02c4a86

// Upcoming:
// https://api.themoviedb.org/3/movie/upcoming?api_key=23b631df0322d474f7811f15a02c4a86
