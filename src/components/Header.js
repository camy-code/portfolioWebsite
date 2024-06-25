// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button,Box } from '@mui/material';

import { useAuth } from '../services/AuthContext';

function Header() {
  const { currentUser } = useAuth();

  return (
    <AppBar position="static" sx={{backgroundColor:'#227c9d'}}>
      <Toolbar>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
          Cam Warburton
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>

        {currentUser?  (<Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>):(null)}

      </Toolbar>
    </AppBar>
  );
}

export default Header;
