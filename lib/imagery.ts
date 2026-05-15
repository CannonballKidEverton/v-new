/**
 * Valantai imagery registry — The Sphere / future architecture direction.
 *
 * Visual territory: Sphere Las Vegas · Apple Park · Bloomberg HQ ·
 * Dubai Museum of the Future · Changi · Foster+Partners · BIG
 *
 * REVIEW BUILD: DocumentaryPlaceholder SVGs render (no photoUrl set).
 * PRODUCTION: Run `bash download-photos.sh` then un-comment photoUrl lines.
 *
 * See PHOTO_SOURCES.md for exact Unsplash IDs and search terms.
 */

export type ImageContext =
  | "homepage_band" | "homepage_engage"
  | "build" | "capital" | "technology" | "risk" | "commerce" | "counsel"
  | "grow" | "brand" | "gtm" | "esg" | "educate" | "wedge" | "angels"
  | "risk_hero" | "risk_operations" | "intelligence_band" | "operators_band";

export type PlaceholderVariant =
  | "sphere"       // LED computational surface — The Sphere Las Vegas
  | "atrium"       // Glass-steel interior — Apple Park / Bloomberg
  | "facade"       // Parametric surface — Museum of the Future / Zaha
  | "terminal"     // Premium transit hub — Changi / Heathrow T5
  | "aerial"       // Smart city aerial — editorial, warm, ordered
  | "datacenter"   // Beautiful data infrastructure — blue-white ambient
  | "control"      // Premium operations — Bloomberg / CERN aesthetic
  | "glass";       // Exterior glass curtain wall — Foster+Partners / BIG

export interface ImageEntry {
  variant: PlaceholderVariant;
  label: string;
  photoUrl?: string;
  /** object-position for real photos (default: "center center") */
  position?: string;
}

export const IMAGE_REGISTRY: Record<ImageContext, ImageEntry> = {
  // ─── HOMEPAGE ──────────────────────────────────────────────────────
  homepage_band: {
    variant: "sphere",
    label: "Computational architecture · Future operating institution",
    // photoUrl: "https://images.unsplash.com/photo-1680458842571-d8c66f4f5a66?w=2400&q=85&fit=crop",
    // Alt: search "sphere las vegas led architecture" or "large led building night"
  },
  homepage_engage: {
    variant: "atrium",
    label: "Institutional · Operations · Premium environment",
    // photoUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=85&fit=crop",
    // Alt: search "glass atrium architecture interior corporate"
  },

  // ─── BUILD — structural infrastructure ─────────────────────────────
  build: {
    variant: "atrium",
    label: "Construction · Structural foundations",
    // photoUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85&fit=crop",
    // Alt: "modern architecture glass steel structure"
  },

  // ─── CAPITAL — cross-border, institutional scale ────────────────────
  capital: {
    variant: "glass",
    label: "Finance district · Institutional · Cross-border",
    // photoUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=85&fit=crop",
    // Alt: "glass office tower financial district curtain wall"
  },

  // ─── TECHNOLOGY — enterprise infrastructure ─────────────────────────
  technology: {
    variant: "facade",
    label: "Enterprise infrastructure · Computational systems",
    // photoUrl: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1600&q=85&fit=crop",
    // Alt: "parametric architecture facade computational building"
  },

  // ─── RISK — operational, systematic, institutional ──────────────────
  risk: {
    variant: "control",
    label: "Operational systems · Risk intelligence",
    // photoUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=85&fit=crop",
    // Alt: "modern control room operations center large screens"
  },

  // ─── COMMERCE — logistics, operational scale ────────────────────────
  commerce: {
    variant: "terminal",
    label: "Logistics hub · Fulfilment · Operational scale",
    // photoUrl: "https://images.unsplash.com/photo-1586528116493-a029325540fa?w=1600&q=85&fit=crop",
    // Alt: "amazon fulfillment center logistics premium warehouse"
  },

  // ─── COUNSEL — institutional, governance ───────────────────────────
  counsel: {
    variant: "glass",
    label: "Institutional · Governance · Architecture",
    // photoUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85&fit=crop",
  },

  // ─── GROW — scale, infrastructure, networks ─────────────────────────
  grow: {
    variant: "aerial",
    label: "Urban systems · Infrastructure · Scale",
    // photoUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=85&fit=crop",
    // Alt: "smart city aerial modern urban infrastructure"
  },

  // ─── BRAND — premium built environment ─────────────────────────────
  brand: {
    variant: "facade",
    label: "Precision · Material quality · Premium built environment",
    // photoUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=85&fit=crop",
  },

  // ─── GTM — transport, movement, networks ────────────────────────────
  gtm: {
    variant: "terminal",
    label: "Airport terminal · Transport network · Routes",
    // photoUrl: "https://images.unsplash.com/photo-1530521954074-e64e4dbc6282?w=1600&q=85&fit=crop",
    // Alt: "changi airport interior modern terminal architecture"
  },

  // ─── ESG — systems, environment, scale ─────────────────────────────
  esg: {
    variant: "aerial",
    label: "Urban density · Environmental systems · Governance",
    // photoUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1600&q=85&fit=crop",
  },

  // ─── EDUCATE — institutional ────────────────────────────────────────
  educate: {
    variant: "atrium",
    label: "Institutional space · Learning · Architecture",
    // photoUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=85&fit=crop",
  },

  // ─── WEDGE — precision, systems ────────────────────────────────────
  wedge: {
    variant: "control",
    label: "Precision · Competitive intelligence · Systems",
    // photoUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=85&fit=crop",
  },

  // ─── ANGELS — networks, capital, city ──────────────────────────────
  angels: {
    variant: "sphere",
    label: "Networks · Capital · Future infrastructure",
    // photoUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=85&fit=crop",
  },

  // ─── RISK HERO — flagship operational image ──────────────────────
  risk_hero: {
    variant: "facade",
    label: "Operational infrastructure · Future institution",
    // photoUrl: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=2400&q=85&fit=crop",
    // Alt: "futuristic architecture computational facade night"
  },

  // ─── RISK OPERATIONS DETAIL ─────────────────────────────────────
  risk_operations: {
    variant: "datacenter",
    label: "Data infrastructure · Systems · Operational precision",
    // photoUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=85&fit=crop",
    // Alt: "data center corridor beautiful blue light"
  },

  // ─── INTELLIGENCE BAND ──────────────────────────────────────────
  intelligence_band: {
    variant: "datacenter",
    label: "Intelligence systems · Data architecture",
    // photoUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=85&fit=crop",
  },

  // ─── OPERATORS BAND ─────────────────────────────────────────────
  operators_band: {
    variant: "atrium",
    label: "Institutional · Premium environment · Operations",
    // photoUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=85&fit=crop",
  },
};

export function getImageEntry(context: ImageContext): ImageEntry {
  return IMAGE_REGISTRY[context];
}
