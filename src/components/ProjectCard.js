import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ projectId, title, image, desc, link }) => { 
  const navigate = useNavigate();

  const handleClick = () => {
    const encodedProjID = encodeURIComponent(projectId);
    navigate(link + `${encodedProjID}`); // Navigate to the project link
  };

  return (
    <Card sx={{ maxWidth: '100%', width: { xs: '100%', sm: '90%', md: '80%' }, margin: 'auto', boxShadow: 3 }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          height="auto" // Allow height to adjust automatically
          sx={{ aspectRatio: '16/9', objectFit: 'cover' }} // Maintain aspect ratio
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem' } }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
