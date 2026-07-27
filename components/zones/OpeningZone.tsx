'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { manifestoLine, openingFoot } from '@/lib/motion';
import { gmtTime, todayDate, generateDocRef } from '@/lib/utils';

const LINES = [
  'Valantai',
  'builds future',
  'positions.',
];

export function OpeningZone() {
  const [docRef, setDocRef] = useState('VLT · — · — · —');
  const [time, setTime]     = useState('— GMT');
  const [date, setDate]     = useState('—');
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.01 });

  useEffect(() => {
    setDocRef(generateDocRef());
    setTime(gmtTime());
    setDate(todayDate());
    const id = setInterval(() => setTime(gmtTime()), 30_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const hero = canvas.parentElement!;
    let W = 0, H = 0, CX = 0, CY = 0, raf = 0;
    const sc = (b: number) => b * (Math.min(W / 1440, 1.18) * 0.80 + 0.20);
    function resize() {
      const r = hero.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas!.width = W * DPR; canvas!.height = H * DPR;
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0);
      CX = W * 0.75; CY = H * 0.35;
    }
    type Arc = { r0:number;a:number;s:number;sw:number;al:number;w:number;warm:boolean };
    const arcs: Arc[] = [
      {r0:58, a:0.0,s: 0.0036,sw:235,al:0.18,w:0.65,warm:true },
      {r0:112,a:1.2,s:-0.0026,sw:288,al:0.50,w:1.15,warm:false},
      {r0:188,a:2.5,s: 0.0016,sw:222,al:0.32,w:0.85,warm:false},
      {r0:272,a:3.9,s:-0.0011,sw:165,al:0.15,w:0.50,warm:true },
    ];
    type Node = {ai:number;off:number};
    const nodes: Node[] = [
      {ai:1,off:0},{ai:1,off:Math.PI},
      {ai:2,off:0.70},{ai:2,off:Math.PI+0.70},
      {ai:3,off:1.40},{ai:3,off:Math.PI+1.40},
    ];
    const pts = Array.from({length:28},()=>({
      x:(Math.random()-.5)*500,y:(Math.random()-.5)*420,
      r:0.6+Math.random()*1.4,al:0.08+Math.random()*0.16,
      vx:(Math.random()-.5)*.04,vy:(Math.random()-.5)*.04,
      warm:Math.random()>.45,
    }));
    let mx=0,my=0,tmx=0,tmy=0,t=0;
    function npos(n:Node,pf:number){
      const arc=arcs[n.ai],ang=arc.a+n.off,f=pf*(1+n.ai*.6);
      return{x:CX+mx*f+Math.cos(ang)*sc(arc.r0),y:CY+my*f*.7+Math.sin(ang)*sc(arc.r0)};
    }
    function draw(){
      mx+=(tmx-mx)*.028;my+=(tmy-my)*.028;
      arcs.forEach(a=>{a.a+=a.s;});
      pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(Math.abs(p.x)>262)p.vx*=-1;if(Math.abs(p.y)>222)p.vy*=-1;});
      t+=0.0082;
      const b=Math.sin(t)*.5+.5;
      ctx!.clearRect(0,0,W,H);
      const ox=CX+mx*3,oy=CY+my*1.8;
      const cg=ctx!.createRadialGradient(ox,oy,0,ox,oy,sc(255)+b*22);
      cg.addColorStop(0,`rgba(218,142,50,${.48+b*.12})`);
      cg.addColorStop(.22,`rgba(178,108,34,${.22+b*.06})`);
      cg.addColorStop(.52,'rgba(122,72,20,0.09)');
      cg.addColorStop(1,'rgba(0,0,0,0)');
      ctx!.fillStyle=cg;ctx!.fillRect(0,0,W,H);
      const sg=ctx!.createRadialGradient(ox-sc(50),oy-sc(36),0,ox-sc(50),oy-sc(36),sc(175));
      sg.addColorStop(0,'rgba(68,106,150,0.16)');sg.addColorStop(.5,'rgba(48,78,118,0.06)');sg.addColorStop(1,'rgba(0,0,0,0)');
      ctx!.fillStyle=sg;ctx!.fillRect(0,0,W,H);
      pts.forEach(p=>{ctx!.beginPath();ctx!.arc(CX+p.x+mx*11,CY+p.y+my*8,p.r,0,Math.PI*2);ctx!.fillStyle=p.warm?`rgba(210,178,112,${p.al})`:`rgba(136,164,190,${p.al})`;ctx!.fill();});
      const aL=sc(272)*.72;
      ctx!.beginPath();ctx!.moveTo(ox+Math.cos(3.406)*aL*1.35+mx*10,oy+Math.sin(3.406)*aL*1.35+my*7);ctx!.lineTo(ox+Math.cos(.265)*aL*1.15+mx*10,oy+Math.sin(.265)*aL*1.15+my*7);ctx!.strokeStyle='rgba(194,174,128,0.08)';ctx!.lineWidth=0.55;ctx!.stroke();
      [[0,4],[2,5]].forEach(([ai,bi])=>{const a=npos(nodes[ai],4),bv=npos(nodes[bi],4);ctx!.beginPath();ctx!.moveTo(a.x,a.y);ctx!.lineTo(bv.x,bv.y);ctx!.strokeStyle='rgba(206,182,136,0.12)';ctx!.lineWidth=0.5;ctx!.stroke();});
      arcs.forEach((arc,i)=>{const pf=3+i*1.7;ctx!.beginPath();ctx!.arc(CX+mx*pf,CY+my*pf*.7,sc(arc.r0),arc.a,arc.a+arc.sw*Math.PI/180);ctx!.strokeStyle=arc.warm?`rgba(155,128,68,${arc.al})`:`rgba(80,114,140,${arc.al})`;ctx!.lineWidth=arc.w;ctx!.stroke();});
      nodes.forEach((n,i)=>{const pos=npos(n,4),nr=i<2?3:i<4?2.4:1.7,pr=i===0?nr+b*.65:nr;ctx!.beginPath();ctx!.arc(pos.x,pos.y,pr,0,Math.PI*2);ctx!.fillStyle=`rgba(222,194,140,${i<2?.88:i<4?.7:.52})`;ctx!.fill();if(i<2){ctx!.beginPath();ctx!.arc(pos.x,pos.y,pr+4+b*2.8,0,Math.PI*2);ctx!.strokeStyle=`rgba(212,165,78,${.13+b*.1})`;ctx!.lineWidth=0.6;ctx!.stroke();}});
      const oa=arcs[3],or_=sc(oa.r0),omx=CX+mx*9,omy=CY+my*6;
      for(let i=0;i<8;i++){const a=oa.a+(i*Math.PI/4),len=i%2===0?7.5:4;ctx!.beginPath();ctx!.moveTo(omx+Math.cos(a)*(or_-len*.5),omy+Math.sin(a)*(or_-len*.5));ctx!.lineTo(omx+Math.cos(a)*(or_+len*.5),omy+Math.sin(a)*(or_+len*.5));ctx!.strokeStyle=`rgba(200,176,124,${i%2===0?.3:.14})`;ctx!.lineWidth=i%2===0?.75:.5;ctx!.stroke();}
      raf=requestAnimationFrame(draw);
    }
    const onMove=(e:MouseEvent)=>{const r=hero.getBoundingClientRect();tmx=((e.clientX-r.left)/r.width-.5)*2.6;tmy=((e.clientY-r.top)/r.height-.5)*2;};
    const onLeave=()=>{tmx=0;tmy=0;};
    const onTouch=(e:TouchEvent)=>{const r=hero.getBoundingClientRect();tmx=((e.touches[0].clientX-r.left)/r.width-.5)*1.8;tmy=((e.touches[0].clientY-r.top)/r.height-.5)*1.4;};
    hero.addEventListener('mousemove',onMove);
    hero.addEventListener('mouseleave',onLeave);
    hero.addEventListener('touchmove',onTouch,{passive:true});
    const ro=new ResizeObserver(()=>{ctx!.setTransform(1,0,0,1,0,0);resize();});
    ro.observe(hero);
    resize();
    let running = false;
    function start(){if(!running&&!reduced){running=true;raf=requestAnimationFrame(draw);}}
    function stop(){if(running){running=false;cancelAnimationFrame(raf);}}
    const io=new IntersectionObserver((entries)=>{entries[0].isIntersecting?start():stop();},{threshold:0});
    io.observe(hero);
    if(reduced){t=1.5;draw();cancelAnimationFrame(raf);}else{start();}
    return()=>{stop();io.disconnect();hero.removeEventListener('mousemove',onMove);hero.removeEventListener('mouseleave',onLeave);hero.removeEventListener('touchmove',onTouch);ro.disconnect();};
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-0 md:min-h-[100dvh] md:min-h-screen px-[var(--margin)] pt-[calc(var(--header)+4vh)] md:pt-[calc(var(--header)+11vh)] pb-[4vh] flex flex-col"
    >
      <canvas
        ref={canvasRef}
        aria-hidden
        className="hidden md:block"
        style={{position:'absolute',inset:0,width:'100%',height:'100%',display:'block',pointerEvents:'none',willChange:'transform',contain:'strict'}}
      />
      <div className="mt-[2vh]">
        {/* Eyebrow */}
        <motion.p
          variants={openingFoot}
          initial="hidden"
          animate={inView?'visible':'hidden'}
          className="font-mono text-[11px] font-bold tracking-[0.22em] uppercase text-ink-3 mb-6"
        >
          Operator Intelligence and Implementation
        </motion.p>

        {/* Main headline */}
        <h1
          className="t-manifesto text-ink"
          aria-label={LINES.join(' ')}
        >
          {LINES.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className={`block ${i > 0 ? 'text-accent' : ''}`}
                custom={i}
                variants={manifestoLine}
                initial="hidden"
                animate={inView?'visible':'hidden'}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Descriptor */}
        <motion.p
          variants={openingFoot}
          initial="hidden"
          animate={inView?'visible':'hidden'}
          className="font-serif text-[clamp(1rem,3.2vw,1.4rem)] text-ink-2 mt-6 max-w-prose"
        >
          The operating institution for ambitious companies.
        </motion.p>

        {/* Action line */}
        <motion.p
          variants={openingFoot}
          initial="hidden"
          animate={inView?'visible':'hidden'}
          className="font-sans text-[clamp(0.85rem,2.6vw,1.1rem)] text-ink-2 mt-3 max-w-prose leading-relaxed"
        >
          We create, fix, and scale the systems companies need to compete, raise, exit, and endure.
        </motion.p>

        {/* VLT Engine */}
        <motion.p
          variants={openingFoot}
          initial="hidden"
          animate={inView?'visible':'hidden'}
          className="font-mono text-[clamp(9px,2.2vw,12px)] font-bold tracking-[0.08em] md:tracking-[0.14em] uppercase text-accent mt-8 leading-relaxed"
        >
          <span className="whitespace-nowrap">VLT originates</span>
          <span className="text-ink-4 opacity-60"> · </span>
          <span className="whitespace-nowrap">VLT builds</span>
          <span className="text-ink-4 opacity-60"> · </span>
          <span className="whitespace-nowrap">VLT fixes</span>
          <span className="text-ink-4 opacity-60"> · </span>
          <span className="whitespace-nowrap">VLT connects</span>
          <span className="text-ink-4 opacity-60"> · </span>
          <span className="whitespace-nowrap">VLT scales</span>
        </motion.p>
      </div>
      <motion.div
        variants={openingFoot}
        initial="hidden"
        animate={inView?'visible':'hidden'}
        className="mt-8 flex items-center flex-wrap gap-2.5 font-mono text-[11px] font-medium tracking-[0.18em] uppercase text-ink-3"
      >
        <span suppressHydrationWarning>{docRef}</span>
        <span className="text-ink-4 opacity-60">·</span>
        <span suppressHydrationWarning>Issued {date}</span>
        <span className="text-ink-4 opacity-60">·</span>
        <span suppressHydrationWarning>{time}</span>
      </motion.div>
      <span className="hidden md:block absolute right-[var(--margin)] bottom-[4.5vh] w-[5px] h-[5px] rounded-full bg-accent animate-radar" aria-hidden="true" />
    </section>
  );
}
