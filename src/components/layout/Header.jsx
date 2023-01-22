import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logoWhite from '../../assets/images/logoWhite.svg'
import { Stack } from '@mui/system';
import avatar from '../../assets/images/avatar.png'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { createTheme, ListItemIcon, ThemeProvider } from '@mui/material';
import { profileMenuList } from '../../data/data';

const pages = ['About Us', 'FAQ’s', 'Blogs'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
    const { palette } = createTheme();
    const { augmentColor } = palette;
    const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
    const theme = createTheme({
        palette: {
            anger: createColor('#F83D4B')
        },
    });

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="unset" elevation={0} sx={{ backgroundColor: '#FCFCFD', height: '10vh' }}>
                <Container maxWidth="xl" sx={{ height: '100%' }} className='testtest'>
                    <Toolbar disableGutters>
                        <Stack sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                            <img alt='' src={logoWhite} style={{ width: '8em' }} />
                        </Stack>


                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="#475467"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center" color={'#475467'}>{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Stack sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, transform: 'translate(-50%,-50%)' }} position='absolute' top={'50%'} left={'50%'} transform>
                            <img alt='' src={logoWhite} style={{ width: '8em', flexGrow: 1 }} />
                        </Stack>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: '#475467', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <NotificationsOutlinedIcon sx={{ color: '#475467', mx: '8px' }} />

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src={avatar} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '50px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {profileMenuList.map(({ icon, text }, key) => (
                                    <MenuItem key={key} onClick={handleCloseUserMenu} sx={{ paddingY: '0.7em' }}>
                                        <ListItemIcon color={'#98A2B3'}>
                                            {icon}
                                        </ListItemIcon>
                                        <Typography color={'#98A2B3'}>{text}</Typography>
                                    </MenuItem>
                                ))}
                                <Button variant="outlined" color="anger" fullWidth sx={{ borderRadius: '54.6591px', marginTop: '0.7em' }}>Logout</Button>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}
export default Header;