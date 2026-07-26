/**
 * Wrapper simple que marca un elemento con [data-reveal] para que
 * el hook useReveal (montado una sola vez en App) lo anime al entrar
 * en el viewport.
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;
  return (
    <Tag data-reveal className={`reveal ${className}`} style={style} {...rest}>
      {children}
    </Tag>
  );
}
