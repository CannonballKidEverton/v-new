import PageHero from '@/components/hero/PageHero';
import EngagementBlock from '@/components/zones/EngagementBlock';

export default function TomSpeechleyPage() {
  return (
    <main className="min-h-screen bg-[#0A0908] text-[#F2EEE6]">
      <PageHero
        eyebrow="Partner · COO"
        title="Tom Speechley"
        subtitle="From founding to exit. Structures, capital, transactions."
      />

      <section className="relative w-full border-t border-[#1C1A16] py-24 sm:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 sm:px-10 lg:grid-cols-12 lg:gap-20 lg:px-16">
          <div className="lg:col-span-8">
            <p className="font-[Inter_Tight] text-[clamp(1.4rem,2.2vw,2rem)] font-semibold leading-[1.2] tracking-[-0.01em]">
              Three decades operating across company building, law, private equity,
              and corporate finance.
            </p>

            <div className="mt-10 space-y-6">
              <p
                className="font-[Source_Serif_4] text-[1.05rem] leading-[1.7] text-[#C8C0AC]"
                style={{ textAlign: 'justify' }}
              >
                Experience includes founding to exit of startups, raising funds at
                all stages of a company life cycle across equity, debt, and hybrid
                instruments, advising major institutions, managing private equity
                and venture funds, and acting on acquisitions, mergers, and sales.
                Recent mandates include technology deployment into professional
                services sectors.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6 border-l border-[#1C1A16] pl-6">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#7A7060]">
                  Role
                </div>
                <div className="mt-1 font-[Inter_Tight] text-[0.95rem] text-[#F2EEE6]">
                  Partner, Chief Operating Officer
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#7A7060]">
                  Lead partner
                </div>
                <div className="mt-1 font-[Inter_Tight] text-[0.95rem] text-[#F2EEE6]">
                  Capital · Counsel
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#7A7060]">
                  Geographies
                </div>
                <div className="mt-1 font-[Inter_Tight] text-[0.95rem] text-[#F2EEE6]">
                  UK · UAE · KSA · US
                </div>
              </div>
              <div className="pt-2">
                <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#7A7060]">
                  VLT · 2026 · 05 · K5KYR · ISSUED 15.05.2026 · 20:21 GMT
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <EngagementBlock />
    </main>
  );
}
