import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SocialLinks from './SocialLinks';

/**
 * Primeira dobra do site: quem eu sou, o que faço e para onde ir em seguida.
 * Extraído do topo de About.jsx para manter uma hierarquia clara
 * (nome -> especialização -> proposta de valor -> CTAs) separada do
 * conteúdo mais denso de formação/experiência.
 */
const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero__inner">
        <p className="hero__status">
          <span className="hero__status-dot" aria-hidden="true" />
          {t('hero.status')}
        </p>

        <p className="hero__greeting">{t('hero.greeting')}</p>
        <h1 className="hero__name">{t('hero.name')}</h1>
        <p className="hero__role">{t('hero.role')}</p>
        <p className="hero__tagline">{t('hero.tagline')}</p>

        <div className="hero__actions">
          <Link to="/projects" className="btn-primary">
            {t('hero.ctaPrimary')}
          </Link>
          <Link to="/contact" className="btn-secondary">
            {t('hero.ctaSecondary')}
          </Link>
        </div>

        <SocialLinks showResume className="hero__socials" />
      </div>
    </section>
  );
};

export default Hero;
