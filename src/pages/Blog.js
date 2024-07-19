// src/components/Blog.js

import React from 'react';

import { Container, Grid, Typography } from '@mui/material';
import BlogCard from '../components/BlogCard';
import JustLine from '../components/JustLine';

import { useState,useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../services/firebase";

const blogPosts = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    title: 'Post 1',
    description: 'This is the description for post 1.',
    content: 'This is the detailed content of post 1. Lorem ipsum dolor sit amet...'
  }
 
  // Add more posts as needed
  // This is going to take some work to change with firebase so we will add later
];

const Blog = () => {
  const [blogPosts, setBlogs] = useState([]);

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



  return (
    <Grid container marginBottom={2}>
      <Grid container direction="column" justifyContent="flex-start" alignItems="center" backgroundColor="red" paddingTop={15} paddingBottom={5} marginBottom={4}>
        <Grid item>
          <Typography variant='h2'>Blog</Typography>
        </Grid>
        <Grid item>
          <Typography variant='h5'>Ideas to share</Typography>
        </Grid>
      </Grid>

     <JustLine/>

      <Container>
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={4}>
          {blogPosts.map((post, index) => (
            <Grid item key={index} xs={12}  md={8} width={'90vh'}>
              <BlogCard
                blogId={post.id}
                image={post.image}
                title={post.title}
                desc={post.desc}
                content={post.content}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <JustLine /> 
    </Grid>
  );
};

export default Blog;

// We need to work on projects now 
