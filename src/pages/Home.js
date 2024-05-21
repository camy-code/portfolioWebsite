// Home.js
import React from 'react';
// import {  Grid} from '@mui/material';

import PersonalCard from '../components/PersonalCard';
import { Grid } from '@mui/material';

function Home() {
  return (
    <Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
  style={{height:"90vh"}}
  backgroundColor="#E3C0D3"
>
  <Grid item> <PersonalCard/></Grid>



</Grid>
 
  );
}

export default Home;
