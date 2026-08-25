import { LuArrowDownRight, LuArrowRight, LuCheck, LuGithub } from 'react-icons/lu';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="section-shell hero-inner">
        <div className="hero-copy">
          <p className="availability">
            <span className="availability-dot" />
            Tillgänglig för nästa möjlighet
          </p>

          <h1 id="hero-title">
            Jag bygger digitala produkter
            <span>från databas till gränssnitt.</span>
          </h1>

          <p className="hero-intro">
            Jag är Matheus, junior fullstackutvecklare med fokus på React, C# och .NET.
            Jag förvandlar idéer till tydliga, stabila och genomtänkta webbupplevelser.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Se mina projekt <LuArrowDownRight aria-hidden="true" />
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/ikariLain"
              target="_blank"
              rel="noreferrer"
            >
              <LuGithub aria-hidden="true" /> GitHub-profil
            </a>
          </div>

          <ul className="hero-stack" aria-label="Huvudkompetenser">
            <li>React</li>
            <li>C# / .NET</li>
            <li>REST API</li>
            <li>SQL</li>
          </ul>
        </div>

        <div className="hero-scene" aria-label="Illustration av ett fullstackflöde">
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
              <small>API-status</small>
              <strong>200 OK</strong>
            </div>
          </div>

          <div className="metric-card metric-card--bottom">
            <div>
              <small>Leveransflöde</small>
              <strong>Idé → produktion</strong>
            </div>
            <LuArrowRight aria-hidden="true" />
          </div>

          <div className="scene-caption">
            <span>01</span>
            <p>Frontend och backend<br />i samma helhet.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
