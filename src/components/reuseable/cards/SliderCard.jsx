import { Stack } from '@mui/system'
import React from 'react'
import SliderCard1 from '../../../assets/images/SliderCard1.png'
import SliderCard1Car from '../../../assets/images/SliderCard1Car.svg'

const SliderCard = () => {
    return (
        <Stack direction={'row'} sx={{ backgroundImage: `url(${SliderCard1})`, backgroundPosition: 'center' }} width={'100%'} height={'100%'}>
            <img src={SliderCard1Car} />
        </Stack>
    )
}

export default SliderCard