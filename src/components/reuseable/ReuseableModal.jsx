import { Modal } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#FFFFFF',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
};
const ReuseableModal = ({ componentArr, handleClose, open }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Stack sx={style} spacing='1em'>
                {componentArr && componentArr.map((comps, key) => {
                    // <Stack>{comps[0]}</Stack>
                    return <Stack key={key} alignItems={'center'} justifyContent={'center'} spa>{comps}</Stack>;
                })}
            </Stack>

        </Modal>
    )
}

export default ReuseableModal
