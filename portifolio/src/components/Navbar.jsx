import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LANGUAGES = ['pt', 'en'];

// Componente à parte (fora do corpo de Navbar) para não ser recriado a
// cada renderização — evita remontar os botões e perder o foco do teclado.
const LanguageSwitch = ({ currentLanguage, onChange, groupLabel, className = '' }) => (
  <div className={`language-switch ${className}`} role="group" aria-label={groupLabel}>
    {LANGUAGES.map((language) => (
      <button
        key={language}
        type="button"
        className={`language-switch__option ${currentLanguage === language ? 'is-selected' : ''}`}
        onClick={() => onChange(language)}
        aria-pressed={currentLanguage === language}
      >
        {language.toUpperCase()}
      </button>
    ))}
  </div>
);

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const currentLanguage = i18n.language.startsWith('pt') ? 'pt' : 'en';

  const links = [
    { to: '/about', label: t('navigation.about') },
    { to: '/projects', label: t('navigation.projects') },
    { to: '/contact', label: t('navigation.contact') },
  ];

  const navLinkClassName = ({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`;

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <span className="navbar__brand">
          Enrico<span className="navbar__brand-accent">Dev</span>
        </span>

        <div className="navbar__links">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className={navLinkClassName} end>
              {label}
            </NavLink>
          ))}
          <LanguageSwitch
            currentLanguage={currentLanguage}
            onChange={i18n.changeLanguage}
            groupLabel={t('navigation.menu')}
          />
        </div>

        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={t('navigation.menu')}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div id="mobile-menu" className={`navbar__mobile-menu ${isOpen ? 'is-open' : ''}`}>
        {links.map(({ to, label }) => (
          <NavLink key={to} to={to} className={navLinkClassName} onClick={() => setIsOpen(false)} end>
            {label}
          </NavLink>
        ))}
        <LanguageSwitch
          currentLanguage={currentLanguage}
          onChange={i18n.changeLanguage}
          groupLabel={t('navigation.menu')}
          className="language-switch--mobile"
        />
      </div>
    </nav>
  );
};

export default Navbar;
