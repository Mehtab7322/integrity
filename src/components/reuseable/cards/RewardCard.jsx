import { Button, Divider, Link, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import RewardMeter from '../../../assets/images/reward-meter.svg'
import ReuseableModal from '../ReuseableModal'
import Howtoearnfire from '../../../assets/images/howtoearnfire.svg'
import Howtoearn from '../../../assets/images/howtoearn.svg'
import Radeem from '../../../assets/images/radeem.svg'
import { RedLinearButton } from '../button/Buttons'

const RewardCard = () => {
    const [open, setOpen] = useState({
        hte: false,
        htr: false
    })
    const handlehteOpen = () => setOpen(prevState => ({
        ...prevState,
        hte: true,
        // htr: false
    }));
    const handlehteClose = () => setOpen(prevState => ({
        ...prevState,
        hte: false,
        // htr: false
    }));
    //how to earn modal setup
    const emojiHTE = () => {
        return (
            <>
                <Stack sx={{ backgroundImage: `url(${Howtoearnfire})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                    <img alt='' src={Howtoearn} width={100} />
                </Stack>
            </>
        )
    }

    const contentHTE = () => {
        return (
            <Typography color={'#667085'} variant={'subtitle2'} textAlign={'center'}>ARK Commercial Services’ buy Executive Team unique background in chemical stop
                appleformulations, facilities maintenance to product normal book.
            </Typography>
        )
    }
    const buttonCloseHTE = () => {
        return <RedLinearButton handleClose={handlehteClose} text='Got it, Thanks' width={'80%'} />
    }
    const hteComponentArr = [emojiHTE(), contentHTE(), buttonCloseHTE()]

    //how to raeemd modal setup
    const handlehtrOpen = () => setOpen(prevState => ({
        ...prevState,
        // hte: false,
        htr: true
    }));
    const handlehtrClose = () => setOpen(prevState => ({
        ...prevState,
        // hte: false,
        htr: false
    }));
    const emojiHTR = () => {
        return (
            <>
                <img alt='' src={Radeem} width={100} />
            </>
        )
    }

    const contentHTR = () => {
        return (
            <Typography color={'#667085'} variant={'subtitle2'} textAlign={'center'}>ARK Commercial Services’ buy Executive Team unique background in chemical stop
                appleformulations, facilities maintenance to product normal book.
            </Typography>
        )
    }
    const buttonCloseHTR = () => {
        return <RedLinearButton handleClose={handlehtrClose} text='Reward your Points Now' width={'80%'} />
    }
    const htrComponentArr = [emojiHTR(), contentHTR(), buttonCloseHTR()]



    return (
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{ border: '1px solid #E4E7EC', borderRadius: '10px', padding: '1em', backgroundColor: '#FFFFFF' }} width={{ lg: '57%', md: 'auto' }}>
            <img src={RewardMeter} alt='' style={{ width: '40%', padding: '4px' }} />
            <Divider sx={{ border: '1px solid #D0D5DD', height: '80%' }} />
            <Stack width={'50%'}>
                <Stack>
                    <Typography variant='subtitle1'>How to Earn?</Typography>
                    <Typography color={'#667085'} variant='subtitle2'>ARK Commercial Services’ buy Executive Team unique background in chemical stop appleformulations</Typography>
                    <Typography component={Link} variant='subtitle2' underline='none' sx={{ cursor: 'pointer' }} onClick={() => handlehteOpen()}>{`Learn More>>`}</Typography>
                </Stack>
                <ReuseableModal componentArr={hteComponentArr} handleClose={handlehteClose} open={open.hte} />
                <Stack>
                    <Typography variant='subtitle1'>How to Redeem?</Typography>
                    <Typography color={'#667085'} variant='subtitle2'>ARK Commercial Services’ buy Executive Team unique background in chemical stop appleformulations</Typography>
                    <Typography component={Link} variant='subtitle2' underline='none' sx={{ cursor: 'pointer' }} onClick={() => handlehtrOpen()}>{`Learn More>>`}</Typography>
                </Stack>
                <ReuseableModal componentArr={htrComponentArr} handleClose={handlehtrClose} open={open.htr} />
            </Stack>
        </Stack>
    )
}

export default RewardCard