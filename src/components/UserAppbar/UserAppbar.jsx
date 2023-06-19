import React from 'react'
import { Avatar, Container, IconButton, Stack, Typography, Badge } from '@mui/material'
import './styles.css'
import { NotificationsOutlined } from '@mui/icons-material'

export default function UserAppbar({ appBarRef }) {
  return (
    <Container ref={appBarRef} sx={{boxShadow: 1}} className='userAppbar' maxWidth='xl'>
      <Stack width='100%' direction='row' alignItems='center' justifyContent='space-between'>
        <Stack direction='row' alignItems='center' spacing={2}>
          <Avatar>D</Avatar> 
          <Typography>Donald</Typography>
        </Stack>
        <IconButton>
          <Badge badgeContent={4} color="error">
            <NotificationsOutlined sx={{ color: '#626262' }} />
          </Badge>  
        </IconButton>
      </Stack>
    </Container>
  )
}
