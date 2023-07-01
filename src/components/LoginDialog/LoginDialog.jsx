import React from 'react'
import {Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle, IconButton, InputAdornment, OutlinedInput, InputLabel, FormControl, Typography, Button } from '@mui/material';
import { Email, Visibility, VisibilityOff } from '@mui/icons-material';

import { logo } from '../../constants/images';
import { Link } from 'react-router-dom';

export default function LoginDialog({ setOpen, setShowPassword, setRegisterOpen, open, showPassword }) {
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleRegisterOpen = () => {
        setRegisterOpen(true);
        handleLoginClose();
    }

    function handleLoginClose() {
        setOpen(false);
        setShowPassword(false);
    }
    
  return (
    <Dialog
            open={open}
            onClose={handleLoginClose}
            aria-labelledby="code-dialog-title"
            aria-describedby="code-dialog-description"
            PaperProps={{
              sx: {
                paddingY: 4,
                width: '450px'
              }
            }}
        > 
            <Link style={{width: 'fit-content', margin: 'auto'}} to='/'>
              <img src={logo} alt="logo" style={{width: '4rem'}} />
            </Link>
            <DialogTitle id="code-dialog-title" sx={{fontWeight: 'bold', fontSize: '1.5rem'}}> 
                {"Se connecter"}
            </DialogTitle>
            <DialogContent sx={{paddingBottom: 0}}>
                <DialogContentText id="code-dialog-description">
                  <form action="" style={{padding: '1rem 0', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <FormControl variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-email">Votre adresse mail</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-email"
                        type='text'
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              edge="end"
                            >
                              <Email />
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Votre adresse mail"
                      />
                    </FormControl>

                    <FormControl variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">Mot de passe</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>
                    <Link style={{textAlign: 'right'}} className='link-label'>mot de passe oublie?</Link>
                  </form>
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{display: 'block', textAlign: 'center', mt: 1}}>
                <Button className='login-btn' onClick={handleLoginClose} variant='outlined'>Connexion</Button>
                <Typography mt={2} variant='body2'>Vous n'avez pas de compte? <Typography onClick={handleRegisterOpen} component='span' className='link-label'>S'inscire</Typography></Typography>
            </DialogActions>
        </Dialog>
  )
}
