import { Typography, Box, Card, CardMedia, IconButton, CardContent, Grid} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState,useEffect } from "react";

import { collection, getDocs , deleteDoc, doc} from 'firebase/firestore';
import { db } from "../services/firebase";
import { useNavigate } from "react-router-dom";




const BlogAdmin = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogCollection = collection(db, 'blogPosts');
        const blogSnapshot = await getDocs(blogCollection);
        const blogList = blogSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogList);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogs();
  }, []);

  const deleteBlogPost = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        await deleteDoc(doc(db, 'blogPosts', id));
        setBlogs(blogs.filter(blog => blog.id !== id));
      } catch (error) {
        console.error('Error deleting document: ', error);
        alert('Error deleting blog post');
      }
    }
  };
// we can add some custom delete option that is more stylish later
const navigate = useNavigate();
const editBlog = (id) => {
  const encodedblogId = encodeURIComponent(id);
  navigate(`/editblog/${encodedblogId}`)
  
}

    return <>
<Box width={"100vh"}padding={3} sx={{backgroundColor:"grey",  borderRadius:"4px"}}>

    <Grid container spacing={3} direction={"column"}>
{blogs.map( (post) => (
    <Grid item>
 <Card  sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
 <CardMedia
   component="img"
   sx={{ width: 150, height: 150 }}
   image="https://via.placeholder.com/150"
   alt="Card Image"
 />
 <CardContent sx={{ flex: 1 }}>
   <Typography variant="h5" component="div">
     {post.title}
    
   </Typography>
 </CardContent>

 <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
   <IconButton aria-label="edit" onClick={ ()=> editBlog(post.id)}>
     <EditIcon />
   </IconButton>
   <IconButton aria-label="delete" onClick={()=> deleteBlogPost(post.id)}>
     <DeleteIcon  />
   </IconButton>
 </Box>
</Card>
</Grid>
))}
</Grid>
</Box>
</>
}

export default BlogAdmin;