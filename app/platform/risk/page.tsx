import type { Metadata } from "next";
import { PageHero }         from "@/components/primitives/PageHero";
import { SectionHead }      from "@/components/primitives/SectionHead";
import { MetadataBlock }    from "@/components/primitives/MetadataBlock";
import { EngagementBlock }  from "@/components/primitives/EngagementBlock";
import { RiskEngineForm }   from "@/components/risk/RiskEngineForm";
import { RiskMatrix }       from "@/components/graphics/RiskMatrix";
import { JurisdictionMap }  from "@/components/graphics/JurisdictionMap";
import { CapitalFlow }      from "@/components/graphics/CapitalFlow";
import { CompanyLifecycle } from "@/components/graphics/CompanyLifecycle";
import { ImageSlot }        from "@/components/imagery/ImageSlot";
import { riskDomains }      from "@/content/riskDomains";

export const metadata: Metadata = {
  title: "The Risk Engine",
  description: "A continuous scoring instrument across twelve operational domains.",
};

export default function RiskPage() {
  return (
    <>
      {/* ── HERO IMAGE — immediately visible, full-bleed ──── */}
      <ImageSlot context="risk_hero" aspect="21/8" priority />

      <PageHero
        index="DIV/004 · Solutions · Risk"
        title="The Risk Engine"
        subtitle="A continuous scoring instrument across twelve operational domains. Identifies, ranks, and tracks the exposures most likely to disrupt a company before they do."
        refPrefix="VLT · DIV/004"
        variant="division"
      />

      {/* ─── ASSESSMENT PHILOSOPHY ─────────────────────────────────── */}
      <section className="zone-pad grid grid-cols-1 md:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] gap-x-[clamp(48px,8vw,120px)] gap-y-12 items-start">
        <article className="t-lead text-ink max-w-prose">
          <p className="font-sans font-medium text-[clamp(1.4rem,2vw,1.9rem)] tracking-[-0.018em] leading-snug mb-6">
            Most companies discover their operational risks at the point those
            risks become consequences. By then the cost is rarely the risk
            itself — it is the absence of warning.
          </p>
          <p className="mb-[1.55em]">
            The Risk Engine exists to close that gap. It is an operating
            instrument — not a software product, not a dashboard, not a
            report. A company&rsquo;s position is scored across twelve
            operational domains and tracked through the lifecycle of the
            company, not the lifecycle of the engagement.
          </p>
          <p className="mb-[1.55em]">
            Twelve is the smallest number of axes that captures the operational
            shape of a company across stage, sector, and structure; it is also
            the largest number that an operator can hold in working memory while
            making a decision. Every domain on the list has, at some point in
            the partners&rsquo; combined operating career, been the domain that
            determined an outcome.
          </p>
          <p>
            The instrument is built and operated by Valantai. The intelligence
            accumulates inside the institution. Clients receive the output:
            ranked exposures, mitigation pathways, and the operational pressure
            that comes from continuous observation rather than periodic review.
          </p>
        </article>

        <aside className="self-start">
          <MetadataBlock items={[
            { label: "Practice",           value: "Risk · DIV/004" },
            { label: "Domains",            value: "Twelve, weighted" },
            { label: "Domain calibration", value: "Reviewed quarterly" },
            { label: "Access",             value: "Clients and capital partners" },
            { label: "Status",             value: "In development" },
          ]} />
        </aside>
      </section>

      {/* ─── DOMAIN MATRIX VISUAL ──────────────────────────────────── */}
      <section className="zone-pad border-t border-hairline">
        <div className="mb-7">
          <h2 className="t-section text-ink mb-2">Domain matrix</h2>
          <p className="t-label text-ink-3">Four axes · twelve domains · weighted quarterly</p>
        </div>
        <RiskMatrix />
      </section>

      {/* ─── OPERATING IMAGE ───────────────────────────────────────── */}
      <div className="px-[var(--margin)] py-[4vh]">
        <ImageSlot context="risk_operations" aspect="32/9" />
      </div>

      {/* ─── INTAKE METHODOLOGY ────────────────────────────────────── */}
      <section className="zone-pad border-t border-hairline">
        <SectionHead title="Intake methodology" counter="Three stages" />
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-hairline">
          {[
            {
              stage: "Stage I",
              title: "Intake",
              body: "A structured thirteen-question diagnostic captures the company\u2019s position across four operating axes: position, capital, customer, and governance. Each answer carries weighted exposure scores across the twelve domains. The intake takes twelve minutes.",
            },
            {
              stage: "Stage II",
              title: "Scoring",
              body: "Domain scores are computed and ranked. The five exposures most likely to determine the company\u2019s next twelve months are surfaced with severity bands: High, Elevated, Moderate, Low. Scores are calibrated against companies at the same stage, sector, and capital position.",
            },
            {
              stage: "Stage III",
              title: "Routing",
              body: "Each surfaced exposure routes directly into the Valantai practice best positioned to address it. Capital exposure routes to Capital. Technology dependency routes to Technology. Legal structure gaps route to Counsel. The instrument is the first conversation, not the last.",
            },
          ].map((step, i) => (
            <div
              key={step.stage}
              className={[
                "py-9 pr-8",
                i < 2 ? "md:border-r border-hairline" : "",
                i > 0 ? "md:pl-8" : "",
              ].filter(Boolean).join(" ")}
            >
              <span className="t-label text-ink-3 block mb-4">{step.stage}</span>
              <h3 className="font-sans font-medium text-[clamp(1.15rem,1.6vw,1.5rem)] tracking-[-0.015em] text-ink leading-tight mb-4">
                {step.title}
              </h3>
              <p className="font-serif text-[clamp(0.95rem,1.05vw,1.05rem)] leading-relaxed text-ink-2">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── COMPANY LIFECYCLE ─────────────────────────────────────── */}
      <section className="zone-pad border-t border-hairline">
        <SectionHead title="Company lifecycle" counter="Idea to exit" />
        <CompanyLifecycle />
      </section>

      {/* ─── OUTPUT STRUCTURE ──────────────────────────────────────── */}
      <section className="zone-pad border-t border-hairline">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] gap-x-[clamp(48px,8vw,120px)] gap-y-12 items-start">
          <div>
            <SectionHead title="Output structure" />
            <div className="t-lead text-ink max-w-prose">
              <p className="mb-[1.55em]">
                The output is a ranked exposure register. Each of the five surfaced
                exposures carries a domain reference, a severity band, a weighted
                score calibrated against sector peers, and a direct routing to the
                Valantai practice most equipped to address it.
              </p>
              <p className="mb-[1.55em]">
                The free diagnostic surfaces the top-five ranking and severity bands.
                The paid monitoring tier adds the full mitigation roadmap, sector
                benchmarking, and the standing dashboard. The enterprise tier adds
                the Investor Risk Report for due diligence processes.
              </p>
              <p>
                In practice, the top three exposures account for roughly seventy per
                cent of the institutional attention given to a company. The instrument
                surfaces the combinations — pairs of domains that, scored together,
                indicate a different conversation than either domain alone would warrant.
              </p>
            </div>
          </div>
          <aside className="self-start">
            <MetadataBlock items={[
              { label: "Free tier",     value: "Top-5 ranking · Severity bands · Routing" },
              { label: "SMB tier",      value: "£299/month · Dashboard · Benchmarking" },
              { label: "Growth tier",   value: "£999/month · Full roadmap · Quarterly review" },
              { label: "Enterprise",    value: "£5K–25K/month · Portfolio · Board reporting" },
              { label: "Investor pack", value: "Project fee · Due diligence validation" },
            ]} />
          </aside>
        </div>
      </section>

      {/* ─── JURISDICTION MAP ──────────────────────────────────────── */}
      <section className="zone-pad border-t border-hairline">
        <SectionHead title="Operating jurisdictions" counter="Four territories" />
        <JurisdictionMap />
      </section>

      {/* ─── INVESTOR USE ──────────────────────────────────────────── */}
      <section className="zone-pad border-t border-hairline">
        <SectionHead title="Investor and portfolio use" />
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-hairline">
          {[
            { ref: "Pre-investment",  body: "A structured due diligence input surfacing exposures the company may not have disclosed or identified. The Risk Engine produces an independent view of operational risk alongside financial and legal diligence. Sector benchmarking positions the company\u2019s exposure relative to its peer set." },
            { ref: "Post-investment", body: "A standing monitor for the portfolio. Exposure movement is tracked as the company\u2019s profile evolves: new funding, new hires, new markets, new competitive entrants. The instrument updates; the portfolio manager receives a live view of where the risk sits." },
            { ref: "Pre-exit",        body: "An investor-readiness instrument that packages the risk picture for acquirer diligence. Companies with a standing Risk Engine record can demonstrate operational transparency that compressed-timeline acquirers value. The instrument reduces diligence friction." },
          ].map((item, i) => (
            <div
              key={item.ref}
              className={[
                "py-9 pr-8",
                i < 2 ? "md:border-r border-hairline" : "",
                i > 0 ? "md:pl-8" : "",
              ].filter(Boolean).join(" ")}
            >
              <span className="t-label text-ink-3 block mb-4">{item.ref}</span>
              <p className="font-serif text-[clamp(0.95rem,1.05vw,1.05rem)] leading-relaxed text-ink-2">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CAPITAL FLOW ──────────────────────────────────────────── */}
      <section className="zone-pad border-t border-hairline">
        <SectionHead title="Capital routing" counter="Sources to portfolio" />
        <CapitalFlow />
      </section>

      {/* ─── MITIGATION ROUTING ────────────────────────────────────── */}
      <section className="zone-pad border-t border-hairline">
        <SectionHead title="Mitigation routing" counter="Domain to practice" />
        <p className="t-lead text-ink max-w-prose mb-10">
          Each surfaced exposure routes to the Valantai practice with the operating
          depth to address it. The routing is not advisory — it is a warm introduction
          to a senior practitioner with direct experience of the domain in question.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-hairline border border-hairline">
          {[
            ["D/01 Key person",           "Build · Operating model"],
            ["D/02 Customer concentration","Grow · Revenue diversification"],
            ["D/03 Capital & runway",      "Capital · Round preparation"],
            ["D/04 Technology",            "Technology · Infrastructure audit"],
            ["D/05 Compliance",            "Counsel · Regulatory mapping"],
            ["D/06 IP & legal",            "Counsel · Structure review"],
            ["D/07 AI maturity",           "Technology · AI programme"],
            ["D/08 Supply chain",          "Commerce · Operational review"],
            ["D/09 Market & competitive",  "Wedge · Moat strategy"],
            ["D/10 Talent & culture",      "Build · Operating model"],
            ["D/11 Financial controls",    "Capital · Governance"],
            ["D/12 ESG",                   "ESG · Readiness programme"],
          ].map(([domain, routing]) => (
            <div key={domain} className="bg-bg px-4 py-5">
              <span className="t-label text-accent block mb-2">{domain}</span>
              <span className="font-mono text-[11px] tracking-[0.04em] text-ink-2">{routing}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TWELVE DOMAINS TABLE ──────────────────────────────────── */}
      <section className="py-[10vh]">
        <div style={{ marginLeft: "var(--col-3)", marginRight: "var(--margin)" }}>
          <SectionHead title="The twelve domains" counter="Continuous scoring" />
        </div>
        <div style={{ marginLeft: "var(--col-3)", marginRight: "var(--margin)" }} className="overflow-x-auto">
          <table
            className="border-collapse font-mono w-full"
            style={{ minWidth: 480, tableLayout: "fixed" }}
            aria-label="Twelve risk domains"
          >
            <thead>
              <tr>
                {[["8%","Ref."],["26%","Domain"],["66%","Surfaces"]].map(([w,h])=>(
                  <th key={h} className="t-label text-ink-3 text-left pb-[18px] pr-6 border-b border-hairline" style={{width:w}}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {riskDomains.map((d) => (
                <tr key={d.key} className="border-b border-hairline last:border-0">
                  <td className="text-[13px] text-ink-3 py-[22px] pr-6">{d.ref}</td>
                  <td className="text-[13px] text-ink   py-[22px] pr-6">{d.name}</td>
                  <td className="font-serif text-[14px] leading-[1.55] text-ink-2 py-[22px] hidden sm:table-cell">{d.surfaces}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── PRACTICE NOTES ────────────────────────────────────────── */}
      <section className="zone-pad border-t border-hairline">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] gap-x-[clamp(48px,8vw,120px)] gap-y-10 items-start">
          <div>
            <SectionHead title="Practice notes" />
            <div className="t-lead text-ink max-w-prose">
              <p className="mb-[1.55em]">
                The calibration. Weights across the twelve domains are calibrated
                quarterly against the institution\u2019s active mandate register.
                Customer concentration has steadily increased over the past four
                quarters; Capital & runway has held its weight throughout. The
                calibration record is restricted to clients and capital partners.
              </p>
              <p className="mb-[1.55em]">
                On combinations. The instrument\u2019s most operationally useful outputs
                are domain combinations — pairs and triples that, scored together,
                surface a different conversation. Capital & runway scored with Customer
                concentration produces a different engagement than either domain alone.
              </p>
              <p>
                On stage sensitivity. Domain weights adjust for company stage. A
                pre-revenue company should carry high Key person and Capital scores —
                that is not an indictment; it is the operational reality of being early.
                The instrument benchmarks against peers at the same stage.
              </p>
            </div>
          </div>
          <aside className="self-start">
            <div className="flex flex-col gap-10 pt-6 border-t border-hairline-2">
              {[
                "High exposures account for roughly seventy per cent of institutional attention.",
                "The top three risks are almost always more consequential than the next seven combined.",
                "A domain score is not a probability of failure. It is an estimate of which exposure will determine the year.",
              ].map((fragment, i) => (
                <p key={i} className="t-fragment text-ink-strong">{fragment}</p>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* ─── INTERACTIVE DIAGNOSTIC ────────────────────────────────── */}
      <RiskEngineForm />

      <EngagementBlock />
    </>
  );
}
