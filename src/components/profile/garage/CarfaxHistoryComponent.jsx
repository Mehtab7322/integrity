import { Stack, Typography } from '@mui/material'
import React from 'react'
import Breadcrumb from '../../reuseable/Breadcrumb'
import CarFaxCard from '../../reuseable/cards/CarFaxCard'

const CarfaxHistoryComponent = () => {
    return (
        <Stack padding={'3em 2em'} spacing={4}>
            <Stack spacing={4}>
                <Breadcrumb />
                <Typography variant="h4" color={'#344054'}>Carfax History</Typography>
                <Stack>
                    <CarFaxCard />
                </Stack>
            </Stack>
        </Stack>
    )
}

export default CarfaxHistoryComponent