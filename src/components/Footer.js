import React from 'react';
import { Container, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../services/AuthContext';
import { auth } from '../services/firebase';
import { useState } from "react";
import { signOut } from "firebase/auth";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer() {
  const { currentUser } = useAuth();
  const [error, setError] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <footer style={{ backgroundColor: '#227c9d', color: '#fff', padding: '1vh', marginTop: 'auto' }}>
      <Container maxWidth="md" style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item >
            <Grid container direction={"row"} justifyContent={"center"} alignItems={"flex-start"} spacing={3}>
              <Grid item><Button href='https://github.com/camy-code' target='_blank' rel="noopener noreferrer" sx={{color:"white"}}> <GitHubIcon/> </Button></Grid>
              <Grid item><Button  href='https://www.linkedin.com/in/camden-warburton-1bbb66333/' target='_blank' rel="noopener noreferrer" sx={{color:"white"}}><LinkedInIcon/> </Button></Grid> 
              {/* Update linkden! */}

            </Grid>
          </Grid>

          <Grid item>
            {currentUser ? (
              <Button color='inherit' variant='text' onClick={handleClick}>Log out</Button>
            ) : (
              <Button color="inherit" component={Link} to="/login" variant="text">Admin</Button>
            )}
          </Grid>
        
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
