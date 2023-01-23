import { Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DatePick = () => {
    const [startDate, setStartDate] = useState(new Date)
    return (
        <Stack width={'48%'}>
            <Typography variant='body1' paddingBottom={2}>Select Date</Typography>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                inline
                fixedHeight
            />
        </Stack>
    )
}

export default DatePick