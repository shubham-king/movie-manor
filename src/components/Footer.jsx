import React from "react";
import { Box, Container, Link, Grid, Tooltip } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const FooterContainer = (theme) => ({
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  margin: 0,
  padding: 1,
  backgroundColor: theme.palette.mode === "dark" ? "#0c142d" : "#3152bd",
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
            <Tooltip title="Visit my LinkedIn page" placement="top">
              <Link
                href="https://www.linkedin.com/in/frances-l-hughes/"
                target="_blank"
                rel="noopener noreferrer"
                color="#fff"
                underline="hover"
              >
                <LinkedInIcon
                  sx={{
                    "&&:hover": {
                      transform: "scale(1.2)",
                    },
                  }}
                />
              </Link>
            </Tooltip>
          </Grid>
          <Grid item xs={6}>
            <Tooltip title="Link to this repository" placement="top">
              <Link
                href="https://github.com/Frances-Hughes/movie-manor"
                target="_blank"
                rel="noopener noreferrer"
                color="#fff"
                underline="hover"
              >
                <GitHubIcon
                  sx={{
                    "&:hover": {
                      transform: "scale(1.2)",
                    },
                  }}
                />
              </Link>
            </Tooltip>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
