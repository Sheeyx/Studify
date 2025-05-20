import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Grid, Button, Typography, Box } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import "./styles.scss";
import Photo from "../../../assets/hero-section/home.png";
import PartnerCarousel from './components';
import Telegram from "../../../assets/hero-section/tg.svg";


export default function HeroSection() {
  const experienceProps = useSpring({ from: { number: 0 }, to: { number: 5 }, config: { duration: 2000 } });
  const successRateProps = useSpring({ from: { number: 0 }, to: { number: 99 }, config: { duration: 2000 } });

  return (
    <Box className="hero-section container">
      <Grid container spacing={4} alignItems="center" mt={6}>
        <Grid item xs={12} md={6} className="hero-left">
        <h1>Chet Elda O‘qish Bo‘yicha Bepul Konsultatsiya – Studify.uz</h1>
        <p>Biz O‘zbekistonlik talabalar uchun Koreyada va boshqa xorijiy davlatlarda o‘qish imkoniyatlarini taqdim etamiz: grantlar, vizalar, IELTS va TOPIK kurslari, yotoqxona joylashtirish va kutib olish xizmatlari.</p>

          <Box className="btn">
            <Button variant="contained" className="consultaion-btn" endIcon={<ArrowForwardIcon />}>
              Free consultation
            </Button>
            <Button
            variant="contained"
            className="tg-btn"
            onClick={() => window.open("https://t.me/studify_uz", "_blank")}
          >
            <img src={Telegram} alt="tg" />
          </Button>
          </Box>
          
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
