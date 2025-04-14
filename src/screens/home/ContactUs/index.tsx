import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, Snackbar, Alert, SelectChangeEvent } from '@mui/material';
import './styles.scss';

import { City } from '../../../libs/enums/message.enum';
import MessageService from '../../../services/MessageService'; // Adjust the path as needed
import { MessageInput } from '../../../libs/types/message'; // Adjust path if necessary
import ContactForm from './components/ContactForm';

const messageService = new MessageService();

const ContactUs: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
    const [messageStatus, setMessageStatus] = useState<string | null>(null);

   

    return (
        <Box className="contact-form-container">
            <Box>
                <Typography variant="h4" className="contact-title">Let’s talk</Typography>
                <Typography variant="subtitle1" className="contact-subtitle">
                    Just contact us, so we can discuss how could we help you
                </Typography>
            </Box>
            <ContactForm />
        </Box>
    );
};

export default ContactUs;
