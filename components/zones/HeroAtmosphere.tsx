'use client';
import { useEffect, useRef } from 'react';

/**
 * HeroAtmosphere v3 — The Core Intelligence Field
 *
 * Refined production component for the Valantai homepage hero only.
 *
 * Evolution from v2:
 * - 25% slower motion — more confident, more monumental
 * - 12-second breathing period — calmer, more spatial
 * - Alignment axis — a faint meridian through the composition,
 *   evoking both megalithic alignment and orbital navigation
 * - Compass micro-marks on outer arc — institutional precision
 * - Fewer particles (28), larger, more spare — more negative space
 * - 6 nodes instead of 8 — less mechanical, more architectural
 * - 2 signal threads — selective, not decorative
 * - Scale up at widescreen — more monumental on large displays
 *
 * Palette: graphite / warm stone / oxidised gold / architectural blue-grey
 * Performance: ~55 draw calls/frame, Canvas 2D only, no WebGL
 */
export function HeroAtmosphere({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let W = 0, H = 0, cx = 0, cy = 0, raf = 0;

    /* Geometry scales with viewport so the object feels monumental at any size */
    const scale = (base: number) =>
      base * (Math.min(W / 1440, 1.15) * 0.82 + 0.18);

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      W = rect.width; H = rect.height;
      canvas!.width  = W * dpr;
      canvas!.height = H * dpr;
      ctx!.scale(dpr, dpr);
      /* Compositional asymmetry: centre slightly right + above visual midpoint */
      cx = W * 0.62; cy = H * 0.42;
    }

    /* ── Arcs ── */
    const arcs = [
      /* inner — warm ghost ring, creates "source" depth */
      { r0: 62,  a: 0,   s:  0.0038, sw: 240, al: 0.20, w: 0.7,  warm: true  },
      /* primary inner — the dominant foreground ring */
      { r0: 118, a: 1.2, s: -0.0028, sw: 285, al: 0.52, w: 1.20, warm: false },
      /* primary outer — the dominant background ring */
      { r0: 192, a: 2.5, s:  0.0018, sw: 218, al: 0.36, w: 0.90, warm: false },
      /* meridian ring — widest, very faint, architectural */
      { r0: 278, a: 3.9, s: -0.0012, sw: 162, al: 0.16, w: 0.55, warm: true  },
    ];

    /* ── Nodes — 6 only, on arcs 1-3 ── */
    const nodes = [
      { ai: 1, off: 0.0 }, { ai: 1, off: Math.PI },
      { ai: 2, off: 0.7 }, { ai: 2, off: Math.PI + 0.7 },
      { ai: 3, off: 1.4 }, { ai: 3, off: Math.PI + 1.4 },
    ];

    /* ── Particles — 28, sparser, slightly larger ── */
    const pts = Array.from({ length: 28 }, () => ({
      x:  (Math.random() - .5) * 520,
      y:  (Math.random() - .5) * 440,
      r:  0.7 + Math.random() * 1.3,
      al: 0.10 + Math.random() * 0.18,
      vx: (Math.random() - .5) * 0.045,
      vy: (Math.random() - .5) * 0.045,
      warm: Math.random() > .42,
    }));

    /* ── Alignment axis — the "meridian" ── */
    const AXIS_ANGLE = 0.26; /* ~15° — subtle tilt, feels aligned, not mechanical */
    const AXIS_LEN   = 0.68; /* fraction of outer radius */

    let mx = 0, my = 0, tmx = 0, tmy = 0, t = 0;

    function npos(n: typeof nodes[0], pf: number) {
      const arc = arcs[n.ai];
      const ang = arc.a + n.off;
      const f   = pf * (1 + n.ai * 0.65);
      return {
        x: cx + mx * f + Math.cos(ang) * scale(arc.r0),
        y: cy + my * f * 0.7 + Math.sin(ang) * scale(arc.r0),
      };
    }

    function draw() {
      mx += (tmx - mx) * 0.03;
      my += (tmy - my) * 0.03;
      arcs.forEach(a => { a.a += a.s; });
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (Math.abs(p.x) > 270) p.vx *= -1;
        if (Math.abs(p.y) > 230) p.vy *= -1;
      });
      /* 12-second breathing period */
      t += 0.0085;
      const breath = Math.sin(t) * 0.5 + 0.5;

      ctx!.clearRect(0, 0, W, H);

      const ox = cx + mx * 3, oy = cy + my * 2;

      /* ── 1. Core warm glow — monumental, diffuse ── */
      const cg = ctx!.createRadialGradient(ox, oy, 0, ox, oy, scale(255) + breath * 22);
      cg.addColorStop(0,   `rgba(212,138,48,${0.38 + breath * 0.10})`);
      cg.addColorStop(0.22, `rgba(172,104,34,${0.18 + breath * 0.05})`);
      cg.addColorStop(0.52, `rgba(120,70,20,${0.08})`);
      cg.addColorStop(1,   'rgba(0,0,0,0)');
      ctx!.fillStyle = cg; ctx!.fillRect(0, 0, W, H);

      /* ── 2. Cool accent — architectural blue-grey, offset ── */
      const sg = ctx!.createRadialGradient(ox - 52, oy - 38, 0, ox - 52, oy - 38, scale(180));
      sg.addColorStop(0,   'rgba(70,108,152,0.18)');
      sg.addColorStop(0.5, 'rgba(50,78,118,0.06)');
      sg.addColorStop(1,   'rgba(0,0,0,0)');
      ctx!.fillStyle = sg; ctx!.fillRect(0, 0, W, H);

      /* ── 3. Particles ── */
      pts.forEach(p => {
        ctx!.beginPath();
        ctx!.arc(cx + p.x + mx * 12, cy + p.y + my * 9, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = p.warm
          ? `rgba(212,180,116,${p.al})` : `rgba(138,166,192,${p.al})`;
        ctx!.fill();
      });

      /* ── 4. Alignment axis — meridian through the composition ── */
      const aLen = scale(278) * AXIS_LEN;
      const ax1 = ox + Math.cos(AXIS_ANGLE + Math.PI) * aLen * 1.3 + mx * 11;
      const ay1 = oy + Math.sin(AXIS_ANGLE + Math.PI) * aLen * 1.3 + my * 8;
      const ax2 = ox + Math.cos(AXIS_ANGLE) * aLen * 1.1 + mx * 11;
      const ay2 = oy + Math.sin(AXIS_ANGLE) * aLen * 1.1 + my * 8;
      ctx!.beginPath(); ctx!.moveTo(ax1, ay1); ctx!.lineTo(ax2, ay2);
      ctx!.strokeStyle = 'rgba(196,176,130,0.09)';
      ctx!.lineWidth = 0.6; ctx!.stroke();

      /* ── 5. Signal threads — selective ── */
      [[0, 4], [2, 5]].forEach(([ai, bi]) => {
        const a = npos(nodes[ai], 4), b = npos(nodes[bi], 4);
        ctx!.beginPath(); ctx!.moveTo(a.x, a.y); ctx!.lineTo(b.x, b.y);
        ctx!.strokeStyle = 'rgba(208,184,138,0.14)';
        ctx!.lineWidth = 0.55; ctx!.stroke();
      });

      /* ── 6. Arcs ── */
      arcs.forEach((arc, i) => {
        const pf = 3 + i * 1.8;
        const ax = cx + mx * pf, ay = cy + my * pf * 0.72;
        const sw = arc.sw * Math.PI / 180;
        ctx!.beginPath(); ctx!.arc(ax, ay, scale(arc.r0), arc.a, arc.a + sw);
        ctx!.strokeStyle = arc.warm
          ? `rgba(158,132,72,${arc.al})` : `rgba(82,116,142,${arc.al})`;
        ctx!.lineWidth = arc.w; ctx!.stroke();
      });

      /* ── 7. Nodes ── */
      nodes.forEach((n, i) => {
        const pos = npos(n, 4);
        const nr  = i < 2 ? 3.0 : i < 4 ? 2.4 : 1.8;
        const pr  = i === 0 ? nr + breath * 0.7 : nr;
        ctx!.beginPath(); ctx!.arc(pos.x, pos.y, pr, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(224,196,144,${i < 2 ? 0.88 : i < 4 ? 0.72 : 0.58})`;
        ctx!.fill();
        /* Halo on primary nodes — breathing, architectural */
        if (i < 2) {
          ctx!.beginPath(); ctx!.arc(pos.x, pos.y, pr + 4 + breath * 3, 0, Math.PI * 2);
          ctx!.strokeStyle = `rgba(214,168,82,${0.15 + breath * 0.12})`;
          ctx!.lineWidth = 0.65; ctx!.stroke();
        }
      });

      /* ── 8. Compass micro-marks on outer arc — institutional precision ── */
      const outerArc = arcs[3];
      const omx = cx + mx * 9, omy = cy + my * 6.5;
      const or  = scale(outerArc.r0);
      for (let i = 0; i < 8; i++) {
        const a = outerArc.a + (i * Math.PI / 4);
        const isCardinal = i % 2 === 0;
        const len = isCardinal ? 7 : 4;
        ctx!.beginPath();
        ctx!.moveTo(omx + Math.cos(a) * (or - len / 2), omy + Math.sin(a) * (or - len / 2));
        ctx!.lineTo(omx + Math.cos(a) * (or + len / 2), omy + Math.sin(a) * (or + len / 2));
        ctx!.strokeStyle = `rgba(204,180,128,${isCardinal ? 0.28 : 0.14})`;
        ctx!.lineWidth   = isCardinal ? 0.75 : 0.5;
        ctx!.stroke();
      }

      raf = requestAnimationFrame(draw);
    }

    /* ── Parallax ── */
    const el = canvas.parentElement!;

    const onMouse = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      tmx = ((e.clientX - r.left) / r.width  - 0.5) * 2.8;
      tmy = ((e.clientY - r.top)  / r.height - 0.5) * 2.2;
    };
    const onLeave = () => { tmx = 0; tmy = 0; };
    const onTouch = (e: TouchEvent) => {
      e.preventDefault();
      const r = el.getBoundingClientRect();
      tmx = ((e.touches[0].clientX - r.left) / r.width  - 0.5) * 2.0;
      tmy = ((e.touches[0].clientY - r.top)  / r.height - 0.5) * 1.6;
    };

    el.addEventListener('mousemove', onMouse);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('touchmove', onTouch, { passive: false });

    const ro = new ResizeObserver(() => { ctx!.resetTransform(); ctx!.scale(dpr, dpr); resize(); });
    ro.observe(canvas);

    resize();

    if (reduced) {
      /* Single static frame — no loop */
      draw(); cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('mousemove', onMouse);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('touchmove', onTouch);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        pointerEvents: 'none',
        willChange: 'transform',
      }}
    />
  );
}
