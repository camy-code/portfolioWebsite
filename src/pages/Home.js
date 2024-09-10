// Home.js
import React from 'react';
// import {  Grid} from '@mui/material';

import PersonalCard from '../components/PersonalCard';
import { Grid } from '@mui/material';

import { useEffect } from 'react';
import { doc, getDocs,updateDoc, collection} from 'firebase/firestore';

import { useState } from 'react';
import { db, auth} from "../services/firebase";
import JustLine from "../components/JustLine"

function Home() {

  // Set these use states to something useful later.
 

  return ( // Change the color in div backgroundColor:"red"
    <div  style={{  padding:"auto" ,  height:"90vh"}}> 
    <JustLine/>
    <Grid
  container
  direction="column"
  justifyContent="flex-start"
  alignItems="center"
    padding={"auto"}

 
  paddingTop={10}
>
  <Grid item> <PersonalCard /></Grid>

  




</Grid>
</div>
  );
}

export default Home;
