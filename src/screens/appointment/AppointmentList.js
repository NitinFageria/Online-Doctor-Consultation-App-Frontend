import React from 'react'
import Appointment from './Appointment';

const AppointmentList = () => {
    const appointmentArr = [
        { 
          doctorName: 'John Doe',
          date: '2024-03-20',
          symptoms: 'Fever, Cough',
          priorMedicalHistory: 'Hypertension, Diabetes'
        },
        { 
          doctorName: 'Jane Smith',
          date: '2024-03-21',
          symptoms: 'Headache, Fatigue',
          priorMedicalHistory: 'Asthma, Heart disease'
        },
        { 
          doctorName: 'Michael Johnson',
          date: '2024-03-22',
          symptoms: 'Shortness of breath',
          priorMedicalHistory: 'Diabetes, Allergies'
        },
        { 
          doctorName: 'Emily Brown',
          date: '2024-03-23',
          symptoms: 'Cough',
          priorMedicalHistory: 'Hypertension, Heart disease'
        },
        { 
          doctorName: 'David Wilson',
          date: '2024-03-24',
          symptoms: 'Fever',
          priorMedicalHistory: 'Asthma, Allergies'
        },
        { 
          doctorName: 'Sarah Miller',
          date: '2024-03-25',
          symptoms: 'Headache',
          priorMedicalHistory: 'Diabetes'
        },
        { 
          doctorName: 'James Davis',
          date: '2024-03-26',
          symptoms: 'Fatigue',
          priorMedicalHistory: 'Hypertension, Asthma'
        },
        { 
          doctorName: 'Emma Garcia',
          date: '2024-03-27',
          symptoms: 'Shortness of breath, Cough',
          priorMedicalHistory: 'Heart disease, Allergies'
        },
        { 
          doctorName: 'Matthew Martinez',
          date: '2024-03-28',
          symptoms: 'Fever, Headache',
          priorMedicalHistory: 'Diabetes'
        },
        { 
          doctorName: 'Olivia Rodriguez',
          date: '2024-03-29',
          symptoms: 'Fatigue, Shortness of breath',
          priorMedicalHistory: 'Hypertension'
        }
      ];

  return (
    <div className='appointment-list-class' style={{ overflow: 'auto', height: '82vh' }}>
      {appointmentArr.map((item, ind) => <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }} key={ind}><Appointment doctorName={item.doctorName} date={item.date} priorMedicalHistory={item.priorMedicalHistory} symptoms={item.symptoms} /></div>)}
    </div>
  )
}

export default AppointmentList