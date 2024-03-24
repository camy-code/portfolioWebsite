import { Grid, Typography,Box } from "@mui/material"

const words = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

function Profile() {
    
    return (<Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={3}
        marginTop={.5}
        paddingBottom={3}
      > 
      <Grid item marginRight={15}>
        <Box sx={{width:400
        }}>
            <Typography variant="h4" align="left">Cam Warburton</Typography>
<Typography variant="body1">{words}</Typography>
        </Box>
      </Grid>
      <Grid item >
      <Box
  component="img"
  sx={{
    height: 300,
    width: 300
    
  }}
  alt="The house from the offer."
  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
/> 
         </Grid>
      </Grid>)

}

export default Profile