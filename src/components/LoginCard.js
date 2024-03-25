// ContactBox.js
import React from 'react';
import { Paper, Typography, TextField, Grid, Button } from '@mui/material';
// I need to make this with react parts to think
function LoginCard() {
  return (
    <Paper  style={{ padding: '50px', width:'50%', backgroundColor:"#EAE8EB", borderRadius:"20px"}}>
      <Typography variant="h6" gutterBottom>
        Login
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
   
        <Grid item xs={12}>
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password" // Use type="password" to display asterisks (*)
          />
        </Grid>
    
      </Grid>
      <Button variant="contained"  style={{ marginTop: '20px', backgroundColor: "#ffcb77", color:"black" }}>
        Login
      </Button>
    </Paper>
  );
}

export default LoginCard;
