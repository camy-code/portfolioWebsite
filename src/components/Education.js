import React from 'react';
import { Typography,Card,CardContent, Grid,List,ListItem ,Box} from '@mui/material';

const words = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed fesfesfesfsef esf es fesf esf esfes fes f d."

const Education = () => {
  return (
  <Grid container
  
  direction="row"
  justifyContent="center"
  alignItems="flex-start"
  marginTop={3}
  paddingBottom={3}
  
  >
    <Grid item marginRight={15}>
    <Box
  component="img"
  sx={{
    height: 150,
    width: 300
    
  }}
  alt="The house from the offer."
  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
  
/> 

         </Grid>


    <Grid item> <Box sx={{width:400, height:150}}><Typography align='center' variant='h4'>Education</Typography> 
    <Typography variant='body'>{words}</Typography>
    
    </Box> 
   
  </Grid>

  </Grid>
  );
};

export default Education;
