'use client';
import { useEffect, useRef } from 'react';

/**
 * CoreIntelligenceField
 *
 * The Valantai homepage hero atmosphere — the "operating node."
 * Positioned absolute behind hero copy. Homepage only.
 *
 * Visual system:
 *   Core warm glow      — oxidised amber, 12s breathing cycle
 *   Architectural arcs  — 4 partial orbital rings, blue-grey
 *   Alignment axis      — 15° meridian, stone-to-signal geometry
 *   Signal threads      — 2 connecting lines, selective
 *   Orbital nodes       — 6 signal points on the arc paths
 *   Compass micro-marks — 8 tick marks on outer arc
 *   Particle field      — 28 particles, spatial depth only
 *   Mouse parallax      — 0.028 lerp, depth not interaction
 *
 * Performance: Canvas 2D, ~55 draw calls/frame, no WebGL.
 * Respects prefers-reduced-motion (single static frame).
 */
export function CoreIntelligenceField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const hero = canvas.parentElement!;

    let W = 0, H = 0, CX = 0, CY = 0, raf = 0;

    /* Geometry scales with viewport — monumental at any size */
    const sc = (base: number) =>
      base * (Math.min(W / 1440, 1.18) * 0.80 + 0.20);

    function resize() {
      const rect = hero.getBoundingClientRect();
      W = rect.width; H = rect.height;
      canvas!.width  = W * DPR;
      canvas!.height = H * DPR;
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0);
      /* Compositional anchor: clearly right-of-centre, above visual midpoint.
         W*0.70 keeps the field in the open right half not obscured by text. */
      CX = W * 0.70; CY = H * 0.40;
    }

    /* ── Arcs ── */
    type Arc = { r0:number; a:number; s:number; sw:number; al:number; w:number; warm:boolean };
    const arcs: Arc[] = [
      { r0:  58, a: 0.0, s:  0.0036, sw: 235, al: 0.18, w: 0.65, warm: true  },
      { r0: 112, a: 1.2, s: -0.0026, sw: 288, al: 0.50, w: 1.15, warm: false },
      { r0: 188, a: 2.5, s:  0.0016, sw: 222, al: 0.32, w: 0.85, warm: false },
      { r0: 272, a: 3.9, s: -0.0011, sw: 165, al: 0.15, w: 0.50, warm: true  },
    ];

    /* ── Nodes — 6, on arcs 1-3 ── */
    type Node = { ai:number; off:number };
    const nodes: Node[] = [
      { ai: 1, off: 0.00 }, { ai: 1, off: Math.PI },
      { ai: 2, off: 0.70 }, { ai: 2, off: Math.PI + 0.70 },
      { ai: 3, off: 1.40 }, { ai: 3, off: Math.PI + 1.40 },
    ];

    /* ── Particles — 28 ── */
    type Particle = { x:number; y:number; r:number; al:number; vx:number; vy:number; warm:boolean };
    const pts: Particle[] = Array.from({ length: 28 }, () => ({
      x:  (Math.random() - .5) * 500,  y:  (Math.random() - .5) * 420,
      r:  0.6 + Math.random() * 1.4,   al: 0.08 + Math.random() * 0.16,
      vx: (Math.random() - .5) * .040, vy: (Math.random() - .5) * .040,
      warm: Math.random() > .45,
    }));

    const AXIS_ANGLE = 0.265;
    const AXIS_REACH = 0.72;

    let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
    const LERP = 0.028;
    let t = 0;

    function npos(n: Node, pf: number) {
      const arc = arcs[n.ai];
      const ang = arc.a + n.off;
      const f   = pf * (1 + n.ai * 0.60);
      return {
        x: CX + mouseX * f + Math.cos(ang) * sc(arc.r0),
        y: CY + mouseY * f * .70 + Math.sin(ang) * sc(arc.r0),
      };
    }

    function draw() {
      mouseX += (targetX - mouseX) * LERP;
      mouseY += (targetY - mouseY) * LERP;
      arcs.forEach(a => { a.a += a.s; });
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (Math.abs(p.x) > 262) p.vx *= -1;
        if (Math.abs(p.y) > 222) p.vy *= -1;
      });
      t += 0.0082;
      const breath = Math.sin(t) * .5 + .5;

      ctx!.clearRect(0, 0, W, H);
      const ox = CX + mouseX * 3, oy = CY + mouseY * 1.8;

      /* 1 — Core warm glow */
      const cg = ctx!.createRadialGradient(ox, oy, 0, ox, oy, sc(255) + breath * 22);
      cg.addColorStop(0.00, `rgba(218,142,50,${0.48 + breath * 0.12})`);
      cg.addColorStop(0.20, `rgba(178,108,34,${0.22 + breath * 0.06})`);
      cg.addColorStop(0.50,  'rgba(122,72,20,0.09)');
      cg.addColorStop(1.00,  'rgba(0,0,0,0)');
      ctx!.fillStyle = cg; ctx!.fillRect(0, 0, W, H);

      /* 2 — Cool architectural accent */
      const sg = ctx!.createRadialGradient(ox - sc(50), oy - sc(36), 0, ox - sc(50), oy - sc(36), sc(175));
      sg.addColorStop(0, 'rgba(68,106,150,0.16)');
      sg.addColorStop(.5, 'rgba(48,78,118,0.06)');
      sg.addColorStop(1,  'rgba(0,0,0,0)');
      ctx!.fillStyle = sg; ctx!.fillRect(0, 0, W, H);

      /* 3 — Particle field */
      pts.forEach(p => {
        ctx!.beginPath();
        ctx!.arc(CX + p.x + mouseX * 11, CY + p.y + mouseY * 8, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = p.warm
          ? `rgba(210,178,112,${p.al})` : `rgba(136,164,190,${p.al})`;
        ctx!.fill();
      });

      /* 4 — Alignment axis (meridian) */
      const aLen = sc(272) * AXIS_REACH;
      ctx!.beginPath();
      ctx!.moveTo(ox + Math.cos(AXIS_ANGLE + Math.PI) * aLen * 1.35 + mouseX * 10,
                  oy + Math.sin(AXIS_ANGLE + Math.PI) * aLen * 1.35 + mouseY * 7);
      ctx!.lineTo(ox + Math.cos(AXIS_ANGLE) * aLen * 1.15 + mouseX * 10,
                  oy + Math.sin(AXIS_ANGLE) * aLen * 1.15 + mouseY * 7);
      ctx!.strokeStyle = 'rgba(194,174,128,0.08)';
      ctx!.lineWidth = 0.55; ctx!.stroke();

      /* 5 — Signal threads */
      [[0,4],[2,5]].forEach(([ai,bi]) => {
        const a = npos(nodes[ai], 4), b = npos(nodes[bi], 4);
        ctx!.beginPath(); ctx!.moveTo(a.x, a.y); ctx!.lineTo(b.x, b.y);
        ctx!.strokeStyle = 'rgba(206,182,136,0.12)';
        ctx!.lineWidth = 0.50; ctx!.stroke();
      });

      /* 6 — Arcs */
      arcs.forEach((arc, i) => {
        const pf = 3 + i * 1.7;
        ctx!.beginPath();
        ctx!.arc(CX + mouseX * pf, CY + mouseY * pf * .70,
                 sc(arc.r0), arc.a, arc.a + arc.sw * Math.PI / 180);
        ctx!.strokeStyle = arc.warm
          ? `rgba(155,128,68,${arc.al})` : `rgba(80,114,140,${arc.al})`;
        ctx!.lineWidth = arc.w; ctx!.stroke();
      });

      /* 7 — Nodes + halos */
      nodes.forEach((n, i) => {
        const pos = npos(n, 4);
        const nr  = i < 2 ? 3.0 : i < 4 ? 2.4 : 1.7;
        const pr  = i === 0 ? nr + breath * .65 : nr;
        ctx!.beginPath(); ctx!.arc(pos.x, pos.y, pr, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(222,194,140,${i < 2 ? .88 : i < 4 ? .70 : .52})`;
        ctx!.fill();
        if (i < 2) {
          ctx!.beginPath(); ctx!.arc(pos.x, pos.y, pr + 4 + breath * 2.8, 0, Math.PI * 2);
          ctx!.strokeStyle = `rgba(212,165,78,${.13 + breath * .10})`;
          ctx!.lineWidth = 0.60; ctx!.stroke();
        }
      });

      /* 8 — Compass micro-marks on outer arc */
      const outerArc = arcs[3];
      const or = sc(outerArc.r0);
      const omx = CX + mouseX * 9, omy = CY + mouseY * 6;
      for (let i = 0; i < 8; i++) {
        const a   = outerArc.a + (i * Math.PI / 4);
        const len = i % 2 === 0 ? 7.5 : 4.0;
        ctx!.beginPath();
        ctx!.moveTo(omx + Math.cos(a) * (or - len * .5), omy + Math.sin(a) * (or - len * .5));
        ctx!.lineTo(omx + Math.cos(a) * (or + len * .5), omy + Math.sin(a) * (or + len * .5));
        ctx!.strokeStyle = `rgba(200,176,124,${i % 2 === 0 ? .30 : .14})`;
        ctx!.lineWidth = i % 2 === 0 ? .75 : .50; ctx!.stroke();
      }

      raf = requestAnimationFrame(draw);
    }

    /* Parallax listeners */
    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      targetX = ((e.clientX - r.left) / r.width  - .5) * 2.6;
      targetY = ((e.clientY - r.top)  / r.height - .5) * 2.0;
    };
    const onLeave = () => { targetX = 0; targetY = 0; };
    const onTouch = (e: TouchEvent) => {
      e.preventDefault();
      const r = hero.getBoundingClientRect();
      targetX = ((e.touches[0].clientX - r.left) / r.width  - .5) * 1.8;
      targetY = ((e.touches[0].clientY - r.top)  / r.height - .5) * 1.4;
    };
    hero.addEventListener('mousemove', onMove);
    hero.addEventListener('mouseleave', onLeave);
    hero.addEventListener('touchmove', onTouch, { passive: false });

    const ro = new ResizeObserver(() => {
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      resize();
    });
    ro.observe(hero);
    resize();

    if (reduced) {
      t = 1.5; draw(); cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      hero.removeEventListener('mousemove', onMove);
      hero.removeEventListener('mouseleave', onLeave);
      hero.removeEventListener('touchmove', onTouch);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        display: 'block',
        pointerEvents: 'none',
        willChange: 'transform',
      }}
    />
  );
}
