import { Link, Stack, Typography } from '@mui/material'
import React from 'react'
import BlogCard1 from '../../../assets/images/BlogCard1.svg'
import BlogCard from '../../reuseable/cards/BlogCard'
import RewardCard from '../../reuseable/cards/RewardCard'
import RefferCard from '../../reuseable/cards/RefferCard'

const DashboardComponent = () => {
    return (
        <Stack padding={'3em 2em'} spacing={4}>
            <Stack spacing={4}>
                <Typography variant="h4" color={'#344054'}>Dashboard</Typography>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <RewardCard />
                    <RefferCard />
                </Stack>
            </Stack>
            <Stack spacing={4}>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'baseline'}>
                    <Typography variant="h4" color={'#344054'}>Our Blog</Typography>
                    <Typography component={Link} color={'#F83D4B'} sx={{ textDecoration: 'none', cursor: 'pointer' }}>View All Blogs</Typography>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <BlogCard header='Answering all your questions about' content='There are many different 
                    therapy approaches.  When you enter into therapy, you may not know about the approaches 
                    and how your therapist is going to work with you.  While you' cardImage={BlogCard1} />
                    <BlogCard header='Answering all your questions about' content='There are many different 
                    therapy approaches.  When you enter into therapy, you may not know about the approaches 
                    and how your therapist is going to work with you.  While you' cardImage={BlogCard1} />
                    <BlogCard header='Answering all your questions about' content='There are many different 
                    therapy approaches.  When you enter into therapy, you may not know about the approaches 
                    and how your therapist is going to work with you.  While you' cardImage={BlogCard1} />
                </Stack>
            </Stack>
        </Stack>
    )
}

export default DashboardComponent