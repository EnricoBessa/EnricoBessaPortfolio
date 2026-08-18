import { useTranslation } from 'react-i18next';
import { experience as experienceEn } from '../constants/experience.en';
import { experience as experiencePt } from '../constants/experience.pt';
import { education as educationEn } from '../constants/education.en';
import { education as educationPt } from '../constants/education.pt';
import Hero from '../components/Hero';
import SkillsGrid from '../components/SkillsGrid';
import TimelineSection from '../components/TimelineSection';

const About = () => {
  const { t, i18n } = useTranslation();

  // Normaliza variantes regionais (ex.: "pt-BR") para uma das duas
  // línguas realmente suportadas pelo conteúdo estático abaixo.
  const isPortuguese = i18n.language?.toLowerCase().startsWith('pt');
  const experience = isPortuguese ? experiencePt : experienceEn;
  const education = isPortuguese ? educationPt : educationEn;

  return (
    <>
      <Hero />

      <section className="page-section">
        <p className="section-paragraph about-intro">{t('about.intro')}</p>

        <SkillsGrid />

        <TimelineSection
          title={t('about.educationTitle')}
          intro={t('about.educationIntro')}
          items={education}
        />

        <TimelineSection
          title={t('about.experienceTitle')}
          intro={t('about.experienceIntro')}
          items={experience}
        />
      </section>
    </>
  );
};

export default About;
