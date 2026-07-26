import DonutChart from '../../shared/components/ui/DonutChart';
import SectionHeading from '../../shared/components/ui/SectionHeading';
import DotPattern from '../../shared/components/ui/DotPattern';
import { OTRAS_HABILIDADES, SKILLS_CATEGORIES } from '../../shared/data/skillsData';

export default function Skills() {
  return (
    <section id="habilidades" className="section skills">
      <DotPattern corner="top-right" floating />
      <div className="section__inner">
        <SectionHeading eyebrow="Habilidades" title="Lo que sé usar hoy" />

        <div className="skills__categories">
          {SKILLS_CATEGORIES.map((category, index) => (
            <div className="skills__category" data-reveal key={category.id} style={{ transitionDelay: `${index * 60}ms` }}>
              <h4 className="skills__category-title">{category.label}</h4>
              <div className="skills__grid">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    className="skills__donut-wrap"
                    data-reveal
                    key={skill.name}
                    style={{ transitionDelay: `${skillIndex * 70}ms` }}
                  >
                    <DonutChart name={skill.name} level={skill.level} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills__other" data-reveal>
          <h4 className="skills__category-title">Otras habilidades</h4>
          <div className="skills__tags">
            {OTRAS_HABILIDADES.map((item) => (
              <span className="skills__tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
