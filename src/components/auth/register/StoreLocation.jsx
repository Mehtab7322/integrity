import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { top100Films } from '../../../data/data';
import '../../../utils/css/styles.css'

const StoreLocation = () => {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: '100%', borderRadius: '54.6591px !important' }}
            renderInput={(params) => <TextField {...params} label="Store Location" />}
        />
    );
}

export default StoreLocation

