import { LuArrowDownRight, LuArrowRight, LuCheck, LuGithub } from 'react-icons/lu';
import useLanguage from '../../useLanguage';
import './Hero.css';

export default function Hero() {
  const { copy } = useLanguage();

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="section-shell hero-inner">
        <div className="hero-copy">
          <p className="availability">
            <span className="availability-dot" />
            {copy.hero.availability}
          </p>

          <h1 id="hero-title">
            {copy.hero.titleFirst}
            <span>{copy.hero.titleSecond}</span>
          </h1>

          <p className="hero-intro">
            {copy.hero.intro}
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              {copy.hero.projectsButton} <LuArrowDownRight aria-hidden="true" />
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/ikariLain"
              target="_blank"
              rel="noreferrer"
            >
              <LuGithub aria-hidden="true" /> {copy.hero.githubButton}
            </a>
          </div>

          <ul className="hero-stack" aria-label={copy.hero.skillsLabel}>
            <li>React</li>
            <li>C# / .NET</li>
            <li>REST API</li>
            <li>SQL</li>
          </ul>
        </div>

        <div className="hero-scene" aria-label={copy.hero.sceneLabel}>
          <div className="scene-glow" aria-hidden="true" />

          <div className="code-window">
            <div className="window-bar">
              <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
              <span>api / products.ts</span>
              <span className="window-status">main</span>
            </div>
            <div className="code-body" aria-hidden="true">
              <p><span className="line-number">01</span><span className="code-blue">const</span> product = <span className="code-purple">await</span> api.get(</p>
              <p><span className="line-number">02</span>&nbsp;&nbsp;<span className="code-green">'/v1/products/featured'</span></p>
              <p><span className="line-number">03</span>);</p>
              <p><span className="line-number">04</span></p>
              <p><span className="line-number">05</span><span className="code-blue">return</span> &lt;ProductCard data={'{product}'} /&gt;;</p>
            </div>
          </div>

          <div className="metric-card metric-card--top">
            <span className="metric-icon metric-icon--success"><LuCheck aria-hidden="true" /></span>
            <div>
              <small>{copy.hero.apiStatus}</small>
              <strong>200 OK</strong>
            </div>
          </div>

          <div className="metric-card metric-card--bottom">
            <div>
              <small>{copy.hero.deliveryFlow}</small>
              <strong>{copy.hero.deliveryValue}</strong>
            </div>
            <LuArrowRight aria-hidden="true" />
          </div>

          <div className="scene-caption">
            <span>01</span>
            <p>{copy.hero.sceneCaptionFirst}<br />{copy.hero.sceneCaptionSecond}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
