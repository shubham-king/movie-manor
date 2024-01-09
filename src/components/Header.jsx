// Header.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Tabs,
  Tab,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import DrawerComp from "./DrawerComp";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
    marginBottom: theme.spacing(1.5),
    marginTop: theme.spacing(1.5),
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Header({ links, darkMode, toggleDarkMode }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleDarkModeToggle = () => {
    toggleDarkMode();
  };

  const handleTabClick = (index, route) => {
    setValue(index);
    const targetRoute =
      route.toLowerCase() === "home" ? "/" : route.toLowerCase();
    navigate(targetRoute);
  };

  return (
    <>
      <AppBar
        sx={{
          backgroundImage: `linear-gradient(45deg, ${
            darkMode ? "rgba(5,49,60,1)" : "rgba(0,143,180,1)"
          } 10%, ${darkMode ? "rgba(5,49,60,1)" : "rgba(0,143,180,1)"} 54%)`,
        }}
      >
        <Toolbar>
          {isMatch ? (
            <>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <DrawerComp links={links} />
                <Grid item xs={1}>
                  <IconButton color="inherit" onClick={handleDarkModeToggle}>
                    {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                  </IconButton>
                </Grid>
                <Grid item xs={5}>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>
                </Grid>
              </Grid>
            </>
          ) : (
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={1}>
                <IconButton color="inherit" onClick={handleDarkModeToggle}>
                  {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Grid>
              <Grid item xs="auto" md={8}>
                <Tabs
                  indicatorColor="secondary"
                  textColor="inherit"
                  value={value}
                  onChange={(e, val) => setValue(val)}
                >
                  {links.map((link, index) => (
                    <Tab
                      key={index}
                      label={link}
                      onClick={() => handleTabClick(index, link.toLowerCase())}
                    />
                  ))}
                </Tabs>
              </Grid>
              <Grid item xs={3}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
