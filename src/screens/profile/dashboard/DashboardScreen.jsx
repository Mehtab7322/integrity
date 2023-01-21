import { Stack } from '@mui/system'
import React from 'react'
import DashboardComponent from '../../../components/profile/dashboard/DashboardComponent'

const DashboardScreen = () => {
    return (
        <Stack width={'100%'} overflow={'auto'}>
            <DashboardComponent />
        </Stack>
    )
}

export default DashboardScreen