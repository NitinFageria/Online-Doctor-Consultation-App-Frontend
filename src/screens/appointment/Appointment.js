import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { purple, red } from '@mui/material/colors';

const primary = red[500]; // #f44336


const Appointment = ({ doctorName = "", date = "", symptoms= '', priorMedicalHistory = '' }) => {
  return (
    <Card sx={{ minWidth: 100 }} style={{
      // border: '1px solid black',
      marginTop: '10px',
      boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
      width: '70%',
      padding: '8px'
    }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {doctorName}
        </Typography>
        <Typography variant="h5" component="div">
          Date: {date}
        </Typography>
        <Typography variant="h5" component="div">
          Symptoms: {symptoms}
        </Typography>
        <Typography variant="h5" component="div">
          Prior Medical History: {priorMedicalHistory}
        </Typography>
      </CardContent>
      <div style={{ width: '100%' }}>
        <Button variant="contained">RATE APPOINTMENT</Button>
      </div>
    </Card>
  );
}

export default Appointment
