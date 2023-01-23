import DashboardIcon from '@mui/icons-material/Dashboard';
import DirectionsCarRoundedIcon from '@mui/icons-material/DirectionsCarRounded'; import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { FaFacebookF } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import RefferVector from '../assets/images/RefferVector.svg'
import Person from '../assets/images/person.svg'
import Dashboard from '../assets/images/dashboard.svg'
import Garage from '../assets/images/garage.svg'
import Calender from '../assets/images/calender.svg'


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
    { icon: <DashboardIcon />, text: 'Dashboard' , path: '/dashboard'},
    { icon: <DirectionsCarRoundedIcon />, text: 'Garage' , path: '/garage'},
    { icon: <CalendarMonthIcon />, text: 'Book Appointment' , path: '/appointment'},
    { icon: <PersonIcon />, text: 'Account' , path: '/account'},
    { icon: <RssFeedIcon />, text: 'Blog' , path: '/blog'},
    { icon: <LogoutRoundedIcon />, text: 'Logout' , path: '/'},
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


export const timeSheet = [
    { day: 'Monday', startTime: '7:00 am', endTime: '11:00 pm' },
    { day: 'Tuesday', startTime: '7:00 am', endTime: '11:00 pm' },
    { day: 'Wednesday', startTime: '7:00 am', endTime: '11:00 pm' },
    { day: 'Thursday', startTime: '7:00 am', endTime: '11:00 pm' },
    { day: 'Friday', startTime: '7:00 am', endTime: '11:00 pm' },
    { day: 'Saturday', startTime: '7:00 am', endTime: '11:00 pm' },
    { day: 'Sunday', startTime: 'close', endTime: 'close' },
]

export const profileMenuList = [
    { icon: <img src={Dashboard} />, text: 'Dashboard' },
    { icon: <img src={Garage} />, text: 'Garage' },
    { icon: <img src={Calender} />, text: 'Book Appointment' },
    { icon: <img src={Person} />, text: 'Account' },
    { icon: <img src={RefferVector} />, text: 'Refer a Friend' },
]

export const serviceTasks = [
    "Oil Change",
    "Brake Pads",
    "New Battery",
    "Auids Changesd",
    "Other Maintanance",
    "Power Setup",
    "Power Setup",
]


export const timeSlots = [
    '08:00 am',
    '09:00 am',
    '10:00 am',
    '11:00 am',
    '12:00 pm',
    '01:00 pm',
    '02:00 pm',
    '03:00 pm',
    '04:00 pm',
    '05:00 pm',
    '06:00 pm',
    '07:00 pm',
] 



