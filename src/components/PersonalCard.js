import { Link } from 'react-router-dom';
import { Grid, Box, Typography, Button, Fade } from "@mui/material";
import { useState, useEffect } from 'react';
import { db } from "../services/firebase";
import { collection, getDocs } from 'firebase/firestore';
import { color } from 'framer-motion';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const CreateButton = ({ title, Mycolor, myLink }) => {
  return (
    <Button
      component={Link}
      to={myLink}
      sx={{
        width: { xs: 80, sm: 110 }, // Dynamic button size
        height: { xs: 80, sm: 110 },
        background: Mycolor,
        '&:hover': {
          backgroundColor: "#F6F8FF",
        },
        borderRadius: 75,
        color: "#000000",
        border: "2px solid black"
      }}
    >
      {title}
    </Button>
  );
};

const PersonalCard = () => {
  const [name, setName] = useState("");
  const [prompt, setPrompt] = useState("");
  const [desc, setDesc] = useState("");
  const [imgUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [personal_array, setPersonal] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileCollection = collection(db, 'profile');
        const profileSnapshot = await getDocs(profileCollection);
        const profileList = profileSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPersonal(profileList[0]);
      } catch (error) {
        console.error('Error fetching profile', error);
      } finally {
        
        setLoading(false);
        await sleep(450); // Just add some more sleep just in case
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    if (personal_array !== null) {
      setName(personal_array.name);
      setPrompt(personal_array.prompt);
      setDesc(personal_array.bio);
      setImageUrl(personal_array.imageUrl);
    }
  }, [personal_array]);

  if (loading) {
    return;
  }

  return (
    <Fade in={!loading} timeout={1750}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={6}
        sx={{ paddingX: { xs: 2, sm: 0 } }} // Add padding on smaller screens
      >
        <Grid item>
          <Box
            component="img"
            sx={{
              height: { xs: "30vh", sm: "50vh" }, // Dynamic height based on screen
              width: { xs: "30vh", sm: "50vh" },
              minWidth: 25,
              minHeight: 25,
              borderRadius: "50%",
              border: 3,
              marginTop: 3,
            }}
            alt="My profile image"
            src={imgUrl}
          />
        </Grid>

        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          sx={{ width: { xs: "100%", sm: "60vh" } }} // Responsive width
        >
          <Grid item>
            <Typography variant="h4" sx={{ fontSize: { xs: "h5.fontSize", sm: "h3.fontSize" } }}>
              {name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" sx={{ fontSize: 25 }}>
              {prompt}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" sx={{ fontSize: 20 }}>
              {desc}
            </Typography>
          </Grid>

          <Grid
            container
            item
            direction= {"row"} // Stack buttons vertically on smaller screens
            spacing={2}
            alignItems="center"
            marginTop={3}
            marginBottom={4}
          >
            <Grid item>
              <CreateButton Mycolor="#20a4f3" title="Projects" myLink="project" />
            </Grid>
            <Grid item>
              <CreateButton Mycolor="#39a8a8" title="Blog" myLink="blog" />
            </Grid>
            <Grid item>
              <CreateButton Mycolor="#f1a208" title="About" myLink="about" />
            </Grid>
          </Grid>

          

        </Grid>

      </Grid>
      
    </Fade>
  );
};

export default PersonalCard;
