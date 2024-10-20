import React, { useState } from "react";
import {
  Grid,
  
  Typography,
  Box,
  Fade,
} from "@mui/material";

import { useEffect } from "react";

// The following are my images


import { doc, getDocs,updateDoc, collection} from 'firebase/firestore';
import { db, auth} from "../services/firebase";
import JustLine from "./JustLine";
import MarkdownRenderer from "./MarkDownRenderer";

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
        <Box sx={{
  width: {
    xs: '90vw', // 90% of the viewport width on extra-small screens (mobile)
    md: 500,    // Fixed 500px width on medium screens and above (desktop)
  }
}}
padding={1}>
            <Typography variant="h4">{title}</Typography>


        <MarkdownRenderer content={DESC}/>
        
        </Box>
      </Grid>

      <Grid item>
        <Box
          component="img"
          sx={{
           // height: { xs: "30vh", sm: "70vh" }, // Dynamic height based on screen
            width: { xs: "90vw", sm: "50vh" },
            margin:{xs:-1}
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
          sleep(250);  // We may need to change this later
          setLoading(false)
          sleep(250);  // We may need to change this later
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
