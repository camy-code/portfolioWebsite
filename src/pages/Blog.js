// src/components/Blog.js

import React from 'react';
import BlogCard from '../components/BlogCard';
import { Container, Grid } from '@mui/material';

const blogPosts = [
  {
    image: 'https://via.placeholder.com/150',
    title: 'Post 1',
    description: 'This is the description for post 1.',
    content: 'This is the detailed content of post 1. Lorem ipsum dolor sit amet...'
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Post 2',
    description: 'This is the description for post 2.',
    content: 'This is the detailed content of post 2. Lorem ipsum dolor sit amet...'
  },
  // Add more posts as needed
];

const Blog = () => {
  return (
    
      <Grid  container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2} >
        {blogPosts.map((post, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <BlogCard
              image={post.image}
              title={post.title}
              description={post.description}
              content={post.content}
            />
          </Grid>
        ))}
      </Grid>
    
  );
};

export default Blog;

{/* <BlogCard
image={post.image}
title={post.title}
description={post.description}
content={post.content}
/> */}
