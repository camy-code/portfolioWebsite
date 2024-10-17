import { Grid, Box, Typography, CardActionArea, Card, Fade } from "@mui/material"
import JustLine from "../components/JustLine"
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

import { useState,useEffect } from "react";
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../services/firebase";
import MarkdownRenderer from "../components/MarkDownRenderer";

function sleep(ms) { // This is the sleep function
  return new Promise(resolve => setTimeout(resolve, ms));
}

const IndBlog = () => {
// So it looks like I need to do this for the other args
  const { blogId } = useParams();
  const id = decodeURIComponent(blogId);
 
  
  const navigate =useNavigate();

  const handleClick = () => {
    navigate("/blog")
  }

  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true); // Maybe we need to get this here
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchBlogPost = async () => {
     
      try {
        const blogDocRef = doc(db, 'blogPosts', id);
        const blogDoc = await getDoc(blogDocRef);
        if (blogDoc.exists()) {
          setBlogPost(blogDoc.data());
          sleep(1500);
          setLoading(false);
        } else {
          setError('Blog post not found');
        }
      } catch (err) {
        setError('Error fetching blog post: ' + err.message);
      } 
    };
   
    fetchBlogPost();
  }); // So this needs to be empty?

  if (loading) {
    return  <div style={{ height:"100vh" }}></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

return <>

{/* <JustLine /> */}
<Fade in={!loading } timeout={1500}>
  <div>
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

    <Typography variant="h3" sx={{fontSize:"3rem", color: '#333'}}>{blogPost.title}</Typography>
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
                objectFit: 'none',
                height: '100%',
                width: '100%',
                
              }}
              alt="The house from the offer."
              src={blogPost.imageUrl}
            />
            </Box>
</Grid>



<Grid item>
    <Box sx={{width:'80vh'}}>
     <MarkdownRenderer content={blogPost.post}/>
    </Box>
    </Grid>
</Grid>
<JustLine />



</div>
</Fade>
</>


}


export default IndBlog



