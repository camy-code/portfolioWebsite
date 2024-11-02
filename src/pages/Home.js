import React from 'react';
import PersonalCard from '../components/PersonalCard';
import { Grid } from '@mui/material';
import JustLine from "../components/JustLine";

function Home() {
  return (
    <div style={{ }}>
      <JustLine />
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        paddingTop={10}
      >
        <Grid item>
          <PersonalCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
