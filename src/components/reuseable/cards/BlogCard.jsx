import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { RedSolidButton } from '../../reuseable/button/Buttons';


const BlogCard = ({ header, content, cardImage }) => {
    return (
        <Card elevation={0} sx={{ minWidth: 100, maxWidth: 300, background: 'inherit' , marginRight:'0.3em'}}>
            <CardMedia
                sx={{ backgroundImage: `url(${cardImage})`, backgroundPosition: 'center', backgroundSize: 'cover', height: "10em", borderRadius: '10px' }}
                component="div"
            />
            <CardContent sx={{ padding: '4px 0' }}>
                <Typography gutterBottom variant="body1" fontWeight={'600'} component="div">
                    {header}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {content}
                </Typography>
            </CardContent>
            <CardActions sx={{ padding: '4px 0' }}>
                <RedSolidButton width={'fit-content'} text='Learn More' />
            </CardActions>
        </Card>
    );
}

export default BlogCard