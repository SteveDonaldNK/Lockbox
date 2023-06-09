import { Stack } from '@mui/material'
import React from 'react'

import { campost, dhl, fedex } from "../../constants/images";
import "./styles.css"

export default function Partners() {
  return (
    <div className='partner-container' >
      <Stack className='partnerStack' direction='row'>
        <img className='campost' src={campost} alt="campost" />
        <img className='partners' src={dhl} alt="dhl" />
        <img className='partners' src={fedex} alt="fedex" />
      </Stack>
    </div>
  )
}
