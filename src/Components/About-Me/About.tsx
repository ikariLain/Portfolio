import { LuBraces, LuLayers3, LuSparkles } from 'react-icons/lu';
import useLanguage from '../../useLanguage';
import './About.css';

const principleIcons = [
  <LuLayers3 aria-hidden="true" />,
  <LuBraces aria-hidden="true" />,
  <LuSparkles aria-hidden="true" />,
];

export default function About() {
  const { copy } = useLanguage();

  return (
    <section className="section-block" id="about" aria-labelledby="about-title">
      <div className="section-shell">
        <div className="about-heading">
          <div>
            <p className="section-label">{copy.about.label}</p>
            <h2 className="section-heading" id="about-title">
              {copy.about.titleFirst}<br />{copy.about.titleSecond}
            </h2>
          </div>
          <p className="about-lead">{copy.about.lead}</p>
        </div>

        <div className="about-principles">
          {copy.about.principles.map((principle, index) => (
            <article className="principle-card" key={principle.title}>
              <div className="principle-top">
                <span className="principle-icon">{principleIcons[index]}</span>
                <span className="principle-index">0{index + 1}</span>
              </div>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
