import { Divider, Drawer, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { sideBarLIst } from '../../data/data'
import Avatar from '../../assets/images/Avatar.svg'

const SideBar = () => {
    const user = 'Diana'
    return (
        <>
            <Stack width={'20%'} position="sticky" sx={{ backgroundColor: '#ffffff' }}>
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
                        <Link color={'secondary'}>View opening hours</Link>
                    </Stack>
                    <Divider />
                    <List>
                        {sideBarLIst.map(({ icon, text }, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {icon}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Stack>
        </>
    )
}

export default SideBar