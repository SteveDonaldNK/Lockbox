import React from 'react'
import { CALLTOACTION } from '../../constants/text'
import { Button, Typography } from '@mui/material'
import './styles.css'

export default function CTA() {
  return (
    <div className='cta-container'>
      <Typography variant='h2' className='cta-heading'>
        {CALLTOACTION.heading}
      </Typography>
      <Button className='cta-btn' variant='outlined' disableElevation>COMMENCER À UTILISER I-BOX</Button>
    </div>
  )
}
