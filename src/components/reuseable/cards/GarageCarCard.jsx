import { Button, Card, CardActions, CardHeader, CardMedia, createTheme, Divider, IconButton, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Stack, ThemeProvider } from '@mui/system'
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import TaxiAlertIcon from '@mui/icons-material/TaxiAlert';
import React, { useState } from 'react'
import { NonPlatinumButton, PlatinumButton, RedLinearButton } from '../button/Buttons';
import ReuseableModal from '../ReuseableModal'
import ServiceDueCard from './ServiceDueCard';
import { serviceTasks } from '../../../data/data';
import GetPlatinum from '../../../assets/images/getplatinum.svg'
import Price from '../../../assets/images/Price.svg'
import ServiceTask from '../../../assets/images/service-task.svg'
import Booked from '../../../assets/images/booked.svg'
import { useNavigate } from 'react-router';

const GarageCarCard = ({ cardImage, text, isPlatinum }) => {
    const nav = useNavigate()
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const { palette } = createTheme();
    const { augmentColor } = palette;
    const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
    const theme = createTheme({
        palette: {
            anger: createColor('#D23852')
        },
    });
    //Service Due Content
    const headline = () => <Typography variant='h5'>Service Due</Typography>
    const content = () => <Typography variant='caption' textAlign={'center'}>ARK Commercial Services’ buy Executive Team unique background in chemical stop appleformulations, facilities maintenance</Typography>
    const serviceDueCard = () => {
        return (
            <Stack direction='row' spacing={2}>
                <ServiceDueCard dueDate='Jun 04, 2022' serviceTasks={serviceTasks} />
                <ServiceDueCard dueDate='Jun 04, 2022' serviceTasks={serviceTasks} />
            </Stack>
        )
    }
    const serviceButton = () => <RedLinearButton text={'Book an Appointment'} width={'50%'} />
    const componentArr = [headline(), content(), serviceDueCard(), serviceButton()]

    //Get Non-Platinum Content
    const [openPlat, setOpenPlat] = useState({
        nonPlat: false,
        plat: false,
        booked: false
    })
    console.log("🚀 ~ file: GarageCarCard.jsx:46 ~ GarageCarCard ~ openPlat", openPlat)
    const handleOpenNonPlat = () => setOpenPlat(prevState => ({
        ...prevState,
        nonPlat: true,
    }))
    const handleCloseNonPlat = () => setOpenPlat(prevState => ({
        ...prevState,
        nonPlat: false,
        booked: true
    }))
    const emoji = (image) => {
        return <img src={image} alt='' width={100} />
    }
    const headlineNonPlat = (text) => <Typography variant='subtitle1' fontWeight={'bold'}>{text}</Typography>
    const captionNonPlat = (text, color) => <Typography variant='caption' marginTop={'-1.3em'} textAlign='center'>{text}</Typography>
    const priceNonPlat = () => <img src={Price} alt='' />
    const offeringsNonPlat = () => {
        return (
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    position: 'relative',
                    overflow: 'auto',
                    // maxHeight: 300,
                    '& ul': { padding: 0 },
                    '& li': { padding: 0 },
                }}
            >
                {serviceTasks.map(task => {
                    return (
                        <ListItem>
                            <ListItemIcon>
                                <img src={ServiceTask} alt='' />
                            </ListItemIcon>
                            <ListItemText
                                primary={task}
                            />
                        </ListItem>
                    )

                })}

            </List>
        )
    }
    const bookingNonPlat = () => {
        return (
            <RedLinearButton text='Book Appointment' width={'100%'} handleClose={handleCloseNonPlat} />
        )
    }
    const footerContentNonPlat = () => <Typography variant='caption' textAlign={'center'} maxWidth={360}>ARK Commercial Services’ buy Executive Team unique background in chemical stop appleformulations.</Typography>
    const nonPlatCompArr = [emoji(GetPlatinum), headlineNonPlat('Why become a Platinum Member'), captionNonPlat('Best for medium agency'), priceNonPlat(), offeringsNonPlat(), bookingNonPlat(), footerContentNonPlat()]


    //Get Platinum Content
    const handleOpenPlat = () => setOpenPlat(prevState => ({
        ...prevState,
        plat: true,
    }))
    const handleClosePlat = () => setOpenPlat(prevState => ({
        ...prevState,
        plat: false,
    }))
    const bookingPlat = () => {
        return (
            <RedLinearButton text='Book Appointment' width={'100%'} variant='outlined' handleClose={handleClosePlat} />
        )
    }
    const platCompArr = [emoji(GetPlatinum), headlineNonPlat('Platinum Member'), captionNonPlat('Your Membership is ending on November 23, 2022', '#F83D4B'), offeringsNonPlat(), bookingPlat(), footerContentNonPlat()]


    //Booking Confirmed Content
    const handleBookingClose = () => setOpenPlat(prevState => ({
        ...prevState,
        booked: false,
    }))

    const bookedButton = () => {
        return (
            <RedLinearButton text={'Done'} width='100%' handleClose={handleBookingClose} />
        )
    }

    const bookingCompArr = [emoji(Booked), headlineNonPlat('Congragulations!'), captionNonPlat('ARK Commercial Services’ buy Executive Team unique background in chemical stop appleformulations.'), bookedButton()]


    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ minWidth: 275, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <CardHeader title='2020 BMW i8' titleTypographyProps={{ variant: 'caption', textAlign: 'center' }} />
                <CardMedia
                    component="img"
                    height='145'
                    marginTop='12px'
                    image={cardImage}
                    alt="Paella dish"
                />
                <Divider sx={{ width: '80%', marginTop: '12px' }} />
                <CardActions disableSpacing sx={{ width: '100%', justifyContent: 'space-around', marginTop: '12px' }}>
                    <Stack alignItems={'center'}>
                        <Button variant="outlined" color="anger" onClick={() => nav('/garage/carfax')} sx={{ width: 'fit-content', minWidth: 'fit-content', padding: '8px 10px' }} aria-label="delete">
                            <ManageHistoryIcon />
                        </Button>
                        <Typography variant='caption'>Carfax History</Typography>
                    </Stack>

                    <Stack alignItems={'center'}>
                        <Button variant="outlined" onClick={() => handleOpen()} color="anger" sx={{ width: 'fit-content', minWidth: 'fit-content', padding: '8px 10px' }} aria-label="delete">
                            <TaxiAlertIcon />
                        </Button>
                        <Typography variant='caption' >Services Due</Typography>
                    </Stack>
                </CardActions>
                {isPlatinum ? <PlatinumButton text={text} handler={handleOpenPlat} /> : <NonPlatinumButton text={text} handler={handleOpenNonPlat} />}
                <ReuseableModal componentArr={componentArr} handleClose={handleClose} open={open} />
                <ReuseableModal componentArr={openPlat.plat ? platCompArr : nonPlatCompArr} handleClose={openPlat.plat && !openPlat.nonPlat ? handleClosePlat : handleCloseNonPlat} open={openPlat.nonPlat || openPlat.plat} />
                <ReuseableModal componentArr={bookingCompArr} handleClose={handleBookingClose} open={openPlat.booked} />
            </Card>
        </ThemeProvider>
    )
}

export default GarageCarCard