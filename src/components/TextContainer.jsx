import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { motion } from "framer-motion";

const TextContainer = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    `Welcome to my portfolio piece <span style="color: #5572D3; font-weight: bold">Movie Manor</span>! Experience seamless browsing with <span style="color: #BAC8F6; font-weight: bold;">light mode</span>, <span style="color: #3050BB; font-weight: bold;">dark mode</span>, and a search bar to suit your preference.`,
    `On this site you can uncover a treasure trove of movie information. Each card showcases a movie with detailed information, inviting you to dive deeper into its storyline.`,
    `Simply click on an image to reveal a wealth of details about the movie, including an overview, the release date, film budget, and runtime.`,
    `Searching for a specific movie? The intuitive search bar, conveniently located
    in the header, allows you to <span style="color: #5572D3; font-weight: bold">swiftly</span> find information by typing a movie name and hitting <span style="font-weight: bold">"enter."</span>`,
    `If you are interested in the source code I wrote for this project, you may click <a href="https://github.com/Frances-Hughes/movie-manor" target="_blank" rel="noopener noreferrer" style="color: #bfdbfe; font-weight: bold; text-decoration: none;">here</a> or find my Github in the footer below. <br><br>Kind regards, <br><Typography variant="body2">Frances Hughes</Typography>`,
  ];

  const handleNavigation = (direction) => {
    if (direction === "left") {
      setCurrentText((prev) => (prev === 0 ? texts.length - 1 : prev - 1));
    } else if (direction === "right") {
      setCurrentText((prev) => (prev === texts.length - 1 ? 0 : prev + 1));
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowLeft") {
        handleNavigation("left");
      } else if (event.key === "ArrowRight") {
        handleNavigation("right");
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.3 } },
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 900,
        margin: "auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        <IconButton onClick={() => handleNavigation("left")}>
          <ChevronLeft />
        </IconButton>
        <Typography variant="body1">
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            exit="exit"
            key={currentText}
            sx={{
              "& p:first-of-type::first-letter": {
                fontSize: "3em",
                fontWeight: "bold",
              },
            }}
            dangerouslySetInnerHTML={{ __html: texts[currentText] }}
          />
        </Typography>
        <IconButton onClick={() => handleNavigation("right")}>
          <ChevronRight />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TextContainer;
