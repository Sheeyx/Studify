import React from 'react'
import "./styles.scss"
import { Grid, Typography } from '@mui/material'
import ResultsSwiper from './components/Swiper'

export default function OurResults() {
  return (
    <div className='our-results' id='results'>
        <div className='container'>
          <Typography className="heading">Our results</Typography>
          <Typography className="text">Our customers got accepted into best universities and programs, below are some of them</Typography>
          <ResultsSwiper />
        </div>
    </div>
  )
}
