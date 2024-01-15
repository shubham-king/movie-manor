import React, { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
      <Footer />
    </ThemeProvider>
  );
}

export default App;
