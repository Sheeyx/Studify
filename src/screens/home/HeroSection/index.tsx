import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Grid, Button, Typography, Box } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import "./styles.scss";
import Photo from "../../../assets/hero-section/home.png";
import PartnerCarousel from './components';

export default function HeroSection() {
  const experienceProps = useSpring({ from: { number: 0 }, to: { number: 5 }, config: { duration: 2000 } });
  const successRateProps = useSpring({ from: { number: 0 }, to: { number: 99 }, config: { duration: 2000 } });

  return (
    <Box className="hero-section container">
      <Grid container spacing={4} alignItems="center" mt={6}>
        <Grid item xs={12} md={6} className="hero-left">
          <Typography variant="h2" component="h2">
            Your dream of studying abroad is our mission
          </Typography>
          <Typography variant="body1" className="hero-description">
            We know how to speed up the application process and help you save time and money.
          </Typography>
          <Button variant="contained" className="hero-button" endIcon={<ArrowForwardIcon />}>
            Free consultation
          </Button>
        </Grid>

        <Grid item md={6} xs={12} className="hero-right">
          <Box className="image">
            <img src={Photo} alt="University" />
            <Box className="years-experience">
              <Typography>
                <animated.span>
                  {experienceProps.number.to((n) => Math.round(n))}
                </animated.span> years of experience
              </Typography>
            </Box>
            <Box className="success-rate">
              <Typography className='title'>
                <animated.span>
                  {successRateProps.number.to((n) => Math.round(n))}
                </animated.span>%
              </Typography>
              <Typography className='paragraph'> success rate</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Partner Universities Section */}
      <PartnerCarousel />
    </Box>
  );
}
