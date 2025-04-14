import { Alert, Box, Button, SelectChangeEvent, Snackbar, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Instagram from '../../../../assets/contact/instagram.svg';
import Telegram from '../../../../assets/contact/Telegram.svg';
import Contact from '../../../../assets/contact/concact.svg';
import Email from '../../../../assets/contact/Email.svg';
import { MessageInput } from '../../../../libs/types/message';
import MessageService from '../../../../services/MessageService';
import { City } from '../../../../libs/enums/message.enum';
import './styles.scss';


export default function ContactForm() {
    const messageService = new MessageService();
    const [selectedCity, setSelectedCity] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
    const [messageStatus, setMessageStatus] = useState<string | null>(null);

    const handleSubmit = async () => {
        const input: MessageInput = {
            fullName: name,
            phone: phoneNumber,
            city: selectedCity as City,
        };

        const handleCityChange = (event: SelectChangeEvent<string>) => {
            setSelectedCity(event.target.value as string);
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
    <Box className="contact-form-content">
                {/* Left Side - Form */}
                <Box className="contact-form">
                    <Box className="form-box">
                        <Typography variant="h6" className="form-box_title">
                            Book your free consultation 
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
                        <Button variant="contained" className="submit-button" onClick={handleSubmit}>Send</Button>
                    </Box>
                </Box>

                {/* Right Side - Contact Info */}
                <Box className="contact-info">
                    <a href="https://www.instagram.com/studify.uz" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <Box className="info-item">
                            <Box>
                                <img src={Instagram} alt="" />
                            </Box>
                            <Box>
                                <Typography variant="body1" className="info-item_text">Instagram</Typography>
                                <Typography variant="body2" className='info-item_username'>@studify.uz</Typography>
                            </Box>
                        </Box>
                    </a>
                    <a href="https://t.me/studify_uz" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <Box className="info-item">
                            <Box>
                                <img src={Telegram} alt="" />
                            </Box>
                            <Box>
                                <Typography variant="body1" className="info-item_text">Telegram</Typography>
                                <Typography variant="body2" className='info-item_username'>@studify_uz</Typography>
                            </Box>
                        </Box>
                    </a>
                    <a href="mailto:info@studify.uz" style={{ textDecoration: 'none' }}>
                        <Box className="info-item">
                            <Box>
                                <img src={Email} alt="" />
                            </Box>
                            <Box>
                                <Typography variant="body1" className="info-item_text">Email</Typography>
                                <Typography variant="body2" className='info-item_username'>info@studify.uz</Typography>
                            </Box>
                        </Box>
                    </a>
                    <a href="tel:+998886581000" style={{ textDecoration: 'none' }}>
                        <Box className="info-item">
                            <Box>
                                <img src={Contact} alt="" />   
                            </Box>
                            <Box>
                                <Typography variant="body1" className="info-item_text">Contact number</Typography>
                                <Typography variant="body2" className='info-item_username'>+998 88 658 1000</Typography>
                                <Typography variant="body2" className='info-item_username'>+998 88 658 1000</Typography>
                            </Box>
                        </Box>
                    </a>
                </Box>

            {/* Snackbar Notification */}
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={messageStatus === "Message sent successfully!" ? "success" : "error"} sx={{ width: '100%' }}>
                    {messageStatus}
                </Alert>
            </Snackbar>
            </Box>
  )
}
