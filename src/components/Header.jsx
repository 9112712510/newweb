import { useEffect, useState } from 'react';
import './Header.css';

export default function Header() {
  // 'theme' is a simple string state: either 'dark' or 'light'
  const [theme, setTheme] = useState('dark');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const stored = window.localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored);
    } else {
      const prefersLight = window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: light)').matches;
      setTheme(prefersLight ? 'light' : 'dark');
    }
  }, []);

  useEffect(() => {
    // Apply theme class to document body
    document.body.classList.toggle('theme-light', theme === 'light');
    document.body.classList.toggle('theme-dark', theme === 'dark');
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav">
        <a href="#hero" className="logo">
          PrathameshK
        </a>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          <span className={menuOpen ? 'menu-bar open' : 'menu-bar'}></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#education" onClick={closeMenu}>Education</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
        <div className="header-actions">
          <a
            href="https://www.linkedin.com/in/prathamesh1407"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/9112712510"
            target="_blank"
            rel="noreferrer"
            className="btn-outline github"
          >
            GitHub
          </a>
          <button
            className="theme-toggle"
            aria-label="Toggle dark/light theme"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>
    </header>
  );
}
