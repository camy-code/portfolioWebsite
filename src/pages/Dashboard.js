import { Button,  Grid } from "@mui/material"

const Dashboard = ()  => {
    const handleClick = () =>{
        console.log("LOG OUT!")
    }

    return <Grid container direction={"column"} justifyContent={"flex-start"} alignContent={"center"}>
        <Grid item><h1>Hello from dashboard</h1></Grid>
        <Grid><Button onClick={handleClick}>Log out</Button></Grid>
    </Grid>

}

export default Dashboard
// This is just a dummy page to 
// Look into conditional rendering but later, you need to stay focoused