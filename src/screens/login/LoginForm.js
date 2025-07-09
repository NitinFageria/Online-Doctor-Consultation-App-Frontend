import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { postRequest } from '../../util/fetch';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await postRequest({
        url: 'http://localhost:8080/auth/login',
        data: formData
      });

      console.log("Login successful", response);
      // Add logic to handle successful login, e.g., redirecting to another page
    } catch (error) {
      console.error("Login failed", error);
      // Add logic to handle login failure, e.g., displaying an error message
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '14px'}}>
      <Grid container spacing={2} justifyContent="center" width={'50%'}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            variant="standard"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            variant="standard"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
