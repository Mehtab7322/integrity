import React from 'react'
import { MuiTelInput } from 'mui-tel-input'
import '../../utils/css/styles.css'
import { Stack, TextField } from '@mui/material'

const TelInput = () => {
    const [value, setValue] = React.useState('')

    const handleChange = (newValue) => {
        setValue(newValue)
    }

    return (
        <Stack direction={'row'} width={'100%'} spacing={2}>
            <MuiTelInput defaultCountry="FR" className='TextField-without-border-radius' sx={{ width: 180 }} inputProps={{ readOnly: true, }} value={value} onChange={handleChange} />
            <TextField
                className='TextField-without-border-radius'
                type='text'
                variant='outlined'
                fullWidth
                label='Phone Number'
            />
        </Stack>
    )
}

export default TelInput