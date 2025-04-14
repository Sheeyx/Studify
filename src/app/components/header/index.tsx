import React, { useState } from 'react';
import './styles.scss';
import Menu from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from "../../../assets/Logo_footer.svg";
import { Box, Modal } from '@mui/material';
import ContactForm from '../../../screens/home/ContactUs/components/ContactForm';
import Instagram from '../../../assets/contact/instagram.svg';
import Telegram from '../../../assets/contact/Telegram.svg';
import Contact from '../../../assets/contact/concact.svg';
import Email from '../../../assets/contact/Email.svg';
import { useGlobals } from '../../hooks/useGlobals';

const Header = () => {
  const { openModal, handleOpenModal, handleCloseModal } = useGlobals(); // ✅ Use global modal control
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header container">
      <div className="logo">
        <img src={Logo} alt="Studify logo" />
      </div>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#why">Why Studify</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#about">About us</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#results">Results</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
      </nav>

      <div className="contact">
        <a href="#contact" className="contact-btn" onClick={handleOpenModal}>
          Contact us
        </a>
      </div>

      <div className="burger-menu" onClick={toggleMenu}>
        {menuOpen ? <CloseIcon /> : <Menu />}
      </div>

      {/* ✅ Modal controlled by GlobalContext */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box className="modal-content">
          <div className="close-modal" onClick={handleCloseModal}>
            <CloseIcon />
          </div>

          <div>
            <ContactForm />

            <Box className="contact">
              <a
                href="https://www.instagram.com/studify.uz"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Box className="info-item">
                  <img src={Instagram} alt="Instagram" />
                </Box>
              </a>

              <a
                href="https://t.me/studify_uz"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Box className="info-item">
                  <img src={Telegram} alt="Telegram" />
                </Box>
              </a>

              <a href="mailto:info@studify.uz" style={{ textDecoration: 'none' }}>
                <Box className="info-item">
                  <img src={Email} alt="Email" />
                </Box>
              </a>

              <a href="tel:+998886581000" style={{ textDecoration: 'none' }}>
                <Box className="info-item">
                  <img src={Contact} alt="Phone" />
                </Box>
              </a>
            </Box>
          </div>
        </Box>
      </Modal>
    </header>
  );
};

export default Header;
