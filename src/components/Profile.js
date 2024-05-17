import { Grid, Typography,Box, Divider } from "@mui/material"
import JustLine from "./JustLine"

const words = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

function Profile() {
    
    return (
    <Grid container 
    direction={"column"} 
    justifyContent={"flex-start"} 
    alignItems={"center"} 
    paddingTop={15} paddingBottom={5} 
    backgroundColor="red"
    
 >
      <Grid item><Typography variant="h2">Personal</Typography></Grid>
      <Grid item><Typography variant="h5">What I do with free time</Typography></Grid>

      
      
    </Grid>
  )

}

export default Profile