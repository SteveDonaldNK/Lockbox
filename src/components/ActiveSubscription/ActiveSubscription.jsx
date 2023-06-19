import React from 'react'
import { Button, Typography } from '@mui/material'

import './styles.css'
import { relax } from '../../constants/images'

export default function ActiveSubscription({ contentRef }) {
    const today = new Date().toUTCString();

  return (
    <div ref={contentRef} className='active-banner'>
        <img className='active-banner-image' src={relax} alt="open box" />
        <Typography my={4}>Bien joue votre abonnement est actif jusqu'au 
            <Typography sx={{fontWeight: 'bold'}} component='span'> {today} </Typography> 
        </Typography>
        <Button className='code-btn' variant='contained' disableElevation>Prolonger mon abonnement</Button>
    </div>
  )
}
