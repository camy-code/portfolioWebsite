// Home.js
import React from 'react';
// import {  Grid} from '@mui/material';

import PersonalCard from '../components/PersonalCard';
import { Grid } from '@mui/material';

function Home() {
  return (
    <div  style={{ backgroundColor: '#E3C0D3' }}>
    <Grid
  container
  direction="column"
  justifyContent="flex-start"
  alignItems="center"
    padding={"auto"}

  backgroundColor="#E3C0D3"
  paddingTop={10}
>
  <Grid item> <PersonalCard/></Grid>



</Grid>
</div>
  );
}

export default Home;
