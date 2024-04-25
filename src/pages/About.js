// About.js
import React from 'react';
import { Grid } from '@mui/material';
import Profile from "../components/Profile";
import Education from "../components/Education";
import Teach from "../components/Teach"
import Hobbies from "../components/Hobbies"
const About=()=> {
  return (
<Grid
  container
  direction="column"
 
>
    <Grid item backgroundColor="#ffcb77" > <Profile/> </Grid> {/* This is my profile page */}

    <Grid item backgroundColor="#E3C0D3" > <Education/></Grid> {/* This is my profile page */}

    <Grid item backgroundColor="#f7f7ff"> <Teach/></Grid>
    
    <Grid item  backgroundColor="#f7f7ff" paddingBottom={3}> <Hobbies/></Grid>

</Grid>
  );
}

export default About;
// TODO: add a clean mapping function so it looks like very small code