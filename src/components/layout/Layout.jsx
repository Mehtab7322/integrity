import { Stack } from '@mui/system'
import React from 'react'
import Footer from './Footer'
import Header from './Header'
import SideBar from './SideBar'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Stack direction={'row'} className='tetstetstesttes' height={'90vh'} sx={{ backgroundColor: '#F4F5F7' }}>
                <SideBar />
                {children}
            </Stack>
            <Footer />
        </>
    )
}

export default Layout