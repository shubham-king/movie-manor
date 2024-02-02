import React from "react";
import { Box, Container, Link, Grid } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const FooterContainer = (theme) => ({
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  margin: 0,
  padding: 1,
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0)" : "rgba(0,143,180,1)",
  color: theme.palette.primary.contrastText,
});

const Footer = () => {
  return (
    <Container>
      <Box component="footer" sx={(theme) => FooterContainer(theme)}>
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: "center", textAlign: "center" }}
        >
          <Grid item xs={6}>
            <Link
              href="https://www.linkedin.com/in/frances-l-hughes/"
              target="_blank"
              rel="noopener noreferrer"
              color="#fff"
              underline="hover"
            >
              <LinkedInIcon />
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link
              href="https://github.com/Frances-Hughes"
              target="_blank"
              rel="noopener noreferrer"
              color="#fff"
              underline="hover"
            >
              <GitHubIcon />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
