import React, { useState } from 'react';
import './styles.scss';
import Menu from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header container">
      <div className="logo">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="56" height="56" rx="16" fill="#FF8225"/>
          <path d="M41.2031 13.0726C39.8494 11.7498 38.2388 10.6971 36.4631 9.9745C34.6874 9.25189 32.7814 8.87356 30.8541 8.86111C28.9267 8.84866 27.0157 9.20233 25.2301 9.90193C23.4446 10.6015 21.8194 11.6334 20.4474 12.9385C19.0754 14.2436 17.9835 15.7965 17.234 17.5085C16.4845 19.2205 16.0921 21.0581 16.0792 22.9163C16.0663 24.7745 16.4331 26.6169 17.1588 28.3384C17.8844 30.06 18.9546 31.6268 20.3083 32.9496L30.7557 23.0111L41.2031 13.0726Z" fill="white"/>
          <path d="M15.1604 41.8094C16.4952 43.1491 18.0908 44.2221 19.8561 44.967C21.6214 45.712 23.5217 46.1144 25.4487 46.1511C27.3757 46.1879 29.2916 45.8584 31.0869 45.1814C32.8822 44.5044 34.5219 43.4932 35.9123 42.2055C37.3026 40.9178 38.4165 39.3788 39.1902 37.6764C39.9639 35.974 40.3824 34.1416 40.4217 32.2837C40.461 30.4258 40.1203 28.5789 39.4192 26.8483C38.7181 25.1178 37.6702 23.5375 36.3354 22.1978L25.7479 32.0036L15.1604 41.8094Z" fill="white"/>
        </svg>
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
