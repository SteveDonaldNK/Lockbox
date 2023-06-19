import React from 'react'
import { Timeline, TimelineSeparator, TimelineItem, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab'
import { Box, Stack, Typography, IconButton } from '@mui/material'
import { Delete } from '@mui/icons-material'

import './styles.css'

export default function History({ contentRef }) {
  return (
    <Timeline ref={contentRef}>
      <TimelineItem className='history-item'>
        <TimelineSeparator className='history-separator'>
          <TimelineDot color='primary' variant="filled" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='history-content'>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
                <Box>
                    <Typography variant='body1' sx={{fontWeight: 'bold'}}>Ouverture</Typography>
                    <Typography mt={1} variant='body2'>Boite ouverte</Typography>
                </Box>
                <Stack direction='row'justifyContent='center' alignItems='center'>
                  <Box sx={{textAlign: 'right'}}>
                    <Typography variant='body1' sx={{fontWeight: 'bold'}}>Date</Typography>
                    <Typography mt={1} variant='body2'>22-08-2001</Typography>
                  </Box>
                  <IconButton sx={{height: 'min-content'}}>
                    <Delete />
                  </IconButton>
                </Stack>
            </Stack>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className='history-item'>
        <TimelineSeparator className='history-separator'>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Fermeture</TimelineContent>
      </TimelineItem>
      <TimelineItem className='history-item'>
        <TimelineSeparator className='history-separator'>
          <TimelineDot variant="filled" color="error" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Bloque</TimelineContent>
      </TimelineItem>
      <TimelineItem className='history-item'>
        <TimelineSeparator className='history-separator'>
          <TimelineDot variant="filled" color='primary'/>
        </TimelineSeparator>
        <TimelineContent>Ouverture</TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
