import React from 'react'
import { Container, CssBaseline, Typography, Box, Stack, Button } from '@mui/material';

import './styles.css'
import { HERO } from '../../constants/text'

export default function Hero() {
  return (
    <Container className='hero' maxWidth='xl'>
      <CssBaseline />
      <Box className='heroBox'>
        <Typography className='heroHeading'>
          {HERO.heading}
        </Typography>
        <Typography className='heroSubHeading'>
          {HERO.subHeading}
        </Typography>
        <Stack className='heroBtnStack' direction='row' spacing={2}>
          <Button className='heroBtn' variant='outlined' color='inherit'>
            {HERO.leftBtn}
          </Button>
          <Button className='heroBtn hero-rightBtn' variant='contained' color='inherit' disableElevation>
            {HERO.rightBtn}
          </Button>
        </Stack>
      </Box>
    </Container>
  )
}
