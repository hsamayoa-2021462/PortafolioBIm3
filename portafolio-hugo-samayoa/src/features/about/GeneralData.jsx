import { PROFILE } from '../../shared/data/profileData';

const ITEMS = [
  { label: 'Edad', value: PROFILE.datosGenerales.edad },
  { label: 'Correo', value: PROFILE.datosGenerales.correo },
  { label: 'Teléfono', value: PROFILE.datosGenerales.telefono },
  { label: 'Años programando', value: PROFILE.datosGenerales.anosProgramando },
  {
    label: 'Estudiando actualmente',
    value: PROFILE.datosGenerales.estudiandoActualmente ? 'Sí' : 'No',
  },
  { label: 'Dónde y qué carrera', value: PROFILE.datosGenerales.lugarEstudio },
];

export default function GeneralData() {
  return (
    <div className="general-data" data-reveal>
      <h4 className="general-data__title">Datos generales</h4>
      <dl className="general-data__grid">
        {ITEMS.map((item, index) => (
          <div
            className="general-data__item"
            data-reveal
            key={item.label}
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
