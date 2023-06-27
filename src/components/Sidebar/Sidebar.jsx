import React, { useRef, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container, CssBaseline, IconButton, Stack } from '@mui/material';
import { ShoppingBasket, Settings, Restore, Home } from '@mui/icons-material';
import { logo } from '../../constants/images'

import './styles.css'

export default function Sidebar({ sideBarRef, setActiveTab }) {
  const homeRef = useRef(null);
  const subscriptionRef = useRef(null);
  const historyRef = useRef(null);
  const settingsRef = useRef(null);
  const location = useLocation();
  const navigateTo = useNavigate();
  const tabs = [homeRef, subscriptionRef, historyRef, settingsRef]

  function handleTabSelect() {
    const url = new URL(location.pathname, window.location.origin)

    tabs.forEach((tab) => {
      const tabName = tab.current.id;
      tab.current.addEventListener('click', () => {
        url.searchParams.set('tab', tabName);
        navigateTo(url.pathname + url.search);
        setActiveTab(tabName);
        tabs.forEach((otherTab) => {
          if (otherTab.current.id === tabName) {
            otherTab.current.classList.add('active');
          } else {
            otherTab.current.classList.remove('active');
          }
        });
      });
    })
  }

  useEffect(() => {
    handleTabSelect()

    return () => {
      tabs.forEach((tab) => {
        tab.current.removeEventListener('click');
      })
    }
  },[])
  

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
              <IconButton id='home' className='nav-icon active' ref={homeRef}>
                <Home className='sidebar-icon'/>
              </IconButton >
              <IconButton id='subscription' className='nav-icon' ref={subscriptionRef}>
                <ShoppingBasket className='sidebar-icon'/>
              </IconButton>
              <IconButton id='history' className='nav-icon' ref={historyRef}>
                <Restore className='sidebar-icon'/>
              </IconButton>
              <IconButton id='settings' className='nav-icon' ref={settingsRef}>
                <Settings className='sidebar-icon'/>
              </IconButton>
            </Stack>
          </div>
        </Stack>
      </Container>
    </div>
  )
}
