import React from 'react';
import "./styles.scss";
import { Grid, Typography } from '@mui/material';
import ResultsSwiper from './components/Swiper';
import { useTranslation } from 'react-i18next';

export default function OurResults() {
  const { t } = useTranslation();

  return (
    <div className='our-results' id='results'>
      <div className='container'>
        <Typography className="heading">{t('results.title')}</Typography>
        <Typography className="text">{t('results.description')}</Typography>
        <ResultsSwiper />
      </div>
    </div>
  );
}
