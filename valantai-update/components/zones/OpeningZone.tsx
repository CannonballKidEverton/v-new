'use client';

import { useEffect, useRef } from 'react';

/**
 * OpeningZone
 * Homepage hero with the Core Intelligence Field canvas animation.
 * Canvas is positioned upper-right of the hero at CX = W * 0.75, CY = H * 0.50.
 * No external imports. Respects prefers-reduced-motion.
 */
export default function OpeningZone() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let W = 0;
    let H = 0;
    let dpr = 1;
    let raf = 0;
    let t0 = performance.now();

    // pointer parallax
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    const LERP = 0.028;

    // 4 partial arcs
    const arcs = [
      { r: 0.18, start: -1.1, len: 2.2, speed: 0.00010, color: 'rgba(78, 138, 170, 0.55)', width: 1.0 },
      { r: 0.24, start: 1.8,  len: 1.6, speed: -0.00007, color: 'rgba(200, 152, 64, 0.45)', width: 0.8 },
      { r: 0.31, start: 0.4,  len: 2.6, speed: 0.00005, color: 'rgba(78, 138, 170, 0.30)', width: 0.6 },
      { r: 0.40, start: -0.6, len: 1.4, speed: -0.00004, color: 'rgba(200, 152, 64, 0.22)', width: 0.5 },
    ];

    // 6 nodes drifting along arcs
    const nodes = [
      { arc: 0, phase: 0.10, speed: 0.00012 },
      { arc: 0, phase: 0.55, speed: 0.00012 },
      { arc: 1, phase: 0.30, speed: -0.00009 },
      { arc: 2, phase: 0.20, speed: 0.00006 },
      { arc: 2, phase: 0.70, speed: 0.00006 },
      { arc: 3, phase: 0.45, speed: -0.00005 },
    ];

    // 28 sparse particles for depth
    const particles = Array.from({ length: 28 }, () => ({
      a: Math.random() * Math.PI * 2,
      r: 0.05 + Math.random() * 0.45,
      s: 0.4 + Math.random() * 0.9,
      v: (Math.random() - 0.5) * 0.00004,
    }));

    function size() {
      if (!canvas) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function onPointer(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      pointer.tx = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
      pointer.ty = ((e.clientY - rect.top) / rect.height - 0.5) * 18;
    }

    function draw(now: number) {
      if (!ctx) return;
      const t = now - t0;

      // parallax easing
      pointer.x += (pointer.tx - pointer.x) * LERP;
      pointer.y += (pointer.ty - pointer.y) * LERP;

      const CX = W * 0.75 + pointer.x;
      const CY = H * 0.50 + pointer.y;
      const R = Math.min(W, H);

      ctx.clearRect(0, 0, W, H);

      // breathing core glow, 12s cycle
      const breath = 0.5 + 0.5 * Math.sin((t / 12000) * Math.PI * 2);
      const coreR = R * (0.085 + 0.012 * breath);

      const grad = ctx.createRadialGradient(CX, CY, 0, CX, CY, coreR);
      grad.addColorStop(0, 'rgba(212, 144, 56, 0.42)');
      grad.addColorStop(0.45, 'rgba(200, 152, 64, 0.16)');
      grad.addColorStop(1, 'rgba(200, 152, 64, 0.00)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(CX, CY, coreR, 0, Math.PI * 2);
      ctx.fill();

      // 15° alignment meridian
      const meridian = (15 * Math.PI) / 180;
      const mLen = R * 0.46;
      ctx.strokeStyle = 'rgba(122, 112, 96, 0.18)';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(CX - Math.cos(meridian) * mLen, CY - Math.sin(meridian) * mLen);
      ctx.lineTo(CX + Math.cos(meridian) * mLen, CY + Math.sin(meridian) * mLen);
      ctx.stroke();

      // arcs
      arcs.forEach((a) => {
        const rot = t * a.speed;
        ctx.strokeStyle = a.color;
        ctx.lineWidth = a.width;
        ctx.beginPath();
        ctx.arc(CX, CY, R * a.r, a.start + rot, a.start + rot + a.len);
        ctx.stroke();
      });

      // 8 compass tick marks on outermost arc
      const tickR = R * arcs[3].r;
      for (let i = 0; i < 8; i++) {
        const ang = (i / 8) * Math.PI * 2 - Math.PI / 2;
        const x1 = CX + Math.cos(ang) * tickR;
        const y1 = CY + Math.sin(ang) * tickR;
        const x2 = CX + Math.cos(ang) * (tickR + 6);
        const y2 = CY + Math.sin(ang) * (tickR + 6);
        ctx.strokeStyle = 'rgba(200, 152, 64, 0.35)';
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      // resolve node positions
      const nodePos = nodes.map((n) => {
        const a = arcs[n.arc];
        const rot = t * a.speed;
        const p = (n.phase + t * n.speed) % 1;
        const ang = a.start + rot + p * a.len;
        return {
          x: CX + Math.cos(ang) * R * a.r,
          y: CY + Math.sin(ang) * R * a.r,
        };
      });

      // 2 signal threads between selected node pairs
      ctx.strokeStyle = 'rgba(242, 238, 230, 0.10)';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(nodePos[0].x, nodePos[0].y);
      ctx.lineTo(nodePos[3].x, nodePos[3].y);
      ctx.moveTo(nodePos[2].x, nodePos[2].y);
      ctx.lineTo(nodePos[5].x, nodePos[5].y);
      ctx.stroke();

      // nodes
      nodePos.forEach((p) => {
        ctx.fillStyle = 'rgba(242, 238, 230, 0.85)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'rgba(212, 144, 56, 0.18)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4.2, 0, Math.PI * 2);
        ctx.fill();
      });

      // particles
      particles.forEach((pt) => {
        pt.a += pt.v;
        const x = CX + Math.cos(pt.a) * R * pt.r;
        const y = CY + Math.sin(pt.a) * R * pt.r;
        ctx.fillStyle = `rgba(242, 238, 230, ${0.06 + pt.s * 0.04})`;
        ctx.beginPath();
        ctx.arc(x, y, pt.s, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!reduced) raf = requestAnimationFrame(draw);
    }

    size();
    window.addEventListener('resize', size);
    window.addEventListener('pointermove', onPointer);

    if (reduced) {
      draw(performance.now());
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', size);
      window.removeEventListener('pointermove', onPointer);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#0A0908] text-[#F2EEE6]">
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
      />

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-6 pb-24 pt-32 sm:px-10 lg:px-16">
        <div className="mb-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#7A7060]">
          <span className="h-px w-8 bg-[#3A3428]" />
          <span>VLT · LDN · DXB · NYC · RUH</span>
        </div>

        <h1 className="max-w-4xl font-[Inter_Tight] text-[clamp(2.4rem,5.4vw,4.6rem)] font-semibold leading-[1.04] tracking-[-0.02em] text-[#F2EEE6]">
          The best operators don&rsquo;t write whitepapers. They build companies.
        </h1>

        <p className="mt-8 max-w-2xl font-[Source_Serif_4] text-[clamp(1.05rem,1.3vw,1.25rem)] leading-[1.55] text-[#C8C0AC]">
          From idea to exit. Built by operators. Accelerated by AI.
        </p>

        <div className="mt-14 flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.22em] text-[#7A7060]">
          <span>Decades of experience</span>
          <span className="h-px w-6 bg-[#3A3428]" />
          <span>Thousands of mandates</span>
          <span className="h-px w-6 bg-[#3A3428]" />
          <span>One mandate, one signature</span>
        </div>
      </div>
    </section>
  );
}
