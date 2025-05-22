import React from 'react';
import './styles.scss';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Logo from "../../../assets/Logo_footer.svg";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box className="footer container">
      <Grid className="footer-logo">
        <img src={Logo} alt="Studify Logo" />
      </Grid>

      <Grid container>
        <Grid item xs={12} md={4}>
          <Grid xs={6} sm={6} mt={2}>
            <Typography variant="body2" className="footer-description">
              {t('footer.description')}
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} md={8} className="footer-links">
          <Grid container>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2">{t('footer.why')}</Typography>
              <Typography variant="body2">{t('footer.process')}</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2">{t('footer.articles')}</Typography>
              <Typography variant="body2">{t('footer.about')}</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2">{t('footer.pricing')}</Typography>
              <Typography variant="body2">{t('footer.results')}</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2">{t('footer.privacy_policy')}</Typography>
              <Typography variant="body2">{t('footer.terms_conditions')}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
