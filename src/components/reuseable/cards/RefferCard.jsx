import { Button, createTheme, TextField, ThemeProvider, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import Reffer from '../../../assets/images/reffer.svg'
import { RedLinearButton, RedSolidButton } from '../../reuseable/button/Buttons'
import ReuseableModal from '../ReuseableModal'
import Phone from '../../../assets/images/phone.svg'
import Mail from '../../../assets/images/mail.svg'
import '../../../utils/css/styles.css'
import { useNavigate } from 'react-router'

const RefferCard = () => {
    const nav = useNavigate()

    const { palette } = createTheme();
    const { augmentColor } = palette;
    const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
    const theme = createTheme({
        palette: {
            anger: createColor('#F83D4B')
        },
    });

    const [state, setState] = useState(false)
    const handleOpen = () => setState(true)
    const handleClose = () => setState(false)

    const [reference, setReference] = useState({
        refByPhone: false,
        refByMail: false
    })
    console.log("🚀 ~ file: RefferCard.jsx:32 ~ RefferCard ~ reference", reference)
    const handleOpenByPhone = () => {
        setReference(prevState => ({
            ...prevState,
            refByPhone: true,

        }))
        handleClose()
    }
    const handleCloseByPhone = () => setReference(prevState => ({
        ...prevState,
        refByPhone: false,
    }))



    const emoji = () => {
        return <img src={Reffer} alt='' width={100} />
    }

    const content = () => <Typography variant='h5' fontWeight={'bold'}>Reffer a Friend</Typography>

    const referByChoice = () => {
        return (
            <ThemeProvider theme={theme}>
                <Stack direction='row' spacing={4}>
                    <Stack component={Button} variant={'outlined'} className='testtesttesttes' color="anger" spacing={1} width={'10em'} minWidth={'10em'}>
                        <img src={Phone} alt='' width={20} color="anger" />
                        <Typography variant='caption' fontSize={'0.7em'} onClick={() => handleOpenByPhone()}>Reffer via Phone Number</Typography>
                    </Stack>
                    <Stack component={Button} variant={'outlined'} spacing={1} width={'10em'} minWidth={'10em'}>
                        <img src={Mail} alt='' width={20} />
                        <Typography variant='caption' fontSize={'0.7em'}>Reffer via Mail</Typography>
                    </Stack>
                </Stack>
            </ThemeProvider>
        )
    }

    const componentArr = [emoji(), content(), referByChoice()]

    const refForm = () => {
        return (
            <Stack width={'100%'} spacing={3}>
                <TextField
                    className='TextField-without-border-radius'
                    type='text'
                    variant='outlined'
                    fullWidth
                    label='Friend First Name'
                />
                <TextField
                    className='TextField-without-border-radius'
                    type='text'
                    variant='outlined'
                    fullWidth
                    label='Phone Number'
                />
                <TextField
                    className='TextField-without-border-radius'
                    type='email'
                    variant='outlined'
                    fullWidth
                    label='Email Address'
                />
                <RedSolidButton text="Reffer Now" nav={nav} routeAddress='/dashboard' />
            </Stack>
        )
    }

    const refCompArr = [emoji(), content(), refForm()]

    return (
        <Stack justifyContent={'center'} alignItems={'center'} width={{ lg: '30%', md: 'auto' }} sx={{ backgroundColor: '#F2F2F2', border: '1px solid #E4E7EC', borderRadius: '10px', padding: '1em 2em' }}>
            <img src={Reffer} alt='' />
            <Typography variant='h6' color={'#344054'}>Reffer a Friend</Typography>
            <Typography textAlign={'center'} variant='subtitle2'>
                ARK Commercial Services’ buy Executive Team unique background in chemical stop
                appleformulations, facilities maintenance to product normal book.
            </Typography>
            <RedLinearButton handleClose={handleOpen} text='Get Reward of $25' width='100%' />
            <ReuseableModal componentArr={componentArr} handleClose={handleClose} open={state} />
            <ReuseableModal componentArr={refCompArr} handleClose={handleCloseByPhone} open={reference.refByPhone} />
        </Stack>
    )
}

export default RefferCard