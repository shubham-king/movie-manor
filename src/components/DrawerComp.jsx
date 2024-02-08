import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link, useNavigate } from "react-router-dom";

function DrawerComp({ links }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    setOpen(false);
    const targetRoute =
      link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`;
    navigate(targetRoute);
  };

  return (
    <>
      <Drawer
        PaperProps={{
          sx: { backgroundColor: "rgba(0,0,0, 0.2)" },
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <List>
          {links.map((link, index) => (
            <ListItemButton
              onClick={() => handleLinkClick(link)}
              key={index}
              divider
            >
              <ListItemIcon>
                <ListItemText sx={{ color: "white" }}>{link}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
}

export default DrawerComp;
