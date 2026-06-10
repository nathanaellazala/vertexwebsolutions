import { motion } from "framer-motion";
import { Phone, ArrowDown, PhoneIncoming, MessageSquare, Sparkles, TrendingUp, MapPin } from "lucide-react";

const Particle = ({ delay, x, y }) => (
  <motion.span
    className="absolute w-1 h-1 rounded-full bg-cyan-300/70"
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 0], y: [0, -12, 0] }}
    transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
    style={{ left: `${x}%`, top: `${y}%`, boxShadow: "0 0 12px rgba(0,229,255,0.8)" }}
  />
);

const WaveBars = () => (
  <div className="flex items-end gap-[3px] h-6">
    {[0.4, 0.7, 1, 0.6, 0.85, 0.45, 0.9, 0.55, 0.3].map((s, i) => (
      <span
        key={i}
        className="wave-bar w-[3px] rounded-full bg-gradient-to-t from-cyan-400 to-cyan-200"
        style={{ height: `${s * 100}%`, animationDelay: `${i * 0.12}s` }}
      />
    ))}
  </div>
);

const FloatingDashboard = () => {
  return (
    <div className="relative w-full max-w-[520px] aspect-[10/11]" data-testid="hero-dashboard">
      {/* Glow */}
      <div className="absolute -inset-10 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.18),transparent_60%)] blur-2xl pointer-events-none" />

      {/* Background panels */}
      <motion.div
        className="absolute inset-0 rounded-3xl glass overflow-hidden"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        {/* Subtle grid inside dashboard */}
        <div className="absolute inset-0 opacity-40 grid-bg" />
        <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

        {/* Top bar */}
        <div className="relative px-5 py-4 flex items-center justify-between border-b border-white/[0.04]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 pulse-glow" />
            <span className="font-mono-label text-[10px] text-white/60">vertex / live-ops</span>
          </div>
          <span className="font-mono-label text-[10px] text-white/40">ONLINE</span>
        </div>

        {/* Incoming call card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="relative m-5 p-4 rounded-2xl bg-[#0B0C13]/80 border border-white/[0.06]"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="relative inline-flex">
                <span className="absolute inset-0 rounded-full bg-cyan-400/30 animate-ping" />
                <span className="relative w-9 h-9 rounded-full bg-cyan-400/10 border border-cyan-300/30 flex items-center justify-center">
                  <PhoneIncoming size={16} className="text-cyan-300" />
                </span>
              </span>
              <div>
                <p className="text-[13px] text-white font-medium">Incoming Call</p>
                <p className="text-[11px] text-white/40 font-mono-label">+1 (305) ••• ••72</p>
              </div>
            </div>
            <WaveBars />
          </div>
        </motion.div>

        {/* Transcript bubbles */}
        <div className="px-5 space-y-2.5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="max-w-[78%] px-3 py-2 rounded-2xl rounded-tl-md bg-white/[0.04] border border-white/[0.05]"
          >
            <p className="text-[12px] text-white/85">&ldquo;Hi, I need pressure washing for my driveway tomorrow.&rdquo;</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="ml-auto max-w-[78%] px-3 py-2 rounded-2xl rounded-tr-md bg-cyan-400/[0.08] border border-cyan-300/20"
          >
            <p className="text-[12px] text-cyan-100">&ldquo;Got it &mdash; can I get your name and zip code?&rdquo;</p>
          </motion.div>
        </div>

        {/* Lead captured card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.7 }}
          className="absolute left-5 right-5 bottom-5 p-4 rounded-2xl bg-[#0B0C13]/90 border border-cyan-300/20"
          style={{ boxShadow: "0 0 0 1px rgba(0,229,255,0.1), 0 20px 60px -20px rgba(0,229,255,0.4)" }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Sparkles size={13} className="text-cyan-300" />
              <span className="font-mono-label text-[10px] text-cyan-300">LEAD CAPTURED</span>
            </div>
            <span className="font-mono-label text-[10px] text-white/40">00:38</span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-[11px]">
            <div>
              <p className="text-white/40 mb-0.5">Service</p>
              <p className="text-white">Pressure Washing</p>
            </div>
            <div>
              <p className="text-white/40 mb-0.5">Location</p>
              <p className="text-white flex items-center gap-1"><MapPin size={10} />33145</p>
            </div>
            <div>
              <p className="text-white/40 mb-0.5">When</p>
              <p className="text-white">Tomorrow · AM</p>
            </div>
            <div>
              <p className="text-white/40 mb-0.5">Status</p>
              <p className="text-cyan-300 inline-flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 pulse-glow" />
                Sent to owner
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating side cards */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="absolute -right-3 sm:-right-10 top-8 w-44 p-3 rounded-2xl glass-strong hidden sm:block"
      >
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp size={13} className="text-cyan-300" />
          <span className="font-mono-label text-[10px] text-white/60">CALLS / WEEK</span>
        </div>
        <p className="font-display text-2xl font-semibold text-white">+ 42<span className="text-cyan-300">%</span></p>
        <div className="mt-2 h-8 flex items-end gap-1">
          {[0.3, 0.5, 0.4, 0.7, 0.6, 0.85, 1].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-cyan-500/40 to-cyan-300"
              style={{ height: `${h * 100}%` }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 w-44 p-3 rounded-2xl glass-strong hidden sm:block"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <MessageSquare size={13} className="text-cyan-300" />
          <span className="font-mono-label text-[10px] text-white/60">SOCIAL REACH</span>
        </div>
        <p className="text-[12px] text-white/80">Instagram engagement</p>
        <div className="mt-2 flex items-center gap-2">
          <div className="flex-1 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
            <div className="h-full w-[78%] bg-gradient-to-r from-cyan-400 to-cyan-200 rounded-full" />
          </div>
          <span className="font-mono-label text-[10px] text-white">78%</span>
        </div>
      </motion.div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-[100svh] pt-32 sm:pt-36 lg:pt-40 pb-16 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full bg-[#0070F3]/20 blur-[120px] orb-anim pointer-events-none" />
      <div className="absolute top-40 -right-32 w-[480px] h-[480px] rounded-full bg-[#00E5FF]/15 blur-[120px] orb-anim pointer-events-none" style={{ animationDelay: "5s" }} />

      {/* Particles */}
      {[
        [10, 30, 0], [22, 70, 1], [35, 20, 2], [80, 60, 1.5], [88, 30, 0.5],
        [70, 80, 2.5], [50, 90, 1.2], [15, 85, 0.8],
      ].map(([x, y, d], i) => (
        <Particle key={i} x={x} y={y} delay={d} />
      ))}

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-8 items-center">
        {/* Left copy */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 glow-pill"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 pulse-glow" />
            <span className="font-mono-label text-[10px]">LUXURY DIGITAL SYSTEMS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display mt-6 text-[44px] sm:text-[60px] lg:text-[78px] leading-[0.98] font-semibold text-white"
          >
            Your business deserves
            <br className="hidden sm:block" />
            <span className="text-gradient-cyan">more than a basic</span> website.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-[15px] sm:text-[17px] text-white/60 leading-relaxed"
          >
            Vertex Web Solutions builds luxury digital systems for local businesses —
            custom websites, AI voice receptionists, and social media marketing
            designed to capture more leads, answer more calls, and turn attention
            into revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-3"
          >
            <a
              href="tel:9549089619"
              data-testid="hero-cta-call"
              className="btn-primary inline-flex items-center gap-2 text-[14px]"
            >
              <Phone size={15} strokeWidth={2.5} />
              Call 954-908-9619
            </a>
            <a
              href="#services"
              data-testid="hero-cta-explore"
              className="btn-secondary inline-flex items-center gap-2 text-[14px]"
            >
              Explore Services <ArrowDown size={14} className="rotate-[-90deg]" />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-[12px] text-white/40 max-w-md font-mono-label leading-relaxed"
          >
            Websites · AI Receptionists · Social Media · Available separately or
            bundled into one powerful growth system.
          </motion.p>
        </div>

        {/* Right dashboard */}
        <div className="relative z-10 flex items-center justify-center lg:justify-end">
          <FloatingDashboard />
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40"
      >
        <span className="font-mono-label text-[9px]">SCROLL</span>
        <span className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
