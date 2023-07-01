import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { OVERVIEW } from '../../constants/text'
import { lockers } from '../../constants/images'
import "./styles.css"

export default function About() {
  return (
    <div className='overview-container'>
        <Box className='overview-textBox' >
            <Typography className='overview-heading' variant='h2'>
                <span className='overview-blue-heading'>{OVERVIEW.headingBlue}</span>
                <br />
                {OVERVIEW.heading}
            </Typography>
            <Typography my={2} color='GrayText'>
                {OVERVIEW.text.p1}
            </Typography>
            <Button variant='outlined' className='overviewBtn'>COMMENCER À UTILISER I-BOX</Button>
        </Box>
        <Box className='overview-imageBox'>
            <img className='overview-image' src={lockers} alt="Sure Delivery" />
        </Box>
    </div>
  )
}
