// About.js
import React from 'react';
import { Grid, Fade } from '@mui/material';
import Profile from "../components/Profile";

// We need to maybe delete these later
import Education from "../components/Education";
import Teach from "../components/Teach"
import Hobbies from "../components/Hobbies"

import JustLine from '../components/JustLine';
const About=()=> {
  return (
    <Fade in={true} timeout={1500}>
<Grid
  container
  direction="column"
 
 
>
    <Grid item  > <Profile/> </Grid> {/* This is my profile page */}

   <Grid item> <JustLine/></Grid>

   <Grid item> <Hobbies/></Grid>

   

</Grid>
</Fade>
  );
}

export default About;
// TODO: add a clean mapping function so it looks like very small code