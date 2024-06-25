// Footer.js
import React from 'react';
import { Typography, Container, Grid, Button} from '@mui/material';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#227c9d', color: '#fff', padding: '1vh', marginTop: 'auto' }}>
      <Container maxWidth="md" style={{  justifyContent: 'row', alignItems: 'center', height: '100%' }}>
     
   
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>




<Grid item>
<Button color="inherit" component={Link} to="/login" variant="text">Admin</Button>
    
    </Grid>

    </Grid>
  

      </Container>
    </footer>
  );
}

export default Footer;
