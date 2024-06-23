import { Button,  Grid } from "@mui/material"
import { signOut } from "firebase/auth"
import { auth } from '../services/firebase';
import { useState } from "react";

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

    return <Grid container direction={"column"} justifyContent={"flex-start"} alignContent={"center"}>
        <Grid item><h1>Hello from dashboard</h1></Grid>
        <Grid><Button onClick={handleClick}>Log out</Button></Grid>
    </Grid>

}

export default Dashboard
// This is just a dummy page to 
// Look into conditional rendering but later, you need to stay focoused