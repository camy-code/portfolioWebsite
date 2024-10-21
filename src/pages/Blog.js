// src/components/Blog.js

import React from 'react';

import { Container, Grid, Typography, Fade } from '@mui/material';
import BlogCard from '../components/BlogCard';
import JustLine from '../components/JustLine';

import { useState,useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../services/firebase";

import ProjectCard from '../components/ProjectCard';

function sleep(ms) { // This is the sleep function
  return new Promise(resolve => setTimeout(resolve, ms));
}

const Blog = () => {
  const [blogPosts, setBlogs] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const blogCollection = collection(db, 'blogPosts');
        const blogSnapshot = await getDocs(blogCollection);
        const blogList = blogSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogList);
        sleep(250)
        setLoading(false);
        sleep(250)
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogs();
  }, []);

  if (isLoading) {
    return <h1></h1>
  }


  return (

    <Fade in={!isLoading} timeout={750}>
    <Grid container marginBottom={2} direction={"column"} >
            <Grid item container direction="column" justifyContent="flex-start" alignItems="center" backgroundColor="#F6F8FF" paddingTop={15} paddingBottom={5} >
          <Grid item>
            <Typography variant='h2'>Blog try</Typography>
          </Grid>
          {/* <Grid item>
            <Typography variant='h5'>Things I have worked on</Typography>
          </Grid> */}
        </Grid>
    
          <Grid item marginBottom={3}> <JustLine/></Grid>
  
  
          <Grid item container direction="column" justifyContent="center" alignItems="center" spacing={2}>
              {/* This is where we are going to put Project posts */}
              {blogPosts.map((post, index) => (
              <Grid item key={index} xs={12}  md={8} >
                  <ProjectCard
                      image={post.imageUrl}
                      projectId={post.id}
                      title={post.title}
                      desc={post.desc}
                      link = "/blog/"
                      />
              </Grid>
            ))}
          </Grid>
      
          <Grid item marginTop={3}> </Grid>
    
    
    </Grid> 
    </Fade>
  );
};

export default Blog;

// We need to work on projects now 
