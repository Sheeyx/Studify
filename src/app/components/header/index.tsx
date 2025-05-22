import React, { useState } from 'react';
import './styles.scss';
import Menu from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../../../assets/Logo_footer.svg';
import { Box, Modal } from '@mui/material';
import ContactForm from '../../../screens/home/ContactUs/components/ContactForm';
import { useGlobals } from '../../hooks/useGlobals';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const { openModal, handleOpenModal, handleCloseModal } = useGlobals();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    if (menuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setMenuOpen(false);
        setIsAnimating(false);
      }, 300);
    } else {
      setMenuOpen(true);
    }
  };

  const handleNavClick = (sectionId: string) => {
    setMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Studify logo" />
      </div>

      <nav className={`nav ${menuOpen ? 'open' : ''} ${isAnimating ? 'closing' : ''}`}>
        <ul>
          <li><a onClick={() => handleNavClick('why')}>{t('nav.why')}</a></li>
          <li><a onClick={() => handleNavClick('process')}>{t('nav.process')}</a></li>
          <li><a onClick={() => handleNavClick('about')}>{t('nav.about')}</a></li>
          <li><a onClick={() => handleNavClick('pricing')}>{t('nav.pricing')}</a></li>
          <li><a onClick={() => handleNavClick('results')}>{t('nav.results')}</a></li>
          <li><a onClick={() => handleNavClick('blog')}>{t('nav.blog')}</a></li>
        </ul>
      </nav>

      <div className="contact">
        <div className="language-switcher">
          <LanguageSwitcher />
        </div>
        <div>
          <a href="#contact" className="contact-btn" onClick={handleOpenModal}>
            {t('nav.contact_us')}
          </a>
        </div>
      </div>

      <div className="burger-menu" onClick={toggleMenu}>
        {menuOpen ? <CloseIcon /> : <Menu />}
      </div>

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box className="modal-content">
          <div className="close-modal" onClick={handleCloseModal}>
            <CloseIcon />
          </div>
          <ContactForm />
        </Box>
      </Modal>
    </header>
  );
};

export default Header;
