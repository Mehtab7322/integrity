import { Card, CardActions, CardContent, CardHeader, Link, Typography } from '@mui/material'
import React from 'react'

const AccountCard = ({ image, text, title }) => {
    return (
        <>
            <Card sx={{ maxWidth: 300, minWidth: 200, marginRight: 2, marginTop: 4 }}>
                <CardHeader
                    avatar={<img src={image} alt='' width={20} />}
                    title={title}
                    titleTypographyProps={{ variant: 'body1' }}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
                <CardActions sx={{ padding: '16px' }}>
                    <Typography component={Link} variant={'caption'} color="#F83D4B" underline='none' sx={{ cursor: 'pointer' }}>{`Select Slot>>`}</Typography>
                </CardActions>
            </Card>
        </>
    )
}

export default AccountCard