import { useState } from "react";
import { PhoneCall, Globe, Megaphone, Layers, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

const OPTIONS = [
  {
    id: "calls",
    icon: PhoneCall,
    label: "I need more calls answered",
    detail: "Add the AI Voice Receptionist. It answers 24/7, captures the lead details, and sends them straight to you — even when you're on a job or closed.",
  },
  {
    id: "website",
    icon: Globe,
    label: "I need a better website",
    detail: "We design a fast, modern, mobile-first site built around your services with clear calls to action that convert visitors into inquiries.",
  },
  {
    id: "social",
    icon: Megaphone,
    label: "I need better social media",
    detail: "We craft and produce branded content, before-and-after posts, and campaign ideas that keep your business visible to local customers.",
  },
  {
    id: "full",
    icon: Layers,
    label: "I want the full package",
    detail: "AI receptionist + custom website + social media marketing — connected into one growth system designed to compound over time.",
  },
];

export const InteractiveDemo = () => {
  const [active, setActive] = useState("calls");
  const current = OPTIONS.find((o) => o.id === active);

  return (
    <section id="demo" data-testid="demo-section" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          align="center"
          overline="LIVE WALKTHROUGH"
          title={
            <>
              See what Vertex could <span className="text-gradient-cyan">build for your business.</span>
            </>
          }
          subtitle="Pick the path that fits — then call us to walk through exactly how it would work."
          testid="demo-heading"
        />

        <div className="mt-14 grid lg:grid-cols-[1.1fr_1fr] gap-6">
          {/* Options */}
          <div className="grid sm:grid-cols-2 gap-3">
            {OPTIONS.map((o) => (
              <button
                key={o.id}
                onClick={() => setActive(o.id)}
                data-testid={`demo-option-${o.id}`}
                className={`text-left rounded-2xl p-5 transition-all duration-300 border ${
                  active === o.id
                    ? "bg-gradient-to-br from-cyan-500/[0.12] to-blue-500/[0.05] border-cyan-300/40 shadow-[0_0_0_1px_rgba(0,229,255,0.08),0_20px_60px_-20px_rgba(0,229,255,0.4)]"
                    : "glass hover-glow"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                    active === o.id ? "bg-cyan-400/15 border border-cyan-300/40" : "bg-white/[0.04] border border-white/[0.06]"
                  }`}>
                    <o.icon size={18} className="text-cyan-300" strokeWidth={1.75} />
                  </div>
                  <span className={`w-2 h-2 rounded-full transition-all ${active === o.id ? "bg-cyan-300 pulse-glow" : "bg-white/15"}`} />
                </div>
                <p className="mt-4 font-display text-[17px] text-white leading-tight">{o.label}</p>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="relative rounded-2xl glass-strong p-7 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
            <div className="relative">
              <span className="font-mono-label text-[10px] text-cyan-300">VERTEX RECOMMENDATION</span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <h4 className="mt-3 font-display text-[26px] sm:text-[30px] text-white font-semibold leading-tight">
                    {current.label}
                  </h4>
                  <p className="mt-4 text-[14px] text-white/65 leading-relaxed">{current.detail}</p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 pt-6 border-t border-white/[0.05]">
                <a
                  href="tel:3054693585"
                  data-testid="demo-cta-call"
                  className="btn-primary inline-flex items-center gap-2 text-[13px]"
                >
                  <Phone size={14} strokeWidth={2.5} />
                  Call 305-469-3585
                </a>
                <a
                  href="tel:3054693585"
                  data-testid="demo-cta-tap"
                  className="sm:hidden mt-3 btn-secondary w-full justify-center inline-flex items-center gap-2 text-[13px]"
                >
                  Tap to call now <ArrowRight size={14} />
                </a>
                <p className="mt-4 text-[11px] text-white/35 font-mono-label">
                  CALL TO DISCUSS YOUR CUSTOM SETUP
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
