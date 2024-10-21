// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button,IconButton, ListItem, List, ListItemText,Drawer } from '@mui/material';

import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';



import { useNavigate } from 'react-router-dom';

import { useAuth } from '../services/AuthContext';
import { useState } from 'react';

function Header() {
  const { currentUser } = useAuth();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Adjust based on screen size


  // Gotta do the drawer stuff

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const closeDrawer = () => {
    setDrawerOpen(false); // Making sure its closed
  }

  const drawerContent = (
    <List>
      <ListItem onClick={closeDrawer} component={Link} to="/" sx={{ color: 'white' }}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem  onClick={closeDrawer} component={Link} to="/project" sx={{ color: 'white' }}>
        <ListItemText primary="Projects" />
      </ListItem>
      <ListItem onClick={closeDrawer} component={Link} to="/blog" sx={{ color: 'white' }}>
        <ListItemText primary="Blog" />
      </ListItem>
      <ListItem  onClick={closeDrawer} component={Link} to="/about" sx={{ color: 'white' }}>
        <ListItemText primary="About" />
      </ListItem>
      {currentUser && (
        <ListItem  onClick={closeDrawer} component={Link} to="/dashboard" sx={{ color: 'white' }}>
          <ListItemText primary="Dashboard" />
        </ListItem>
      )}
    </List>
  );


  return (
    <>
    <AppBar position="static" sx={{ backgroundColor: '#227c9d' }}>
    <Toolbar>
      {/* Title */}
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Cam Warburton
      </Typography>

      {/* Conditionally render buttons or a menu icon based on the screen size */}
      {isSmallScreen ? (
        // On smaller screens, show a menu icon
        <IconButton color="inherit" edge="end" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      ) : (
        // On larger screens, show the navigation buttons
        <>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/project">Projects</Button>
          <Button color="inherit" component={Link} to="/blog">Blog</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          {currentUser && (
            <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
          )}
        </>
      )}
    </Toolbar>
  </AppBar>

  <Drawer
    PaperProps={{
      sx: { backgroundColor: '#227c9d' } // Drawer background and text color
    }}
        anchor="top" // You can set it to "right", "top", or "bottom" if you want
        open={drawerOpen} // Open state
        onClose={toggleDrawer(false)} // Close the drawer when clicked outside
      >
        {drawerContent} {/* The list of navigation links */}
      </Drawer>
  </>
  );
}

export default Header;
