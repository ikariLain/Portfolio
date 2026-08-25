import { useEffect, useState } from 'react';
import { LuArrowUpRight, LuMenu, LuMoon, LuSun, LuX } from 'react-icons/lu';
import './Header.css';

type Theme = 'dark' | 'light';

const menuItems = [
  { name: 'Om mig', href: '#about' },
  { name: 'Kompetenser', href: '#skills' },
  { name: 'Projekt', href: '#projects' },
  { name: 'Arbetssätt', href: '#process' },
  { name: 'Kontakt', href: '#contact' },
];

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme === 'light' ? 'light' : 'dark';
}

export default function Header() {
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
        <a className="brand-mark" href="#top" aria-label="Matheus Torrico, startsida">
          <span className="brand-monogram">MT</span>
          <span className="brand-copy">
            <strong>Matheus Torrico</strong>
            <small>Fullstackutvecklare</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Huvudnavigation">
          {menuItems.map((item) => (
            <a key={item.href} href={item.href}>{item.name}</a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-button"
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={theme === 'dark' ? 'Aktivera ljust tema' : 'Aktivera mörkt tema'}
            title={theme === 'dark' ? 'Ljust tema' : 'Mörkt tema'}
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
            aria-label={menuOpen ? 'Stäng meny' : 'Öppna meny'}
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
        <nav aria-label="Mobilnavigation">
          {menuItems.map((item, index) => (
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
          Besök min GitHub <LuArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
