import { Grid, Box, Typography,  CardActionArea, Card, Fade } from "@mui/material"
import JustLine from "../components/JustLine"
import {useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from "react";
// The following is latex shit we want to cook
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';

import { db, auth} from "../services/firebase";
import { doc, updateDoc, getDoc } from 'firebase/firestore';



// The following is the page for the individual project.

const IndProj = () => {
// So it looks like I need to do this for the other args
  const {  projectId } = useParams();
  const decodedID = decodeURIComponent(projectId);
  
  const navigate =useNavigate();

  const handleClick = () => {
    navigate("/project")
  }

  // TODO: Add the logic to fetch the post here!
  const [title, setTitle] = useState("Fetch error");
  const [imgUrl, setImageUrl] = useState(''); // https://via.placeholder.com/150
  const [post, setPost] = useState("");
  const [projPost, setprojPost] = useState(null);

  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    const fetchProjPost = async () => {
      try {
        setIsLoad(true);
        const blogDocRef = doc(db, 'projPost', decodedID);
        const blogDoc = await getDoc(blogDocRef);
        if (blogDoc.exists()) {
          setprojPost(blogDoc.data()); // Set the usestates here and we should not have a problem!
          
        } else {
          console.log("error")
        }
      } catch (err) {
        console.log("error")
      } finally {
        console.log("Done loading") // If this looks weird we may need do change this later
        setIsLoad(false);
      }
    };

    fetchProjPost();

  }, [decodedID]);

  useEffect(()=> {
    if (projPost!=null) {
      setTitle(projPost.title)
      setImageUrl(projPost.imageUrl)
      setPost(projPost.post)
      // Make sure to double check spelling of these letter if something doesnt work
    }
  },[projPost,projectId]);

if (isLoad) {
  return <h1></h1>
}

return <>
<Fade in={!isLoad} timeout={1500}>
<div>
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

    <Typography variant="h3">{title}</Typography>
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
              src={imgUrl}
            />
            </Box>
</Grid>



<Grid item>
    <Box sx={{width:'80vh'}}>
      <Typography alignItems={"center"} sx={{lineHeight:"2", fontSize:'16px'}}>
        {post}
    </Typography>
    </Box>
    </Grid>
</Grid>
<JustLine />
</div>
</Fade>

</>
}

export default IndProj

// This is the format we need for this and now we need to do react-router shit