import React from 'react'
import { TextField, Box, Stack, Typography, Button } from "@mui/material"
import './styles.css'

export default function Profile() {
  return (
    <Box>
        <form action="">
            <Typography sx={{fontWeight: 'bold'}} variant='h5'>Gestion de compte</Typography> 
            <Stack justifyContent='space-between' flexWrap='wrap' gap={5} direction='row'>
                <TextField className="profile-input" type='text' label="Nom" variant="outlined" />
                <TextField className="profile-input" type='text' label="Prenom" variant="outlined" />
                <TextField className="profile-input" type='email' label="E-mail" variant="outlined" />
                <TextField className="profile-input" type='tel' label="Telephone" variant="outlined" />
                <TextField className="profile-input" type='text' label="Addresse" variant="outlined" />
            </Stack>
            <Button type='submit' variant='contained'>Enregistrer</Button>
        </form>
    </Box>
  )
}
