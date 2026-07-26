import SectionHeading from '../../shared/components/ui/SectionHeading';
import ProjectCard from './ProjectCard';
import { PROJECTS_DATA } from '../../shared/data/projectsData';

export default function Projects() {
  return (
    <section id="proyectos" className="section projects">
      <div className="section__inner">
        <SectionHeading eyebrow="Portafolio técnico" title="Proyectos" />

        <div className="projects__grid">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
