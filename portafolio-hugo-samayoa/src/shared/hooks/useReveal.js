import { useEffect } from 'react';

/**
 * Observa todos los elementos con [data-reveal] dentro del contenedor del
 * documento y les agrega la clase `is-visible` cuando entran en el viewport.
 * Réplica en React del patrón "reveal on scroll" mediante IntersectionObserver.
 */
export function useReveal(deps = []) {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
