import React from 'react'
import { Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material'
import { SUBSCRIPTION } from '../../constants/text'

import './styles.css'
import { Check } from '@mui/icons-material'

export default function Subscription({ contentRef }) {
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
                        <Button className='subscribe-btn' variant='contained' disableElevation>Souscrire</Button>
                    </CardActions>
                </Card>
            ))
        }
    </div>
    </div>
  )
}
