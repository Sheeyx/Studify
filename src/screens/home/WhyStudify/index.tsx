import React from 'react';
import './styles.scss';
import { Box, Grid, Typography } from '@mui/material';
import File from "../../../assets/why-studify/file.svg";
import OnBoarding from "../../../assets/why-studify/onboarding.svg";
import User from "../../../assets/why-studify/user.svg";
import { useTranslation } from 'react-i18next';

export default function WhyStudify() {
  const { t } = useTranslation();

  return (
    <Box className='why-stydify container' id="why">
      <Typography className='heading'>{t('why_studify.title')}</Typography>
      <Typography className='text'>{t('why_studify.description')}</Typography>
      
      <Grid container justifyContent="space-between">
        <Grid className='card' item xs={12} sm={5.5} md={3.5}>
          <img src={User} alt="Free consultation" />
          <Typography className='heading'>{t('why_studify.card_1_title')}</Typography>
          <Typography className='text'>{t('why_studify.card_1_text')}</Typography>
        </Grid>

        <Grid className='card' item xs={12} sm={5.5} md={3.5}>
          <img src={File} alt="Guaranteed admission" />
          <Typography className='heading'>{t('why_studify.card_2_title')}</Typography>
          <Typography className='text'>{t('why_studify.card_2_text')}</Typography>
        </Grid>

        <Grid className='card' item xs={12} sm={5.5} md={3.5}>
          <img src={OnBoarding} alt="A to Z support" />
          <Typography className='heading'>{t('why_studify.card_3_title')}</Typography>
          <Typography className='text'>{t('why_studify.card_3_text')}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
