import { Stack } from '@mui/material'
import React from 'react'
import AccountComponent from '../../../components/profile/account/AccountComponent'

const AccountScreen = () => {
    return (
        <Stack width={'100%'} overflow={'auto'}>
            <AccountComponent />
        </Stack>
    )
}

export default AccountScreen