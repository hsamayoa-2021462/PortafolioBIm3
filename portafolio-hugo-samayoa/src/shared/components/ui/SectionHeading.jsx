export default function SectionHeading({ eyebrow, title, align = 'left' }) {
  return (
    <div className={`section-heading section-heading--${align}`} data-reveal>
      {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      <h2 className="section-heading__title">{title}</h2>
    </div>
  );
}
