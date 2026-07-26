import { useEffect, useRef } from 'react';

/**
 * Aplica un desplazamiento sutil (parallax) a un elemento según el scroll,
 * a través de la variable CSS --parallax-y. `speed` controla la intensidad
 * (valores pequeños = movimiento más sutil).
 */
export function useParallax(speed = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    let ticking = false;

    const update = () => {
      const rect = node.getBoundingClientRect();
      const offset = (rect.top - window.innerHeight / 2) * speed;
      node.style.setProperty('--parallax-y', `${offset * -1}px`);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [speed]);

  return ref;
}
