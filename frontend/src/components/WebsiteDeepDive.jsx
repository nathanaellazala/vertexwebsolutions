import { motion } from "framer-motion";
import { Phone, Layout, Smartphone, MessageSquare, Star, Image, Zap, Check } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const FEATURES = [
  "Sleek modern designs",
  "Mobile-first layouts",
  "Fast-loading pages",
  "Clear calls to action",
  "Service-focused structure",
  "Quote request forms",
  "Click-to-call buttons",
  "Trust-building sections",
  "Gallery and review sections",
  "Clean navigation",
];

const WireframeMockup = () => (
  <div
    className="relative w-full max-w-[560px] mx-auto"
    style={{ perspective: "1400px" }}
    data-testid="website-mockup"
  >
    <div className="absolute -inset-10 bg-[radial-gradient(circle,rgba(0,229,255,0.18),transparent_60%)] blur-2xl pointer-events-none" />

    {/* Desktop mock */}
    <motion.div
      initial={{ opacity: 0, rotateY: -20, rotateX: 10 }}
      whileInView={{ opacity: 1, rotateY: -12, rotateX: 8 }}
      transition={{ duration: 1.1 }}
      viewport={{ once: true }}
      className="relative origin-center"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="rounded-2xl glass-strong p-3 shadow-2xl" style={{ boxShadow: "0 40px 100px -20px rgba(0,229,255,0.35)" }}>
        <div className="flex items-center gap-1.5 mb-2 px-2">
          <span className="w-2 h-2 rounded-full bg-white/10" />
          <span className="w-2 h-2 rounded-full bg-white/10" />
          <span className="w-2 h-2 rounded-full bg-white/10" />
          <span className="mx-auto font-mono-label text-[9px] text-white/40">crispclean.co</span>
        </div>
        <div className="relative rounded-xl bg-[#06070C] border border-white/[0.04] overflow-hidden aspect-[16/10]">
          {/* hero strip */}
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-0 left-0 right-0 px-4 py-2.5 flex items-center justify-between border-b border-white/[0.04]">
            <span className="text-[10px] text-white/70 font-display">CrispClean</span>
            <div className="flex gap-3">
              <span className="text-[8px] text-white/40">Services</span>
              <span className="text-[8px] text-white/40">Gallery</span>
              <span className="text-[8px] text-white/40">Reviews</span>
            </div>
            <span className="text-[8px] px-2 py-1 rounded-full bg-cyan-400/80 text-[#05050A] font-semibold">Call Now</span>
          </div>
          <div className="absolute top-12 left-4 right-4">
            <span className="font-mono-label text-[7px] text-cyan-300">PRESSURE WASHING · MIAMI</span>
            <p className="font-display text-[18px] text-white leading-tight mt-1">Driveways looking new again.</p>
            <p className="text-[8px] text-white/45 mt-1.5 max-w-[60%]">Free quotes. Same-week service. Fully insured local crew.</p>
            <div className="mt-3 flex gap-1.5">
              <span className="text-[8px] px-2 py-1 rounded-full bg-white text-[#05050A] font-semibold">Get a quote</span>
              <span className="text-[8px] px-2 py-1 rounded-full border border-white/15 text-white/70">View work</span>
            </div>
          </div>
          {/* mock blocks */}
          <div className="absolute bottom-3 left-4 right-4 grid grid-cols-3 gap-1.5">
            <div className="h-12 rounded bg-white/[0.04] border border-white/[0.05]" />
            <div className="h-12 rounded bg-white/[0.04] border border-white/[0.05]" />
            <div className="h-12 rounded bg-cyan-400/[0.06] border border-cyan-300/15" />
          </div>
        </div>
      </div>
    </motion.div>

    {/* Mobile mock */}
    <motion.div
      initial={{ opacity: 0, x: 30, y: 30 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 1.1, delay: 0.2 }}
      viewport={{ once: true }}
      className="absolute -right-4 -bottom-10 sm:-right-8 sm:-bottom-12 w-[140px] sm:w-[170px]"
    >
      <div className="rounded-[24px] glass-strong p-1.5 shadow-2xl">
        <div className="rounded-[20px] bg-[#06070C] border border-white/[0.05] overflow-hidden aspect-[10/19]">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative px-2.5 py-3">
            <div className="flex items-center justify-between">
              <span className="text-[8px] text-white/70 font-display">CrispClean</span>
              <span className="w-4 h-4 rounded-full bg-cyan-400/80 inline-flex items-center justify-center">
                <Phone size={6} className="text-[#05050A]" strokeWidth={3} />
              </span>
            </div>
            <p className="font-display text-[12px] text-white mt-3 leading-tight">Driveways<br/>looking new.</p>
            <p className="text-[7px] text-white/40 mt-1">Free quotes • Same-week</p>
            <div className="mt-3 space-y-1.5">
              <div className="h-10 rounded bg-cyan-400/[0.08] border border-cyan-300/20" />
              <div className="h-10 rounded bg-white/[0.04] border border-white/[0.05]" />
              <div className="h-10 rounded bg-white/[0.04] border border-white/[0.05]" />
            </div>
            <div className="mt-3 h-7 rounded-full bg-white text-[#05050A] text-[7px] font-semibold flex items-center justify-center">
              Tap to call
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);

const Bento = ({ icon: Icon, label, className = "" }) => (
  <div className={`rounded-xl glass p-3 flex items-center gap-2.5 hover-glow ${className}`}>
    <div className="w-8 h-8 rounded-md bg-cyan-400/[0.08] border border-cyan-300/20 flex items-center justify-center">
      <Icon size={14} className="text-cyan-300" />
    </div>
    <span className="text-[12px] text-white">{label}</span>
  </div>
);

export const WebsiteDeepDive = () => {
  return (
    <section id="websites" data-testid="website-section" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/3 -right-32 w-[480px] h-[480px] rounded-full bg-blue-500/15 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
        {/* Mockup left */}
        <div className="relative order-2 lg:order-1">
          <WireframeMockup />
          <div className="mt-16 sm:mt-20 grid grid-cols-2 gap-3 max-w-md mx-auto">
            <Bento icon={Layout} label="Hero section" />
            <Bento icon={Image} label="Gallery" />
            <Bento icon={Star} label="Reviews" />
            <Bento icon={MessageSquare} label="Contact" />
            <Bento icon={Zap} label="Quote form" />
            <Bento icon={Smartphone} label="Mobile layout" />
          </div>
        </div>

        {/* Copy right */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            overline="WEBSITES · DEEP DIVE"
            title={
              <>
                Websites that look <span className="text-gradient-cyan">premium</span> and convert visitors into leads.
              </>
            }
            subtitle="A website should do more than sit online. It should explain what you do, build trust fast, and make it easy for customers to contact you."
            testid="website-heading"
          />

          <p className="mt-8 text-[14px] text-white/55 leading-relaxed max-w-xl">
            Every Vertex website is built to make your business look credible, modern, and easy
            to contact. Whether you need a simple professional presence or a more advanced site
            connected to lead capture systems, we build around your business goals.
          </p>

          <Reveal delay={0.1}>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2.5 max-w-lg">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-[13px] text-white/70">
                  <Check size={13} className="text-cyan-300 mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          <a
            href="tel:9549089619"
            data-testid="website-cta-call"
            className="mt-9 btn-primary inline-flex items-center gap-2 text-[13px]"
          >
            <Phone size={14} strokeWidth={2.5} />
            Call 954-908-9619 to start your website
          </a>
        </div>
      </div>
    </section>
  );
};

export default WebsiteDeepDive;
