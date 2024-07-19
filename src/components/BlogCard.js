// src/components/BlogCard.js

import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Button, Typography, Collapse } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blogId,  title, image, desc }) => {
  const navigate =useNavigate();

  const handleClick = () => {
    const encodedblogId = encodeURIComponent(blogId);
    navigate(`/blog/${encodedblogId}`);
  };

  return ( <Card sx={{ backgroundColor: "blue", maxWidth: '100%',width:"100%", margin: ' auto' }}>
    <CardActionArea onClick={handleClick}>
    <CardMedia
      component="img"
      height="400" // May need to change this to scale
      image={'https://via.placeholder.com/150'}
      alt={title}
    />
     <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {desc} 
      </Typography>
    </CardContent>
    
     
    </CardActionArea>
  </Card>
  );
};

export default BlogCard;
