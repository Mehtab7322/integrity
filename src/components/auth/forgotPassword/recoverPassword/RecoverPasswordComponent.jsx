import { Grid, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import LeftSection from '../../LeftSection'
import RightSection from '../../RightSection'
import loginCarousal1 from '../../../../assets/images/loginCarousal1.svg'
import SliderRectangle from '../../../../assets/images/SliderRectangle.svg'
import SliderEllipse from '../../../../assets/images/SliderEllipse.svg'
import logoWhite from '../../../../assets/images/logoWhite.svg'
import { useNavigate } from 'react-router'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { RedSolidButton } from '../../../reuseable/button/Buttons'


const RecoverPasswordComponent = () => {
    const nav = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    // RecoverPassword left section content
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

    //RecoverPassword right section content
    const headLine = () => {
        return (
            <Typography variant='h5' fontWeight={'bold'} lineHeight={'1.3'}>
                Create your New<br />
                Password
            </Typography>
        )
    }

    const formSection = () => {
        return (
            <Stack color={'#848FAC'} spacing={2}>
                <Typography>Sign in your account</Typography>
                <TextField className='TextField-without-border-radius' type={showPassword ? 'text' : 'password'} label='Create Password' InputProps={{
                    endAdornment: <InputAdornment position="end"><IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                    >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton></InputAdornment>
                }} />
                <TextField className='TextField-without-border-radius' type={showPassword ? 'text' : 'password'} label='Confirm Password' InputProps={{
                    endAdornment: <InputAdornment position="end"><IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                    >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton></InputAdornment>
                }} />
                <RedSolidButton nav={nav} text='Complete Setup' routeAddress='/password/recover' />
            </Stack>
        )
    }
    const rightSectionContent = [headLine(), formSection()] //right section content array

    return (
        <>
            <Grid container spacing={1} height={'100%'}>
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

export default RecoverPasswordComponent