import { Stack, Typography } from '@mui/material';
import React from 'react'
import { useNavigate, useRouteError } from "react-router-dom";
import { RedSolidButton } from '../components/reuseable/button/Buttons';


const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    const nav = useNavigate()
    return (
        <Stack className='test' alignItems={'center'} justifyContent={'center'} color={'#F83D4B'} height={'80vh'}>
            <Typography variant="h1" fontWeight={'bold'}>{error.status}</Typography>
            <Typography variant='h6'>{error.statusText}</Typography>
            <RedSolidButton nav={nav} routeAddress='/dashboard' text={'Return to Dashboard'} />
        </Stack>
    )
}

export default ErrorPage