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
import myImg1 from "../images/desME.jpg" // For the first hobby
import myImg2 from "../images/desME.jpg" // For the second hobby
import myImg3 from "../images/desME.jpg" // For the third hobby

const hobbies = ["Hockey", "Cycling", "Picnics"];
const myURL =
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2";
const desc =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa massa ultricies mi quis hendrerit dolor. Sem viverra aliquet eget sit amet tellus. Egestas maecenas pharetra convallis posuere. Nunc id cursus metus aliquam eleifend mi. Velit aliquet sagittis id consectetur purus ut faucibus. Sollicitudin aliquam ultrices sagittis orci a. Eleifend quam adipiscing vitae proin sagittis. Pulvinar pellentesque habitant morbi tristique senectus et. Quis hendrerit dolor magna eget est lorem ipsum. Cursus turpis massa tincidunt dui ut ornare lectus sit amet.";
const title = "My title"
const MiniTalk = ({ URL, DESC, theImg }) => {
  return (
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="flex-start"
    marginTop={10}
    
    spacing={7}
    >
        <Grid item paddingLeft={4} paddingRight={4} >
        <Box sx={{width:500}}>
            <Typography variant="h4">{title}</Typography>
        <Typography> {DESC}</Typography>
        </Box>
      </Grid>

      <Grid item>
        <Box
          component="img"
          sx={{
            height: 400,
            width: 450,
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
  
      <Grid container direction="column" spacing={0} marginBottom={5}>
        <Grid item>
          <MiniTalk URL={myURL} DESC={desc} theImg={myImg1}/>
        </Grid>
        <Grid item>
          <MiniTalk URL={myURL} DESC={desc} theImg={myImg2}/>
        </Grid>
        <Grid item>
          <MiniTalk URL={myURL}  DESC={desc} theImg={myImg3}/>
        </Grid>
      </Grid>
    </>
  );
};

export default Hobbies;
