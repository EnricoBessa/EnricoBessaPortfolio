import PropTypes from 'prop-types';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

/**
 * Timeline genérica usada tanto para Formação quanto para Experiência.
 * As duas seções em About.jsx eram praticamente idênticas (mesmo markup,
 * mesmos estilos inline, só a fonte de dados mudava) — extraídas aqui para
 * eliminar a duplicação.
 */
const TimelineSection = ({ title, intro, items }) => (
  <div className="timeline-section">
    <h2 className="section-title">{title}</h2>
    {intro && <p className="section-paragraph">{intro}</p>}

    <VerticalTimeline lineColor="var(--color-border)">
      {items.map((item) => (
        <VerticalTimelineElement
          key={`${item.title}-${item.date}`}
          date={<span className="timeline-date">{item.date}</span>}
          icon={
            <div className="timeline-icon-wrapper">
              <img src={item.icon} alt="" className="timeline-icon" />
            </div>
          }
          iconStyle={{ background: item.iconBg, borderRadius: '50%' }}
          contentStyle={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'none',
            padding: '20px 25px',
          }}
          contentArrowStyle={{ borderRight: '7px solid var(--color-surface)' }}
        >
          <h3 className="timeline-title">{item.title}</h3>
          <p className="timeline-subtitle">{item.company_name ?? item.institution_name}</p>
          <ul className="timeline-list">
            {item.points.map((point) => (
              <li key={point} className="timeline-item">
                {point}
              </li>
            ))}
          </ul>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </div>
);

TimelineSection.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      iconBg: PropTypes.string,
      company_name: PropTypes.string,
      institution_name: PropTypes.string,
      points: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
};

export default TimelineSection;
