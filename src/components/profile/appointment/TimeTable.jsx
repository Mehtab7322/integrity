import { Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import { timeSlots } from '../../../data/data'
import AppointmentCard from '../../reuseable/cards/AppointmentCard'
import '../../../utils/css/styles.css'
import morning from '../../../assets/images/morning.svg'
import night from '../../../assets/images/night.svg'

const TimeTable = () => {
    const [styledClass, setStyledClass] = useState(timeSlots)

    return (
        <Stack width={'48%'}>
            <Typography variant='body1' paddingBottom={2}>Select Time</Typography>
            <Grid container spacing={2} paddingBottom={2}>
                {timeSlots.map((time, key) => {
                    return (
                        <Grid item xs={3} key={key} onClick={() => setStyledClass(time)}>
                            <Stack borderRadius={1} fontSize={'0.8em'} className={styledClass === time ? 'styledTime' : ''} bgcolor={'#FFFFFF'} border={'1px solid rgba(0, 0, 0, 0.12)'} paddingX={2} paddingY={2} textAlign={'center'}>
                                {time}
                            </Stack>
                        </Grid>
                    )
                })
                }
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Stack borderRadius={1} bgcolor={'#F2F4F7'} border={'1px solid #D0D5DD'} paddingX={2} paddingY={2} >
                        <Stack direction={'row'} alignItems={'center'}>
                            <img src={morning} alt='' />
                            <Typography variant='body2'>Early Bird</Typography>
                        </Stack>
                        <Typography variant='caption' color={'#98A2B3'}>Commercial Serv buy Executive book.</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Stack borderRadius={1} bgcolor={'#F2F4F7'} border={'1px solid #D0D5DD'} paddingX={2} paddingY={2} >
                        <Stack direction={'row'} alignItems={'center'}>
                            <img src={night} alt='' />
                            <Typography variant='body2'>After hours Dropoff</Typography>
                        </Stack>
                        <Typography variant='caption' color={'#98A2B3'}>Commercial Serv buy Executive book.</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    )
}

export default TimeTable