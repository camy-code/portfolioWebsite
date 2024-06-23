// LoginCard.js
import React, { useState } from 'react';
import { Paper, Typography, TextField, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';

function LoginCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Paper style={{ padding: '50px', width: '50%', backgroundColor: "#EAE8EB", borderRadius: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
        </Grid>
        {error && <Typography color="error" variant="body2">{error}</Typography>}
        <Button type="submit" variant="contained" style={{ marginTop: '20px', backgroundColor: "#ffcb77", color: "black" }}>
          Login
        </Button>
      </form>
    </Paper>
  );
}

export default LoginCard;
