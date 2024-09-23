// Footer.js
import React from 'react';
import { Typography, Container, Grid, Button} from '@mui/material';
import { Link } from 'react-router-dom';

import { useAuth } from '../services/AuthContext';
import { auth } from '../services/firebase';
import { useState } from "react";
import { signOut } from "firebase/auth"

function Footer() {
  const {currentUser} = useAuth();
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
    <footer style={{ backgroundColor: '#227c9d', color: '#fff', padding: '1vh', marginTop: 'auto'}}>
      <Container maxWidth="md" style={{  justifyContent: 'row', alignItems: 'center', height: '100%' }}>
     
   
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>




<Grid item>
{currentUser? (<Button color='inherit' variant='text' onClick={handleClick}>Log out</Button>):(<Button color="inherit" component={Link} to="/login" variant="text">Admin</Button>)}
    
    </Grid>

    </Grid>
  

      </Container>
    </footer>
  );
}

export default Footer;
