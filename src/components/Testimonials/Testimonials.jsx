import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { TESTIMONIALS } from '../../constants/text'
import './styles.css'

export default function Testimonials() {
  return (
    <div className='testimonial-container'>
        {
            TESTIMONIALS.map((testimonial, index) => (
                <Card className='testimonial-card' key={index} variant='outlined'>
                    <CardContent className='testimonial-cardContent'>
                        <div>
                            <Typography className='testimonial-town' color='gray'>
                                {'Yaounde, ' + testimonial.neighborhood}
                            </Typography>
                            <Typography className='testimonial-body' variant="body1" component="div">
                                {testimonial.text}
                            </Typography>
                        </div>
                        <div>
                            <Typography className='testimonial-name' component="div">
                                {testimonial.name}
                            </Typography>
                            <Typography className='testimonial-status' color="gray" component="div">
                                {testimonial.socialStatus}
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
            ))
        }
    </div>
  )
}
