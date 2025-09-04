import React from "react";
import "./styles.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import { useTranslation } from "react-i18next";
import Logo from "../../../assets/Logo_footer.svg";

import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box component="footer" className="footer">
      <div className="footer__inner container">
        {/* ===== Top area: 4 columns ===== */}
        <Grid
          container
          spacing={{ xs: 0, md: 4 }} 
          className="footer__grid"
          sx={{ ml: 0, mr: 0, width: "100%" }} // prevent scroll-x
        >
          {/* Col 1: Brand + Address + Socials */}
          <Grid item xs={12} md={3} className="footer__col">
            <div className="footer__brand">
              <img src={Logo} alt="Studify logo" className="footer__logo" />
              <address className="footer__address">
                <p>{t("footer.description")}</p>
                <p>{t("footer.address")}</p>
                 <p className="footer__phone">
                  Tel: <a href={`${t("footer.phone")}`}>{t("footer.phone")}</a>
                </p>

                {/* Email */}
                <p className="footer__email">
                  E-mail: <a href={`mailto:${t("footer.email")}`}>{t("footer.email")}</a>
                </p>
              </address>

              <div className="footer__social" aria-label={t("footer.follow")}>
                <IconButton aria-label="Telegram" component="a" href="https://t.me/studify_uz" target="_blank" rel="noopener">
                  <TelegramIcon />
                </IconButton>
                <IconButton aria-label="Instagram" component="a" href="https://www.instagram.com/studify.uz" target="_blank" rel="noopener">
                  <InstagramIcon />
                </IconButton>
                <IconButton aria-label="Facebook" component="a" href="https://www.linkedin.com/company/studifyuz/" target="_blank" rel="noopener">
                  <LinkedInIcon />
                </IconButton>
                <IconButton aria-label="YouTube" component="a" href="https://www.youtube.com/channel/UCq4pNsRhm_no1V5b0iEc-5Q" target="_blank" rel="noopener">
                  <YouTubeIcon />
                </IconButton>
              </div>
            </div>
          </Grid>

          {/* Col 2: About */}
          <Grid item xs={12} md={3} className="footer__col">
            <Typography className="footer__title">{t("footer.about_us")}</Typography>
            <nav className="footer__links" aria-label={t("footer.about_us")}>
              <Link href="/" underline="none">{t("footer.why")}</Link>
              <Link href="/" underline="none">{t("footer.process")}</Link>
              <Link href="/" underline="none">{t("footer.about")}</Link>
              <Link href="/" underline="none">{t("footer.pricing")}</Link>
              <Link href="/" underline="none">{t("footer.results")}</Link>
              <Link href="/" underline="none">{t("footer.blog")}</Link>
            </nav>
          </Grid>

          {/* Col 3: Services */}
          <Grid item xs={12} md={3} className="footer__col">
            <Typography className="footer__title">{t("footer.services")}</Typography>
            <nav className="footer__links" aria-label={t("footer.services")}>
              <Link href="/" underline="none">{t("footer.university")}</Link>
              <Link href="/"  underline="none">{t("footer.scholarships")}</Link>
              <Link href="/"  underline="none">{t("footer.work_travel")}</Link>
              <Link href="/"  underline="none">{t("footer.language")}</Link>
            </nav>
          </Grid>

          {/* Col 4: Resources */}
          <Grid item xs={12} md={3} className="footer__col">
            <Typography className="footer__title">{t("footer.resources")}</Typography>
            <nav className="footer__links" aria-label={t("footer.resources")}>
              <Link href="/"  underline="none">{t("footer.visa")}</Link>
              <Link href="/"  underline="none">{t("footer.articles")}</Link>
              <Link href="/"  underline="none">{t("footer.success")}</Link>
              <Link href="/"  underline="none">{t("footer.faq")}</Link>
            </nav>
          </Grid>
        </Grid>

        {/* ===== Bottom row ===== */}
        <div className="footer__bottom">
          <div className="footer__legal">
            <Link href="/privacy" underline="none">{t("footer.privacy_policy")}</Link>
            <span className="dot">•</span>
            <Link href="/terms" underline="none">{t("footer.terms_conditions")}</Link>
          </div>
          <Typography className="footer__copy">© 2025 Studify. {t("footer.rights")}</Typography>
        </div>
      </div>
    </Box>
  );
};

export default Footer;
