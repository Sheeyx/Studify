import React from 'react';
import './styles.scss';
import ApplicationSteps from './components';
import { Typography, useMediaQuery } from '@mui/material';
import MobileAccordion from './components/MobileAccordion';

export default function HowWorks() {
  // Define breakpoints for mobile and desktop using Material-UI's useMediaQuery
  const isMobile = useMediaQuery('(max-width:600px)'); // Adjust this width as needed

  return (
    <div className='how-works container'>
      <Typography className='heading'>How it works</Typography>
      <Typography className='text'>
        From the first consultation to landing at your destination — here's how Studify makes it happen:
      </Typography>
      
      {/* Show ApplicationSteps on desktop and MobileAccordion on mobile */}
      {isMobile ? <MobileAccordion /> : <ApplicationSteps />}
    </div>
  );
}