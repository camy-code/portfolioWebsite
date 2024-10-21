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

  // The following is the items we need
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [imgUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchBlogPost = async () => {
     
      try {
        const blogDocRef = doc(db, 'blogPosts', id);
        const blogDoc = await getDoc(blogDocRef);
        if (blogDoc.exists()) {
          setBlogPost(blogDoc.data());
          if (blogPost!=null) {
            setTitle(blogPost.title);
            setPost(blogPost.post);
            setImageUrl(blogPost.imageUrl)
          }

          sleep(250);
          setLoading(false);
          sleep(250);
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
<Fade in={!loading} timeout={750}>
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
    <Card sx={{padding:3, backgroundColor:"#F6F8FF", borderRadius:5, "&:hover":{borderRadius:5, backgroundColor:"#E1E5F2", padding:3}}}>
      
        <Typography variant="h6">Go Back</Typography>
      
    </Card>
    </CardActionArea>
  </Grid>

</Grid>


<Grid container direction={'column'} justifyContent={'flex-start'} alignItems={'center'}
marginBottom={3}  sx={{width:{xs:"95%", md:"100vw"}}} marginTop={1}>

<Grid item marginBottom={1}>

    <Typography variant="h3" sx={{fontSize:{xs:"2rem" ,md:"3rem"}, color: '#333'}}>{title}</Typography>
   
    </Grid>



<Grid item > 
<Box   
            display="flex"
            justifyContent="center"
            alignItems="center"
            
            sx={{width:{xs:"95%", md:"755px"}, height:{xs:"55%", md:"471px"}}}>
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
    <Box sx={{width:{xs:"85vw", md:"755px"}}}>
      {/* This is where we change to markdown */}
      
    <MarkdownRenderer content={post}/>
    </Box>
    </Grid>
</Grid>
<JustLine />
</div>
</Fade>

</>


}


export default IndBlog



