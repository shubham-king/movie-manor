import React, { useEffect, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllRoutes from "./routes/AllRoutes";
import { createTheme } from "@mui/material/styles";
import DarkModeToggle from "./components/DarkModeToggle";
import Granim from "granim";

const linksArray = ["Home", "Popular", "Upcoming"];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
    typography: {
      fontFamily: ["Chakra Petch", "Caudex", "serif"].join(","),
    },
  });

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  useEffect(() => {
    const canvasElement = document.getElementById("canvas");
    if (!canvasElement || !(canvasElement instanceof HTMLCanvasElement)) {
      console.error("Invalid canvas element");
      return;
    }

    const granimInstance = new Granim({
      element: canvasElement,
      direction: "left-right",
      opacity: [1, 1],
      states: {
        "default-state": {
          gradients: darkMode
            ? [
                ["#191714", "#3F3D3D"],
                ["#444444", "#12100E"],
                ["#191714", "#5C5757"],
                ["#6B6B6B", "#393131"],
              ]
            : [
                ["#ddd6f3", "#06beb6"],
                ["#05999E", "#f4e2d8"],
                ["#B3FFAB", "#80d3fe"],
                ["#18A5A7", "#BFFFC7"],
              ],
          transitionSpeed: 1800,
        },
      },
    });

    return () => granimInstance.destroy(); // Cleanup on component unmount
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        links={linksArray}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <canvas
        id="canvas"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
      <div style={{ marginTop: "78px" }}>
        <AllRoutes />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
