import { Grid, Box, Typography } from "@mui/material"
import JustLine from "../components/JustLine"
import { useParams } from "react-router-dom"

// The following is the page for the individual project.

const IndProj = () => {
// So it looks like I need to do this for the other args
  const { projectId, title } = useParams();
  const decodedTitle = decodeURIComponent(title);


return <>
<Grid container direction={'column'} justifyContent={'flex-start'} alignItems={'center'}
marginBottom={3}>

<Grid item marginTop={15}> 
<Box   margin={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="50vh"
            width='80vh'>
<Box // May need to change these settings but we are just trying to get everything on the page for now
              component="img"
              sx={{
                objectFit: 'cover',
                height: '100%',
                width: '100%',
                
              }}
              alt="The house from the offer."
              src='https://via.placeholder.com/150'
            />
            </Box>
</Grid>

<Grid item>

    <Typography variant="h3">{decodedTitle}</Typography>
    </Grid>

<Grid item>
    <Box sx={{width:'80vh'}}>
    <Typography variant="body1">This is my desc t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by acc</Typography>
    </Box>
    </Grid>
</Grid>
<JustLine />
</>


}


export default IndProj

// This is the format we need for this and now we need to do react-router shit