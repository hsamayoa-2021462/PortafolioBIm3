import DotPattern from '../../shared/components/ui/DotPattern';
import { PROFILE } from '../../shared/data/profileData';

const LINKS = [
  { key: 'linkedin', label: 'LinkedIn', href: PROFILE.redes.linkedin },
  { key: 'computrabajo', label: 'CompuTrabajo', href: PROFILE.redes.computrabajo },
  { key: 'github', label: 'GitHub', href: PROFILE.redes.github },
];

export default function Contact() {
  return (
    <section id="contacto" className="section contact">
      <DotPattern corner="bottom-left" floating />

      <div className="section__inner contact__inner">
        <div className="contact__text" data-reveal>
          <span className="section-heading__eyebrow">Hablemos</span>
          <h2 className="contact__title">¿Trabajamos juntos?</h2>
          <p className="contact__desc">
            Escríbeme a <a href={`mailto:${PROFILE.datosGenerales.correo}`}>{PROFILE.datosGenerales.correo}</a> o
            encuéntrame en mis redes profesionales.
          </p>

          <a href={PROFILE.cv} className="contact__cv" download>
            Descargar CV
          </a>
          {/* CV en PDF: public/assets/docs/cv-hugo-samayoa.pdf */}
        </div>

        <div className="contact__links">
          {LINKS.map((link, index) => (
            <a
              key={link.key}
              href={link.href}
              className="contact__link"
              target="_blank"
              rel="noreferrer"
              data-reveal
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <span>{link.label}</span>
              <span className="contact__link-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
