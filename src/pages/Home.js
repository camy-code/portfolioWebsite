// Home.js
import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

function Home() {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            Welcome to My Website
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <img
              src="/path/to/scenery.jpg"
              alt="Scenery"
              style={{ width: '100%', borderRadius: '5px' }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <img
                  src="/path/to/person.jpg"
                  alt="Person"
                  style={{ width: '100%', borderRadius: '50%' }}
                />
              </Grid>
              <Grid item xs={12} sm={9}>
                <Typography variant="h6" gutterBottom>
                  John Doe
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
