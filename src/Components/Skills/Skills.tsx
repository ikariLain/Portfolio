import { LuCloud, LuCode, LuDatabase, LuServerCog } from 'react-icons/lu';
import useLanguage from '../../useLanguage';
import './Skills.css';

const categoryIcons = [
  <LuCode aria-hidden="true" />,
  <LuServerCog aria-hidden="true" />,
  <LuDatabase aria-hidden="true" />,
  <LuCloud aria-hidden="true" />,
];

export default function Skills() {
  const { copy } = useLanguage();

  return (
    <section className="section-block section-rule skills-section" id="skills" aria-labelledby="skills-title">
      <div className="section-shell">
        <div className="skills-header">
          <div>
            <p className="section-label">{copy.skills.label}</p>
            <h2 className="section-heading" id="skills-title">{copy.skills.title}</h2>
          </div>
          <p className="section-intro">{copy.skills.intro}</p>
        </div>

        <div className="skills-grid">
          {copy.skills.categories.map((category, index) => (
            <article className="skill-card" key={category.title}>
              <div className="skill-card-heading">
                <span className="skill-card-icon">{categoryIcons[index]}</span>
                <span className="skill-card-code">{category.code}</span>
              </div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <ul>
                {category.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className="learning-strip">
          <span className="learning-status"><i /> {copy.skills.learningStatus}</span>
          <p>{copy.skills.learningText}</p>
        </div>
      </div>
    </section>
  );
}
