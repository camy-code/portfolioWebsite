import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";

// The following are my images
import myImg1 from "../images/backlund.jpg"
import myImg2 from "../images/bike.jpeg" // For the second hobby
import myImg3 from "../images/write.jpg" // For the third hobby

const hobbies = [
  {title:"Hockey", 
    img:myImg1, 
    desc:`Watching and playing hockey is my favourite thing to do in the whole world! I started watching hockey when the best team in the NHL (Calgary Flames) made it to the second round back in the 2021-2022 season. After a few months of watching it, I went to my first pick-up floor hockey game, learned to skate and the rest is history. My biggest advice for new players who want to just score goals is to stand in front of the net and let the good players shoot the ball at you and ricochet into the net!
Number 11, Mikael Backlund, is my favourite player because he is a fighter just like me!`}, 
  {title: 
    "Cycling", 
    img:myImg2, 
    desc:"Cycling is one of my favourite things to do in the whole world. I started cycling in the spring of 2023 because I was tired of waiting for the bus; it has been one of my favourite ways to get around. I live on top of a hill, so the speed motivates my morning rides. Unfortunately, my motivation on the way home is not as keen! "}, 
  {title:"Writing", 
    img:myImg3, 
    desc:"Writing is one of my favourite activities to do because it helps me make sense of the world. A lot of people get the idea that one writes so others can read but the more and more I write the more I see it is about organizing one’s thoughts and facilitating clear thinking. In the world of tech, I think we can lose mindfulness sometimes and writing is how I remain mindful as well as articulate to myself and others."}
];



const MiniTalk = ({  title,DESC, theImg }) => {
  return (
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="flex-start"
    marginTop={7}
    
    spacing={10}
    >
        <Grid item paddingLeft={4} paddingRight={4} >
        <Box sx={{width:500}}>
            <Typography variant="h4">{title}</Typography>

        {DESC.toString().split("\n").map((para)=> <><Typography sx={{lineHeight:"2", fontSize:'16px'}}> {para}</Typography> 
        <br/></>)}
        
        </Box>
      </Grid>

      <Grid item>
        <Box
          component="img"
          sx={{
            height: 450,
            width: 600,
          }}
          alt="The house from the offer."
          src={theImg}
        />
      </Grid>

    
    </Grid>
  );
};

const Hobbies = () => {
  return (
    <>
  
      <Grid container direction="column" spacing={0} marginBottom={15}>
        {hobbies.map((hob)=> <Grid item>
          <MiniTalk  DESC={hob.desc} theImg={hob.img} title={hob.title}/>

        </Grid>)}

      </Grid>
    </>
  );
};
// The map statement makes things so much cleaner!
export default Hobbies;
