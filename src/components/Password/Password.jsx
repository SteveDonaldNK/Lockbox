import React from 'react'
import { TextField, Box, Stack, Typography, Button } from "@mui/material"
import './styles.css'

export default function Password() {
  return (
    <Box>
        <form action="">
            <Typography sx={{fontWeight: 'bold'}} variant='h5'>Modifier le mot de passe</Typography> 
            <Stack mt={4} justifyContent='space-between' flexWrap='wrap' gap={5} direction='row'>
                <TextField className="profile-input" size='small' type='Password' label="Nouveau mot de passe" variant="outlined" />
                <TextField className="profile-input" size='small' type='Password' label="Confirmer" variant="outlined" />
            </Stack>
            <Button sx={{marginTop: 5}} type='submit' variant='contained' disableElevation>Enregistrer</Button>
        </form>
    </Box>
  )
}
