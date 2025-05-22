import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import './styles.scss';
import { useTranslation } from 'react-i18next';

import ContactForm from './components/ContactForm';

const ContactUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box className="contact-form-container">
      <Box>
        <Typography variant="h4" className="contact-title">
          {t('contact.title')}
        </Typography>
        <Typography variant="subtitle1" className="contact-subtitle">
          {t('contact.subtitle')}
        </Typography>
      </Box>
      <ContactForm />
    </Box>
  );
};

export default ContactUs;
