import type { Metadata } from "next";
import { PageHero } from "@/components/primitives/PageHero";
import { SectionHead } from "@/components/primitives/SectionHead";
import { MetadataBlock } from "@/components/primitives/MetadataBlock";
import { EngagementBlock } from "@/components/primitives/EngagementBlock";
import { RiskEngineForm } from "@/components/risk/RiskEngineForm";
import { RiskMatrix } from "@/components/graphics/RiskMatrix";
import { riskDomains } from "@/content/riskDomains";

export const metadata: Metadata = {
  title: "The Risk Engine",
  description:
    "A continuous scoring instrument across twelve operational domains. Identifies, ranks, and tracks the exposures most likely to disrupt a company before they do.",
};

export default function RiskPage() {
  return (
    <>
      <PageHero
        index="DIV/004 \u00b7 Solutions \u00b7 Risk"
        title="The Risk Engine"
        subtitle="A continuous scoring instrument across twelve operational domains. Identifies, ranks, and tracks the exposures most likely to disrupt a company before they do."
        refPrefix="VLT \u00b7 DIV/004"
        variant="division"
      />

      {/* ─── ASSESSMENT PHILOSOPHY ─────────────────────────────────────── */}
      <section
        className="zone-pad grid grid-cols-1 md:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] gap-x-[clamp(48px,8vw,120px)] gap-y-12 items-start"
      >
        <article className="t-lead text-ink max-w-prose">
          <p className="font-sans font-medium text-[clamp(1.4rem,2vw,1.9rem)] tracking-[-0.018em] leading-snug mb-6">
            Most companies discover their operational risks at the point those
            risks become consequences. By then the cost is rarely the risk
            itself \u2014 it is the absence of warning.
          </p>
          <p className="mb-[1.55em]">
            The Risk Engine exists to close that gap. It is an operating
            instrument \u2014 not a software product, not a dashboard, not a
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
          <MetadataBlock
            items={[
              { label: "Practice",           value: "Risk \u00b7 DIV/004" },
              { label: "Domains",            value: "Twelve, weighted" },
              { label: "Domain calibration", value: "Reviewed quarterly" },
              { label: "Access",             value: "Clients and capital partners" },
              { label: "Status",             value: "In development" },
            ]}
          />
        </aside>
      </section>

      {/* ─── INTAKE METHODOLOGY ────────────────────────────────────────── */}
      <section className="zone-pad border-t border-hairline">
        <SectionHead title="Intake methodology" counter="Three stages" />
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-hairline">
          {[
            {
              stage: "Stage I",
              title: "Intake",
              body: "A structured thirteen-question diagnostic captures the company\u2019s position across four operating axes: position, capital, customer, and governance. Each answer carries weighted exposure scores across the twelve domains. The intake takes twelve minutes. No company context is required beyond what the thirteen questions ask.",
            },
            {
              stage: "Stage II",
              title: "Scoring",
              body: "Domain scores are computed and ranked. The five exposures most likely to determine the company\u2019s next twelve months are surfaced with severity bands: High, Elevated, Moderate, Low. Scores are calibrated against companies at the same stage, sector, and capital position. The instrument does not predict failure; it surfaces the exposures most likely to determine the year.",
            },
            {
              stage: "Stage III",
              title: "Routing",
              body: "Each surfaced exposure routes directly into the Valantai practice best positioned to address it. Capital exposure routes to the Capital practice. Technology dependency routes to the Technology practice. Legal structure gaps route to Counsel. The instrument is the first conversation, not the last; each exposure maps to an actionable engagement pathway.",
            },
          ].map((step, i) => (
            <div
              key={step.stage}
              className={[
                "py-9 pr-8",
                i < 2 ? "md:border-r border-hairline" : "",
                i > 0 ? "md:pl-8" : "",
              ]
                .filter(Boolean)
                .join(" ")}
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

      {/* ─── OUTPUT STRUCTURE ──────────────────────────────────────────── */}
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
                the Investor Risk Report \u2014 a packaged intelligence document designed
                for due diligence processes \u2014 and the portfolio layer for VC and PE
                firms tracking exposure across a fund.
              </p>
              <p>
                In practice, the top three exposures account for roughly seventy per
                cent of the institutional attention given to a company. The
                instrument surfaces the combinations \u2014 pairs of domains that, scored
                together, indicate a different conversation than either domain alone
                would warrant.
              </p>
            </div>
          </div>
          <aside className="self-start">
            <MetadataBlock
              items={[
                { label: "Free tier",     value: "Top-5 ranking \u00b7 Severity bands \u00b7 Routing" },
                { label: "SMB tier",      value: "\u00a3299/month \u00b7 Dashboard \u00b7 Benchmarking" },
                { label: "Growth tier",   value: "\u00a3999/month \u00b7 Full roadmap \u00b7 Quarterly review" },
                { label: "Enterprise",    value: "\u00a35K\u201325K/month \u00b7 Portfolio \u00b7 Board reporting" },
                { label: "Investor pack", value: "Project fee \u00b7 Due diligence validation" },
              ]}
            />
          </aside>
        </div>
      </section>

      {/* ─── INVESTOR & PORTFOLIO USE ──────────────────────────────────── */}
      <section className="zone-pad border-t border-hairline">
        <SectionHead title="Investor and portfolio use" />
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-hairline">
          {[
            {
              ref: "Pre-investment",
              body: "A structured due diligence input that surfaces exposures the company may not have disclosed or identified. The Risk Engine produces an independent view of operational risk that sits alongside financial and legal diligence. Sector benchmarking positions the company\u2019s exposure relative to its peer set.",
            },
            {
              ref: "Post-investment",
              body: "A standing monitor for the portfolio. Exposure movement is tracked as the company\u2019s profile evolves: new funding, new hires, new markets, new competitive entrants. The instrument updates; the portfolio manager receives a live view of where the risk sits and how it has moved since the last reporting period.",
            },
            {
              ref: "Pre-exit",
              body: "An investor-readiness instrument that packages the risk picture for acquirer diligence. Companies with a standing Risk Engine record can demonstrate operational transparency that compressed-timeline acquirers value. The instrument reduces diligence friction and supports valuation defence.",
            },
          ].map((item, i) => (
            <div
              key={item.ref}
              className={[
                "py-9 pr-8",
                i < 2 ? "md:border-r border-hairline" : "",
                i > 0 ? "md:pl-8" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span className="t-label text-ink-3 block mb-4">{item.ref}</span>
              <p className="font-serif text-[clamp(0.95rem,1.05vw,1.05rem)] leading-relaxed text-ink-2">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── MITIGATION ROUTING ────────────────────────────────────────── */}
      <section className="zone-pad border-t border-hairline">
        <SectionHead title="Mitigation routing" counter="Domain to practice" />
        <div className="t-lead text-ink max-w-prose mb-10">
          <p>
            Each surfaced exposure routes to the Valantai practice with the
            operating depth to address it. The routing is not advisory \u2014 it is a
            warm introduction to a senior practitioner with direct experience of
            the domain in question.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
          {[
            ["D/01 Key person",        "Build \u00b7 Operating model design"],
            ["D/02 Customer concentration", "Grow \u00b7 Revenue diversification"],
            ["D/03 Capital & runway",  "Capital \u00b7 Round preparation"],
            ["D/04 Technology",        "Technology \u00b7 Infrastructure audit"],
            ["D/05 Compliance",        "Counsel \u00b7 Regulatory mapping"],
            ["D/06 IP & legal",        "Counsel \u00b7 Structure review"],
            ["D/07 AI maturity",       "Technology \u00b7 AI programme"],
            ["D/08 Supply chain",      "Commerce \u00b7 Operational review"],
            ["D/09 Market & competitive", "Wedge \u00b7 Moat strategy"],
            ["D/10 Talent & culture",  "Build \u00b7 Operating model"],
            ["D/11 Financial controls","Capital \u00b7 Governance"],
            ["D/12 ESG",               "ESG \u00b7 Readiness programme"],
          ].map(([domain, routing]) => (
            <div key={domain} className="bg-bg px-5 py-5">
              <span className="t-label text-ink-3 block mb-2">{domain}</span>
              <span className="font-mono text-[12px] tracking-[0.04em] text-ink-2">
                {routing}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── THE TWELVE DOMAINS TABLE ──────────────────────────────────── */}
      <section className="py-[10vh]">
        <div style={{ marginLeft: "var(--col-3)", marginRight: "var(--margin)" }}>
          <SectionHead title="The twelve domains" counter="Continuous scoring" />
        </div>
        <table
          className="border-collapse font-mono"
          style={{
            marginLeft: "var(--col-3)",
            marginRight: "var(--margin)",
            width: "calc(100% - var(--col-3) - var(--margin))",
            tableLayout: "fixed",
          }}
          aria-label="Twelve risk domains"
        >
          <thead>
            <tr>
              {[["8%", "Ref."], ["26%", "Domain"], ["66%", "Surfaces"]].map(
                ([w, h]) => (
                  <th
                    key={h}
                    className="t-label text-ink-3 text-left pb-[18px] pr-6 border-b border-hairline"
                    style={{ width: w }}
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {riskDomains.map((d) => (
              <tr key={d.key} className="border-b border-hairline last:border-0">
                <td className="text-[13px] text-ink-3 py-[22px] pr-6">{d.ref}</td>
                <td className="text-[13px] text-ink   py-[22px] pr-6">{d.name}</td>
                <td className="font-serif text-[14px] leading-[1.55] text-ink-2 py-[22px] hidden sm:table-cell">
                  {d.surfaces}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          className="t-label text-ink-4 pt-5 border-t border-hairline flex flex-wrap gap-2.5"
          style={{ marginLeft: "var(--col-3)", marginRight: "var(--margin)" }}
        >
          <span>Twelve of twelve shown</span>
          <span>\u00b7</span>
          <span>Severity scoring continuous</span>
          <span>\u00b7</span>
          <span>Calibration reviewed quarterly</span>
        </div>
      </section>

      {/* ─── PRACTICE NOTES ────────────────────────────────────────────── */}
      <section className="zone-pad border-t border-hairline">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] gap-x-[clamp(48px,8vw,120px)] gap-y-10 items-start">
          <div>
            <SectionHead title="Practice notes" />
            <div className="t-lead text-ink max-w-prose">
              <p className="mb-[1.55em]">
                The calibration. Weights across the twelve domains are calibrated
                quarterly against the institution\u2019s active mandate register.
                Customer concentration has steadily increased over the past four
                quarters as the firm\u2019s commerce engagements grew; Capital & runway
                has held its weight throughout. The calibration record is restricted
                to clients and capital partners.
              </p>
              <p className="mb-[1.55em]">
                On combinations. The instrument\u2019s most operationally useful outputs
                are domain combinations \u2014 pairs and triples that, scored together,
                surface a different conversation. Capital & runway scored with Customer
                concentration produces a different engagement than either domain
                alone: the company may be able to raise, but the raise is compromised
                by the revenue cliff it carries into the data room.
              </p>
              <p>
                On stage sensitivity. Domain weights adjust for company stage. A
                pre-revenue company should carry high Key person and Capital scores \u2014
                that is not an indictment; it is the operational reality of being
                early. The instrument benchmarks against peers at the same stage, not
                against an absolute standard that would declare every early-stage
                company fatally exposed.
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
                <p key={i} className="t-fragment text-ink-strong">
                  {fragment}
                </p>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* ─── RISK MATRIX VISUAL ────────────────────────────────────────── */}
      <section className="zone-pad border-t border-hairline">
        <div className="mb-7">
          <h2 className="t-section text-ink mb-2">Domain matrix</h2>
          <p className="t-label text-ink-3">Four axes · twelve domains</p>
        </div>
        <RiskMatrix />
      </section>

      {/* ─── INTERACTIVE DIAGNOSTIC ────────────────────────────────────── */}
      <RiskEngineForm />

      <EngagementBlock />
    </>
  );
}
