import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import Reffer from '../../../assets/images/reffer.svg'
import { RedLinearButton } from '../../reuseable/button/Buttons'

const RefferCard = () => {
    const [state, setState] = useState(false)
    console.log("🚀 ~ file: RefferCard.jsx:9 ~ RefferCard ~ state", state)
    const handleClose = () => {
        setState(true)
    }
    return (
        <Stack justifyContent={'center'} alignItems={'center'} width={'30%'} sx={{ backgroundColor: '#F2F2F2', border: '1px solid #E4E7EC', borderRadius: '10px', padding: '1em 2em' }}>
            <img src={Reffer} alt='' />
            <Typography variant='h6' color={'#344054'}>Reffer a Friend</Typography>
            <Typography textAlign={'center'} variant='subtitle2'>
                ARK Commercial Services’ buy Executive Team unique background in chemical stop
                appleformulations, facilities maintenance to product normal book.
            </Typography>
            <RedLinearButton handleClose={handleClose} text='Get Reward of $25' width='100%' />
        </Stack>
    )
}

export default RefferCard