import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Container, Grid, Button, Typography, Box } from '@mui/material';
import "./styles.scss";
import Photo from "../../../assets/uni-photo.jpeg";
import Img1 from "../../../assets/hero-section/glasgow.png";
import Img2 from "../../../assets/hero-section/harvard-university.png";
import Img3 from "../../../assets/hero-section/university-sydney.png";

export default function HeroSection() {
  return (
    <Box className="hero-section container">
        <Grid container spacing={4} alignItems="center" mt={6}>
          <Grid item xs={12}  md={6} className="hero-left">
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
                <Typography className="number">5+</Typography>
                <Typography>Years of Experience</Typography>
              </Box>
              <Box className="box-circle">
                <Typography className="number">99%</Typography>
                <Typography>Success rate</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Partner Universities Section */}
        <Grid container className="partner" spacing={4} alignItems="center">
          <Grid item xs={12} md={3}>
            <Typography className="text">Partnered with top universities</Typography>
          </Grid>
          <Grid item xs={12} md={9} className="img-box">
            <img src={Img1} alt="University of Glasgow" />
            <img src={Img2} alt="Harvard University" />
            <img src={Img3} alt="University of Sydney" />
          </Grid>
        </Grid>
    </Box>
  );
}
