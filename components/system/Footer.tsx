// Server component — edition mark computed at build time.
// No useEffect needed; year is stable per deployment.

function buildEdition(): string {
  const d = new Date();
  return `VLT/${d.getUTCFullYear()}/${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
}

export function Footer() {
  const edition = buildEdition();

  return (
    <footer className="border-t border-hairline px-[var(--margin)] py-8 flex flex-col gap-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-8">
        <span className="font-mono text-[12px] font-bold tracking-[0.2em] uppercase text-ink-2">
          Valantai
        </span>
        <span className="font-serif text-[13px] text-ink-3 italic hidden sm:block">
          The operating institution for ambitious companies.
        </span>
        <span className="font-mono text-[12px] font-medium tracking-[0.2em] uppercase text-ink-2">
          LDN · DXB · NYC · RUH
        </span>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-8">
        <span className="font-mono text-[10px] md:text-[11px] font-bold tracking-[0.08em] md:tracking-[0.14em] uppercase text-accent leading-relaxed">
          VLT originates · VLT builds · VLT fixes · VLT connects · VLT scales
        </span>
        <span className="font-mono text-[11px] md:text-[12px] font-medium tracking-[0.2em] uppercase text-ink-3">
          © 2026 · Edition {edition}
        </span>
      </div>
    </footer>
  );
}
