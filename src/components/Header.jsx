import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Tabs,
  Tab,
  Button,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useState } from "react";

function Header({ links }) {
  const [value, setValue] = useState();
  return (
    <>
      <AppBar>
        <Toolbar>
          <Grid container>
            <Grid item xs={2}>
              <Typography>
                <Brightness4Icon />
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Tabs
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
              >
                {links.map((link, index) => (
                  <Tab key={index} label={link} />
                ))}
              </Tabs>
            </Grid>
            <Grid item xs={2} />
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
