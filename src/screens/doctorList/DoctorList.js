import React, { useEffect, useState } from 'react'
import DoctorDetails from './DoctorDetails'
import Dropdown from '../../common/Dropdown/Dropdown';
import { getRequest } from '../../util/fetch';

const DoctorList = () => {

  const [doctorsData, setDoctorsData] = useState([]);


  useEffect(() => {
    getDoctorsList()
  }, [])

  const getDoctorsList = async (event) => {
    // event.preventDefault();

    try {
      const response = await getRequest({
        url: 'http://localhost:8080/doctors'
      });

      console.log("get doctor successful", response);
      if (response) {
        setDoctorsData(response)
      }
      // Add logic to handle successful login, e.g., redirecting to another page
    } catch (error) {
      console.error("doctor failed", error);
      // Add logic to handle login failure, e.g., displaying an error message
    }
  };

  const doctorsList = [
    { doctorName: 'Sagar Pradhan', speciality: 'Cardiologist', rating: 3 },
    { doctorName: 'Alice Johnson', speciality: 'Dermatologist', rating: 4 },
    { doctorName: 'Michael Smith', speciality: 'Neurologist', rating: 5 },
    { doctorName: 'Emily Brown', speciality: 'Pediatrician', rating: 2 },
    { doctorName: 'David Wilson', speciality: 'Psychiatrist', rating: 3 },
    { doctorName: 'Sarah Miller', speciality: 'Oncologist', rating: 5 },
    { doctorName: 'James Davis', speciality: 'Gynecologist', rating: 4 },
    { doctorName: 'Emma Garcia', speciality: 'Orthopedic Surgeon', rating: 3 },
    { doctorName: 'Matthew Martinez', speciality: 'ENT Specialist', rating: 4 },
    { doctorName: 'Olivia Rodriguez', speciality: 'Urologist', rating: 5 }
  ];

  // console.log(doctorsList);

  return (
    <>
      <div className='doctor-list-class' style={{ overflow: 'auto', height: '82vh' }}>
        <div style={{ width: '100%', textAlign: 'center', marginTop: '6px' }}>
          <Dropdown />
        </div>
        {doctorsData?.map((item, ind) => <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }} key={item.id}>
          <DoctorDetails 
          doctorName={{ firstName: item.firstName, lastName: item.lastName }} 
          speciality={item.speciality}
          rating={item.rating} 
          doctorData={item}
          /></div>)}
      </div>
    </>
  )
}

export default DoctorList