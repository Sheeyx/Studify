import React from 'react';
import './styles.scss';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Logo from "../../../assets/Logo_footer.svg"

const Footer = () => {
    return (
        <Box className="footer container">
            <Grid className='footer-logo'>
                <img src={Logo} alt="" />
            </Grid>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <Grid xs={6} sm={6} mt={2}>
                        <Typography variant="body2" className='footer-description'>
                            Some random text regarding Studify doing great work
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={8} className="footer-links">
                    <Grid container>
                        <Grid item xs={6} sm={3}>
                            <Typography variant="body2">Why Studify</Typography>
                            <Typography variant="body2">Process</Typography>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Typography variant="body2">Articles</Typography>
                            <Typography variant="body2">About us</Typography>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Typography variant="body2">Pricing</Typography>
                            <Typography variant="body2">Results</Typography>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Typography variant="body2">Privacy and policy</Typography>
                            <Typography variant="body2">Terms and Conditions</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
