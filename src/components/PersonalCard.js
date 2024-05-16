
// The following code is the card with an imae and the "about me"
import { Link } from 'react-router-dom';
import { Grid, Box, Typography, Button } from "@mui/material"

const name = "Camden Warburton"
const desc = "I am a undergraduate student studying at the University of Calgary. I am interested in competitive programming as well as finding ways to make introductory discrete math easier to teach."


const CreateButton = ({title, Mycolor,myLink}) => {
    return (
    
 <Button component={Link} to={myLink} sx={{width:100, height:100, background:Mycolor,'&:hover': { // Customizes the hover state
    backgroundColor: "#FFFAFF"}, borderRadius:75, color:"#000000",border:"2px solid black"
    }}>
  {title}</Button>  
    )

}

const PersonalCard= () => {

return <>
<Grid container
direction={"row"}
justifyContent={"center"}
spacing={2}>
    <Grid item> 
    <Box
  component="img"
  sx={{
    height: 400,
    width: 400,
    minWidth: 100,
    minHeight: 100,
    borderRadius: 100,
    marginBottom: -15
  }}
  alt="The house from the offer."
  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
/> 
    </Grid>

    <Grid item container   
    direction="column"
  justifyContent="center"
  alignItems="flex-start"
  width={450}
  height={400}>
    
    <Grid item>
        <Typography variant="h4">{name}</Typography>
    </Grid>
    <Grid item>
        <Typography variant="h6">A bit about me</Typography>
    </Grid>
    <Grid item>
        <Typography variant="body1">{desc}</Typography>
    </Grid>


    </Grid>
</Grid>

<Grid container
direction={"row-reverse"}
spacing={3}
alignItems={"center"}
marginTop={-15}>
<Grid item > <CreateButton Mycolor="red" title="Resume" myLink="resume"/> </Grid>
<Grid item > <CreateButton Mycolor="red" title="Projects" myLink="project"/> </Grid> 
<Grid item > <CreateButton Mycolor="blue" title="Personal" myLink="about"/> </Grid>
<Grid item > <CreateButton Mycolor="orange" title="Blog" myLink="blog"/> </Grid> 
</Grid>

</>
}

export default PersonalCard;

// There is some error with your function here but it is time to go to bed.