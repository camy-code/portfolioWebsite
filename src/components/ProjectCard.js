import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ projectId,  title, image, desc, content}) => { // Change these params later

  const navigate =useNavigate();

  const handleClick = () => {
    const encodedTitle = encodeURIComponent(title);
    navigate(`/project/${projectId}/${encodedTitle}`);
  };

  return (
    <Card sx={{ backgroundColor: "blue", maxWidth: '100%',width:"100%", margin: ' auto' }}>
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

export default ProjectCard;
