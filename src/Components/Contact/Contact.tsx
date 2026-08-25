import { LuArrowUpRight, LuGithub } from 'react-icons/lu';
import useLanguage from '../../useLanguage';
import './Contact.css';

export default function Contact() {
  const { copy } = useLanguage();

  return (
    <section className="section-block contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-shell">
        <div className="contact-card">
          <div className="contact-orbit" aria-hidden="true"><i /><i /><i /></div>
          <div className="contact-copy">
            <p className="section-label">{copy.contact.label}</p>
            <h2 id="contact-title">{copy.contact.title}</h2>
            <p>{copy.contact.text}</p>
          </div>

          <div className="contact-actions">
            <a
              className="button contact-primary"
              href="https://github.com/ikariLain"
              target="_blank"
              rel="noreferrer"
            >
              <LuGithub aria-hidden="true" /> {copy.contact.button} <LuArrowUpRight aria-hidden="true" />
            </a>
            <span>{copy.contact.status}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
