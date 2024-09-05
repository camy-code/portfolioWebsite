import { Button,  Grid, Typography } from "@mui/material"
import { signOut } from "firebase/auth"
import { auth } from '../services/firebase';
import { useState } from "react";

import { Link } from 'react-router-dom';

import {JustLine} from "../components/JustLine"
import BlogAdmin from "../components/BlogAdmin";
import ProjAdmin from "../components/ProjAdmin";
import PersonalAdmin from "../components/PersonalAdmin";

const Dashboard = ()  => {
    



    return <>
  
  
  <Grid container direction={"column"} spacing={4} justifyContent={"flex-start"} alignItems={"center"} marginTop={3} marginBottom={3}>

  <Grid item><Typography variant="h4" sx={{marginLeft:"25vh", marginRight:"75vh"}}>Blogs</Typography></Grid>

  <Grid item> <BlogAdmin/></Grid>

  <Grid item> <Typography variant="h4" sx={{marginLeft:"25vh", marginRight:"75vh"}}>Projects</Typography></Grid>

  <Grid item><ProjAdmin/></Grid>

  <Grid item> <Typography variant="h4" sx={{marginLeft:"25vh", marginRight:"75vh"}}>Personal</Typography></Grid>

  <Grid item> <PersonalAdmin/></Grid>

  <Grid item>
  <Grid item container direction={"row"} spacing={2}>
    <Grid item><Button variant="outlined" style={{  backgroundColor: "#ffcb77", color: "black" }} component={Link} to="/writeproj" >Create Project</Button></Grid>
    <Grid item> <Button variant="outlined" style={{  backgroundColor: "#40E0D0", color: "black" }} component={Link} to="/writeblog">Create Blog</Button></Grid>
    <Grid item> <Button variant="outlined" style={{  backgroundColor: "orange", color: "black" }} component={Link} to="/writepersonal" >Create Personal</Button></Grid>

    <Grid item> <Button variant="outlined" style={{  backgroundColor: "red", color: "black" }} component={Link} to="/edithomepage">Edit homepage</Button></Grid>
  </Grid>
  </Grid>

  </Grid>
  </>
}

export default Dashboard
// This is just a dummy page to 
// Look into conditional rendering but later, you need to stay focoused