import { PROFILE } from '../../shared/data/profileData';

export default function GoalsStrengths() {
  return (
    <div className="goals">
      <div className="goals__card" data-reveal>
        <h4 className="goals__title">Metas y aspiraciones</h4>
        <ul className="goals__list">
          {PROFILE.metas.map((meta, index) => (
            <li key={meta} data-reveal style={{ transitionDelay: `${120 + index * 90}ms` }}>
              {meta}
            </li>
          ))}
        </ul>
      </div>

      <div className="goals__card goals__card--dark" data-reveal style={{ transitionDelay: '90ms' }}>
        <h4 className="goals__title">Fortalezas</h4>
        <ul className="goals__list goals__list--tags">
          {PROFILE.fortalezas.map((fortaleza, index) => (
            <li key={fortaleza} data-reveal style={{ transitionDelay: `${180 + index * 90}ms` }}>
              {fortaleza}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
