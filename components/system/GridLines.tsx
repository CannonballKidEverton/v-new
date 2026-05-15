/**
 * Persistent vertical grid hairlines. Rendered once in the root layout.
 * Server component — no interactivity needed.
 */
export function GridLines() {
  const cols = [
    'left-[--col-1]',   // Col 1
    'left-[--col-4]',   // Col 4
    'left-[--col-8]',   // Col 8
    'left-[--col-12]',  // Col 12
  ];

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1]"
      aria-hidden="true"
      style={{
        '--col-1': 'var(--margin)',
        '--col-4': 'calc(var(--margin) + 3 * var(--col-step))',
        '--col-8': 'calc(var(--margin) + 7 * var(--col-step))',
        '--col-12': 'calc(var(--margin) + 11 * var(--col-step))',
      } as React.CSSProperties}
    >
      {cols.map((_, i) => (
        <span
          key={i}
          className="absolute inset-y-0 w-px bg-hairline"
          style={{
            left: [
              'var(--margin)',
              'calc(var(--margin) + 3 * var(--col-step))',
              'calc(var(--margin) + 7 * var(--col-step))',
              'calc(var(--margin) + 11 * var(--col-step))',
            ][i],
          }}
        />
      ))}
    </div>
  );
}
