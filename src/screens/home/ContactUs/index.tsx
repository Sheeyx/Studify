import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, Snackbar, Alert, SelectChangeEvent } from '@mui/material';
import './styles.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { City } from '../../../libs/enums/message.enum';
import MessageService from '../../../services/MessageService'; // Adjust the path as needed
import { MessageInput } from '../../../libs/types/message'; // Adjust path if necessary

const messageService = new MessageService();

const ContactUs: React.FC = () => {
    const [selectedCity, setSelectedCity] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
    const [messageStatus, setMessageStatus] = useState<string | null>(null);

    const handleCityChange = (event: SelectChangeEvent<string>) => {
        setSelectedCity(event.target.value as string);
    };

    const handleSubmit = async () => {
        const input: MessageInput = {
            fullName: name,
            phone: phoneNumber,
            city: selectedCity as City,
        };

        try {
            const response = await messageService.createMessage(input);
            console.log("Message sent successfully:", response);

            // Clear form fields
            setName('');
            setPhoneNumber('');
            setSelectedCity('');

            // Show success notification
            setMessageStatus("Message sent successfully!");
            setOpenSnackbar(true);
        } catch (error) {
            console.error("Error sending message:", error);
            setMessageStatus("Failed to send the message. Please try again.");
            setOpenSnackbar(true);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <Box className="contact-form-container">
            <Box>
                <Typography variant="h4" className="contact-title">Let’s talk</Typography>
                <Typography variant="subtitle1" className="contact-subtitle">
                    Just contact us, so we can discuss how could we help you
                </Typography>
            </Box>
            
            <Box className="contact-form-content">
                {/* Left Side - Form */}
                <Box className="contact-form">
                    <Box className="form-box">
                        <Typography variant="h6" className="form-box_title">
                            Don’t worry, book your free consultation real quick
                        </Typography>
                        <TextField
                            label="Your name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            className="text-field"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            label="Phone number"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            className="text-field"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <FormControl fullWidth margin="normal" variant="outlined" className="text-field">
                            <InputLabel>Select your city</InputLabel>
                            <Select
                                label="Select your city"
                                value={selectedCity}
                                onChange={handleCityChange}
                            >
                                <MenuItem value=""><em>Select a city</em></MenuItem>
                                {Object.values(City).map((city) => (
                                    <MenuItem key={city} value={city}>
                                        {city}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Button variant="contained" className="submit-button" onClick={handleSubmit}>Send</Button>
                    </Box>
                </Box>

                {/* Right Side - Contact Info */}
                <Box className="contact-info">
                    <a href="https://www.instagram.com/studify.uz" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <Box className="info-item">
                            <Box>
                                <InstagramIcon />
                            </Box>
                            <Box>
                                <Typography variant="body1" className="info-item_text">Instagram</Typography>
                                <Typography variant="body2">@studify.uz</Typography>
                            </Box>
                        </Box>
                    </a>
                    <a href="https://t.me/studify_uz" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <Box className="info-item">
                            <Box>
                                <TelegramIcon />
                            </Box>
                            <Box>
                                <Typography variant="body1" className="info-item_text">Telegram</Typography>
                                <Typography variant="body2">@studify.uz</Typography>
                            </Box>
                        </Box>
                    </a>
                    <a href="mailto:info@studify.uz" style={{ textDecoration: 'none' }}>
                        <Box className="info-item">
                            <Box>
                                <EmailIcon />
                            </Box>
                            <Box>
                                <Typography variant="body1" className="info-item_text">Email</Typography>
                                <Typography variant="body2">info@studify.uz</Typography>
                            </Box>
                        </Box>
                    </a>
                    <a href="tel:+998886581000" style={{ textDecoration: 'none' }}>
                        <Box className="info-item">
                            <Box>
                                <PhoneIcon />
                            </Box>
                            <Box>
                                <Typography variant="body1" className="info-item_text">Contact number</Typography>
                                <Typography variant="body2">+998 88 658 1000</Typography>
                                <Typography variant="body2">+998 88 658 1000</Typography>
                            </Box>
                        </Box>
                    </a>
                </Box>


            </Box>

            {/* Snackbar Notification */}
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={messageStatus === "Message sent successfully!" ? "success" : "error"} sx={{ width: '100%' }}>
                    {messageStatus}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default ContactUs;
