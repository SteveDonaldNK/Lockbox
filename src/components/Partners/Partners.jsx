import { Stack, Typography } from '@mui/material'
import React from 'react'

import { campost } from "../../constants/images";
import "./styles.css"

export default function Partners() {
  return (
    <div className='partner-container' >
      <Stack className='partnerStack' direction={{md: 'column'}}>
        <img className='campost' src={campost} alt="campost" />
        <Typography mt={2} variant='body1'>Premier partenaire</Typography>
      </Stack>
    </div>
  )
}
