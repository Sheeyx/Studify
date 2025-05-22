import { Alert, Box, Button, Snackbar, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Instagram from '../../../../assets/contact/instagram.svg';
import Telegram from '../../../../assets/contact/Telegram.svg';
import Contact from '../../../../assets/contact/concact.svg';
import Email from '../../../../assets/contact/Email.svg';
import { MessageInput } from '../../../../libs/types/message';
import MessageService from '../../../../services/MessageService';
import './styles.scss';

export default function ContactForm() {
  const { t } = useTranslation();
  const messageService = new MessageService();
  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [messageStatus, setMessageStatus] = useState<string | null>(null);

  const handleSubmit = async () => {
    const input: MessageInput = {
      fullName: name,
      phone: phoneNumber,
    };

    try {
      await messageService.createMessage(input);
      setName('');
      setPhoneNumber('');
      setMessageStatus(t('contact_form.success'));
      setOpenSnackbar(true);
    } catch {
      setMessageStatus(t('contact_form.error'));
      setOpenSnackbar(true);
    }
  };

  return (
    <Box className="contact-form-content">
      <Box className="contact-form">
        <Box className="form-box">
          <Typography variant="h6" className="form-box_title">
            {t('contact_form.title')}
          </Typography>
          <TextField
            label={t('contact_form.name_label')}
            variant="outlined"
            fullWidth
            margin="normal"
            className="text-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label={t('contact_form.phone_label')}
            variant="outlined"
            fullWidth
            margin="normal"
            className="text-field"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Button variant="contained" className="submit-button" onClick={handleSubmit}>
            {t('contact_form.send_button')}
          </Button>
        </Box>
      </Box>

      <Box className="contact-info">
        <a href="https://www.instagram.com/studify.uz" target="_blank" rel="noopener noreferrer">
          <Box className="info-item">
            <img src={Instagram} alt="Instagram" />
            <Box>
              <Typography className="info-item_text">{t('contact_form.instagram')}</Typography>
              <Typography className="info-item_username">@studify.uz</Typography>
            </Box>
          </Box>
        </a>
        <a href="https://t.me/studify_uz" target="_blank" rel="noopener noreferrer">
          <Box className="info-item">
            <img src={Telegram} alt="Telegram" />
            <Box>
              <Typography className="info-item_text">{t('contact_form.telegram')}</Typography>
              <Typography className="info-item_username">@studify_uz</Typography>
            </Box>
          </Box>
        </a>
        <a href="mailto:info@studify.uz">
          <Box className="info-item">
            <img src={Email} alt="Email" />
            <Box>
              <Typography className="info-item_text">{t('contact_form.email')}</Typography>
              <Typography className="info-item_username">info@studify.uz</Typography>
            </Box>
          </Box>
        </a>
        <a href="tel:+998886581000">
          <Box className="info-item">
            <img src={Contact} alt="Phone" />
            <Box>
              <Typography className="info-item_text">{t('contact_form.contact_number')}</Typography>
              <Typography className="info-item_username">+998 88 658 1000</Typography>
            </Box>
          </Box>
        </a>
      </Box>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
        <Alert severity={messageStatus === t('contact_form.success') ? "success" : "error"}>
          {messageStatus}
        </Alert>
      </Snackbar>
    </Box>
  );
}
