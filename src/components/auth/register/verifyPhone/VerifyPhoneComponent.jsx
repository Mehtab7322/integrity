import { Grid, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import LeftSection from '../../LeftSection'
import RightSection from '../../RightSection'
import logoWhite from '../../../../assets/images/logoWhite.svg'
import loginCarousal1 from '../../../../assets/images/loginCarousal1.svg'
import SliderRectangle from '../../../../assets/images/SliderRectangle.svg'
import SliderEllipse from '../../../../assets/images/SliderEllipse.svg'
// import OTPInput from './muiInput/OTPInput'
import { useNavigate } from 'react-router'
import OTPInput from '../../../reuseable/OTPInput'
import { RedSolidButton } from '../../../reuseable/button/Buttons'


const VerifyPhone = () => {
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
  const headLine = () => {
    return (
      <Typography variant='h5' fontWeight={'bold'} lineHeight={'1.3'}>
        Enter 4-digit code we sent<br />
        to your Phone Number
      </Typography>
    )
  }

  const otpInputs = () => {
    return <OTPInput />
  }

  const formSection = () => {
    return (
      <>
        <RedSolidButton nav={nav} routeAddress='/signup' text='Verify' />
        <Stack direction={'row'} justifyContent={'space-between'} paddingTop={4}>
          <Typography alignSelf={'center'}>Didn't get OTP? <Link href='/#' color={'#F83D4B'} underline='none'>Send Again</Link></Typography>
          <Typography>Change Phone Number?</Typography>
        </Stack>
      </>
    )
  }



  const rightSectionContent = [headLine(), otpInputs(), formSection()]

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

export default VerifyPhone