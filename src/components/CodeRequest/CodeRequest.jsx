import React from 'react'
import { Button, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

import './styles.css'
import { accountBanner } from '../../constants/images'

export default function CodeRequest({ contentRef }) {
  const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

  return (
    <div ref={contentRef} className='home-banner'>
        <img className='home-banner-image' src={accountBanner} alt="open box" />
        <Typography>Votre boite est 
            <Typography sx={{color: '#26AA26', fontWeight: 'bold'}} component='span'> fermée </Typography> 
            <Typography sx={{color: '#FF3939', fontWeight: 'bold'}} component='span'>ouverte</Typography>
        </Typography>
        <Button onClick={handleOpen} className='code-btn' variant='contained' disableElevation>Demander un code de retrait</Button>

        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            slotProps={{
                className: 'dialog-container',
            }}
            
        >
            <DialogTitle id="alert-dialog-title" sx={{fontWeight: 'bold', fontSize: '1.5rem'}}> 
                {"Veuillez choisir l'offre qui vous convient"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose} autoFocus>Agree</Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}
