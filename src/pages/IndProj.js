import { Grid, Box, Typography,  CardActionArea, Card } from "@mui/material"
import JustLine from "../components/JustLine"
import {useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

// The following is latex shit we want to cook
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';



// The following is the page for the individual project.

const IndProj = () => {
// So it looks like I need to do this for the other args
  const {  title } = useParams();
  const decodedTitle = decodeURIComponent(title);
  
  const navigate =useNavigate();

  const handleClick = () => {
    navigate("/project")
  }

return <>

<JustLine />
<Grid
  container
  direction="row"
  justifyContent="flex-start"
  alignItems="flex-start"
  marginLeft={4}
  marginTop={4}
>
  <Grid item>
  <CardActionArea onClick={handleClick}> 
    <Card sx={{padding:3, backgroundColor:"red", borderRadius:5, "&:hover":{borderRadius:5, backgroundColor:"blue"}}}>
      
        <Typography variant="h6">Go Back</Typography>
      
    </Card>
    </CardActionArea>
  </Grid>

</Grid>


<Grid container direction={'column'} justifyContent={'flex-start'} alignItems={'center'}
marginBottom={3}>

<Grid item>

    <Typography variant="h3">{decodedTitle}</Typography>
    </Grid>



<Grid item > 
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
    <Box sx={{width:'80vh'}}>
      <Typography alignItems={"center"} sx={{lineHeight:"2", fontSize:'16px'}}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
      but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<Latex>{`$x^2$`}</Latex>
    
    </Typography>
    </Box>
    </Grid>
</Grid>
<JustLine />



</>


}


export default IndProj

// This is the format we need for this and now we need to do react-router shit