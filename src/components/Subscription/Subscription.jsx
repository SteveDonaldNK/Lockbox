import React from 'react'
import { Button, Card, CardActions, CardContent, Stack, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { SUBSCRIPTION } from '../../constants/text'

import './styles.css'
import { Check } from '@mui/icons-material'

export default function Subscription({ contentRef }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

  return (
    <div>
        <div ref={contentRef} className='pricing-card-container'>
            {
                SUBSCRIPTION.pricing.map((plan, index) => (
                    <Card sx={{boxShadow: 2}} className='pricing-card' variant='outlined' key={index}>
                        <CardContent  className='pricing-card-content'>
                            <Typography variant='h6' className='pricing-card-label'>{plan.label}</Typography>
                            <Typography className='pricing-card-price'>{plan.price} <span className='pricing-card-period'>/mois</span></Typography>
                            <ul style={{textAlign: 'left', listStyle: 'none'}} >
                                {plan.description.map((item, index) => (
                                    <li className='price-list-item' key={index}>
                                        <Stack gap={2} direction='row'>
                                            <Check className='price-list-icon' />
                                            {item}
                                        </Stack>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardActions>
                            <Button onClick={handleOpen} className='subscribe-btn' variant='contained' disableElevation>Souscrire</Button>
                        </CardActions>
                    </Card>
                ))
            }
        </div>
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
