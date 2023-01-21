import { Button } from "@mui/material"

export const RedSolidButton = ({ width, nav, routeAddress, text }) => {
    return <Button onClick={() => nav(routeAddress)} variant="contained" size='large' sx={{ borderRadius: '54.6591px', bgcolor: '#F83D4B', fontSize: 'small', p: 2, width: { width } || 'initial' }}>{text}</Button>
}

export const RedLinearButton = ({ handleClose, width , text}) => {
    return <Button onClick={() => handleClose()} variant="contained" sx={{ borderRadius: '54.6591px', background: 'linear-gradient(80.67deg, #C42E66 27.97%, #D23852 96.9%)', fontSize: 'small', p: 2, width: { width } || 'inherit' }}>{text}</Button>
}