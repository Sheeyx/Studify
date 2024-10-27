        import React from 'react';
        import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
        import './styles.scss'; // SCSS file for styling
        import InstagramIcon from '@mui/icons-material/Instagram';
        import TelegramIcon from '@mui/icons-material/Telegram';
        import EmailIcon from '@mui/icons-material/Email';
        import PhoneIcon from '@mui/icons-material/Phone';

        const ContactUs: React.FC = () => {
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
        />
        <TextField
        label="Phone number"
        variant="outlined"
        fullWidth
        margin="normal"
        className="text-field"
        />
        <FormControl fullWidth margin="normal" variant="outlined" className="text-field">
        <InputLabel>Select your city</InputLabel>
        <Select
            label="Select your city"
        >
            <MenuItem value=""><em>Select a city</em></MenuItem>
            <MenuItem value="Tashkent">Tashkent</MenuItem>
            <MenuItem value="Samarkand">Samarkand</MenuItem>
            <MenuItem value="Bukhara">Bukhara</MenuItem>
            <MenuItem value="Khiva">Khiva</MenuItem>
            <MenuItem value="Andijan">Andijan</MenuItem>
            <MenuItem value="Fergana">Fergana</MenuItem>
            <MenuItem value="Namangan">Namangan</MenuItem>
            <MenuItem value="Nukus">Nukus</MenuItem>
            <MenuItem value="Kokand">Kokand</MenuItem>
            <MenuItem value="Karshi">Karshi</MenuItem>
            <MenuItem value="Navoi">Navoi</MenuItem>
            <MenuItem value="Jizzakh">Jizzakh</MenuItem>
            <MenuItem value="Termez">Termez</MenuItem>
            <MenuItem value="Shahrisabz">Shahrisabz</MenuItem>
        </Select>
        </FormControl>
        <Button variant="contained" className="submit-button">Send</Button>
    </Box>
    </Box>

                {/* Right Side - Contact Info */}
                <Box className="contact-info">
                    <Box className="info-item">
                        <Box>
                            <InstagramIcon />
                        </Box>
                        <Box>
                            <Typography variant="body1" className='info-item_text'>Instagram</Typography>
                            <Typography variant="body2">@studify.uz</Typography>
                        </Box>
                    </Box>
                    <Box className="info-item">
                        <Box>
                            <TelegramIcon />
                        </Box>
                        <Box>
                            <Typography variant="body1" className='info-item_text'>Telegram</Typography>
                            <Typography variant="body2">@studify.uz</Typography>
                        </Box>
                    </Box>
                    <Box className="info-item">
                        <Box>
                            <EmailIcon />
                        </Box>
                        <Box>
                            <Typography variant="body1" className='info-item_text'>Email</Typography>
                            <Typography variant="body2">info@studify.uz</Typography>
                        </Box>
                    </Box>
                    <Box className="info-item">
                        <Box>
                            <PhoneIcon />
                        </Box>
                        <Box>
                            <Typography variant="body1" className='info-item_text'>Contact number</Typography>
                            <Typography variant="body2">+998 88 658 1000</Typography>
                            <Typography variant="body2">+998 88 658 1000</Typography>
                        </Box>
                        
                    </Box>
                </Box>
            </Box>
            </Box>
        );
        };

        export default ContactUs;
