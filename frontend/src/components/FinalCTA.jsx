import { Phone } from "lucide-react";
import Reveal from "./Reveal";

const NetworkBg = () => {
  // Triangular vertex network animation built with pure SVG
  const nodes = [
    [50, 50], [50, 200], [50, 350],
    [220, 80], [220, 230], [220, 380],
    [400, 50], [400, 200], [400, 350],
    [580, 80], [580, 230], [580, 380],
    [750, 50], [750, 200], [750, 350],
  ];
  const center = [400, 220];
  return (
    <svg
      viewBox="0 0 800 440"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full pointer-events-none opacity-70"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="rgcta" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#0070F3" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
        </radialGradient>
        <filter id="ctaglow">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle cx={center[0]} cy={center[1]} r="260" fill="url(#rgcta)" />
      {nodes.map(([x, y], i) => (
        <line
          key={`l${i}`}
          x1={center[0]}
          y1={center[1]}
          x2={x}
          y2={y}
          stroke="rgba(0,229,255,0.18)"
          strokeWidth="0.8"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <g key={`n${i}`}>
          <circle cx={x} cy={y} r="2" fill="#00E5FF" opacity="0.5" />
          <circle cx={x} cy={y} r="6" fill="none" stroke="rgba(0,229,255,0.2)">
            <animate attributeName="r" values="4;14;4" dur={`${3 + (i % 4) * 0.8}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0;0.4" dur={`${3 + (i % 4) * 0.8}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
      <circle cx={center[0]} cy={center[1]} r="6" fill="#00E5FF" filter="url(#ctaglow)" />
      <circle cx={center[0]} cy={center[1]} r="14" fill="none" stroke="rgba(0,229,255,0.5)">
        <animate attributeName="r" values="10;28;10" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0;0.7" dur="2.4s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
};

export const FinalCTA = () => {
  return (
    <section id="contact" data-testid="final-cta-section" className="relative py-24 sm:py-40 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute inset-0">
        <NetworkBg />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 lg:px-8 text-center">
        <Reveal>
          <span className="font-mono-label text-[11px] text-cyan-300 inline-flex items-center gap-2">
            <span className="w-6 h-px bg-cyan-300/60" />
            VERTEX / FINAL STEP
            <span className="w-6 h-px bg-cyan-300/60" />
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-display mt-6 text-[40px] sm:text-[58px] lg:text-[78px] leading-[0.98] font-semibold text-gradient">
            Ready to upgrade the way your business <span className="text-gradient-cyan">gets leads?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-7 text-[15px] sm:text-[17px] text-white/55 leading-relaxed max-w-2xl mx-auto">
            Whether you need an AI voice receptionist, a custom website, social media marketing,
            or a complete package, Vertex Web Solutions can help you build a more professional
            and responsive digital presence.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href="tel:3054693585"
            data-testid="final-cta-call"
            className="mt-10 inline-flex items-center gap-2.5 btn-primary text-[15px] sm:text-[16px] py-4 px-7"
          >
            <Phone size={16} strokeWidth={2.5} />
            Call 305-469-3585
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-5 text-[12px] text-white/40 font-mono-label">
            CALL TO DISCUSS THE BEST SETUP FOR YOUR BUSINESS · CUSTOM PACKAGES ON REQUEST
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default FinalCTA;
