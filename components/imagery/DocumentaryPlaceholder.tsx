'use client';
import React from "react";
import { cn } from "@/lib/utils";

export type PlaceholderVariant =
  | "sphere" | "atrium" | "facade" | "terminal"
  | "aerial" | "datacenter" | "control" | "glass";

/* ─────────────────────────────────────────────────────────────────
   DESIGN PRINCIPLE
   All compositions target 35–60% average luminance so they
   register clearly against the site's #0A0909 background.
   Brightest elements approach 85–95% luminance.
   The Sphere / Apple Park / Bloomberg / Changi direction.
───────────────────────────────────────────────────────────────── */

/* 1. SPHERE ─ LED computational surface, The Sphere Las Vegas
      Dominant warm amber glow on curved LED-dot surface.
      Much brighter than before — the glow now fills the frame. */
function Sphere() {
  return (
    <svg viewBox="0 0 1200 480" preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <radialGradient id="s-sky" cx="50%" cy="60%" r="80%">
          <stop offset="0%"  stopColor="#14101C"/>
          <stop offset="60%" stopColor="#0A0812"/>
          <stop offset="100%" stopColor="#060610"/>
        </radialGradient>
        {/* Sphere body — warm dark surface */}
        <radialGradient id="s-body" cx="50%" cy="108%" r="72%">
          <stop offset="0%"  stopColor="#28200E"/>
          <stop offset="50%" stopColor="#1A140A"/>
          <stop offset="100%" stopColor="#0A0808"/>
        </radialGradient>
        {/* LED pixel pattern */}
        <pattern id="s-led" x="0" y="0" width="20" height="17" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="8.5" r="3" fill="#3C2E14" opacity="0.72"/>
        </pattern>
        {/* Primary warm content zone — BRIGHT amber */}
        <radialGradient id="s-warm1" cx="50%" cy="78%" r="52%">
          <stop offset="0%"  stopColor="#D4941C" stopOpacity="0.92"/>
          <stop offset="28%" stopColor="#A87020" stopOpacity="0.72"/>
          <stop offset="60%" stopColor="#6A4414" stopOpacity="0.38"/>
          <stop offset="100%" stopColor="#0A0810" stopOpacity="0"/>
        </radialGradient>
        {/* Secondary warm zone — upper right */}
        <radialGradient id="s-warm2" cx="72%" cy="55%" r="30%">
          <stop offset="0%"  stopColor="#E8A824" stopOpacity="0.55"/>
          <stop offset="100%" stopColor="#0A0810" stopOpacity="0"/>
        </radialGradient>
        {/* Cool blue accent */}
        <radialGradient id="s-cool" cx="28%" cy="52%" r="25%">
          <stop offset="0%"  stopColor="#3860D4" stopOpacity="0.55"/>
          <stop offset="100%" stopColor="#060610" stopOpacity="0"/>
        </radialGradient>
        {/* Atmospheric rim — warm glow where sphere meets sky */}
        <radialGradient id="s-rim" cx="50%" cy="86%" r="56%">
          <stop offset="45%" stopColor="#0A0808" stopOpacity="0"/>
          <stop offset="70%" stopColor="#8A6020" stopOpacity="0.60"/>
          <stop offset="82%" stopColor="#C08828" stopOpacity="0.45"/>
          <stop offset="100%" stopColor="#0A0808" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="s-vig" cx="50%" cy="50%" r="70%">
          <stop offset="20%" stopColor="#0A0810" stopOpacity="0"/>
          <stop offset="88%" stopColor="#06060E" stopOpacity="0.62"/>
        </radialGradient>
        <clipPath id="s-clip">
          <ellipse cx="600" cy="740" rx="690" ry="690"/>
        </clipPath>
      </defs>
      <rect width="1200" height="480" fill="url(#s-sky)"/>
      <ellipse cx="600" cy="740" rx="690" ry="690" fill="url(#s-body)"/>
      <rect width="1200" height="480" fill="url(#s-led)" clipPath="url(#s-clip)" opacity="0.9"/>
      <rect width="1200" height="480" fill="url(#s-warm1)"/>
      <rect width="1200" height="480" fill="url(#s-warm2)"/>
      <rect width="1200" height="480" fill="url(#s-cool)"/>
      <rect width="1200" height="480" fill="url(#s-rim)"/>
      <rect width="1200" height="480" fill="url(#s-vig)"/>
    </svg>
  );
}

/* 2. ATRIUM ─ Glass-steel interior, Apple Park / Bloomberg scale.
      BRIGHT: diffuse daylight floods from above.
      Structural grid converges on a luminous skylight centre. */
function Atrium() {
  const VP = { x: 600, y: 52 };
  return (
    <svg viewBox="0 0 1200 480" preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <radialGradient id="a-sky" cx="50%" cy="28%" r="62%">
          <stop offset="0%"  stopColor="#F0ECE4"/>
          <stop offset="32%" stopColor="#D8D4CC"/>
          <stop offset="68%" stopColor="#A8A49E"/>
          <stop offset="100%" stopColor="#484440"/>
        </radialGradient>
        <radialGradient id="a-vig" cx="50%" cy="30%" r="75%">
          <stop offset="25%" stopColor="#28241E" stopOpacity="0"/>
          <stop offset="80%" stopColor="#1C1814" stopOpacity="0.65"/>
          <stop offset="100%" stopColor="#0C0A08" stopOpacity="0.90"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="480" fill="url(#a-sky)"/>
      {/* Side columns */}
      <rect x="0"    y="0" width="36"  height="480" fill="#1C1A16" opacity="0.92"/>
      <rect x="1164" y="0" width="36"  height="480" fill="#1C1A16" opacity="0.92"/>
      <rect x="34"   y="0" width="10"  height="480" fill="#282420" opacity="0.58"/>
      <rect x="1156" y="0" width="10"  height="480" fill="#282420" opacity="0.58"/>
      {/* Horizontal structural members */}
      {[52,118,184,246,304,358,408,452].map((y,i) => (
        <line key={y} x1="36" y1={y} x2="1164" y2={y}
          stroke="#181410" strokeWidth={3.0-i*0.28} opacity={0.82-i*0.07}/>
      ))}
      {/* Diagonal members converging to vanishing point */}
      {[0,145,290,440,760,910,1060,1200].map((x,i) => (
        <line key={i} x1={x} y1={480} x2={VP.x} y2={VP.y}
          stroke="#181410"
          strokeWidth={i===0||i===7 ? 2.4 : i===1||i===6 ? 1.8 : 1.2}
          opacity={i===0||i===7 ? 0.78 : i===1||i===6 ? 0.62 : 0.48}/>
      ))}
      {/* Glass panel tone */}
      <rect x="36" y="0" width="1128" height="480" fill="#D8D4C8" opacity="0.10"/>
      <rect width="1200" height="480" fill="url(#a-vig)"/>
    </svg>
  );
}

/* 3. FACADE ─ Parametric surface. Dubai Museum of the Future / Zaha.
      Warm ivory stone, raking light, mathematical panel grid.
      High-key: the surface fills with light. */
function Facade() {
  return (
    <svg viewBox="0 0 1200 480" preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="f-base" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%"  stopColor="#E8E0D0"/>
          <stop offset="38%" stopColor="#D0C8B8"/>
          <stop offset="72%" stopColor="#ACA498"/>
          <stop offset="100%" stopColor="#6C6460"/>
        </linearGradient>
        <pattern id="f-panel" x="0" y="0" width="72" height="60"
          patternUnits="userSpaceOnUse" patternTransform="skewY(-4)">
          <rect x="0" y="0" width="72" height="60" fill="none" stroke="#7A7268" strokeWidth="0.9" opacity="0.38"/>
          <rect x="1.5" y="1.5" width="68" height="56" fill="#DCD4C2" opacity="0.30"/>
          {/* Left/top shadow edges */}
          <rect x="0"  y="0" width="5"  height="60" fill="#484038" opacity="0.25"/>
          <rect x="0"  y="0" width="72" height="5"  fill="#484038" opacity="0.18"/>
          {/* Right/bottom highlight */}
          <rect x="67" y="0" width="5"  height="60" fill="#F8F0E4" opacity="0.22"/>
          <rect x="0" y="55" width="72" height="5"  fill="#F8F0E4" opacity="0.15"/>
        </pattern>
        {/* Strong raking light from upper-left */}
        <linearGradient id="f-light" x1="0" y1="0" x2="1" y2="0.7">
          <stop offset="0%"  stopColor="#FEFAF2" stopOpacity="0.55"/>
          <stop offset="28%" stopColor="#F4EEE4" stopOpacity="0.35"/>
          <stop offset="62%" stopColor="#C8C0B0" stopOpacity="0.08"/>
          <stop offset="100%" stopColor="#383028" stopOpacity="0.28"/>
        </linearGradient>
        <radialGradient id="f-vig" cx="28%" cy="40%" r="70%">
          <stop offset="18%" stopColor="#C0B8A8" stopOpacity="0"/>
          <stop offset="80%" stopColor="#302820" stopOpacity="0.55"/>
          <stop offset="100%" stopColor="#0C0A08" stopOpacity="0.82"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="480" fill="url(#f-base)"/>
      <rect width="1200" height="480" fill="url(#f-panel)"/>
      <rect width="1200" height="480" fill="url(#f-light)"/>
      <rect width="1200" height="480" fill="url(#f-vig)"/>
    </svg>
  );
}

/* 4. TERMINAL ─ Premium transit hub. Changi Jewel / Heathrow T5.
      BRIGHT overhead light, sweeping structural roof, scale. */
function Terminal() {
  return (
    <svg viewBox="0 0 1200 480" preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <radialGradient id="t-sky" cx="50%" cy="18%" r="68%">
          <stop offset="0%"  stopColor="#EEE8E0"/>
          <stop offset="28%" stopColor="#D4D0C8"/>
          <stop offset="62%" stopColor="#9C9890"/>
          <stop offset="100%" stopColor="#3C3830"/>
        </radialGradient>
        <radialGradient id="t-vig" cx="50%" cy="22%" r="72%">
          <stop offset="22%" stopColor="#2A2820" stopOpacity="0"/>
          <stop offset="78%" stopColor="#1E1C18" stopOpacity="0.62"/>
          <stop offset="100%" stopColor="#0C0A08" stopOpacity="0.90"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="480" fill="url(#t-sky)"/>
      {/* Sweeping curved roof ribs */}
      {[-520,-345,-185,-60,0,60,185,345,520].map((off,i) => {
        const cx = 600 + off;
        const isCentre = i === 4;
        return (
          <path key={i}
            d={`M ${cx-620} 480 Q ${cx} -80 ${cx+620} 480`}
            fill="none" stroke="#2C2A22"
            strokeWidth={isCentre ? 3.8 : Math.abs(i-4)<=1 ? 2.6 : 1.8}
            opacity={isCentre ? 0.85 : Math.abs(i-4)<=1 ? 0.68 : 0.44}/>
        );
      })}
      {/* Ring members */}
      {[75,142,205,264,320,372,420,462].map((y,i) => (
        <line key={y} x1="0" y1={y} x2="1200" y2={y}
          stroke="#222018" strokeWidth={2.4-i*0.22} opacity={0.78-i*0.07}/>
      ))}
      {/* Floor */}
      <rect x="0" y="428" width="1200" height="52" fill="#1C1A14" opacity="0.88"/>
      <rect x="0" y="426" width="1200" height="4"  fill="#2A2820" opacity="0.72"/>
      {/* Side walls */}
      <rect x="0"    y="0" width="26"  height="480" fill="#1E1C16" opacity="0.90"/>
      <rect x="1174" y="0" width="26"  height="480" fill="#1E1C16" opacity="0.90"/>
      <rect width="1200" height="480" fill="url(#t-vig)"/>
    </svg>
  );
}

/* 5. AERIAL ─ Smart city from above, premium editorial.
      More Monocle than surveillance. Warm amber city lights. */
function Aerial() {
  return (
    <svg viewBox="0 0 1200 480" preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="ae-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#0C0E1A"/>
          <stop offset="35%" stopColor="#14121C"/>
          <stop offset="70%" stopColor="#1C1810"/>
          <stop offset="100%" stopColor="#241A0E"/>
        </linearGradient>
        <pattern id="ae-city" x="0" y="0" width="88" height="62" patternUnits="userSpaceOnUse">
          <rect width="88" height="62" fill="#0E0C08"/>
          <rect x="2"  y="2"  width="36" height="22" fill="#222014"/>
          <rect x="42" y="2"  width="22" height="22" fill="#201E12"/>
          <rect x="68" y="2"  width="18" height="22" fill="#242014"/>
          <rect x="2"  y="28" width="18" height="30" fill="#201E12"/>
          <rect x="24" y="28" width="42" height="30" fill="#222014"/>
          <rect x="70" y="28" width="16" height="16" fill="#201E12"/>
          <rect x="70" y="48" width="16" height="10" fill="#242014"/>
          {/* Bright amber window lights — significantly brighter */}
          <rect x="7"  y="6"  width="5" height="4" fill="#F0B830" opacity="0.88"/>
          <rect x="16" y="6"  width="5" height="4" fill="#E4A828" opacity="0.78"/>
          <rect x="26" y="6"  width="5" height="4" fill="#EEB030" opacity="0.82"/>
          <rect x="7"  y="14" width="5" height="4" fill="#E8AC2C" opacity="0.85"/>
          <rect x="46" y="5"  width="5" height="4" fill="#F0B830" opacity="0.84"/>
          <rect x="56" y="10" width="5" height="4" fill="#E4A828" opacity="0.72"/>
          <rect x="8"  y="32" width="5" height="4" fill="#F0B830" opacity="0.86"/>
          <rect x="28" y="32" width="5" height="4" fill="#E8AC2C" opacity="0.78"/>
          <rect x="40" y="38" width="5" height="4" fill="#E4A828" opacity="0.74"/>
          <rect x="52" y="44" width="5" height="4" fill="#EEB030" opacity="0.76"/>
          <rect x="74" y="32" width="5" height="4" fill="#E8AC2C" opacity="0.82"/>
          <rect x="16" y="14" width="5" height="4" fill="#F0B830" opacity="0.70"/>
          <rect x="32" y="40" width="5" height="4" fill="#E4A828" opacity="0.72"/>
        </pattern>
        <radialGradient id="ae-glow1" cx="45%" cy="70%" r="50%">
          <stop offset="0%"  stopColor="#B88420" stopOpacity="0.70"/>
          <stop offset="45%" stopColor="#6A4C14" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#0E0C08" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="ae-glow2" cx="72%" cy="58%" r="35%">
          <stop offset="0%"  stopColor="#7A5618" stopOpacity="0.55"/>
          <stop offset="100%" stopColor="#0E0C08" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="ae-haze" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#0C0E1A" stopOpacity="0.90"/>
          <stop offset="100%" stopColor="#0C0E1A" stopOpacity="0"/>
        </linearGradient>
        <radialGradient id="ae-vig" cx="50%" cy="50%" r="68%">
          <stop offset="20%" stopColor="#0C0E1A" stopOpacity="0"/>
          <stop offset="82%" stopColor="#080A12" stopOpacity="0.58"/>
          <stop offset="100%" stopColor="#04060C" stopOpacity="0.85"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="480" fill="url(#ae-bg)"/>
      <rect y="168" width="1200" height="312" fill="url(#ae-city)" opacity="0.98"/>
      <rect width="1200" height="480" fill="url(#ae-glow1)"/>
      <rect width="1200" height="480" fill="url(#ae-glow2)"/>
      <rect y="135" width="1200" height="72" fill="url(#ae-haze)"/>
      <rect width="1200" height="480" fill="url(#ae-vig)"/>
    </svg>
  );
}

/* 6. DATACENTER ─ Beautiful data infrastructure.
      BRIGHT blue-white ambient, clean geometric rows.
      Aisle lighting makes cabinets visible from distance. */
function Datacenter() {
  return (
    <svg viewBox="0 0 1200 480" preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="dc-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#0E1220"/>
          <stop offset="50%" stopColor="#121628"/>
          <stop offset="100%" stopColor="#0C1018"/>
        </linearGradient>
        <pattern id="dc-cab" x="0" y="0" width="68" height="90" patternUnits="userSpaceOnUse">
          <rect x="2"  y="2"  width="64" height="84" fill="#161C2C" stroke="#222A3C" strokeWidth="0.9"/>
          <rect x="2"  y="2"  width="64" height="7"  fill="#1C2234"/>
          {/* Blue LED status strips — BRIGHT */}
          <rect x="7"  y="14" width="22" height="3"  fill="#58A8F8" opacity="0.92"/>
          <rect x="7"  y="20" width="30" height="3"  fill="#3A90E8" opacity="0.84"/>
          <rect x="7"  y="26" width="18" height="3"  fill="#60ACFC" opacity="0.90"/>
          <rect x="7"  y="32" width="26" height="3"  fill="#4498F0" opacity="0.86"/>
          <rect x="7"  y="38" width="20" height="3"  fill="#58A8F8" opacity="0.88"/>
          <rect x="7"  y="44" width="28" height="3"  fill="#3A90E8" opacity="0.82"/>
          {/* Drive bays */}
          {[52,58,64,70,76].map((y) => (
            <React.Fragment key={y}>
              <rect x="6"  y={y} width="56" height="5" fill="#1A2030" stroke="#222A3C" strokeWidth="0.4"/>
              <rect x="8"  y={y+1} width="8" height="3" fill="#2A4878" opacity="0.70"/>
            </React.Fragment>
          ))}
          {/* Active LED — BRIGHT cyan */}
          <circle cx="58" cy="8" r="2.5" fill="#56E0FF" opacity="0.95"/>
        </pattern>
        {/* Aisle overhead light — cool white, very bright */}
        <linearGradient id="dc-aisle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#4870B8" stopOpacity="0.55"/>
          <stop offset="60%" stopColor="#3060A8" stopOpacity="0.20"/>
          <stop offset="100%" stopColor="#3060A8" stopOpacity="0"/>
        </linearGradient>
        <radialGradient id="dc-glow" cx="50%" cy="0%" r="85%">
          <stop offset="0%"  stopColor="#2858A8" stopOpacity="0.38"/>
          <stop offset="100%" stopColor="#0C1018" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="dc-vig" cx="50%" cy="50%" r="68%">
          <stop offset="18%" stopColor="#0C1018" stopOpacity="0"/>
          <stop offset="80%" stopColor="#080C14" stopOpacity="0.65"/>
          <stop offset="100%" stopColor="#040810" stopOpacity="0.90"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="480" fill="url(#dc-bg)"/>
      <rect width="1200" height="480" fill="url(#dc-cab)" opacity="0.96"/>
      {[85,255,425,595,765,935,1105].map(x => (
        <rect key={x} x={x-30} y="0" width="60" height="220" fill="url(#dc-aisle)"/>
      ))}
      <rect width="1200" height="480" fill="url(#dc-glow)"/>
      <rect width="1200" height="480" fill="url(#dc-vig)"/>
    </svg>
  );
}

/* 7. CONTROL ─ Premium operations centre. Bloomberg / CERN.
      KEY CHANGE: screens are now BRIGHT (near-white) with
      dark content — like real monitors. Strong ambient glow. */
function Control() {
  const rows = 3, cols = 6;
  const mw = 152, mh = 94, gx = 20, gy = 26;
  const ox = (1200 - (cols * mw + (cols-1) * gx)) / 2;
  const oy = (480  - (rows * mh + (rows-1) * gy)) / 2;

  /* Screen types — each is bright with distinct content character */
  const SCREENS = [
    { bg: "#D8E8F8", lineCol: "#1840A0", lineOpac: 0.65 }, // bright blue-white
    { bg: "#F0E8D4", lineCol: "#704010", lineOpac: 0.60 }, // bright warm amber
    { bg: "#D4ECE8", lineCol: "#0A5040", lineOpac: 0.62 }, // bright teal-green
    { bg: "#E8E0F0", lineCol: "#380868", lineOpac: 0.58 }, // bright cool lavender
    { bg: "#F0EBD8", lineCol: "#603808", lineOpac: 0.62 }, // warm cream
    { bg: "#D8E4F4", lineCol: "#103878", lineOpac: 0.65 }, // cool blue
  ];

  const screenElements = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = ox + c * (mw + gx);
      const y = oy + r * (mh + gy);
      const s = SCREENS[(r * cols + c) % SCREENS.length];

      screenElements.push(
        <g key={`${r}-${c}`}>
          {/* Bezel */}
          <rect x={x-4} y={y-4} width={mw+8} height={mh+8} fill="#1A1E28" rx="2"/>
          {/* Screen — BRIGHT face */}
          <rect x={x} y={y} width={mw} height={mh} fill={s.bg} rx="1"/>
          {/* Data content lines on bright screen */}
          {[0.15,0.26,0.37,0.48,0.59,0.70,0.81].map((t, i) => (
            <rect key={i}
              x={x + 10}
              y={y + mh * t}
              width={mw * (0.35 + (i % 3) * 0.18)}
              height={3}
              fill={s.lineCol}
              opacity={s.lineOpac - i * 0.03}/>
          ))}
          {/* Header bar on screen */}
          <rect x={x} y={y} width={mw} height={12} fill={s.lineCol} opacity={0.15}/>
          {/* Active status LED */}
          <circle cx={x + mw - 10} cy={y + mh - 10} r={3}
            fill="#40F870" opacity={0.92}/>
        </g>
      );
    }
  }

  return (
    <svg viewBox="0 0 1200 480" preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="ct-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#0A0C12"/>
          <stop offset="100%" stopColor="#0E1018"/>
        </linearGradient>
        {/* Screen ambient glow — fills room */}
        <radialGradient id="ct-glow" cx="50%" cy="50%" r="68%">
          <stop offset="0%"  stopColor="#3060A8" stopOpacity="0.22"/>
          <stop offset="60%" stopColor="#1A3870" stopOpacity="0.10"/>
          <stop offset="100%" stopColor="#0A0C12" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="ct-vig" cx="50%" cy="50%" r="65%">
          <stop offset="20%" stopColor="#0A0C12" stopOpacity="0"/>
          <stop offset="82%" stopColor="#060810" stopOpacity="0.68"/>
          <stop offset="100%" stopColor="#040608" stopOpacity="0.92"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="480" fill="url(#ct-bg)"/>
      <rect width="1200" height="480" fill="url(#ct-glow)"/>
      {screenElements}
      <rect width="1200" height="480" fill="url(#ct-vig)"/>
    </svg>
  );
}

/* 8. GLASS ─ Exterior glass curtain wall. Foster+Partners / BIG / Renzo.
      BRIGHT sky-blue reflection across panel grid.
      Lighter, airier than before. */
function Glass() {
  return (
    <svg viewBox="0 0 1200 480" preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="gl-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#9CC0D4"/>
          <stop offset="32%" stopColor="#B4D0E0"/>
          <stop offset="65%" stopColor="#CCDEEA"/>
          <stop offset="100%" stopColor="#DFE8F0"/>
        </linearGradient>
        <pattern id="gl-panel" x="0" y="0" width="65" height="55" patternUnits="userSpaceOnUse">
          <rect x="0"  y="0" width="65" height="55" fill="#A8C4D4" opacity="0.38"/>
          {/* Mullion */}
          <rect x="0"  y="0" width="3.5" height="55" fill="#364855" opacity="0.40"/>
          <rect x="0"  y="0" width="65" height="3.5" fill="#364855" opacity="0.30"/>
          {/* Glass face — bright sky reflection */}
          <rect x="4"  y="4" width="60" height="50" fill="#C4D8E8" opacity="0.22"/>
        </pattern>
        <linearGradient id="gl-light" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#E4EEF6" stopOpacity="0.35"/>
          <stop offset="40%" stopColor="#CCE0EC" stopOpacity="0.18"/>
          <stop offset="70%" stopColor="#88AAC0" stopOpacity="0.06"/>
          <stop offset="100%" stopColor="#1A2A36" stopOpacity="0.25"/>
        </linearGradient>
        <radialGradient id="gl-vig" cx="50%" cy="38%" r="72%">
          <stop offset="22%" stopColor="#78A0B8" stopOpacity="0"/>
          <stop offset="78%" stopColor="#2A3A48" stopOpacity="0.58"/>
          <stop offset="100%" stopColor="#0C1820" stopOpacity="0.85"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="480" fill="url(#gl-sky)"/>
      <rect width="1200" height="480" fill="url(#gl-panel)"/>
      <rect width="1200" height="480" fill="url(#gl-light)"/>
      {/* Vertical structural mullions */}
      {[0,130,260,390,520,650,780,910,1040,1170].map(x => (
        <rect key={x} x={x} y="0" width="3.5" height="480" fill="#2C3E4C" opacity="0.52"/>
      ))}
      {/* Horizontal spandrel bands */}
      {[55,110,165,220,275,330,385,440].map(y => (
        <rect key={y} x="0" y={y} width="1200" height="3.5" fill="#2C3E4C" opacity="0.40"/>
      ))}
      <rect width="1200" height="480" fill="url(#gl-vig)"/>
    </svg>
  );
}

/* ── Registry ────────────────────────────────────────────────── */
const VARIANTS: Record<PlaceholderVariant, () => React.ReactElement> = {
  sphere: Sphere, atrium: Atrium, facade: Facade, terminal: Terminal,
  aerial: Aerial, datacenter: Datacenter, control: Control, glass: Glass,
};

/* ── Component ───────────────────────────────────────────────── */
interface Props {
  variant: PlaceholderVariant;
  label?: string;
  caption?: string;
  aspect?: string;
  className?: string;
}

export function DocumentaryPlaceholder({
  variant, label, caption, aspect, className,
}: Props) {
  const SVG = VARIANTS[variant] ?? VARIANTS.facade;
  return (
    <figure className={cn("relative", className)}>
      <div
        className="relative w-full overflow-hidden"
        style={aspect ? { aspectRatio: aspect } : { height: "100%" }}
      >
        <div className="absolute inset-0"><SVG /></div>
        {label && (
          <div
            className="absolute bottom-0 left-0 right-0 px-5 py-3.5"
            style={{ background: "linear-gradient(to top, rgba(4,4,8,0.60) 0%, transparent 100%)" }}
          >
            <span style={{
              fontFamily: "monospace", fontSize: "9px", fontWeight: 500,
              letterSpacing: "0.24em", textTransform: "uppercase",
              color: "rgba(160,148,128,0.78)",
            }}>
              {label}
            </span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption style={{
          marginTop: "10px", fontFamily: "monospace", fontSize: "10px",
          fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase",
          color: "rgba(60,56,50,0.75)",
        }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
