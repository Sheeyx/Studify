import React, { MouseEvent, useCallback } from "react";
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

  // same behavior as Header.handleNavClick
  const handleNavClick = useCallback((e: MouseEvent, sectionId: string) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  // helper to render an internal smooth-scroll link
  const ScrollLink = ({
    section,
    children,
  }: {
    section: string;
    children: React.ReactNode;
  }) => (
    <Link
      href={`#${section}`}
      underline="none"
      onClick={(e) => handleNavClick(e, section)}
      // accessibility
      role="button"
      aria-label={typeof children === "string" ? children : section}
    >
      {children}
    </Link>
  );

  return (
    <Box component="footer" className="footer">
      <div className="footer__inner container">
        {/* ===== Top area: 4 columns ===== */}
        <Grid
          container
          spacing={{ xs: 0, md: 4 }}
          className="footer__grid"
          sx={{ ml: 0, mr: 0, width: "100%" }}
        >
          {/* Col 1: Brand + Address + Socials */}
          <Grid item xs={12} md={3} className="footer__col">
            <div className="footer__brand">
              <img src={Logo} alt="Studify logo" className="footer__logo" />
              <address className="footer__address">
                <p>{t("footer.description")}</p>
                <p>{t("footer.address")}</p>

                <p className="footer__phone">
                  Tel: <a href={`tel:${t("footer.phone")}`}>{t("footer.phone")}</a>
                </p>

                <p className="footer__email">
                  E-mail: <a href={`mailto:${t("footer.email")}`}>{t("footer.email")}</a>
                </p>
              </address>

              <div className="footer__social" aria-label={t("footer.follow")}>
                <IconButton
                  aria-label="Telegram"
                  component="a"
                  href="https://t.me/studify_uz"
                  target="_blank"
                  rel="noopener"
                >
                  <TelegramIcon />
                </IconButton>
                <IconButton
                  aria-label="Instagram"
                  component="a"
                  href="https://www.instagram.com/studify.uz"
                  target="_blank"
                  rel="noopener"
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  aria-label="LinkedIn"
                  component="a"
                  href="https://www.linkedin.com/company/studifyuz/"
                  target="_blank"
                  rel="noopener"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  aria-label="YouTube"
                  component="a"
                  href="https://www.youtube.com/channel/UCq4pNsRhm_no1V5b0iEc-5Q"
                  target="_blank"
                  rel="noopener"
                >
                  <YouTubeIcon />
                </IconButton>
              </div>
            </div>
          </Grid>

          {/* Col 2: About */}
          <Grid item xs={12} md={3} className="footer__col">
            <Typography className="footer__title">{t("footer.about_us")}</Typography>
            <nav className="footer__links" aria-label={t("footer.about_us")}>
              <ScrollLink section="why">{t("footer.why")}</ScrollLink>
              <ScrollLink section="process">{t("footer.process")}</ScrollLink>
              <ScrollLink section="about">{t("footer.about")}</ScrollLink>
              <ScrollLink section="pricing">{t("footer.pricing")}</ScrollLink>
              <ScrollLink section="results">{t("footer.results")}</ScrollLink>
              <ScrollLink section="blog">{t("footer.blog")}</ScrollLink>
            </nav>
          </Grid>

          {/* Col 3: Services (you can map these to sections if you have them on page) */}
          <Grid item xs={12} md={3} className="footer__col">
            <Typography className="footer__title">{t("footer.services")}</Typography>
            <nav className="footer__links" aria-label={t("footer.services")}>
              {/* If these are separate pages, keep href="/...".
                  If they are sections on the same page, convert to <ScrollLink section="..." /> */}
              <ScrollLink section="university">{t("footer.university")}</ScrollLink>
              <ScrollLink section="scholarships">{t("footer.scholarships")}</ScrollLink>
              <ScrollLink section="work_travel">{t("footer.work_travel")}</ScrollLink>
              <ScrollLink section="language">{t("footer.language")}</ScrollLink>
            </nav>
          </Grid>

          {/* Col 4: Resources */}
          <Grid item xs={12} md={3} className="footer__col">
            <Typography className="footer__title">{t("footer.resources")}</Typography>
            <nav className="footer__links" aria-label={t("footer.resources")}>
              <ScrollLink section="visa">{t("footer.visa")}</ScrollLink>
              <ScrollLink section="articles">{t("footer.articles")}</ScrollLink>
              <ScrollLink section="success">{t("footer.success")}</ScrollLink>
              <ScrollLink section="faq">{t("footer.faq")}</ScrollLink>
            </nav>
          </Grid>
        </Grid>

        {/* ===== Bottom row ===== */}
        <div className="footer__bottom">
          <div className="footer__legal">
            {/* If Privacy/Terms are same-page sections, swap to <ScrollLink section="privacy" /> etc. */}
            <Link href="/privacy" underline="none">
              {t("footer.privacy_policy")}
            </Link>
            <span className="dot">•</span>
            <Link href="/terms" underline="none">
              {t("footer.terms_conditions")}
            </Link>
          </div>
          <Typography className="footer__copy">
            © 2025 Studify. {t("footer.rights")}
          </Typography>
        </div>
      </div>
    </Box>
  );
};

export default Footer;
