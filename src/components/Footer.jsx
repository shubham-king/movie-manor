import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      <Container>
        <Toolbar>
          <Typography variant="body1" color="inherit">
            © {new Date().getFullYear()} Your Website Name. All rights reserved.
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
