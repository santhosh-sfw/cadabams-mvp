import * as React from 'react';
import dayjs from 'dayjs';
import { TextField, Grid } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { MonthPicker } from '@mui/x-date-pickers/MonthPicker';
import { YearPicker } from '@mui/x-date-pickers/YearPicker';

export default function AppoinmentCalender() {
    const minDate = dayjs('2020-01-01T00:00:00.000');
    const maxDate = dayjs('2034-01-01T00:00:00.000');
    const [date, setDate] = React.useState(dayjs('2022-04-07'));

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
                </Grid>
                
            </Grid>
        </LocalizationProvider>);
}
