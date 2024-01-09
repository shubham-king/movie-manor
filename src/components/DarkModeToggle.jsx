import React from "react";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <IconButton
      color="inherit"
      onClick={toggleDarkMode}
      aria-label="toggle dark mode"
    >
      {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}

export default DarkModeToggle;
