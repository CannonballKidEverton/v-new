// Server component — edition mark computed at build time.
// No useEffect needed; year is stable per deployment.

function buildEdition(): string {
  const d = new Date();
  return `VLT/${d.getUTCFullYear()}/${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
}

export function Footer() {
  const edition = buildEdition();

  return (
    <footer className="border-t border-hairline px-[var(--margin)] py-8 flex justify-between items-center flex-wrap gap-8">
      <span className="font-mono text-[12px] font-medium tracking-[0.2em] uppercase text-ink-2">
        Valantai
      </span>
      <span className="font-mono text-[12px] font-medium tracking-[0.2em] uppercase text-ink-2">
        LDN · DXB · NYC · RUH
      </span>
      <span className="font-mono text-[12px] font-medium tracking-[0.2em] uppercase text-ink-2">
        © 2026 · Edition {edition}
      </span>
    </footer>
  );
}
