import React from "react";
import {
  Box,
  Typography,
  Container,
  List,
  ListItem,
  Link,
  Grid,
} from "@mui/material";

const FooterContainer = (theme) => ({
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  margin: 0,
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0)" : "rgba(0,143,180,1)",
  color: theme.palette.primary.contrastText,
});

const Footer = () => {
  return (
    <Container>
      <Box component="footer" sx={(theme) => FooterContainer(theme)}>
        <Grid container spacing={5}>
          <Grid item xs={6} md={6}>
            <Typography variant="body2" color="white">
              <List>
                <ListItem>
                  <Link
                    href="https://www.linkedin.com/in/frances-l-hughes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="white"
                    underline="hover"
                  >
                    LinkedIn
                  </Link>
                </ListItem>
              </List>
            </Typography>
          </Grid>
          <Grid item xs={6} md={6}>
            <Typography variant="body2" color="white">
              <List>
                <ListItem>
                  <Link
                    href="https://github.com/Frances-Hughes"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="white"
                    underline="hover"
                  >
                    Github
                  </Link>
                </ListItem>
              </List>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
