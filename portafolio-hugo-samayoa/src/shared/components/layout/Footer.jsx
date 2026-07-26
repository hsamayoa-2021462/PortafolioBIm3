import { PROFILE } from '../../data/profileData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__name">
            {PROFILE.nombre} {PROFILE.apellido}
          </span>
          <span className="footer__role">{PROFILE.titulo}</span>
        </div>

        <a href="#inicio" className="footer__top">
          Volver arriba ↑
        </a>

        <p className="footer__copy">
          © {year} {PROFILE.nombre} {PROFILE.apellido}. Portafolio construido con React.
        </p>
      </div>
    </footer>
  );
}
