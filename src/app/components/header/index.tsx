import React, { useState } from 'react';
import './styles.scss';
import Menu from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from "../../../assets/Logo_footer.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header container">
      <div className="logo">
        <img src={Logo} alt="" />
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
        <a href="#contact" className="contact-btn">Contact us</a>
      </div>
      <div className='burger-menu' onClick={toggleMenu}>
        {menuOpen ? <CloseIcon /> : <Menu />}
      </div>
    </header>
  );
};

export default Header;
