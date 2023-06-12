import React from 'react'
import { logo } from '../../constants/images'
import './styles.css'
import { Link, Stack, Button, Typography } from '@mui/material'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer-container'>
      <div className='top-footer'>
        <Stack direction='row' spacing={10} alignItems='center'>
          <img className='footer-logo' src={logo} alt="logo" />
          <Link className='footer-link' href='/about' underline='none'>About us</Link>
          <Link className='footer-link' href='/contact' underline='none'>Contact us</Link>
          <Link className='footer-link' href='/contact' underline='none'>Privacy</Link>
          <Link className='footer-link' href='/contact' underline='none'>Terms</Link>
        </Stack>
        <Button className='footer-btn' variant='contained'>Start using lockbox</Button>
      </div>
      <hr className='footer-separator' />
      <div className='bottom-footer'>
        <Typography>&copy; {currentYear} LOCKBOX ALRIGHTS RESERVED. </Typography>
      </div>
    </div>
  )
}
