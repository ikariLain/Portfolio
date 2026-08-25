import { useEffect, useState } from 'react';
import { LuArrowUpRight, LuLanguages, LuMenu, LuMoon, LuSun, LuX } from 'react-icons/lu';
import useLanguage from '../../useLanguage';
import './Header.css';

type Theme = 'dark' | 'light';

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme === 'light' ? 'light' : 'dark';
}

export default function Header() {
  const { language, setLanguage, copy } = useLanguage();
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateHeader = () => {
      const currentScroll = window.scrollY;
      setHidden(currentScroll > lastScrollY && currentScroll > 120 && !menuOpen);
      lastScrollY = currentScroll;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${hidden ? 'site-header--hidden' : ''}`}>
      <div className="header-inner">
        <a className="brand-mark" href="#top" aria-label={copy.header.homeLabel}>
          <span className="brand-monogram">MT</span>
          <span className="brand-copy">
            <strong>Matheus Torrico</strong>
            <small>{copy.header.role}</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label={copy.header.navigationLabel}>
          {copy.header.menu.map((item) => (
            <a key={item.href} href={item.href}>{item.name}</a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="language-button"
            type="button"
            onClick={() => setLanguage(language === 'en' ? 'sv' : 'en')}
            aria-label={copy.header.switchLanguage}
            title={copy.header.switchLanguage}
          >
            <LuLanguages aria-hidden="true" />
            <span>{language.toUpperCase()}</span>
          </button>

          <button
            className="icon-button"
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={theme === 'dark' ? copy.header.useLightTheme : copy.header.useDarkTheme}
            title={theme === 'dark' ? copy.header.lightTheme : copy.header.darkTheme}
          >
            {theme === 'dark' ? <LuSun aria-hidden="true" /> : <LuMoon aria-hidden="true" />}
          </button>

          <a
            className="github-link"
            href="https://github.com/ikariLain"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <LuArrowUpRight aria-hidden="true" />
          </a>

          <button
            className="icon-button menu-button"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? copy.header.closeMenu : copy.header.openMenu}
          >
            {menuOpen ? <LuX aria-hidden="true" /> : <LuMenu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label={copy.header.mobileNavigationLabel}>
          {copy.header.menu.map((item, index) => (
            <a key={item.href} href={item.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
              <span>0{index + 1}</span>
              {item.name}
            </a>
          ))}
        </nav>
        <a
          className="mobile-github"
          href="https://github.com/ikariLain"
          target="_blank"
          rel="noreferrer"
          tabIndex={menuOpen ? 0 : -1}
        >
          {copy.header.visitGithub} <LuArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
