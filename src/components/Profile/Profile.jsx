import React from 'react'
import { TextField, Box, Stack, Typography, Button } from "@mui/material"
import './styles.css'

export default function Profile() {
  return (
    <Box>
        <form action="">
            <Typography sx={{fontWeight: 'bold'}} variant='h5'>Gestion de compte</Typography> 
            <Stack mt={4} justifyContent='space-between' flexWrap='wrap' gap={5} direction='row'>
                <TextField className="profile-input" size='small' type='text' label="Nom" variant="outlined" />
                <TextField className="profile-input" size='small' type='text' label="Prenom" variant="outlined" />
                <TextField className="profile-input" size='small' type='email' label="E-mail" variant="outlined" />
                <TextField className="profile-input" size='small' type='tel' label="Telephone" variant="outlined" />
                <TextField className="profile-input" size='small' type='text' label="Addresse" variant="outlined" />
            </Stack>
            <Button sx={{float: 'right', marginTop: 5}} type='submit' variant='contained' disableElevation>Enregistrer</Button>
        </form>
    </Box>
  )
}
