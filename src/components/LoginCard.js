// src/components/LoginCard.js

import React, { useRef, useState } from 'react';
import { Paper, Typography, TextField, Grid, Button } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function LoginCard() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Updated from useHistory to useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/'); // Updated from history.push to navigate
    } catch {
      setError('Failed to log in');
    }

    setLoading(false);
  };

  return (
    <Paper style={{ padding: '50px', width: '50%', backgroundColor: "#EAE8EB", borderRadius: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Login
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              inputRef={emailRef}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              inputRef={passwordRef}
              required
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          type="submit"
          disabled={loading}
          style={{ marginTop: '20px', backgroundColor: "#ffcb77", color: "black" }}
        >
          Login
        </Button>
      </form>
    </Paper>
  );
}

export default LoginCard;

// Camden.warburton@gmail.com
// 123456