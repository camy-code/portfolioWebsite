// src/components/BlogCard.js

import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Button, Typography, Collapse } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blogId,  title, image, desc }) => {
  const navigate =useNavigate();

  const handleClick = () => {
    const encodedTitle = encodeURIComponent(title);
    navigate(`/blog/${blogId}/${encodedTitle}`);
  };

  return ( <Card sx={{ backgroundColor: "blue", maxWidth: '100%',width:"100%", margin: ' auto' }}>
    <CardActionArea onClick={handleClick}>
    <CardMedia
      component="img"
      height="400" // May need to change this to scale
      image={image}
      alt={title}
    />
     <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {desc} helesloe flsefo l
      </Typography>
    </CardContent>
    
     
    </CardActionArea>
  </Card>
  );
};

export default BlogCard;
