import React, { useState } from 'react'
import { Container, CssBaseline, Typography, Box, Stack, Button } from '@mui/material';

import { HERO } from '../../constants/text'

import './styles.css'
import LoginDialog from '../LoginDialog/LoginDialog';
import RegisterDialog from '../RegisterDialog/RegisterDialog';

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [openRegister, setRegisterOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function handleLoginOpen() {
    setOpen(true);
  }

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
          <Button onClick={handleLoginOpen} className='heroBtn' variant='outlined' color='inherit'>
            {HERO.leftBtn}
          </Button>
          <Button className='heroBtn hero-rightBtn' variant='contained' color='inherit' disableElevation>
            {HERO.rightBtn}
          </Button>
        </Stack>
      </Box>

      <LoginDialog open={open} setOpen={setOpen} setRegisterOpen={setRegisterOpen} showPassword={showPassword} setShowPassword={setShowPassword} />
      <RegisterDialog openRegister={openRegister} setRegisterOpen={setRegisterOpen} setOpen={setOpen} showPassword={showPassword} setShowPassword={setShowPassword} />
    </Container>
  )
}
