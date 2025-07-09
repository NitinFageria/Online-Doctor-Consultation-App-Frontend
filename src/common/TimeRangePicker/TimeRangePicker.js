import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SingleInputTimeRangeField } from '@mui/x-date-pickers-pro';
import dayjs from 'dayjs';

const TimeRangePicker = ({customValue, setCustomValue}) => {
  const [value, setValue] = React.useState(() => [
    dayjs('2022-04-17T15:30'),
    dayjs('2022-04-17T18:30'),
  ]);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <SingleInputTimeRangeField
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </LocalizationProvider>
  );
}

export default TimeRangePicker