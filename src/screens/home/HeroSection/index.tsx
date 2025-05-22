import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Grid, Button, Typography, Box } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import "./styles.scss";
import Photo from "../../../assets/hero-section/home.png";
import PartnerCarousel from './components';
import Telegram from "../../../assets/hero-section/tg.svg";
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation();
  const experienceProps = useSpring({ from: { number: 0 }, to: { number: 5 }, config: { duration: 2000 } });
  const successRateProps = useSpring({ from: { number: 0 }, to: { number: 99 }, config: { duration: 2000 } });

  return (
    <Box className="hero-section container">
      <Grid container spacing={4} alignItems="center" mt={6}>
        <Grid item xs={12} md={6} className="hero-left">
          <Typography variant="h1" component="h1">
            {t('hero.title')}
          </Typography>
          <Typography variant="body1" className="hero-description">
            {t('hero.description')}
          </Typography>
          <Box className="btn">
            <Button variant="contained" className="consultaion-btn" endIcon={<ArrowForwardIcon />}>
              {t('hero.free_consultation')}
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
                </animated.span> {t('hero.years_experience')}
              </Typography>
            </Box>
            <Box className="success-rate">
              <Typography className='title'>
                <animated.span>
                  {successRateProps.number.to((n) => Math.round(n))}
                </animated.span>%
              </Typography>
              <Typography className='paragraph'>{t('hero.success_rate')}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <PartnerCarousel />
    </Box>
  );
}
