import { Stack } from '@mui/system'
import React from 'react'
import AppointmentComponent from '../../../components/profile/appointment/AppointmentComponent'

const AppointmentScreen = () => {
    return (
        <Stack width={'100%'} overflow={'auto'}>
            <AppointmentComponent />
        </Stack>
    )
}

export default AppointmentScreen