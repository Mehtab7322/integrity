import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import LeftSection from '../LeftSection'
import RightSection from '../RightSection'
import logoWhite from '../../../assets/images/logoWhite.svg'
import loginCarousal1 from '../../../assets/images/loginCarousal1.svg'
import SliderRectangle from '../../../assets/images/SliderRectangle.svg'
import SliderEllipse from '../../../assets/images/SliderEllipse.svg'
import TelInput from '../../reuseable/TelInput'
import { useNavigate } from 'react-router'
import { RedSolidButton } from '../../reuseable/button/Buttons'


const ForgotPassword = () => {

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
  const leftSectionContent = [logoImage(), carousalImages(), leftSecContent()] //left section content array  const rightSectionContent = []

  //login right section content
  const headLine = () => {
    return (
      <Typography variant='h5' fontWeight={'bold'} lineHeight={'1.3'}>
        Enter your Phone Number to<br />
        Recover your Password
      </Typography>
    )
  }

  const formSection = () => {
    return (
      <Stack color={'#848FAC'} spacing={2}>
        <Stack direction={'row'}>
          <TelInput />
        </Stack>
        <RedSolidButton nav={nav} routeAddress='/password/otp' text='Send OTP' />
      </Stack>
    )
  }

  const rightSectionContent = [headLine(), formSection()]
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

export default ForgotPassword