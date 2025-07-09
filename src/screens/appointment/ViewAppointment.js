import React from 'react';
import Modal from '../../common/Modal/Modal';
import { Grid, Typography } from '@mui/material';

const ViewAppointment = ({ isOpen, closeIsOpen, viewDetails }) => {
  const {
    firstName = "",
    lastName = "",
    speciality = "",
    dob = "",
    address = {
      id: "",
      addressLine1: "",
      addressLine2: "-45.85534, 146.33318",
      city: "Patalillo",
      state: "San José",
      postcode: "L2S 2T0"
    },
    mobile = "16030728 0891",
    emailId = "malesuada@lacusMaurisnon.com",
    pan = "KAR90SJR5KQ",
    highestQualification = "MDS",
    college = "Enim Consequat Purus LLC",
    totalYearsOfExp = 20,
    rating = 5
  } = viewDetails;
  
  return (
    <div>
      {isOpen && (
        <Modal isOpen={isOpen} onRequestClose={closeIsOpen} customStyles={{ width: '50%' }}>
          <div>
            <header className='login-header'>
              <Typography variant="h5" style={{ color: 'white' }}>Doctor's Details</Typography>
            </header>
            <body>
              <div style={{ padding: '20px', textAlign: 'start', margin: '15px' }}>
                <Grid container spacing={2} justifyContent="center" width={'50%'}>
                  <Grid item xs={12}>
                    <Typography variant="body1">Doctor’s Name: Dr. {firstName} {lastName}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">Total Experience: {totalYearsOfExp} years</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">Speciality: {speciality}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">Date of Birth: {dob}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">City: {address.city}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">Email: {emailId}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">Mobile: {mobile}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h5" component="div">
                      Rating: {Array.from({ length: rating }, (_, index) => (
                        <span key={index} style={{ fontSize: '100%', color: 'orange' }}>
                          &#9733;
                        </span>
                      ))}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </body>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ViewAppointment;
