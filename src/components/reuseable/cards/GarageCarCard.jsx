import { Button, Card, CardActions, CardHeader, CardMedia, createTheme, Divider, IconButton, Typography } from '@mui/material'
import { Stack, ThemeProvider } from '@mui/system'
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import TaxiAlertIcon from '@mui/icons-material/TaxiAlert';
import React from 'react'

const GarageCarCard = ({ cardImage }) => {
    const { palette } = createTheme();
    const { augmentColor } = palette;
    const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
    const theme = createTheme({
        palette: {
            anger: createColor('#D23852')
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ minWidth: 275, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <CardHeader title='2020 BMW i8' titleTypographyProps={{ variant: 'caption', textAlign: 'center' }} />
                <CardMedia
                    component="img"
                    height='145'
                    image={cardImage}
                    alt="Paella dish"
                />
                <Divider sx={{ width: '80%' }} />
                <CardActions disableSpacing sx={{ width: '100%', justifyContent: 'space-around' }}>
                    <Stack alignItems={'center'}>
                        <Button variant="outlined" color="anger" sx={{ width: 'fit-content', minWidth: 'fit-content' }} aria-label="delete">
                            <ManageHistoryIcon />
                        </Button>
                        <Typography variant='caption'>Carfax History</Typography>
                    </Stack>

                    <Stack alignItems={'center'}>
                        <Button variant="outlined" color="anger" sx={{ width: 'fit-content', minWidth: 'fit-content' }} aria-label="delete">
                            <TaxiAlertIcon />
                        </Button>
                        <Typography variant='caption'>Services Due</Typography>
                    </Stack>
                </CardActions>
            </Card>
        </ThemeProvider>
    )
}

export default GarageCarCard