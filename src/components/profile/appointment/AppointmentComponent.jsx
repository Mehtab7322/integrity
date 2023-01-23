import { Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import AppointmentCard from '../../reuseable/cards/AppointmentCard'
import VehicleCard from '../../reuseable/cards/VehicleCard'
import AppointmentServices from './AppointmentServices'
import BMW from '../../../assets/images/BMWi8.svg'
import TimeTable from './TimeTable'
import DatePick from './DatePick'
import { RedLinearButton } from '../../reuseable/button/Buttons'

const AppointmentComponent = () => {
    const listedVehicles = [
        <VehicleCard image={BMW} text="2020 BMW i8" />,
        <VehicleCard image={BMW} text="2020 BMW i8" />,
        <VehicleCard image={BMW} text="2020 BMW i8" />,
    ]
    const listedServices = [

        <AppointmentServices text={'What are you looking to get done?'} />
    ]

    const dateAndTime = [
        <DatePick />,
        <TimeTable />
    ]
    const componetsArray = [
        { type: 'Select a Vehicle', components: listedVehicles },
        { type: 'Select Date and Time', components: dateAndTime },
        { type: 'What are you looking to get done?', components: listedServices },
    ]
    return (
        <>
            <Stack padding={'3em 2em'} spacing={4} alignItems={'center'}>
                <Stack spacing={4}>
                    <Typography variant="h4" color={'#344054'}>Book Appoinment</Typography>
                    {componetsArray.map(({ type, components }, key) => {
                        return (
                            <AppointmentCard key={key} >
                                {type !== 'What are you looking to get done?' ? <Typography variant='body2' fontWeight={600}>{`${key + 1}. ${type && type}`}</Typography> : ''}

                                <Stack width={'100%'} direction={'row'} marginTop={2} justifyContent={type === 'Select Date and Time' ? 'space-between' : 'inherit'}>
                                    {components && components.map((item, key) => {
                                        return <>{item}</>
                                    })}
                                </Stack>
                            </AppointmentCard>
                        )

                    })}
                </Stack>
                <TextField
                    id="outlined-multiline-static"
                    label="Anything else we should know? (optional)"
                    multiline
                    rows={4}
                    sx={{ bgcolor: '#ffffff' }}
                    fullWidth
                />
                <RedLinearButton text={'Complete Booking'} width={'30%'} />
            </Stack>
        </>
    )
}

export default AppointmentComponent