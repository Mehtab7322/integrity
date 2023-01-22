import { Divider, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import logoBlack from '../../assets/images/logoBlack.svg'
import { footerNavigation, footerPrivacyTerm, footerSocialIcons } from '../../data/data'

const Footer = () => {
    return (
        <Stack sx={{ backgroundColor: 'black', padding: '3em 4em' }}>
            <Stack direction={'row'} justifyContent={'space-between'} >
                <img src={logoBlack} alt='' style={{ width: '8em' }} />
                <List style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', color: '#FFFFFF' }}>
                    {footerNavigation.map((text, i) => (
                        <ListItem className='test' key={i} disablePadding sx={{ width: 'fit-content' }}>
                            <ListItemButton>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Stack>
            <List style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '100%' }}>
                {footerSocialIcons.map(({ icon }, i) => (
                    <ListItem key={i} disablePadding sx={{ width: 'fit-content' }}>
                        <ListItemButton sx={{ padding: '0 !important' }}>
                            <ListItemIcon sx={{ color: '#FFFFFF' }}>
                                {icon}
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.29)' }} />
            <Stack spacing={2}>
                <Stack direction={'row'} color={'#FFFFFF'} justifyContent={'space-between'} paddingTop={'3em'}>
                    <Typography>© Integrity1stautomotive 2022</Typography>
                    <Stack flexDirection='row' flexWrap={'wrap'}>
                        {footerPrivacyTerm.map((text, i) => (
                            <Typography component={Link} paddingRight={'1em'} color={'white'} sx={{ textDecoration: 'none', cursor: 'pointer' }}>{text}</Typography>
                        ))}
                    </Stack>
                </Stack>
                <Typography color={'#D0D5DD'} sx={{ opacity: '0.6' }}>
                    Aenean in elit tincidunt, auctor felis id, ornare ante. Praesent sollicitudin dignissim
                    placerat. Cras ligula justo, laoreet sed pellentesque non, semper eu lectus. Mauris id
                    scelerisque orci. Vestibulum euismod urna mauris, id volutpat orci ultrices nec. Vivamus
                    congue tortor nisi, sed mattis sapien dictum a. Curabitur ut ultricies dui, in accumsan felis.
                </Typography>
                <Typography color={'#D0D5DD'} sx={{ opacity: '0.6' }}>Maecenas viverra, elit non accumsan viverra, metus dui posuere metus. </Typography>
            </Stack>
        </Stack>
    )
}

export default Footer