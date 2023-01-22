import React from 'react'
import Link from '@mui/material/Link';
import { Stack } from '@mui/system';
import { Breadcrumbs, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const Breadcrumb = () => {
    const handleClick = (e) => {
        e.preventDefault();
    }
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/garage" onClick={() => handleClick()}>
            Garage
        </Link>,
        <Typography key="3" color="text.primary">
            Carfax History
        </Typography>,
    ];

    return (
        <Stack spacing={2}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
        </Stack>
    )
}

export default Breadcrumb