import { Box, Tab, Tabs, CustomTabPanel } from "@mui/material";
import React, { useState } from "react";
import TabComp from "../../common/TabComp/TabComp";
import DoctorList from "../doctorList/DoctorList";
import AppointmentList from "../appointment/AppointmentList";

const Home = ({ baseUrl }) => {
  // Sample home data
  const homeData = {
    title: "Welcome to My Website",
    description: "This is a sample home page for demonstration purposes.",
    featuredItems: ["Item 1", "Item 2", "Item 3"],
  };

  return (
    <div>
      <TabComp tabsComp={[
        {value: 0, title: 'DOCTOR', render: () => <div><DoctorList/></div>},
        {value: 1, title: 'APPOINTMENT', render: () => <div><AppointmentList/></div>}
      ]}/>
    </div>
  );
};

export default Home;
