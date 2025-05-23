// ContactBox.js
import React from 'react';
import { Paper, Typography, TextField, Grid, Button } from '@mui/material';
// I need to make this with react parts to think
function ContactCard() {
  return (
    <Paper  style={{ padding: '20px', width:'50%', backgroundColor:"#EAE8EB", borderRadius:"20px"}}>
      <Typography variant="h6" gutterBottom>
        Contact
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
      </Grid>
      <Button variant="contained"  style={{ marginTop: '20px', backgroundColor: "#ffcb77", color:"black" }}>
        Submit
      </Button>
    </Paper>
  );
}

export default ContactCard;
