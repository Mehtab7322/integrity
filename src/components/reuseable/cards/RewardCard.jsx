import { Divider, Link, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import RewardMeter from '../../../assets/images/reward-meter.svg'

const RewardCard = () => {
    return (
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{ border: '1px solid #E4E7EC', borderRadius: '10px', padding: '1em' }} width={'57%'}>
            <img src={RewardMeter} alt='' style={{ width: '40%', padding: '4px' }} />
            <Divider sx={{ border: '1px solid #D0D5DD', height: '80%' }} />
            <Stack width={'50%'}>
                <Stack>
                    <Typography variant='subtitle1'>How to Earn?</Typography>
                    <Typography color={'#667085'} variant='subtitle2'>ARK Commercial Services’ buy Executive Team unique background in chemical stop appleformulations</Typography>
                    <Typography component={Link} variant='subtitle2'>Learn More>></Typography>
                </Stack>
                <Stack>
                    <Typography variant='subtitle1'>How to Redeem?</Typography>
                    <Typography color={'#667085'} variant='subtitle2'>ARK Commercial Services’ buy Executive Team unique background in chemical stop appleformulations</Typography>
                    <Typography component={Link} variant='subtitle2'>Learn More>></Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default RewardCard