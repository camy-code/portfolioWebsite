import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';

const ProjectCard = ({ image, title, description, link }) => {

  return (
    <Card sx={{ backgroundColor: "blue", maxWidth: '80vh', margin: '0 auto' }}>
      <CardActionArea>
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
              src={image}
            />
          </Box>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
       
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
