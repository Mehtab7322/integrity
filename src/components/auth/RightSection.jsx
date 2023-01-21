import { Stack } from '@mui/system'
import React from 'react'
import '../../utils/css/styles.css'


const RightSection = ({ rightSectionContent }) => {

  return (
    <Stack justifyContent={'center'} height={'97%'} width={'70%'} spacing={3}>
      {rightSectionContent && rightSectionContent.map(content => {
        return <>{content}</>
      })}
    </Stack>
  )
}

export default RightSection