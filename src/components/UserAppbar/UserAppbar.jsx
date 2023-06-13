import React from 'react'
import { Avatar, Container, IconButton, Stack, Typography } from '@mui/material'
import './styles.css'
import { NotificationsActive } from '@mui/icons-material'

export default function UserAppbar() {
  return (
    <Container sx={{boxShadow: 1}} className='userAppbar' maxWidth='xl'>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Stack direction='row' alignItems='center' spacing={2}>
          <Avatar>D</Avatar> 
          <Typography>Donald</Typography>
        </Stack>
        <IconButton>
          <NotificationsActive sx={{color: '#626262'}} />
        </IconButton>
      </Stack>
    </Container>
  )
}
