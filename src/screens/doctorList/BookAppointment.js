import React, { useState } from 'react';
import Modal from '../../common/Modal/Modal';
import { Button, Grid, TextField } from '@mui/material';
// import { DatePicker, LocalizationProvider } from '@mui/lab';
// import AdapterDateFns from '@mui/AdapterDateFns'; // Import AdapterDateFns from @mui/lab/AdapterDateFns
import dayjs from 'dayjs';
// import { DatePicker } from '@mui/lab';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';

// import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import DatePicker from '../../common/DatePicker/DatePicker'
import TimeRangePicker from '../../common/TimeRangePicker/TimeRangePicker';

const BookAppointment = ({ isOpen, closeIsOpen, appointList }) => {

//   {
//     "id": "UUID-2",
//     "firstName": "Blossom",
//     "lastName": "Valentine",
//     "speciality": "PULMONOLOGIST",
//     "dob": "2021-09-16",
//     "address": {
//         "id": "UUID-2",
//         "addressLine1": "103-4867 Nullam Ave",
//         "addressLine2": "-45.85534, 146.33318",
//         "city": "Patalillo",
//         "state": "San José",
//         "postcode": "L2S 2T0"
//     },
//     "mobile": "16030728 0891",
//     "emailId": "malesuada@lacusMaurisnon.com",
//     "pan": "KAR90SJR5KQ",
//     "highestQualification": "MDS",
//     "college": "Enim Consequat Purus LLC",
//     "totalYearsOfExp": 20,
//     "rating": 5
// }

  const [formData, setFormData] = useState({
    doctorName: appointList.firstName + " "+appointList.lastName,
    lastName: '',
    emailId: appointList.emailId,
    password: '',
    time: '',
    dob: appointList.dob || new Date(), // Initialize dob with current date
    createdDate: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
    salt: 'abc',
    medicalHistory: '',
    symptoms: ''
  });

  const handleChange = (date) => { // Update handleChange to handle changes in date
    setFormData({
      ...formData,
      dob: date // Update dob with selected date
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = { ...formData };
    try {
      // Add logic to handle form submission
    } catch (error) {
      console.error("Submission failed", error);
      // Add logic to handle submission failure, e.g., displaying an error message
    }
  };

  const onDateChange = (data) => {
    handleChange(data)
    console.log("onChange date data", data);
  }
  return (
    <div>
      {isOpen && <Modal isOpen={isOpen} onRequestClose={closeIsOpen} customStyles={{ width: '50%' }}>
        <div style={{}}>
          <header className='login-header'>
            <div style={{ fontSize: '18px', color: 'white' }}>Book Appointment</div>
          </header>
          <body>
            <div style={{ padding: '10px' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '14px' }}>
                <Grid container spacing={2} justifyContent="center" width={'50%'}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="doctorName"
                      name="doctorName"
                      label="Doctor Name"
                      variant="standard"
                      type="text"
                      value={formData.doctorName}
                      onChange={(e) => setFormData({ ...formData, doctorName: e.target.value })}
                      required
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <DatePicker value={formData.dob} onChange={onDateChange}/>
                  </Grid>
                  <Grid item xs={12}>
                    <TimeRangePicker/>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="medicalHistory"
                      name="medicalHistory"
                      label="Medical History"
                      variant="standard"
                      type="text"
                      value={formData.medicalHistory}
                      onChange={(e) => setFormData({ ...formData, medicalHistory: e.target.value })}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="symptoms"
                      name="symptoms"
                      label="Symptoms"
                      variant="standard"
                      type="text"
                      value={formData.symptoms}
                      onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">Book Appointment</Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </body>
        </div>
      </Modal>}
    </div>
  );
}

export default BookAppointment;
