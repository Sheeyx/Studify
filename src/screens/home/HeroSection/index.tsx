import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Grid, Button, Typography, Box } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import "./styles.scss";
import Photo from "../../../assets/uni-photo.jpeg";
import PartnerCarousel from './components';

export default function HeroSection() {
  const experienceProps = useSpring({ from: { number: 0 }, to: { number: 5 }, config: { duration: 2000 } });
  const successRateProps = useSpring({ from: { number: 0 }, to: { number: 99 }, config: { duration: 2000 } });

  const AnimatedTypography = animated(Typography);

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

        <Grid item xs={12} md={6} className="hero-right">
          <Box className="image">
            <img src={Photo} alt="University" />
          </Box>
          <Box className="percentage">
            <Box className="box">
              {/* Use AnimatedTypography to work with react-spring */}
              <AnimatedTypography className="number">
                {experienceProps.number.to((n) => `${n.toFixed(0)}+`)}
              </AnimatedTypography>
              <Typography>Years of Experience</Typography>
            </Box>
            <Box className="box-circle">
              <AnimatedTypography className="number">
                {successRateProps.number.to((n) => `${n.toFixed(0)}%`)}
              </AnimatedTypography>
              <Typography>Success rate</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Partner Universities Section */}
      <PartnerCarousel />
    </Box>
  );
}
