import React from 'react'
import "./styles.scss"
import ApplicationSteps from './components'
import { Typography } from '@mui/material'

export default function HowWorks() {
  return (
    <div className='how-works container'>
        <Typography className='heading'>How it works</Typography>
        <Typography className='text'>We help students to navigate the path to international 
education with expert guidance and a personalized approach</Typography>
        <ApplicationSteps />
    </div>
  )
}
