import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { ABOUT } from '../../constants/text'
import { about } from '../../constants/images'
import "./styles.css"

export default function About() {
  return (
    <div className='about-container'>
        <Box className='about-textBox' >
            <Typography className='about-heading' variant='h2'>
                <span className='about-blue-heading'>{ABOUT.headingBlue}</span>
                <br />
                {ABOUT.heading}
            </Typography>
            <Typography my={2} color='GrayText'>
                {ABOUT.text.p1}
            </Typography>
            <Typography my={2} color='GrayText'>
                {ABOUT.text.p2}
            </Typography>
            <Button variant='outlined' className='aboutBtn'>EN SAVOIR PLUS SUR NOUS</Button>
        </Box>
        <Box className='about-imageBox'>
            <img className='about-image' src={about} alt="Sure Delivery" />
        </Box>
    </div>
  )
}
