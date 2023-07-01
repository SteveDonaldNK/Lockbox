import React from 'react'
import { Avatar, Container, IconButton, Stack, Typography, Badge, Popover, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material'
import { FiberManualRecord, NotificationsOutlined } from '@mui/icons-material'
import { NOTIFICATIONS } from '../../constants/text';
import './styles.css'

export default function UserAppbar({ appBarRef }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  
  return (
    <Container ref={appBarRef} sx={{boxShadow: 1}} className='userAppbar' maxWidth='xl'>
      <Stack width='100%' direction='row' alignItems='center' justifyContent='space-between'>
        <Stack direction='row' alignItems='center' spacing={2}>
          <Avatar>D</Avatar> 
          <Typography>Donald</Typography>
        </Stack>
        <IconButton aria-describedby={id} onClick={handleClick}>
          <Badge badgeContent={NOTIFICATIONS.length} color="error">
            <NotificationsOutlined sx={{ color: '#626262' }} />
          </Badge>  
        </IconButton>
      </Stack>

      <Popover 
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        elevation={2}
      >
        <List
        className='notification-popover'
        >
          {
            NOTIFICATIONS.map((notification, index) => (
              <ListItem disablePadding key={index}>
                <ListItemButton>
                  <ListItemIcon>
                    <FiberManualRecord fontSize='small' />
                  </ListItemIcon>
                  <ListItemText primary={notification} />
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Popover>
    </Container>
  )
}
