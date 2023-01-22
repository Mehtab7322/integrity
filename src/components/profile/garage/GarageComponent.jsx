import { Stack, Typography } from '@mui/material'
import React from 'react'
import GarageCarCard from '../../reuseable/cards/GarageCarCard'
import BMWi8 from '../../../assets/images/BMWi8.svg'

const GarageComponent = () => {
    return (
        <>
            <Stack padding={'3em 2em'} spacing={4}>
                <Stack spacing={4}>
                    <Typography variant="h4" color={'#344054'}>Garage</Typography>
                    <Stack direction={'row'} spacing={'2em'} >
                        <GarageCarCard cardImage={BMWi8} text='Platinum Member Expires Aug 2022' isPlatinum={true} />
                        <GarageCarCard cardImage={BMWi8} text='Platinum Member Expires Aug 2022' isPlatinum={true} />
                        <GarageCarCard cardImage={BMWi8} text='Platinum Member Expires Aug 2022' isPlatinum={false} />
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

export default GarageComponent