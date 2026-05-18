'use client';

/**
 * ThesisZone
 * The thesis section: founders' manifesto, track-record statement, AI position.
 * Body paragraphs are justified per editorial direction.
 */
export default function ThesisZone() {
  return (
    <section className="relative w-full bg-[#0A0908] py-28 text-[#F2EEE6] sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="mb-16 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#7A7060]">
          <span className="h-px w-8 bg-[#3A3428]" />
          <span>Thesis · 001</span>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <h2 className="font-[Inter_Tight] text-[clamp(1.6rem,2.6vw,2.4rem)] font-semibold leading-[1.12] tracking-[-0.015em]">
              The track record is the product. The institution exists to deploy it.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="font-[Source_Serif_4] text-[1.05rem] leading-[1.7] text-[#C8C0AC]" style={{ textAlign: 'justify' }}>
              The founding partners have founded, capitalised, scaled, and exited
              companies across five continents over three decades. We help other
              founders and companies achieve their goals where the project is
              stimulating and the individuals are like-minded. Our passion is the
              motive. The track record is the product. The institution exists to
              deploy it.
            </p>

            <p className="mt-8 font-[Source_Serif_4] text-[1.05rem] leading-[1.7] text-[#C8C0AC]" style={{ textAlign: 'justify' }}>
              AI is the leverage. It does not replace the judgement. It compresses
              the time, expands the surface, and lets the operators achieve. Our
              partners receive the leverage with our experience, under one mandate,
              one counterparty, one signature.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-[#1C1A16] pt-8 font-mono text-[10px] uppercase tracking-[0.22em] text-[#7A7060] sm:grid-cols-4">
              <div>
                <div className="text-[#C8C0AC]">Decades</div>
                <div className="mt-1">of experience</div>
              </div>
              <div>
                <div className="text-[#C8C0AC]">Thousands</div>
                <div className="mt-1">of mandates</div>
              </div>
              <div>
                <div className="text-[#C8C0AC]">Five</div>
                <div className="mt-1">continents</div>
              </div>
              <div>
                <div className="text-[#C8C0AC]">One</div>
                <div className="mt-1">signature</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
