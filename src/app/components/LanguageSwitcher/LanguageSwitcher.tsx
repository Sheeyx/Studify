import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles.scss';

import uzFlag from '../../../assets/flags/uz-flag.png';
import ruFlag from '../../../assets/flags/ru-flag.png';
import enFlag from '../../../assets/flags/eng-flag.png';

const LANGUAGES = {
  uz: { label: 'UZ', flag: uzFlag },
  ru: { label: 'RU', flag: ruFlag },
  en: { label: 'EN', flag: enFlag },
};

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const rawLang = (i18n.language || 'en').split('-')[0];
  const currentLang = (rawLang in LANGUAGES ? rawLang : 'en') as keyof typeof LANGUAGES;

  const toggleDropdown = () => setOpen(!open);
  const changeLanguage = (lng: keyof typeof LANGUAGES) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div className="lang-switcher">
      <button className="lang-trigger" onClick={toggleDropdown}>
        <img src={LANGUAGES[currentLang].flag} alt={currentLang} />
        <span>{LANGUAGES[currentLang].label}</span>
        <span className="arrow">▾</span>
      </button>

      {open && (
        <div className="lang-dropdown">
          {Object.entries(LANGUAGES).map(([code, { label, flag }]) => {
            if (code === currentLang) return null;
            return (
              <button key={code} className="lang-option" onClick={() => changeLanguage(code as keyof typeof LANGUAGES)}>
                <img src={flag} alt={label} />
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
