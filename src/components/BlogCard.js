// src/components/BlogCard.js

import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Collapse } from '@mui/material';

const BlogCard = ({ blogId,  title, image, desc, content }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{  width: '100%', maxWidth: '100%', margin: 2 }} >
      <CardMedia
        component="img"
        height="200" // May need to change this to scale
        image={image}
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
      <CardActions>
        <Button size="small" onClick={handleExpandClick}>
          {expanded ? "Collapse" : "Read More"}
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{content}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default BlogCard;
