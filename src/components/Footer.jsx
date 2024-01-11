import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { Box, Typography, List, ListItem } from "@mui/material";

const FooterContainer = styled("footer")(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(5,49,60,1)" : "rgba(0,143,180,1)",
  color: theme.palette.primary.contrastText,
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textDecoration: "none",
  marginRight: theme.spacing(4),
  "&:hover": {
    textDecoration: "underline",
  },
}));

const ExternalLink = styled("a")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textDecoration: "none",
  marginRight: theme.spacing(4),
  "&:hover": {
    textDecoration: "underline",
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="body2" color="inherit">
          © 2030{" "}
          <Link to="/" component={FooterLink}>
            MovieManor
          </Link>
          . All Rights Reserved.
        </Typography>
        <List
          component="nav"
          aria-labelledby="footer-links"
          sx={{ display: "flex" }}
        >
          <ListItem>
            <ExternalLink
              href="https://www.linkedin.com/in/frances-l-hughes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </ExternalLink>
          </ListItem>
          <ListItem>
            <ExternalLink
              href="https://github.com/Frances-Hughes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </ExternalLink>
          </ListItem>
        </List>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
