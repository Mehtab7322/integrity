import { Stack } from '@mui/material'
import React from 'react'

const LeftSection = ({ leftSectionContent }) => {
    const arrLength = leftSectionContent.length
    return (
        <Stack paddingLeft={3} paddingTop={3} height={'97%'} justifyContent={'space-between'} bgcolor={'#FAFAFA'}>

            {leftSectionContent[0]}
            {/* <img alt='' src={logoWhite} style={{ width: '8em' }} /> */}
            <Stack paddingLeft={'10%'} flex={'1'} justifyContent={'space-around'}>
                {leftSectionContent && leftSectionContent.slice(1, arrLength).map((content, index) => {
                    return <Stack key={index + 1}>{content}</Stack>
                })}
            </Stack>
        </Stack >
    )
}

export default LeftSection