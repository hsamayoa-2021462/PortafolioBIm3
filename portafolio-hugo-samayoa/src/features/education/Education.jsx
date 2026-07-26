import SectionHeading from '../../shared/components/ui/SectionHeading';
import DotPattern from '../../shared/components/ui/DotPattern';
import { CERTIFICACIONES, EXPERIENCIA, FORMACION } from '../../shared/data/educationData';

export default function Education() {
  return (
    <section id="formacion" className="section education">
      <DotPattern corner="top-left" floating />
      <DotPattern corner="bottom-right" floating />

      <div className="section__inner">
        <SectionHeading eyebrow="Trayectoria" title="Formación y experiencia" />

        <div className="education__grid">
          <div className="education__col" data-reveal>
            <h3 className="education__heading">Formación</h3>
            <ul className="education__list">
              {FORMACION.map((item, index) => (
                <li key={item.titulo} data-reveal style={{ transitionDelay: `${120 + index * 90}ms` }}>
                  <span className="education__bullet" />
                  <div>
                    <strong>{item.titulo}</strong>
                    <p>{item.institucion}</p>
                    <span className="education__period">{item.periodo}</span>
                  </div>
                </li>
              ))}
            </ul>

            {CERTIFICACIONES.length > 0 && (
              <div className="education__certs">
                <span className="education__certs-label">Certificaciones</span>
                <div className="education__certs-list">
                  {CERTIFICACIONES.map((cert) => (
                    <span className="education__cert" key={cert}>
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="education__col education__col--dark" data-reveal style={{ transitionDelay: '90ms' }}>
            <h3 className="education__heading">Experiencia</h3>
            <ul className="education__list">
              {EXPERIENCIA.map((item, index) => (
                <li key={item.puesto} data-reveal style={{ transitionDelay: `${180 + index * 90}ms` }}>
                  <span className="education__bullet" />
                  <div>
                    <strong>{item.puesto}</strong>
                    <p>{item.lugar}</p>
                    <span className="education__period">{item.periodo}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
