import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      <Container>
        <Toolbar>
          <Typography variant="body1" color="inherit">
            Hi
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
