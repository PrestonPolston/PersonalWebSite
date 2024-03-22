import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  List,
  Drawer,
  ListItem,
} from "@mui/material";
import { useState } from "react";
import ListTwoToneIcon from "@mui/icons-material/ListTwoTone";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = (open) => {
    setOpen(open);
  };

  return (
    <div>
      <Box>
        <AppBar position="fixed" elevation={16}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => openDrawer(true)}
              sx={{ mr: 2 }}
            >
              <ListTwoToneIcon fontSize="large" />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer open={open} onClick={() => setOpen(false)}>
          <Box>
            <List>
              <ListItem>Home</ListItem>
              <ListItem>About Me</ListItem>
              <ListItem>Contact Me</ListItem>
              <ListItem>Resume</ListItem>
              <ListItem>My Projects</ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>
    </div>
  );
};
export default NavBar;
