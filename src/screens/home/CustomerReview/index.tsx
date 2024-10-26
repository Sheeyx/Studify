import React from 'react'
import "./styles.scss"
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import VideoGrid from './components'
  
export default function CustomerReview() {
  return (
    <div className='customer-review container'>
       <Typography className="heading">From our customers</Typography>
       <Typography className="text">Our successful customers are more than happy to work with us. Just listen to what say</Typography>
       <VideoGrid/>
    </div>
  )
}
