import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";

const hobbies = ["Hockey", "Cycling", "Picnics"];
const myURL =
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2";
const desc =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa massa ultricies mi quis hendrerit dolor. Sem viverra aliquet eget sit amet tellus. Egestas maecenas pharetra convallis posuere. Nunc id cursus metus aliquam eleifend mi. Velit aliquet sagittis id consectetur purus ut faucibus. Sollicitudin aliquam ultrices sagittis orci a. Eleifend quam adipiscing vitae proin sagittis. Pulvinar pellentesque habitant morbi tristique senectus et. Quis hendrerit dolor magna eget est lorem ipsum. Cursus turpis massa tincidunt dui ut ornare lectus sit amet.";
const title = "My title"
const MiniTalk = ({ URL }) => {
  return (
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="flex-start"
    >
      <Grid item>
        <Box
          component="img"
          sx={{
            height: 300,
            width: 430,
          }}
          alt="The house from the offer."
          src={URL}
        />
      </Grid>

      <Grid item paddingLeft={4} paddingRight={4}>
        <Box sx={{width:400}}>
            <Typography variant="h5">{title}</Typography>
        <Typography> {desc}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

const Hobbies = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          {" "}
          <Typography variant="h4" align="center">
            Hobbies
          </Typography>
          
        </Grid>
      </Grid>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <MiniTalk URL={myURL} />
        </Grid>
        <Grid item>
          <MiniTalk URL={myURL} />
        </Grid>
        <Grid item>
          <MiniTalk URL={myURL} />
        </Grid>
      </Grid>
    </>
  );
};

export default Hobbies;
