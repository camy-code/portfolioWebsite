// Home.js
import React from 'react';
// import {  Grid} from '@mui/material';

import PersonalCard from '../components/PersonalCard';
import { Grid } from '@mui/material';

// ---- DELETE later
import { useAuth } from '../services/AuthContext';
// ----

function Home() {
  const { currentUser } = useAuth();


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

  
    {/* Please delete this later!  */}
  <Grid item ><h1>{currentUser ? (<h1>IN</h1>):(<h1>OUT</h1>)}</h1></Grid>



</Grid>
</div>
  );
}

export default Home;
