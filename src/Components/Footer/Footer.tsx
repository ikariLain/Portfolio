import { LuArrowUp } from 'react-icons/lu';
import useLanguage from '../../useLanguage';
import './Footer.css';

export default function Footer() {
  const { copy } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="section-shell footer-inner">
        <div className="footer-brand">
          <span>MT</span>
          <p>{copy.footer.builtBy}</p>
        </div>

        <p className="footer-copyright">© {new Date().getFullYear()} {copy.footer.copyright}</p>

        <a className="back-to-top" href="#top">
          {copy.footer.backToTop} <LuArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
