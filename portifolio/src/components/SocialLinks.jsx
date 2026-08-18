import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { CONTACT, getMailtoUrl, getResumeUrl } from '../constants/contact';

/**
 * Linha de ícones de contato reutilizada no Hero, no rodapé e na página de
 * Contato. Única fonte de verdade para os links (ver constants/contact.js),
 * evitando que cada tela declare o e-mail/URLs por conta própria.
 */
const SocialLinks = ({ showResume = false, className = '' }) => {
  const { t, i18n } = useTranslation();

  const links = [
    { href: CONTACT.linkedinUrl, label: t('footer.linkedinLabel'), Icon: FaLinkedin, external: true },
    { href: CONTACT.githubUrl, label: t('footer.githubLabel'), Icon: FaGithub, external: true },
    { href: getMailtoUrl(), label: t('footer.emailLabel'), Icon: FaEnvelope, external: false },
  ];

  if (showResume) {
    links.push({
      href: getResumeUrl(i18n.language),
      label: t('footer.resumeLabel'),
      Icon: FaFileAlt,
      external: true,
    });
  }

  return (
    <ul className={`social-links ${className}`}>
      {links.map(({ href, label, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            aria-label={label}
            title={label}
            className="social-link"
          >
            <Icon aria-hidden="true" focusable="false" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
