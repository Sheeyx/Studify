import React from 'react'
import "./styles.scss"
import { Box, Grid, ListItem, Typography } from '@mui/material';
import File from "../../../assets/why-studify/file.png"
import OnBoarding from "../../../assets/why-studify/onboarding.png"
import User from "../../../assets/why-studify/user-headset.png"

export default function WhyStudify() {
  return (
    <div className='why-stydify container'>
        <Typography className='heading'>Why Studify</Typography>
        <Typography className='text'>We help students to navigate the path to international education with expert guidance and a personalized approach</Typography>
        <Grid container justifyContent="space-between">
        <Grid className='card' item xs={12} sm={6} md={3.5}>
                <img src={User} alt="file" />
                <Typography className='heading'>Free consultation</Typography>
                <Typography className='text'>Get an expert advice and guidance at no cost to help you make informed decisions before deciding your educational future.</Typography>
            </Grid>
            <Grid className='card' item xs={12} sm={6} md={3.5}>
                <img src={File} alt="file" />
                <Typography className='heading'>Guaranteed admission</Typography>
                <Typography className='text'>With our strong network of partner universities, we ensure a high chance of securing your admission, guiding you through every step of the process.</Typography>
                <Box>

                </Box>
            </Grid>
            <Grid className='card' item xs={12} sm={6} md={3.5}>
                <img src={OnBoarding} alt="file" />
                <Typography className='heading'>A to Z support</Typography>
                <Typography className='text'>From the initial consultation to visa applications and arrival, we provide full support—including document submission and meeting at the airport.</Typography>
                <Box>

                </Box>
            </Grid>
        </Grid>
    </div>
  )
}
