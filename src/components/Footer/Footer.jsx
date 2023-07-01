import React from 'react'
import { logo } from '../../constants/images'
import Partners from '../Partners/Partners'
import './styles.css'
import { Link, Stack, Button, Typography } from '@mui/material'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer-container'>
      <div className='top-footer'>
        <Stack gap={{xs: '1rem', lg: 'none'}} direction={{lg: 'row'}} spacing={10} alignItems='center'>
          <img className='footer-logo' src={logo} alt="logo" />
          <Link className='footer-link' href='/about' underline='none'>A propos</Link>
          <Link className='footer-link' href='/contact' underline='none'>Contactez nous</Link>
          <Link className='footer-link' href='/contact' underline='none'>Confidentialité</Link>
          <Link className='footer-link' href='/contact' underline='none'>Termes</Link>
        </Stack>
        <Button className='footer-btn' variant='contained'>COMMENCER À UTILISER I-BOX</Button>
      </div>
      <hr className='footer-separator' />
      <Partners />
      <div className='bottom-footer'>
        <Typography>&copy; {currentYear} I-BOX ALRIGHTS RESERVED. </Typography>
      </div>
    </div>
  )
}
