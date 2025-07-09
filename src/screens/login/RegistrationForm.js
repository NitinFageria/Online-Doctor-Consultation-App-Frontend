// Registration form page section
import React, { useState } from 'react';
import { TextField, Button, Grid, Alert } from '@mui/material';
import { postRequest } from '../../util/fetch';

const RegistrationForm = ({closeRegistrationForm}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    password: '',
    mobile: '',
    dob: '',
    createdDate: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
    salt: 'abc'
  });

//   {
//     "firstName": "Renee",
//     "lastName": "Pradhan",
//     "dob": "06/01/2003",
//     "mobile": "9315017662",
//     "emailId": "renee.pradhan583@gmail.com",
//     "password": "renee_pradhan",
//     "createdDate": "18-03-2024",
//     "salt": "abc"
// }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();


    const parts = formData.dob.split('-');

    // Rearrange the parts in the desired format: MM/DD/YYYY
    const formattedDate = `${parts[1]}/${parts[0]}/${parts[2]}`;

    const payload = {...formData, dob: formattedDate }
    try {
      const response = await postRequest({
        url: 'http://localhost:8080/users/register',
        data: payload
      })

      console.log("Registration successful", response);
      closeRegistrationForm()

      // Add logic to handle successful registration, e.g., redirecting to another page
    } catch (error) {
      console.error("Registration failed", error);
      // Add logic to handle registration failure, e.g., displaying an error message
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '14px'}}>
      <Grid container spacing={2} justifyContent="center" width={'50%'}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="firstName"
            name="firstName"
            label="First Name"
            variant="standard"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="lastName"
            name="lastName"
            label="Last Name"
            variant="standard"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="emailId"
            name="emailId"
            label="Email"
            variant="standard"
            type="email"
            value={formData.emailId}
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
          <TextField
            fullWidth
            id="dob"
            name="dob"
            label="DOB"
            variant="standard"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="mobile"
            name="mobile"
            label="Mobile"
            variant="standard"
            type="number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </Grid>
      </Grid>
      {/* <Alert severity="success">Registration Successful</Alert> */}
    </form>
  );
};

export default RegistrationForm;
