import React from 'react';
import "./styles.scss";
import { Typography } from '@mui/material';
import VideoGrid from './components';
import { useTranslation } from 'react-i18next';

export default function CustomerReview() {
  const { t } = useTranslation();

  return (
    <div className='customer-review container'>
      <Typography className="heading">{t('reviews.title')}</Typography>
      <Typography className="text">{t('reviews.description')}</Typography>
      <VideoGrid />
    </div>
  );
}
