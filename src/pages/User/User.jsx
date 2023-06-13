import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import UserAppbar from '../../components/UserAppbar/UserAppbar'
import './styles.css'
import { accountBanner } from '../../constants/images'
import { Button, Typography } from '@mui/material'

export default function user() {
  return (
    <div className='user-account'>
        <Sidebar />
        <div className='user-account-content'>
          <UserAppbar />
          <div className='user-account-banner'>
            <img className='user-account-banner-image' src={accountBanner} alt="open box" />
            <Typography>Votre boite est 
              <Typography sx={{color: '#26AA26', fontWeight: 'bold'}} component='span'> fermée </Typography> 
              <Typography sx={{color: '#FF3939', fontWeight: 'bold'}} component='span'>ouverte</Typography>
            </Typography>
            <Button className='code-btn' variant='contained' disableElevation>Demander un code de retrait</Button>
          </div>
        </div>
    </div>
  )
}
