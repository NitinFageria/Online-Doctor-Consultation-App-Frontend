import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { TextField } from '@mui/material';

export default function FirstComponent({value, onChange}) {
  const formattedValue = dayjs(value);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker value={formattedValue} onChange={onChange} renderInput={(params) => <TextField {...params} />} />
    </LocalizationProvider>
  );
}
