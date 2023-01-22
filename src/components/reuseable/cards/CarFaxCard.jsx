import { Card, CardHeader, CardMedia, IconButton } from '@mui/material'
import React from 'react'
import Delete from '../../../assets/images/delete.svg'
import BMW from '../../../assets/images/BMWi8.svg'

const CarFaxCard = () => {
    return (
        <>
            <Card sx={{ bgcolor: '#FCFCFD', alignItems:'center' }}>
                <CardHeader action={
                    <IconButton aria-label="settings">
                        <img src={Delete} alt='' />
                    </IconButton>
                } />
                {/* <CardMedia
                    component="img"
                    height="194"
                    image={BMW}
                    alt=""
                /> */}
                <img src={BMW} alt='' />
            </Card>
        </>
    )
}

export default CarFaxCard