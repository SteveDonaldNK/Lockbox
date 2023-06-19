import React from 'react'
import { Container, CssBaseline, IconButton, Stack } from '@mui/material';
import { ShoppingBasket, Settings, Restore, Home } from '@mui/icons-material';
import { logo } from '../../constants/images'

import './styles.css'

export default function Sidebar({ sideBarRef }) {
  return (
    <div>
      <CssBaseline />
      <Container className='sidebar'  ref={sideBarRef} maxWidth='xl' >
        <Stack direction='column' spacing={4}>
          <div>
            <img className='logo' src={logo} alt="logo" />
          </div>
          <div>
            <Stack className='sidebar-icon-container' direction='column' justifyContent='center' alignItems='center' spacing={5}>
              <IconButton>
                <Home className='sidebar-icon'/>
              </IconButton>
              <IconButton>
                <ShoppingBasket className='sidebar-icon'/>
              </IconButton>
              <IconButton>
                <Restore className='sidebar-icon'/>
              </IconButton>
              <IconButton>
                <Settings className='sidebar-icon'/>
              </IconButton>
            </Stack>
          </div>
        </Stack>
      </Container>
    </div>
  )
}
