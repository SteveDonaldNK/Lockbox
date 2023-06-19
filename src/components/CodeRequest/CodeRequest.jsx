import React from 'react'
import { Button, Typography } from '@mui/material'

import './styles.css'
import { accountBanner } from '../../constants/images'

export default function CodeRequest({ contentRef }) {
  return (
    <div ref={contentRef} className='home-banner'>
        <img className='home-banner-image' src={accountBanner} alt="open box" />
        <Typography>Votre boite est 
            <Typography sx={{color: '#26AA26', fontWeight: 'bold'}} component='span'> fermée </Typography> 
            <Typography sx={{color: '#FF3939', fontWeight: 'bold'}} component='span'>ouverte</Typography>
        </Typography>
        <Button className='code-btn' variant='contained' disableElevation>Demander un code de retrait</Button>
    </div>
  )
}
