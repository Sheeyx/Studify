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

  const [isAnimating, setIsAnimating] = useState(false);
  
  const toggleMenu = () => {
    if (menuOpen) {
      setIsAnimating(true); // Trigger CSS closing animation
      setTimeout(() => {
        setMenuOpen(false);
        setIsAnimating(false);
      }, 300); // Match the animation duration in CSS
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
          <li><a onClick={() => handleNavClick('why')}>Why Studify</a></li>
          <li><a onClick={() => handleNavClick('process')}>Process</a></li>
          <li><a onClick={() => handleNavClick('about')}>About us</a></li>
          <li><a onClick={() => handleNavClick('pricing')}>Pricing</a></li>
          <li><a onClick={() => handleNavClick('results')}>Results</a></li>
          <li><a onClick={() => handleNavClick('blog')}>Blog</a></li>
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
