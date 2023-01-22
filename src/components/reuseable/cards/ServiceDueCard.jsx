import { Card, CardHeader, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import ServiceTask from '../../../assets/images/service-task.svg'

const ServiceDueCard = ({ dueDate, serviceTasks }) => {
    console.log("🚀 ~ file: ServiceDueCard.jsx:6 ~ ServiceDueCard ~ serviceTasks", serviceTasks)
    return (
        <>
            <Card sx={{ minWidth: 275, bgcolor: '#F2F4F7' }} >
                <CardHeader title={dueDate} titleTypographyProps={{ variant: 'body1' }} />
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: '#F2F4F7',
                        position: 'relative',
                        overflow: 'auto',
                        // maxHeight: 300,
                        '& ul': { padding: 0 },
                    }}
                >
                    {serviceTasks.map(task => {
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

            </Card>
        </>
    )
}

export default ServiceDueCard