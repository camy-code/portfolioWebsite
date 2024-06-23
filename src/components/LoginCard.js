// src/components/LoginCard.js

import React, { useRef, useState } from 'react';
// import { Paper, Typography, TextField, Grid, Button } from '@mui/material';
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
      navigate('/dashboard'); // Updated from history.push to navigate

      console.log("-----")
      console.log("We got to the login page")
      console.log(passwordRef.current.value)
      console.log(emailRef.current.value)
      console.log("-----")

    } catch {
      setError('Failed to log in');
    }

    setLoading(false);
  };

  return (
    <div>
    <h2>Log In</h2>
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
      <input type="email" ref={emailRef} required placeholder="Email" />
      <br/>
      
      <input type="password" ref={passwordRef} required placeholder="Password" />
      <br/>
      <button disabled={loading} type="submit">Log In</button>
    </form>
  </div>
  );
}

export default LoginCard;

// Camden.warburton@gmail.com
// 123456