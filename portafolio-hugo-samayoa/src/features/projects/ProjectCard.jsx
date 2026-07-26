export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card" data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
      <div className="project-card__media">
  <img src={project.imagenes[0]} alt={project.titulo} />
</div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.titulo}</h3>
        <p className="project-card__desc">{project.descripcion}</p>

        <ul className="project-card__stack">
          {project.tecnologias.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="project-card__links">
          <a href={project.github} className="project-card__link" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={project.demo} className="project-card__link project-card__link--ghost" target="_blank" rel="noreferrer">
            Demo ↗
          </a>
        </div>
      </div>
    </article>
  );
}
