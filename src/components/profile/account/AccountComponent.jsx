import { Stack, Typography } from '@mui/material'
import React from 'react'
import AccountCard from '../../reuseable/cards/AccountCard'
import Account from '../../../assets/images/account.svg'


const AccountComponent = () => {
    return (
        <>
            <Stack padding={'3em 2em'} spacing={4}>
                <Stack spacing={4}>
                    <Typography variant="h4" color={'#344054'}>Account</Typography>
                    <Stack direction={'row'} flexWrap={'wrap'}>
                        <AccountCard image={Account} text='Executive Team unique background in chemical stop appleformulat book. ' title='Personal info' />
                        <AccountCard image={Account} text='Executive Team unique background in chemical stop appleformulat book. ' title='Personal info' />
                        <AccountCard image={Account} text='Executive Team unique background in chemical stop appleformulat book. ' title='Personal info' />
                        <AccountCard image={Account} text='Executive Team unique background in chemical stop appleformulat book. ' title='Personal info' />
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

export default AccountComponent