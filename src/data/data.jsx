import DashboardIcon from '@mui/icons-material/Dashboard';
import DirectionsCarRoundedIcon from '@mui/icons-material/DirectionsCarRounded'; import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { FaFacebookF } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'


// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
export const top100Films = [
    { label: '325 W Farm to Market Road 544, Murphy TX 75094' },
    { label: '326 W Farm to Market Road 544, Murphy TX 75094' },
    { label: '327 W Farm to Market Road 544, Murphy TX 75094' },
    { label: '328 W Farm to Market Road 544, Murphy TX 75094' },
    { label: '329 W Farm to Market Road 544, Murphy TX 75094' },
    { label: '330 W Farm to Market Road 544, Murphy TX 75094' },
]

export const accounts = [
    "test.mail1@gmail.com",
    "test.mail2@gmail.com",
    "test.mail3@gmail.com",
    "test.mail4@gmail.com",
    "test.mail5@gmail.com",
]

export const sideBarLIst = [
    { icon: <DashboardIcon />, text: 'Dashboard' },
    { icon: <DirectionsCarRoundedIcon />, text: 'Garage' },
    { icon: <CalendarMonthIcon />, text: 'Book Appointment' },
    { icon: <PersonIcon />, text: 'Account' },
    { icon: <RssFeedIcon />, text: 'Blog' },
    { icon: <LogoutRoundedIcon />, text: 'Logout' },
]

export const footerNavigation = [
    'Contact us',
    'Security',
    'Cookie Policy',
    'Manage Cookie Preferences',
    'Become an affiliate',
    'Site map',
    'About us',
]

export const footerSocialIcons = [
    { icon: <FaFacebookF /> },
    { icon: <FiTwitter /> },
]

export const footerPrivacyTerm = [
    'Privacy',
    'Terms and Conditions',
]