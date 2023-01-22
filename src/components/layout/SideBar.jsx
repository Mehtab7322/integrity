import { Button, Divider, Drawer, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, MenuList, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import { sideBarLIst, timeSheet } from '../../data/data'
import Avatar from '../../assets/images/Avatar.svg'
import ReuseableModal from '../reuseable/ReuseableModal'
import '../../utils/css/styles.css'
import { useNavigate } from 'react-router'

const SideBar = () => {
    const nav = useNavigate()
    const user = 'Diana'
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const headline = () => {
        return <Typography variant='h4' fontWeight={'600'}>Opening Hours</Typography>
    }
    const timeTable = () => {
        return (
            <MenuList sx={{ width: '100%' }}>
                {
                    timeSheet.map(({ day, startTime, endTime }, key) => {
                        return (
                            <>
                                <MenuItem key={key} sx={{ width: '100%' }}>
                                    <ListItemText sx={{ flex: '2 1 auto' }}>{day}</ListItemText>
                                    {(startTime === 'close') || (endTime === 'close') ?
                                        <ListItemText sx={{ display: 'flex', justifyContent: 'center', flex: '1 1 auto' }}>Close</ListItemText> :
                                        <ListItemText sx={{ display: 'flex', justifyContent: 'flex-end', flex: '1 1 auto' }}>{`${startTime} - ${endTime}`}</ListItemText>
                                    }
                                </MenuItem>
                                <Divider />
                            </>
                        )
                    })
                }
            </MenuList >
        )
    }
    const componentArr = [headline(), timeTable()]
    return (
        <>
            <Stack width={'30%'} sx={{ backgroundColor: '#ffffff' }}>
                <Drawer
                    sx={{
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            position: 'inherit',
                            borderRight: '0px'
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <Stack alignItems={'center'} justifyContent={'center'}>
                        <img src={Avatar} alt='' />
                        <Typography fontWeight={'600'} color={'#475467'}>Good Morning {user}!</Typography>
                        <Typography textAlign={'center'}>Dunning Road, Cumberland Ontario, Canada</Typography>
                        <Link color={'secondary'} component={Button} onClick={() => handleOpen()}>View opening hours</Link>
                    </Stack>
                    <Divider />
                    <List>
                        {sideBarLIst.map(({ icon, text, path }, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton onClick={() => nav(path)} >
                                    <ListItemIcon>
                                        {icon}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <ReuseableModal componentArr={componentArr} handleClose={handleClose} open={open} />
            </Stack>
        </>
    )
}

export default SideBar


