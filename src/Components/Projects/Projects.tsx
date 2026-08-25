import { LuArrowUpRight, LuCheck, LuGithub, LuLayers3 } from 'react-icons/lu';
import './Projects.css';

const projects = [
  {
    number: '01',
    title: 'Davar SmartScan',
    type: 'Flutter / OCR',
    status: 'Pågående',
    description:
      'En skanningsfunktion som extraherar text från tryckta sidor och identifierar relevanta nyckelord. Lösningen är strukturerad för att kunna utvecklas vidare med tydligt separerade ansvarsområden.',
    highlights: ['OCR av tryckta sidor', 'Nyckelordsidentifiering', 'Modeller, tjänster & controllers'],
    stack: ['Flutter', 'Dart', 'OCR', 'API-integration'],
    featured: true,
  },
  {
    number: '02',
    title: 'Realtidsplattform för quiz',
    type: 'Fullstack / Realtid',
    status: 'Pågående',
    description:
      'En realtidsplattform där en Flutter-klient kommunicerar med en Laravel-backend via REST och WebSockets. Projektet omfattade även MariaDB, Linuxserver, webbdeployment och ett automatiserat leveransflöde.',
    highlights: ['Synkronisering via WebSockets', 'Flutter & Laravel REST API', 'Automatisk build & deployment'],
    stack: ['Laravel', 'Flutter', 'WebSockets', 'MariaDB', 'GitHub Actions'],
    featured: false,
  },
  {
    number: '03',
    title: 'Noog API',
    type: 'Fullstacksystem',
    status: 'Grupprojekt',
    description:
      'Ett fullstackprojekt där ett strukturerat .NET-API möter en modern React-klient. Byggt för att träna på samma arkitekturbeslut som krävs i större produkter.',
    highlights: ['Repository pattern', 'Validerade dataflöden', 'Separerad frontend & backend'],
    stack: ['.NET Core', 'React', 'Entity Framework', 'SQL Server', 'Azure DevOps'],
    featured: false,
  },

  {
    number: '04',
    title: 'Clean vs Vertical Slice',
    type: '.NET / Backend',
    status: 'Examensarbete',
    description:
      'Två funktionellt likvärdiga, CRUD-baserade Web API-prototyper utvecklades för att jämföra Clean Architecture med Vertical Slice Architecture i praktiken.',
    highlights: ['Utvecklingshastighet & overhead', 'Kodstruktur & testbarhet', 'Två likvärdiga CRUD-API:er'],
    stack: ['.NET 10', 'ASP.NET Core', 'EF Core', 'Testning'],
    featured: true,
  },

];

export default function Projects() {
  return (
    <section className="section-block" id="projects" aria-labelledby="projects-title">
      <div className="section-shell">
        <div className="projects-header">
          <div>
            <p className="section-label">03 / Utvalda projekt</p>
            <h2 className="section-heading" id="projects-title">Byggt för att lösa, lära och leverera.</h2>
          </div>
          <a
            className="all-projects-link"
            href="https://github.com/ikariLain?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            Alla repositories <LuArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
              key={project.title}
            >
              <div className="project-meta">
                <span>{project.number}</span>
                <span className="project-type">{project.type}</span>
                <span className="project-status"><i /> {project.status}</span>
              </div>

              <div className="project-content">
                <div className="project-main">
                  <div className="project-icon"><LuLayers3 aria-hidden="true" /></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div className="project-details">
                  <ul className="project-highlights">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}><LuCheck aria-hidden="true" /> {highlight}</li>
                    ))}
                  </ul>
                  <div className="project-stack">
                    {project.stack.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
                  </div>
                </div>
              </div>

              <div className="project-footer">
                <span>Utvecklad av Matheus Torrico</span>
                <a
                  href="https://github.com/ikariLain?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Utforska repositories för ${project.title}`}
                >
                  <LuGithub aria-hidden="true" /> Utforska kod <LuArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
