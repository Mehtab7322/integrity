import { Stack, Typography } from '@mui/material';
import React from 'react'
import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <Stack className='test' alignItems={'center'} justifyContent={'center'} color={'#F83D4B'} height={'80vh'}>
            <Typography variant="h1" fontWeight={'bold'}>{error.status}</Typography>
            <Typography variant='h6'>{error.statusText}</Typography>
        </Stack>
    )
}

export default ErrorPage