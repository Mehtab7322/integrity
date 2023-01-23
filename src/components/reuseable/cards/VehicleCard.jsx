import { Card, CardContent, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const VehicleCard = ({ image, text }) => {
    return (
        <Stack position={'relative'}>
            <Card sx={{ minWidth: 200, bgcolor:'#FFF1F3', marginRight: 2 }} >
                <img src={image} alt='' />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant={'caption'} color="#D23852" >{text}</Typography>
                </CardContent>
            </Card>
            
        </Stack>
    )
}

export default VehicleCard