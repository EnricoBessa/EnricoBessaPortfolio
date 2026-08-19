import { useTranslation } from 'react-i18next';
import { FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  const { t } = useTranslation();
  const projects = t('projects.list', { returnObjects: true });
  const certificates = t('projects.certificates', { returnObjects: true });

  return (
    <section className="page-section">
      <header className="page-header">
        <h1 className="page-title">
          {t('projects.title')} <span className="page-title__accent">{t('projects.span')}</span>
        </h1>
        <p className="section-paragraph">{t('projects.intro')}</p>
      </header>

      <ul className="projects-grid">
        {projects.map((project) => (
          <li key={project.name}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div className="project-card__header">
                <span className="project-icon-wrapper">
                  <img src={project.iconUrl} alt="" className="project-icon" />
                </span>
                <h2 className="project-card__title">{project.name}</h2>
              </div>

              <p className="project-card__summary">{project.summary}</p>
              <p className="project-card__description">{project.description}</p>

              <ul className="project-card__tech" aria-label={t('projects.technologiesLabel')}>
                {project.technologies.map((tech) => (
                  <li key={tech} className="tech-badge">
                    {tech}
                  </li>
                ))}
              </ul>

              <span className="project-card__link">
                {t('projects.viewProject')}
                <FaArrowRight aria-hidden="true" focusable="false" />
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="page-header page-header--secondary">
        <h2 className="page-title page-title--medium">{t('projects.certificatesTitle')}</h2>
      </div>

      <ul className="certificates-grid">
        {certificates.map((certificate) => (
          <li key={certificate.name} className="certificate-card">
            <img
              src={certificate.path}
              alt={certificate.name}
              className="certificate-card__image"
              loading="lazy"
            />
            <p className="certificate-card__name">{certificate.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
