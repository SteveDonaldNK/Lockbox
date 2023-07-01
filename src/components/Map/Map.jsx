import React from 'react'
import { Typography } from "@mui/material"
import { map } from '../../constants/images'
import { MAP } from "../../constants/text"
import './styles.css'

export default function Map() {
  return (
    <div className='map-container'>
        <Typography className='map-heading' variant='h2'>
            {MAP.heading} <span style={{display: 'inline-block'}}>I-BOX</span>
        </Typography>
        <img className='map' src={map} alt="map" />
    </div>
  )
}
