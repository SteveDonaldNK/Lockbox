import React from 'react'
import { Button, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

import './styles.css'
import { accountBanner } from '../../constants/images'

export default function CodeRequest({ contentRef }) {
  const [codeDialogOpen, setCodeDialogOpen] = React.useState(false);
  const [taxDialogOpen, setTaxDialogOpen] = React.useState(false);
  const [taxPaid, setTaxPaid] = React.useState(false);
    const handleCodeDialogOpen = () => {
        setCodeDialogOpen(true);
    };
    const handleCodeDialogClose = () => {
        setCodeDialogOpen(false);
    };
    const handleTaxDialogOpen = () => {
        setTaxDialogOpen(true);
    };
    const handleTaxDialogClose = () => {
        setTaxDialogOpen(false);
    };

  return (
    <div ref={contentRef} className='home-banner'>
        <img className='home-banner-image' src={accountBanner} alt="open box" />
        <Typography>Votre boite est 
            <Typography sx={{color: '#26AA26', fontWeight: 'bold'}} component='span'> fermée </Typography> 
            <Typography sx={{color: '#FF3939', fontWeight: 'bold'}} component='span'>ouverte</Typography>
        </Typography>
        <Button onClick={taxPaid ? handleCodeDialogOpen : handleTaxDialogOpen} className='code-btn' variant='contained' disableElevation>Demander un code de retrait</Button>

        <Dialog
            open={codeDialogOpen}
            onClose={handleCodeDialogClose}
            aria-labelledby="code-dialog-title"
            aria-describedby="code-dialog-description"
            PaperProps={{
                sx: {paddingY: 4, borderRadius: 4}
            }}
            
        >
            <DialogTitle id="code-dialog-title" sx={{fontWeight: 'bold', fontSize: '1.5rem'}}> 
                {"Votre code de retrait"}
            </DialogTitle>
            <DialogContent sx={{paddingBottom: 0}}>
                <DialogContentText id="code-dialog-description">
                    <Typography component='div'>Utilisez le code suivant pour ouvrir votre boite:</Typography>
                    <Typography component='div' className='widrawal-code' sx={{fontWeight: 'bold'}}>785231</Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button className='dialog-btn code-dialog' onClick={handleCodeDialogClose} variant='outlined'>fermer</Button>
            </DialogActions>
        </Dialog>

        <Dialog
            open={taxDialogOpen}
            onClose={handleTaxDialogClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            PaperProps={{
                sx: {paddingY: 4, borderRadius: 4}
            }}
        >
            <DialogTitle id="tax-dialog-title" sx={{fontWeight: 'bold', fontSize: '1.5rem', textAlign: 'center'}}> 
                {"Une seconde..."}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="tax-dialog-description" sx={{color: 'black', textAlign: "center"}}>
                    Pour continuer veuillez regler votre facture ( taxes postales ).
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleTaxDialogClose} variant='outlined' className='dialog-btn'>Continuer</Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}
