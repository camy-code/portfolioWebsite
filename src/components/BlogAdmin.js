import { Typography, Box, Card, CardMedia, IconButton, CardContent, Grid} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState,useEffect } from "react";

import { collection, getDocs } from 'firebase/firestore';
import { db } from "../services/firebase";

const blogPosts = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      title: 'Post 1',
      description: 'This is the description for post 1.',
      content: 'This is the detailed content of post 1. Lorem ipsum dolor sit amet...'
    },
    {
        id: 1,
        image: 'https://via.placeholder.com/150',
        title: 'Post 35434',
        description: 'This is the description for post 1.',
        content: 'This is the detailed content of post 1. Lorem ipsum dolor sit amet...'
      }
   
    // Add more posts as needed
    // This is going to take some work to change with firebase so we will add later
  ];


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
     {post.id}
   </Typography>
 </CardContent>

 <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
   <IconButton aria-label="edit">
     <EditIcon />
   </IconButton>
   <IconButton aria-label="delete">
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