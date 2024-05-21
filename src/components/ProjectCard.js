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
    <Card sx={{ backgroundColor: "blue", maxWidth: '80vh', margin: '0 auto' }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia>
          <Box 
            margin={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="30vh" // Adjust this as necessary to maintain aspect ratio
          >    
            <Box
              component="img"
              sx={{
                objectFit: 'cover',
                height: '100%',
                width: '100%'
              }}
              alt="The house from the offer."
              src='https://via.placeholder.com/150'
            />
          </Box>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Hello this is a temp spot as we try to get the pages working! 
          </Typography>
        </CardContent>
       
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
