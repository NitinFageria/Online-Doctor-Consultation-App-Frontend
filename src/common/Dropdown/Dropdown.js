import { MenuItem, Select } from '@mui/material'
import React from 'react'

const Dropdown = () => {
  return (
    <div>
      <Select defaultValue={10}>
        <MenuItem value={10}>Documentation</MenuItem>
        <MenuItem value={20}>Components</MenuItem>
        <MenuItem value={30}>Features</MenuItem>
      </Select>
    </div>
  )
}

export default Dropdown
