import React from 'react'
import { Stack, Box, Typography } from "@mui/material"
import './styles.css'

export default function Stats() {
  return (
    <div className='stats-container'>
      <Stack className='stat-stack' direction='row'>
          <Box className='stat-box'>
            <Typography className='stat' variant='h2'>
              18K+
            </Typography>
            <Typography className='stat-label'>
              Installations in Cameroon
            </Typography>
          </Box>
          <Box className='stat-box'>
            <Typography className='stat' variant='h2'>
              18K+
            </Typography>
            <Typography className='stat-label'>
              Installations in Cameroon
            </Typography>
          </Box>
          <Box className='stat-box'>
            <Typography className='stat' variant='h2'>
              18K+
            </Typography>
            <Typography className='stat-label'>
              Installations in Cameroon
            </Typography>
          </Box>
      </Stack>
    </div>
  )
}
