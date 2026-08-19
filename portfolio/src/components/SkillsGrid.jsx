import { useTranslation } from 'react-i18next';
import { skills } from '../constants';

/**
 * Grade de tecnologias. Cada item mostra o nome junto do ícone (e não só o
 * logo isolado) para que a informação também exista como texto — melhora a
 * leitura para quem não reconhece o logo e a acessibilidade para leitores
 * de tela.
 */
const SkillsGrid = () => {
  const { t } = useTranslation();

  return (
    <div className="skills-section">
      <h2 className="section-title">{t('about.skillsTitle')}</h2>

      <ul className="skills-grid">
        {skills.map((skill) => (
          <li key={skill.name} className="skill-card">
            <img src={skill.imageUrl} alt="" className="skill-icon" loading="lazy" />
            <span className="skill-name">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsGrid;
