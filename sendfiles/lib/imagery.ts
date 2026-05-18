/**
 * Valantai imagery registry.
 *
 * VISUAL THESIS: FROM STONE TO SIGNAL
 * Three tiers map to the company lifecycle Valantai serves:
 *
 *   FOUNDATION  megalith · stone
 *   Ancient structures, first principles, raw ambition taking form.
 *   Idea → formation → early build.
 *
 *   SCALE       terminal · aerial · datacenter
 *   Cities, logistics, operating infrastructure, capital networks.
 *   Execution → growth → operational scale.
 *
 *   FUTURE      sphere · facade · control
 *   The Sphere Las Vegas, Museum of the Future, computational surfaces.
 *   AI-era enterprise → exit → future market position.
 *
 * Homepage scrolling arc: megalith → aerial → sphere
 * (Foundation opens the page; Future closes it.)
 */

export type ImageContext =
  | "homepage_band" | "homepage_engage"
  | "build" | "capital" | "technology" | "risk" | "commerce" | "counsel"
  | "grow" | "brand" | "gtm" | "esg" | "educate" | "wedge" | "angels"
  | "risk_hero" | "risk_operations" | "intelligence_band" | "operators_band";

// PlaceholderVariant — single source of truth lives in DocumentaryPlaceholder.
import type { PlaceholderVariant } from "@/components/imagery/DocumentaryPlaceholder";
export type { PlaceholderVariant };

export interface ImageEntry {
  variant: PlaceholderVariant;
  label: string;
  photoUrl?: string;
  position?: string;
}

export const IMAGE_REGISTRY: Record<ImageContext, ImageEntry> = {

  // ─── HOMEPAGE — the full arc ──────────────────────────────────────
  // Scrolling the homepage takes you from foundation → scale → future.

  homepage_band: {
    variant: "megalith",
    label: "From first idea · Foundation · The beginning of ambition",
    // Replace with: standing stones / megalith / alignment photography
  },
  homepage_engage: {
    variant: "sphere",
    label: "Future institution · Ambition realised · From idea to exit",
    // Replace with: The Sphere / Museum of the Future / smart infrastructure
  },

  // ─── FOUNDATION tier — idea, formation, early build ──────────────

  build: {
    variant: "megalith",
    label: "Formation · First principles · The company takes shape",
    // Replace with: stone alignment / foundation pour / structural origin
  },
  counsel: {
    variant: "stone",
    label: "Structure · Precision · Legal and governance foundation",
    // Replace with: dressed stone detail / ashlar / institutional masonry
  },
  brand: {
    variant: "stone",
    label: "Origin · Craft · Identity carved from first principles",
    // Replace with: carved stone detail / precision material / craft
  },
  educate: {
    variant: "megalith",
    label: "Knowledge · Foundation · Institutional formation",
    // Replace with: ancient library / stone archive / alignment photography
  },
  wedge: {
    variant: "megalith",
    label: "First principles · Positioning · The competitive moat begins here",
    // Replace with: stone alignment / ancient precision geometry
  },
  angels: {
    variant: "megalith",
    label: "Origin capital · Networks · The first backing of ambition",
    // Replace with: standing stones at dawn / early formation
  },
  operators_band: {
    variant: "stone",
    label: "Institutional · Human · Permanent",
    // Replace with: dressed stone / precision masonry / material quality
  },

  // ─── SCALE tier — execution, growth, operational infrastructure ───

  capital: {
    variant: "aerial",
    label: "Capital at scale · Cross-border · Institutional networks",
    // Replace with: financial district aerial / city from above / network
  },
  commerce: {
    variant: "terminal",
    label: "Logistics hub · Fulfilment at scale · Operational execution",
    // Replace with: Changi / premium logistics / transit at scale
  },
  grow: {
    variant: "aerial",
    label: "Urban systems · Growth infrastructure · Operational scale",
    // Replace with: city growth aerial / infrastructure expansion
  },
  gtm: {
    variant: "terminal",
    label: "Market routes · Transport network · Go-to-market at scale",
    // Replace with: Heathrow T5 / airport concourse / movement at scale
  },
  esg: {
    variant: "aerial",
    label: "Urban density · Environmental systems · Governance from above",
    // Replace with: city systems aerial / ordered infrastructure / scale
  },

  // ─── FUTURE tier — AI-era enterprise, exit, future position ──────

  technology: {
    variant: "facade",
    label: "Enterprise infrastructure · Computational architecture · AI-era systems",
    // Replace with: Museum of the Future / parametric facade / computational building
  },
  risk: {
    variant: "control",
    label: "Operational intelligence · Risk systems · Continuous observation",
    // Replace with: Bloomberg operations / CERN control / premium ops centre
  },
  risk_hero: {
    variant: "facade",
    label: "Future operating institution · Computational infrastructure",
    // Replace with: Museum of the Future Dubai / parametric facade hero
  },
  risk_operations: {
    variant: "datacenter",
    label: "Data infrastructure · Operational precision · Intelligence systems",
    // Replace with: data centre corridor / server infrastructure beauty shot
  },
  intelligence_band: {
    variant: "aerial",
    label: "Operating systems · Intelligence at scale · Capital networks",
    // Replace with: smart city aerial / ordered city systems / scale
  },

};

export function getImageEntry(context: ImageContext): ImageEntry {
  return IMAGE_REGISTRY[context];
}
