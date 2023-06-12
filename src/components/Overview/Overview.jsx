import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { ABOUT } from '../../constants/text'
import { lockers } from '../../constants/images'
import "./styles.css"

export default function About() {
  return (
    <div className='overview-container'>
        <Box className='overview-textBox' >
            <Typography className='overview-heading' variant='h2'>
                <span className='overview-blue-heading'>{ABOUT.headingBlue}</span>
                <br />
                {ABOUT.heading}
            </Typography>
            <Typography my={2} color='GrayText'>
                {ABOUT.text.p1}
            </Typography>
            <Typography my={2} color='GrayText'>
                {ABOUT.text.p2}
            </Typography>
            <Button variant='outlined' className='overviewBtn'>START USING LOCKBOX</Button>
        </Box>
        <Box className='overview-imageBox'>
            <img className='overview-image' src={lockers} alt="Sure Delivery" />
        </Box>
    </div>
  )
}
