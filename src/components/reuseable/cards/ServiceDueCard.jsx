import { Card, CardHeader, Chip, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import ServiceTask from '../../../assets/images/service-task.svg'

const ServiceDueCard = ({ dueDate, serviceTasks, bgcolor, isDue }) => {
    console.log("🚀 ~ file: ServiceDueCard.jsx:6 ~ ServiceDueCard ~ serviceTasks", serviceTasks)
    return (
        <Stack position={'relative'}>
            <Card sx={{ minWidth: 275, bgcolor: bgcolor || '#F2F4F7', marginRight: 2 }} >
                <CardHeader title={dueDate} titleTypographyProps={{ variant: 'body1' }} />
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: bgcolor || '#F2F4F7',
                        position: 'relative',
                        overflow: 'auto',
                        // maxHeight: 300,
                        '& ul': { padding: 0 },
                        '& li': { padding: '2px 12px' },
                    }}
                >
                    {serviceTasks && serviceTasks.map(task => {
                        return (
                            <ListItem>
                                <ListItemIcon>
                                    <img src={ServiceTask} alt='' />
                                </ListItemIcon>
                                <ListItemText
                                    primary={task}
                                />
                            </ListItem>
                        )

                    })}

                </List>
                {isDue && <Chip label="Services Due" sx={{ bgcolor: '#F63D68', position: 'absolute', top: '-5%', right: "1%", zIndex: '1000', border: '2px solid white' }} />}

            </Card>
        </Stack>
    )
}

export default ServiceDueCard