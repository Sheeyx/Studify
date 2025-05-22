import React from 'react';
import './styles.scss';
import ApplicationSteps from './components';
import { Typography, useMediaQuery } from '@mui/material';
import MobileAccordion from './components/MobileAccordion';
import { useTranslation } from 'react-i18next';

export default function Process() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const { t } = useTranslation();

  return (
    <div className='how-works container' id='process'>
      <Typography className='heading'>{t('process.title')}</Typography>
      <Typography className='text'>
        {t('process.description')}
      </Typography>

      {isMobile ? <MobileAccordion /> : <ApplicationSteps />}
    </div>
  );
}
