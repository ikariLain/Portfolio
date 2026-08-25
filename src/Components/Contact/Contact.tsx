import { LuArrowUpRight, LuGithub } from 'react-icons/lu';
import './Contact.css';

export default function Contact() {
  return (
    <section className="section-block contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-shell">
        <div className="contact-card">
          <div className="contact-orbit" aria-hidden="true"><i /><i /><i /></div>
          <div className="contact-copy">
            <p className="section-label">05 / Kontakt</p>
            <h2 id="contact-title">Har du ett problem värt att bygga bort?</h2>
            <p>
              Jag är öppen för juniorroller, samarbeten och projekt där jag får växa,
              bidra och skapa något som faktiskt används.
            </p>
          </div>

          <div className="contact-actions">
            <a
              className="button contact-primary"
              href="https://github.com/ikariLain"
              target="_blank"
              rel="noreferrer"
            >
              <LuGithub aria-hidden="true" /> Kontakta mig via GitHub <LuArrowUpRight aria-hidden="true" />
            </a>
            <span>Öppen för möjligheter</span>
          </div>
        </div>
      </div>
    </section>
  );
}
