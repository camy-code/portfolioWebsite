import React from 'react';
import { Typography,Card,CardContent, Grid,List,ListItem ,Box} from '@mui/material';

const words = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed fesfesfesfsef esf es fesf esf esfes fes f d."

const Teach = () => {
  return (
  <Grid container
  
  direction="row"
  justifyContent="center"
  alignItems="flex-start"
  marginTop={3}
  paddingBottom={3}
  
  >
    


    <Grid item> <Box sx={{width:400, height:150}}><Typography align='left' variant='h4'>Teach</Typography> 
    <Typography variant='body'>{words}</Typography>
    
    </Box> 
   
  </Grid>


  <Grid item >
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

  </Grid>
  );
};

export default Teach;
