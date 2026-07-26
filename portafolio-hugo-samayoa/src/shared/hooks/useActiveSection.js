import { useEffect, useState } from 'react';

/**
 * Devuelve el id de la sección actualmente visible en el viewport,
 * para resaltar el enlace correspondiente en el Navbar.
 *
 * Se calcula a partir de la posición de scroll (en vez de la proporción
 * de intersección) porque secciones muy largas ("Sobre mí", "Habilidades")
 * nunca llegan a cubrir el porcentaje mínimo de un IntersectionObserver
 * clásico, por lo que nunca se marcaban como activas.
 */
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const getTriggerOffset = () => {
      const navbar = document.querySelector('.navbar');
      return (navbar?.offsetHeight || 0) + 40;
    };

    const updateActiveSection = () => {
      const triggerLine = window.scrollY + getTriggerOffset();
      const scrolledToBottom =
        window.innerHeight + Math.ceil(window.scrollY) >=
        document.documentElement.scrollHeight - 2;

      if (scrolledToBottom) {
        setActiveId(sections[sections.length - 1].id);
        return;
      }

      let current = sections[0].id;
      for (const section of sections) {
        if (section.offsetTop <= triggerLine) {
          current = section.id;
        }
      }

      setActiveId(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [sectionIds]);

  return activeId;
}
