import { LuArrowUp } from 'react-icons/lu';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-inner">
        <div className="footer-brand">
          <span>MT</span>
          <p>Designad och utvecklad av Matheus Torrico.</p>
        </div>

        <p className="footer-copyright">© {new Date().getFullYear()} Alla rättigheter förbehållna.</p>

        <a className="back-to-top" href="#top">
          Till toppen <LuArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
