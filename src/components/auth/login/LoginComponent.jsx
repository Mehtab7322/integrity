import { Button, Grid, IconButton, InputAdornment, Link, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import LeftSection from '../LeftSection'
import RightSection from '../RightSection'
import logoWhite from '../../../assets/images/logoWhite.svg'
import loginCarousal1 from '../../../assets/images/loginCarousal1.svg'
import SliderRectangle from '../../../assets/images/SliderRectangle.svg'
import SliderEllipse from '../../../assets/images/SliderEllipse.svg'
import { Stack } from '@mui/system'
import sadEmoji from '../../../assets/images/sad-emoji.svg'
import TelInput from '../../reuseable/TelInput'
import ReuseableModal from '../../reuseable/ReuseableModal'
import { useNavigate } from 'react-router'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { RedLinearButton } from '../../reuseable/button/Buttons'




const LoginComponent = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const nav = useNavigate()
    // login left section content
    const logoImage = () => {
        return (
            <img alt='' src={logoWhite} style={{ width: '8em' }} />
        )
    }
    const carousalImages = () => {
        return (
            <img alt='' src={loginCarousal1} width={'60%'} />
        )
    }
    const leftSecContent = () => {
        return (
            <>
                <Typography variant='h5' fontWeight={'bold'}>
                    Find your sweet garage
                </Typography>
                <Typography width={'65%'} lineHeight={'28px'}>
                    Schedule visits in just few clicks visits in just a few clicks clicks
                </Typography>
                <Stack direction={'row'} spacing={'4px'} mt={'12px'}>
                    <img alt='' src={SliderRectangle} />
                    <img alt='' src={SliderEllipse} />
                    <img alt='' src={SliderEllipse} />
                </Stack>
            </>
        )
    }
    const leftSectionContent = [logoImage(), carousalImages(), leftSecContent()] //left section content array


    //login right section content
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const emoji = () => {
        return (
            <img alt='' src={sadEmoji} width={100} />
        )
    }
    const typography = () => {
        return (
            <Typography textAlign={'center'} color='#667085'>Sorry! we can't find an account with this phone number in that
                location. 'Please double-check your' location selection and ehone number and try again!
            </Typography>
        )
    }
    const button = () => {
        return (
            <>
                <RedLinearButton handleClose={handleClose} width='80%' text='Continue' />
            </>
        )
    }
    const componentArr = [emoji(), typography(), button()]
    const headLine = () => {
        return (
            <Typography variant='h5' fontWeight={'bold'} lineHeight={'1.3'}>
                Welcome to<br />
                Integrity 1st Automotive!
            </Typography>
        )
    }
    const formSection = () => {
        return (
            <Stack color={'#848FAC'} spacing={2}>
                <Typography alignSelf={'start'}>Sign in your account</Typography>
                <Stack direction={'row'}>
                    <TelInput />
                </Stack>
                <TextField className='TextField-without-border-radius' type={showPassword ? 'text' : 'password'} label='Password' InputProps={{
                    endAdornment: <InputAdornment position="end"><IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                    >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton></InputAdornment>
                }} />                <Link onClick={() => nav('/password')} component="button" variant="body1" alignSelf={'end'} underline='none' color={'#475467'}>Forgot Password?</Link>
                <Button onClick={() => handleOpen()} variant="contained" size='large' sx={{ borderRadius: '54.6591px', bgcolor: '#F83D4B', fontSize: 'small', p: 2 }}>Login</Button>
                <Typography alignSelf={'center'}>Don’t have any acount? <Link component="button" variant="body1" onClick={() => nav('/register')} color={'#F83D4B'} underline='none'>Register</Link></Typography>
            </Stack>
        )
    }
    const loginFailedModal = () => {
        return <ReuseableModal componentArr={componentArr} handleClose={handleClose} open={open} />
    }
    const rightSectionContent = [headLine(), formSection(), loginFailedModal()] //right section content array

    return (
        <>
            <Grid container spacing={1} height={'100%'} className='testtesttesttest'>
                <Grid item xs='6'>
                    <LeftSection leftSectionContent={leftSectionContent} />
                </Grid>
                <Grid item xs='6' display={'flex'} justifyContent={'center'}>
                    <RightSection rightSectionContent={rightSectionContent} />
                </Grid>
            </Grid>
        </>
    )
}

export default LoginComponent