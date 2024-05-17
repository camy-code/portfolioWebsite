// src/components/Blog.js

import React from 'react';

import { Container, Grid, Typography } from '@mui/material';
import BlogCard from '../components/BlogCard';
import JustLine from '../components/JustLine';



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
  {
    image: 'https://via.placeholder.com/150',
    title: 'Post 3',
    description: 'This is the description for post 3.',
    content: 'This is the detailed content of post 3. Lorem ipsum dolor sit amet...'
  },
  // Add more posts as needed
  // This is going to take some work to change with firebase so we will add later
];

const Blog = () => {
  return (
    <Grid container marginBottom={2}>
      <Grid container direction="column" justifyContent="flex-start" alignItems="center" backgroundColor="red" paddingTop={15} paddingBottom={5}>
        <Grid item>
          <Typography variant='h2'>Blog</Typography>
        </Grid>
        <Grid item>
          <Typography variant='h5'>Ideas to share</Typography>
        </Grid>
      </Grid>

      <JustLine /> 

      <Container>
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
          {blogPosts.map((post, index) => (
            <Grid item key={index} xs={12}  md={8} width={'90vh'}>
              <BlogCard
                image={post.image}
                title={post.title}
                description={post.description}
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

// We need to make these post more thick! 
