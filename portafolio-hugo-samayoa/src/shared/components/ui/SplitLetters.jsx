/**
 * Divide un texto en letras individuales envueltas en <span>, cada una con
 * un delay creciente (--i) para animarlas en cascada vía CSS.
 * Los espacios se preservan como espacios no separables.
 */
export default function SplitLetters({ text, startDelay = 0, step = 28 }) {
  const letters = text.split('');

  return (
    <span className="split-letters" aria-label={text}>
      {letters.map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          className="split-letters__char"
          style={{ animationDelay: `${startDelay + index * step}ms` }}
          aria-hidden="true"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </span>
  );
}
