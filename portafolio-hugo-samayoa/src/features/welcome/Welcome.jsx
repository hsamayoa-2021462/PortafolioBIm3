import DotPattern from '../../shared/components/ui/DotPattern';
import SplitLetters from '../../shared/components/ui/SplitLetters';
import { useParallax } from '../../shared/hooks/useParallax';
import { PROFILE } from '../../shared/data/profileData';

export default function Welcome() {
  const topDotsRef = useParallax(0.12);
  const bottomDotsRef = useParallax(-0.08);

  const primerNombre = PROFILE.nombre.split(' ')[0];
  const primerApellido = PROFILE.apellido.split(' ')[0];
  const nameDelayStart = 520;

  return (
    <section id="inicio" className="welcome">
      <DotPattern corner="top-right" ref={topDotsRef} floating />
      <DotPattern corner="bottom-left" ref={bottomDotsRef} floating />

      <div className="welcome__inner">
        <p className="welcome__eyebrow welcome__enter welcome__enter--1">
          Bienvenido a mi portafolio
        </p>

        <h1 className="welcome__name">
          <span className="welcome__name-line">
            <SplitLetters text={primerNombre} startDelay={nameDelayStart} />
          </span>
          <span className="welcome__name-line welcome__name-line--outline">
            <SplitLetters
              text={primerApellido}
              startDelay={nameDelayStart + primerNombre.length * 28 + 60}
            />
          </span>
        </h1>

        <div className="welcome__tag welcome__enter welcome__enter--4">
          <span className="welcome__tag-dot" />
          <span className="welcome__tag-text">{PROFILE.titulo}</span>
        </div>

        <p className="welcome__phrase welcome__enter welcome__enter--5">{PROFILE.frase}</p>

        <a
          href="#sobre-mi"
          className="welcome__scroll welcome__enter welcome__enter--6"
          aria-label="Ir a la sección Sobre mí"
        >
          <span className="welcome__scroll-line" />
          Desplázate
        </a>
      </div>
    </section>
  );
}
