import { useEffect, useState } from 'react';
import { NAV_SECTIONS } from '../../utils/constants';
import { useActiveSection } from '../../hooks/useActiveSection';
import { PROFILE } from '../../data/profileData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(NAV_SECTIONS.map((s) => s.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen);
  }, [menuOpen]);

  const initials = `${PROFILE.nombre[0]}${PROFILE.apellido[0]}`;

  return (
    <header className={`navbar ${scrolled ? 'navbar--solid' : ''}`}>
      <div className="navbar__inner">
        <a href="#inicio" className="navbar__brand" onClick={() => setMenuOpen(false)}>
          <span className="navbar__brand-mark">{initials}</span>
          <span className="navbar__brand-dot" />
        </a>

        <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {NAV_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`navbar__link ${activeId === section.id ? 'navbar__link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {section.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          aria-label="Abrir menú de navegación"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
