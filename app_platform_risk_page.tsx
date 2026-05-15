// app/platform/risk/page.tsx — ADD ImageSlot import and the two image bands
// Add this import at the top of the existing file:
//   import { ImageSlot } from '@/components/imagery/ImageSlot';
//
// Then wrap the PageHero with the image-first layout shown below.
// The rest of the file stays identical.

import type { Metadata } from "next";
import { PageHero }         from "@/components/primitives/PageHero";
import { SectionHead }      from "@/components/primitives/SectionHead";
import { MetadataBlock }    from "@/components/primitives/MetadataBlock";
import { EngagementBlock }  from "@/components/primitives/EngagementBlock";
import { ImageSlot }        from "@/components/imagery/ImageSlot";
// keep all your existing imports below this line...

export const metadata: Metadata = {
  title: "The Risk Engine",
  description: "A continuous scoring instrument across twelve operational domains.",
};

export default function RiskPage() {
  return (
    <>
      {/* ── HERO IMAGE — visible immediately, no scrolling required ── */}
      <ImageSlot context="risk_hero" aspect="21/8" priority />

      <PageHero
        index="DIV/004 · Solutions · Risk"
        title="The Risk Engine"
        subtitle="A continuous scoring instrument across twelve operational domains. Identifies, ranks, and tracks the exposures most likely to disrupt a company before they do."
        refPrefix="VLT · DIV/004"
        variant="division"
      />

      {/* ── All your existing page content follows unchanged ── */}
      {/* (assessment philosophy, methodology steps, intake form, etc.) */}

      {/* Secondary imagery band — add wherever feels natural in your page */}
      <div className="px-[var(--margin)] py-[4vh]">
        <ImageSlot context="risk_operations" aspect="32/9" />
      </div>

      {/* ... rest of existing page content ... */}

      <EngagementBlock />
    </>
  );
}
