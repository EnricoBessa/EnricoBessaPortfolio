import { useTranslation } from 'react-i18next';
import SocialLinks from './SocialLinks';

/**
 * Rodapé único, renderizado uma vez em App.jsx para todas as páginas.
 * Antes existiam duas implementações divergentes (CTA.jsx e o bloco de
 * redes sociais duplicado dentro de Contact.jsx) — unificadas aqui.
 */
const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__tagline">{t('footer.tagline')}</p>
        <SocialLinks showResume className="site-footer__links" />
      </div>
    </footer>
  );
};

export default Footer;
