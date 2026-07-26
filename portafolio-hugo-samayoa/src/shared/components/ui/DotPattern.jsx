import { forwardRef } from 'react';

/**
 * Bloque decorativo de puntos, réplica del patrón visto en el brief de
 * diseño. `corner` posiciona el patrón en una esquina del contenedor padre
 * (el padre debe tener position: relative). `floating` le agrega un
 * movimiento ambient sutil; acepta `ref` para animarlo con parallax.
 */
const DotPattern = forwardRef(function DotPattern(
  { corner = 'top-left', floating = false, className = '' },
  ref
) {
  return (
    <span
      ref={ref}
      className={`dot-pattern dot-pattern--${corner} ${floating ? 'dot-pattern--floating' : ''} ${className}`}
      aria-hidden="true"
    />
  );
});

export default DotPattern;
