import { Card } from '@mui/material'
import React from 'react'

const AppointmentCard = ({ children }) => {
    return (
        <Card variant='outlined' sx={{ bgcolor: '#FFFFFF', width: 'auto', padding: 2 }}>
            {children}
        </Card>
    )
}

export default AppointmentCard