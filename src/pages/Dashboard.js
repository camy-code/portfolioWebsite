import { Button,  Grid, Typography } from "@mui/material"
import { signOut } from "firebase/auth"
import { auth } from '../services/firebase';
import { useState } from "react";

import {JustLine} from "../components/JustLine"

const Dashboard = ()  => {
    const [error, setError] = useState(null);


    const handleClick = async (e) => {
        e.preventDefault();
        try {
          await signOut(auth);
          
        } catch (error) {
          setError(error.message);
        }
      };

    return <>
    <Grid
  container
  direction="column"
  justifyContent="flex-start"
  
>
  <Grid item sx={{backgroundColor:"red"}}>
    <Typography variant="h3" align="center" padding={3}>Welcome Cam</Typography>
    
     </Grid>    

</Grid>
    </>

}

export default Dashboard
// This is just a dummy page to 
// Look into conditional rendering but later, you need to stay focoused