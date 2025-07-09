import { Box, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import './TabComp.css'

const TabComp = ({
  tabsComp = [{ value: 0, title: 'Select 1' }, { value: 1, title: 'Select 2' }]
}) => {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className='tabs-body'
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          {tabsComp.map(item => (
            <Tab
              key={item.value}
              label={item.title}
              {...a11yProps(item.value)}
              style={{ flex: 1, flexGrow: 1}}
            />
          ))}
        </Tabs>
      </Box>
      {
        tabsComp.map(item => item.value === value && <div key={item.value}>{item.render()}</div>)
      }
    </div>
  )
}

export default TabComp
