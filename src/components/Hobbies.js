import React, { useState } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Fade,
} from "@mui/material";

import { useEffect } from "react";

// The following are my images


import { doc, getDocs,updateDoc, collection} from 'firebase/firestore';
import { db, auth} from "../services/firebase";
import JustLine from "./JustLine";

function sleep(ms) { // This is the sleep function
  return new Promise(resolve => setTimeout(resolve, ms));
}


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
    // This looks like where we are going to put the database stuff

    const [isLoading, setLoading] =useState(false);
    const [hobbies, setHobbies] = useState([])

    useEffect(() => {
      const fetchBlogs = async () => {
        try {
          setLoading(true);
          const blogCollection = collection(db, 'personal');
          const blogSnapshot = await getDocs(blogCollection);
          const blogList = blogSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          setHobbies(blogList); // we are setting the post now
        } catch (error) {
          console.error('Error fetching profile', error);
        } finally {
          sleep(3000);  // We may need to change this later
          setLoading(false)
        }
      };
  
      fetchBlogs();
    }, []);



    if (isLoading) {
      return <div style={{ height:"100vh" }}></div>
    }

  return (
    <>
  <Fade in={!isLoading} timeout={1500}>
      <Grid container direction="column" spacing={0} marginBottom={15}>
        {hobbies.map((hob)=> <Grid item>
          <MiniTalk  DESC={hob.desc} theImg={hob.imageUrl} title={hob.title}/>

        </Grid>)}

      </Grid>
      </Fade>
      <JustLine/>
    </>
  );
};
// The map statement makes things so much cleaner!
export default Hobbies;
