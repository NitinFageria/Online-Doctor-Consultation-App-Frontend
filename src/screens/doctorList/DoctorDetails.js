import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { purple, red } from '@mui/material/colors';
import BookAppointment from './BookAppointment';
import { useState } from 'react';
import ViewAppointment from '../appointment/ViewAppointment';

const primary = red[500]; // #f44336


const DoctorDetails = ({ doctorName = "", speciality = "", rating, doctorData }) => {
  const [openAppointment, setOpenAppointment] = useState(false)
  const openAppointmentHandler = () => {
    setOpenAppointment(true)
  }

  const [openViewAppoint, setOpenViewAppoint] = useState(false)
  const openViewAppointment = () => {
    setOpenViewAppoint(true)
  }
  return (
    <>
      <Card sx={{ minWidth: 100 }} style={{
        // border: '1px solid black',
        marginTop: '10px',
        boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
        width: '70%',
        padding: '8px'
      }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Doctor Name: {doctorName.firstName} {doctorName.lastName}
          </Typography>
          <Typography variant="h5" component="div">
            Speciality: {speciality}
          </Typography>
          <Typography variant="h5" component="div">
            Rating: {Array.from({ length: rating }, (_, index) => (
              <span key={index} style={{ fontSize: '100%', color: 'orange' }}>
                &#9733;
              </span>
            ))}
          </Typography>
        </CardContent>
        <div style={{ width: '100%' }}>
          <Button variant="contained" onClick={openAppointmentHandler}>BOOK APPOINTMENT</Button>
          <Button style={{ background: primary, color: 'white', marginLeft: '6px' }} onClick={openViewAppointment}>VIEW DETAILS</Button>
        </div>
      </Card>
      {openAppointment && <BookAppointment appointList={doctorData} isOpen={openAppointment} closeIsOpen={() => { setOpenAppointment(false) }} />}
      {openViewAppoint && <ViewAppointment viewDetails={doctorData} isOpen={openViewAppoint} closeIsOpen={() => { setOpenViewAppoint(false) }} />}
    </>
  );
}

export default DoctorDetails
