// About.js
import React from 'react';
import { Grid } from '@mui/material';
import Profile from "../components/Profile";

// We need to maybe delete these later
import Education from "../components/Education";
import Teach from "../components/Teach"
import Hobbies from "../components/Hobbies"

import JustLine from '../components/JustLine';
const About=()=> {
  return (
<Grid
  container
  direction="column"
 
 
>
    <Grid item  > <Profile/> </Grid> {/* This is my profile page */}

   <Grid item> <JustLine/></Grid>

   <Grid item> <Hobbies/></Grid>

   <Grid item> <JustLine/></Grid>

</Grid>
  );
}

export default About;
// TODO: add a clean mapping function so it looks like very small code