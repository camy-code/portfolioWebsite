import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ projectId,  title, image, desc, link}) => { 

  const navigate =useNavigate();
  

  const handleClick = () => {
    const encodedProjID = encodeURIComponent(projectId);
    navigate(link+`${encodedProjID}`); // so now we move this over
  };

  return (
    <Card sx={{  maxWidth: '100%',width:"100%", margin: ' auto' }}>
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
          {desc}
        </Typography>
      </CardContent>
      
       
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
