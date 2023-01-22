import { Button, Stack } from "@mui/material"
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';


const blue = {
    500: 'linear-gradient(80.67deg, #C42E66 27.97%, #D23852 96.9%)',
    600: '#FECDD6',
    700: '#0059B2',
};

const PlatinumButtonStyle = styled(ButtonUnstyled)`
    font-family: IBM Plex Sans, sans-serif;
    font-weight: inherit;
    font-size: 0.875rem;
    background: ${blue[500]};
    padding: 12px 24px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
    width: 100%;
  
    // &:hover {
    //   background-color: ${blue[600]};
    // }
  
    // &.${buttonUnstyledClasses.active} {
    //   background-color: ${blue[700]};
    // }
  
    // &.${buttonUnstyledClasses.focusVisible} {
    //   box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    //   outline: none;
    // }
  
    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

const NonPlatinumButtonStyle = styled(ButtonUnstyled)`
    font-family: IBM Plex Sans, sans-serif;
    font-weight: inherit;
    font-size: 0.875rem;
    background: ${blue[600]};
    padding: 12px 24px;
    color: #C42E66;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
    width: 100%;
  
    // &:hover {
    //   background-color: ${blue[600]};
    // }
  
    // &.${buttonUnstyledClasses.active} {
    //   background-color: ${blue[700]};
    // }
  
    // &.${buttonUnstyledClasses.focusVisible} {
    //   box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    //   outline: none;
    // }
  
    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

export const RedSolidButton = ({ width, nav, routeAddress, text }) => {
    return <Button onClick={() => nav(routeAddress)} variant="contained" size='large' sx={{ borderRadius: '54.6591px', bgcolor: '#F83D4B', fontSize: 'small', p: 2, width: { width } || 'initial' }}>{text}</Button>
}

export const RedLinearButton = ({ handleClose, width, text, variant }) => {
    console.log("🚀 ~ file: Buttons.jsx:81 ~ RedLinearButton ~ variant", variant)
    return <Button onClick={() => handleClose()} variant={variant ? variant : 'contained'} sx={{ borderRadius: '54.6591px', background: variant ? '' : 'linear-gradient(80.67deg, #C42E66 27.97%, #D23852 96.9%)', color: 'danger', fontSize: 'small', p: 2, width: { width } || 'inherit' }}>{text}</Button>
}

export const PlatinumButton = ({ text, handler }) => {
    return (
        <Stack spacing={2} direction="row" width={'100%'} marginTop='12px'>
            <PlatinumButtonStyle onClick={() => handler()}>{text}</PlatinumButtonStyle>
        </Stack>
    );
}

export const NonPlatinumButton = ({ text, handler }) => {
    return (
        <Stack spacing={2} direction="row" width={'100%'} marginTop='12px'>
            <NonPlatinumButtonStyle onClick={() => handler()}>{text}</NonPlatinumButtonStyle>
        </Stack>
    );
}