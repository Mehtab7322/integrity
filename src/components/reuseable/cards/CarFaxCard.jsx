import { Button, Card, CardContent, CardHeader, CardMedia, IconButton, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Delete from '../../../assets/images/delete.svg'
import BMW from '../../../assets/images/BMWi8.svg'
import { RedLinearButton } from '../button/Buttons'
import ServiceDueCard from './ServiceDueCard'
import { Stack } from '@mui/system'
import { serviceTasks } from '../../../data/data'
import ReuseableModal from '../../reuseable/ReuseableModal'
import Trash from '../../../assets/images/trash.svg'

const CarFaxCard = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleclose = () => setOpen(false)

    const emoji = () => <img src={Trash} alt='' width={70} />
    const content = () => <Typography fontWeight={'bold'}>Do you want to delete your vehicle?</Typography>
    const description = () => {
        return (
            <TextField
                id="outlined-multiline-static"
                label="Enter a Description"
                multiline
                rows={4}
                fullWidth
            />
        )
    }
    const buttonActions = () => {
        return (
            <Stack direction={'row'} width={"100%"} spacing={2}>
                <RedLinearButton text='Yes, Delete' width={'100%'} handleClose={handleclose} />
                <Button variant={'contained'} sx={{ borderRadius: '54.6591px', background: '#667085', fontSize: 'small', p: 2, width: 'inherit' }}>No, Cancel</Button>
            </Stack >
        )
    }
    const componentArr = [emoji(), content(), description(), buttonActions()]
    return (
        <>
            <Card sx={{ bgcolor: '#FCFCFD', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CardHeader action={
                    <IconButton aria-label="settings" onClick={() => handleOpen()}>
                        <img src={Delete} alt='' />
                    </IconButton>
                } sx={{ width: '95%', }} />
                <img src={BMW} alt='' />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant={'h6'} fontWeight={500} >2020 BMW i8</Typography>
                    <Typography variant={'body1'} marginTop={-1} marginBottom={2} color={'text.secondary'}>Carfax Service History</Typography>
                    <RedLinearButton text={'Book an Appointment'} />
                    <Stack direction='row' flexWrap={'wrap'} marginY={2}>
                        <ServiceDueCard dueDate={'September 23, 2020'} bgcolor={'#FFE4E8'} serviceTasks={serviceTasks} isDue={'true'} />
                        <ServiceDueCard dueDate={'September 23, 2020'} serviceTasks={serviceTasks} />
                        <ServiceDueCard dueDate={'September 23, 2020'} serviceTasks={serviceTasks} />
                    </Stack>
                </CardContent>
                <ReuseableModal componentArr={componentArr} handleClose={handleclose} open={open} />
            </Card>
        </>
    )
}

export default CarFaxCard