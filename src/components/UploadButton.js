import React from 'react';
import { useDropzone } from 'react-dropzone';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const UploadButton = ({ onFileUpload, words}) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      onFileUpload(acceptedFiles);
    },
  });

  return (
    <Box
      {...getRootProps()}
     
    >
      <input {...getInputProps()} />
     
      <Button variant="contained" color="primary" sx={{ marginTop: '10px' }}>
        {words}
      </Button>
    </Box>
  );
};

export default UploadButton;

// Tommorow make some text box's then we can figure out what to do from there!