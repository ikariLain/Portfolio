import { LuCloud, LuCode, LuDatabase, LuServerCog } from 'react-icons/lu';
import './Skills.css';

const categories = [
  {
    code: 'FE',
    icon: <LuCode aria-hidden="true" />,
    title: 'Frontend',
    description: 'Responsiva gränssnitt med tydliga komponenter och stark användarupplevelse.',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    code: 'BE',
    icon: <LuServerCog aria-hidden="true" />,
    title: 'Backend',
    description: 'Strukturerade API:er, affärslogik och serverkod som är lätt att bygga vidare på.',
    skills: ['C#', '.NET Core', 'ASP.NET MVC', 'Web API', 'Entity Framework', 'PHP', 'Node.js'],
  },
  {
    code: 'DB',
    icon: <LuDatabase aria-hidden="true" />,
    title: 'Data',
    description: 'Datamodeller, relationer och CRUD-flöden med fokus på enkel och säker åtkomst.',
    skills: ['SQL Server', 'MySQL', 'PostgreSQL', 'SQLite', 'MongoDB'],
  },
  {
    code: 'DX',
    icon: <LuCloud aria-hidden="true" />,
    title: 'Verktyg & leverans',
    description: 'Verktyg som gör utvecklingen spårbar, testbar och redo att levereras.',
    skills: ['Git', 'GitHub', 'Docker', 'Azure', 'AWS', 'Postman'],
  },
];

export default function Skills() {
  return (
    <section className="section-block section-rule skills-section" id="skills" aria-labelledby="skills-title">
      <div className="section-shell">
        <div className="skills-header">
          <div>
            <p className="section-label">02 / Kompetenser</p>
            <h2 className="section-heading" id="skills-title">Verktyg för hela produkten.</h2>
          </div>
          <p className="section-intro">
            Min verktygslåda sträcker sig från komponentdriven frontend till API:er,
            databaser och leverans. Tekniken väljs efter problemet — inte tvärtom.
          </p>
        </div>

        <div className="skills-grid">
          {categories.map((category) => (
            <article className="skill-card" key={category.title}>
              <div className="skill-card-heading">
                <span className="skill-card-icon">{category.icon}</span>
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
          <span className="learning-status"><i /> Lär mig kontinuerligt</span>
          <p>Just nu fördjupar jag mig i skalbara .NET-API:er, modern React och bättre leveransflöden.</p>
        </div>
      </div>
    </section>
  );
}
