import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero }        from "@/components/primitives/PageHero";
import { SectionHead }     from "@/components/primitives/SectionHead";
import { MetadataBlock }   from "@/components/primitives/MetadataBlock";
import { EngagementBlock } from "@/components/primitives/EngagementBlock";
import { VMarkIcon }       from "@/components/solutions/VMarks";
import { ImageSlot }       from "@/components/imagery/ImageSlot";
import { solutions, getSolutionBySlug } from "@/content/solutions";
import type { ImageContext } from "@/lib/imagery";

// Solution → image context + secondary image context
const SOLUTION_IMAGES: Record<string, { primary: ImageContext; secondary?: ImageContext }> = {
  build:      { primary: "build",      secondary: "risk_operations" },
  capital:    { primary: "capital",    secondary: "intelligence_band" },
  technology: { primary: "technology", secondary: "risk_operations" },
  risk:       { primary: "risk",       secondary: "intelligence_band" },
  commerce:   { primary: "commerce",   secondary: "risk_operations" },
  counsel:    { primary: "counsel",    secondary: "build" },
  grow:       { primary: "grow",       secondary: "capital" },
  brand:      { primary: "brand",      secondary: "build" },
  gtm:        { primary: "gtm",        secondary: "commerce" },
  esg:        { primary: "esg",        secondary: "grow" },
  educate:    { primary: "educate",    secondary: "build" },
  wedge:      { primary: "wedge",      secondary: "risk" },
  angels:     { primary: "angels",     secondary: "capital" },
};

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const sol = getSolutionBySlug(params.slug);
  if (!sol) return {};
  return { title: sol.name, description: sol.description };
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const sol = getSolutionBySlug(params.slug);
  if (!sol) notFound();

  const hasInstrument =
    sol.href !== null && sol.href !== `/solutions/${sol.slug}`;
  const imgs = SOLUTION_IMAGES[sol.slug];

  return (
    <>
      {/* ── HERO IMAGE — first thing visible, no scrolling required ─── */}
      {imgs && (
        <div className="w-full">
          <ImageSlot
            context={imgs.primary}
            aspect="21/8"
            priority
          />
        </div>
      )}

      {/* ── PAGE IDENTITY ─────────────────────────────────────────────── */}
      <PageHero
        index={`${sol.number} · Solutions · ${sol.name}`}
        title={sol.name}
        subtitle={sol.description}
        refPrefix={`VLT · SOL/${sol.number}`}
        variant="division"
      />

      {/* ── POSITIONING STATEMENT + METADATA ─────────────────────────── */}
      <section className="zone-pad grid grid-cols-1 md:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] gap-x-[clamp(48px,8vw,120px)] gap-y-12 items-start">
        <div>
          <p className="t-keyline text-ink mb-8 max-w-[54ch]">
            {sol.positioning}
          </p>
          {sol.sections[0] && (
            <div className="t-lead text-ink max-w-prose mt-8">
              {sol.sections[0].paragraphs.map((p, i) => (
                <p key={i} className="mb-[1.55em] last:mb-0">{p}</p>
              ))}
            </div>
          )}
          {hasInstrument && (
            <Link
              href={sol.href!}
              className="t-caption text-ink-3 no-underline mt-10 inline-flex items-center gap-2.5 hover:text-ink transition-colors duration-moderate"
            >
              Open the {sol.name} instrument →
            </Link>
          )}
        </div>
        <aside className="self-start flex flex-col gap-10">
          <span className="text-ink w-12 h-12 block">
            <VMarkIcon variant={sol.vMark} />
          </span>
          <MetadataBlock items={sol.metadata} />
        </aside>
      </section>

      {/* ── SECONDARY IMAGE BAND ─────────────────────────────────────── */}
      {imgs?.secondary && sol.sections.length > 1 && (
        <div className="px-[var(--margin)] pb-[6vh]">
          <ImageSlot context={imgs.secondary} aspect="32/9" />
        </div>
      )}

      {/* ── BODY SECTIONS ────────────────────────────────────────────── */}
      {sol.sections.slice(1).map((section) => (
        <section
          key={section.heading}
          className="px-[var(--margin)] pb-[8vh] grid grid-cols-1 md:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] gap-x-[clamp(48px,8vw,120px)]"
        >
          <div>
            <h2 className="font-sans font-medium text-[clamp(1.4rem,2vw,1.9rem)] tracking-[-0.015em] text-ink mb-6">
              {section.heading}
            </h2>
            <div className="t-lead text-ink max-w-prose">
              {section.paragraphs.map((p, i) => (
                <p key={i} className="mb-[1.55em] last:mb-0">{p}</p>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── RELATED SOLUTIONS ────────────────────────────────────────── */}
      <section className="zone-pad border-t border-hairline">
        <SectionHead title="Related solutions" />
        <div className="flex flex-col">
          {solutions
            .filter((s) => s.slug !== sol.slug)
            .slice(0, 3)
            .map((related) => (
              <Link
                key={related.slug}
                href={`/solutions/${related.slug}`}
                className="group grid grid-cols-[64px_minmax(0,3fr)_minmax(0,7fr)_32px] items-center gap-x-[clamp(24px,4vw,56px)] py-6 border-b border-hairline first:border-t no-underline text-inherit"
              >
                <span className="text-ink"><VMarkIcon variant={related.vMark} /></span>
                <span className="t-solution text-ink group-hover:text-accent transition-colors duration-moderate">
                  {related.name}
                </span>
                <span className="font-serif text-[clamp(0.95rem,1.05vw,1.05rem)] leading-relaxed text-ink-3 hidden md:block">
                  {related.description}
                </span>
                <span className="font-mono text-[14px] text-ink-4 text-right group-hover:translate-x-1.5 transition-transform duration-moderate">
                  →
                </span>
              </Link>
            ))}
        </div>
      </section>

      <EngagementBlock />
    </>
  );
}
