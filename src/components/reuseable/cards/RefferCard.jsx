import { Button, createTheme, ThemeProvider, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import Reffer from '../../../assets/images/reffer.svg'
import { RedLinearButton } from '../../reuseable/button/Buttons'
import ReuseableModal from '../ReuseableModal'
import Phone from '../../../assets/images/phone.svg'
import Mail from '../../../assets/images/mail.svg'
import '../../../utils/css/styles.css'

const RefferCard = () => {
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
                        <Typography variant='caption' fontSize={'0.7em'}>Reffer via Phone Number</Typography>
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

    return (
        <Stack justifyContent={'center'} alignItems={'center'} width={'30%'} sx={{ backgroundColor: '#F2F2F2', border: '1px solid #E4E7EC', borderRadius: '10px', padding: '1em 2em' }}>
            <img src={Reffer} alt='' />
            <Typography variant='h6' color={'#344054'}>Reffer a Friend</Typography>
            <Typography textAlign={'center'} variant='subtitle2'>
                ARK Commercial Services’ buy Executive Team unique background in chemical stop
                appleformulations, facilities maintenance to product normal book.
            </Typography>
            <RedLinearButton handleClose={handleOpen} text='Get Reward of $25' width='100%' />
            <ReuseableModal componentArr={componentArr} handleClose={handleClose} open={state} />
        </Stack>
    )
}

export default RefferCard