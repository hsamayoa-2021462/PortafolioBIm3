import { useEffect, useRef, useState } from 'react';

const SIZE = 108;
const STROKE = 9;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/**
 * Gráfica circular (donut) animada. El porcentaje se anima de 0 -> level
 * cuando el componente entra en el viewport.
 */
export default function DonutChart({ name, level }) {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Pequeño delay para que la escala de entrada se note antes de
          // que el trazo empiece a dibujarse.
          const timeout = setTimeout(() => setAnimatedLevel(level), 120);
          observer.disconnect();
          return () => clearTimeout(timeout);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [level]);

  const offset = CIRCUMFERENCE - (animatedLevel / 100) * CIRCUMFERENCE;

  return (
    <div className={`donut ${isVisible ? 'donut--visible' : ''}`} ref={ref}>
      <svg
        className="donut__svg"
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        role="img"
        aria-label={`${name}: ${level}%`}
      >
        <circle
          className="donut__track"
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          strokeWidth={STROKE}
          fill="none"
        />
        <circle
          className="donut__value"
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          strokeWidth={STROKE}
          fill="none"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
        />
        <text x="50%" y="53%" textAnchor="middle" className="donut__percent">
          {animatedLevel}%
        </text>
      </svg>
      <span className="donut__name">{name}</span>
    </div>
  );
}
