import { LuArrowUpRight, LuCheck, LuGithub, LuLayers3 } from 'react-icons/lu';
import useLanguage from '../../useLanguage';
import './Projects.css';

const fallbackProjectsUrl = 'https://github.com/ikariLain?tab=repositories';

export default function Projects() {
  const { copy } = useLanguage();

  return (
    <section className="section-block" id="projects" aria-labelledby="projects-title">
      <div className="section-shell">
        <div className="projects-header">
          <div>
            <p className="section-label">{copy.projects.label}</p>
            <h2 className="section-heading" id="projects-title">{copy.projects.title}</h2>
          </div>
          <a
            className="all-projects-link"
            href={fallbackProjectsUrl}
            target="_blank"
            rel="noreferrer"
          >
            {copy.projects.allRepositories} <LuArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="projects-grid">
          {copy.projects.items.map((project) => (
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
                <span>{copy.projects.builtBy}</span>
                <a
                  href={project.url || fallbackProjectsUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${copy.projects.exploreAria} ${project.title}`}
                >
                  <LuGithub aria-hidden="true" /> {copy.projects.exploreCode} <LuArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
