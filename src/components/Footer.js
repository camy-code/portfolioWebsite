// Footer.js
import React from 'react';
import { Typography, Container } from '@mui/material';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px', marginTop: 'auto' }}>
      <Container maxWidth="md" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} My Website. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
