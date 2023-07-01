import React from 'react'
import { Timeline, TimelineSeparator, TimelineItem, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab'
import { Box, Stack, Typography, IconButton } from '@mui/material'
import { Delete } from '@mui/icons-material'
import { HISTORY } from '../../constants/text'

import './styles.css'

export default function History({ contentRef }) {
  function handleDelete() {
    
  }

  return (
    <Timeline ref={contentRef} className='timeline-container'>
      {
        HISTORY.map((item, index) => (
          <TimelineItem className='history-item' key={index}>
            <TimelineSeparator className='history-separator'>
              <TimelineDot color={ 
                                    item.event === 'Bloqué' ? 'error' : 'primary'
                            } variant={
                                item.event === 'Fermeture' ? 'outlined' : 'filled'
                              } />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className='history-content'>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Box>
                        <Typography variant='body1' sx={{fontWeight: 'bold'}}>{item.event}</Typography>
                        <Typography mt={1} variant='body2'>{item.notification}</Typography>
                    </Box>
                    <Stack direction='row'justifyContent='center' alignItems='center'>
                      <Box sx={{textAlign: 'right'}}>
                        <Typography variant='body1' sx={{fontWeight: 'bold'}}>Date</Typography>
                        <Typography mt={1} variant='body2'>{item.date}</Typography>
                      </Box>
                      <IconButton onClick={handleDelete} sx={{height: 'min-content'}}>
                        <Delete />
                      </IconButton>
                    </Stack>
                </Stack>
            </TimelineContent>
          </TimelineItem>
        ))
      }
    </Timeline>
  )
}
