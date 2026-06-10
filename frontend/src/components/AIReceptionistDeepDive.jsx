import { motion } from "framer-motion";
import { Phone, PhoneIncoming, Mic, MapPin, Calendar, User, Sparkles, Check } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const CAPABILITIES = [
  "Answer incoming calls",
  "Ask the right questions",
  "Collect customer name and phone",
  "Collect service needed",
  "Collect location",
  "Collect preferred time",
  "Answer basic business questions",
  "Send summaries to the owner",
];

const BEST_FOR = [
  "Pressure washing", "Mobile detailing", "Cleaning companies",
  "Food trucks", "Catering", "Contractors",
  "Barbers & salons", "Med spas", "Landscaping",
];

const TRANSCRIPT = [
  { role: "user", text: "Hi, do you do mobile detailing?" },
  { role: "ai", text: "Yes — we do full interior and exterior. Can I get your name?" },
  { role: "user", text: "Marcus. I'm in Brickell, zip 33131." },
  { role: "ai", text: "Great. What day works best — this week?" },
  { role: "user", text: "Thursday afternoon." },
  { role: "ai", text: "Booked. You'll get a confirmation text shortly, Marcus." },
];

const PhoneFrame = () => (
  <div className="relative w-full max-w-[380px] mx-auto" data-testid="ai-phone-frame">
    <div className="absolute -inset-8 bg-[radial-gradient(circle,rgba(0,229,255,0.18),transparent_70%)] blur-2xl pointer-events-none" />
    <div className="relative rounded-[36px] glass-strong p-2 shadow-2xl" style={{ boxShadow: "0 30px 80px -20px rgba(0,229,255,0.35), inset 0 1px 0 rgba(255,255,255,0.08)" }}>
      <div className="rounded-[28px] bg-[#05050A] border border-white/[0.05] overflow-hidden">
        {/* status bar */}
        <div className="flex items-center justify-between px-5 py-3 font-mono-label text-[9px] text-white/50">
          <span>09:41</span>
          <span className="w-12 h-1 rounded-full bg-white/10" />
          <span>VERTEX AI</span>
        </div>
        {/* caller */}
        <div className="px-5 pt-2 pb-5 text-center">
          <span className="font-mono-label text-[10px] text-cyan-300">ON CALL · 00:42</span>
          <h4 className="font-display text-[22px] text-white mt-2">Vertex Assistant</h4>
          <p className="text-[12px] text-white/50">Routing — Mobile Detailing</p>

          {/* avatar with rings */}
          <div className="relative mx-auto mt-5 w-24 h-24">
            <span className="absolute inset-0 rounded-full border border-cyan-300/30 pulse-glow" />
            <span className="absolute inset-3 rounded-full border border-cyan-300/40 pulse-glow" style={{ animationDelay: "0.6s" }} />
            <div className="absolute inset-5 rounded-full bg-gradient-to-br from-cyan-400/40 to-blue-500/20 flex items-center justify-center">
              <Mic size={22} className="text-cyan-100" />
            </div>
          </div>

          {/* waveform */}
          <div className="flex items-end gap-[3px] h-10 justify-center mt-5">
            {[0.4, 0.7, 1, 0.6, 0.85, 0.45, 0.9, 0.55, 0.7, 0.3, 0.8, 0.5, 0.95, 0.4].map((s, i) => (
              <span
                key={i}
                className="wave-bar w-[3px] rounded-full bg-gradient-to-t from-cyan-500 to-cyan-200"
                style={{ height: `${s * 100}%`, animationDelay: `${i * 0.08}s` }}
              />
            ))}
          </div>
        </div>

        {/* transcript */}
        <div className="px-4 pb-4 space-y-2 max-h-[200px] overflow-hidden">
          {TRANSCRIPT.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              viewport={{ once: true }}
              className={`max-w-[80%] px-3 py-2 rounded-2xl text-[11.5px] leading-snug ${
                t.role === "user"
                  ? "bg-white/[0.05] border border-white/[0.06] text-white/85 rounded-tl-md"
                  : "ml-auto bg-cyan-400/[0.08] border border-cyan-300/20 text-cyan-50 rounded-tr-md"
              }`}
            >
              {t.text}
            </motion.div>
          ))}
        </div>

        {/* lead card */}
        <div className="m-3 mt-1 p-4 rounded-2xl bg-[#0B0C13] border border-cyan-300/25" style={{ boxShadow: "0 10px 30px -10px rgba(0,229,255,0.4)" }}>
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono-label text-[10px] text-cyan-300 inline-flex items-center gap-1.5">
              <Sparkles size={11} /> LEAD CAPTURED
            </span>
            <Check size={13} className="text-cyan-300" />
          </div>
          <div className="grid grid-cols-2 gap-3 text-[11px]">
            <div><p className="text-white/40 mb-0.5 flex items-center gap-1"><User size={9} />Name</p><p className="text-white">Marcus</p></div>
            <div><p className="text-white/40 mb-0.5 flex items-center gap-1"><Phone size={9} />Phone</p><p className="text-white">••• 3131</p></div>
            <div><p className="text-white/40 mb-0.5 flex items-center gap-1"><MapPin size={9} />Area</p><p className="text-white">Brickell</p></div>
            <div><p className="text-white/40 mb-0.5 flex items-center gap-1"><Calendar size={9} />When</p><p className="text-white">Thu PM</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const AIReceptionistDeepDive = () => {
  return (
    <section id="ai-receptionist" data-testid="ai-section" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-[420px] h-[420px] rounded-full bg-cyan-500/15 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
        {/* Left copy */}
        <div>
          <SectionHeading
            overline="AI RECEPTIONIST · DEEP DIVE"
            title={
              <>
                Your business, <span className="text-gradient-cyan">answering calls</span> even when you&rsquo;re busy.
              </>
            }
            subtitle="Whether you're on a job, driving, serving customers, or closed for the day, the AI receptionist helps make sure new inquiries are not ignored."
            testid="ai-heading"
          />

          <div className="mt-10 grid sm:grid-cols-2 gap-8">
            <Reveal>
              <div>
                <span className="font-mono-label text-[10px] text-white/40">WHAT IT CAN DO</span>
                <ul className="mt-4 space-y-2.5">
                  {CAPABILITIES.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-[13px] text-white/75">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-300 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <span className="font-mono-label text-[10px] text-white/40">BEST FOR</span>
                <ul className="mt-4 grid grid-cols-1 gap-2.5">
                  {BEST_FOR.map((b) => (
                    <li key={b} className="text-[13px] text-white/75">{b}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 p-5 rounded-2xl glass flex items-center justify-between flex-wrap gap-4">
              <p className="text-[14px] text-white/70">
                Hear what it could sound like for your business &mdash;
              </p>
              <a
                href="tel:9549089619"
                data-testid="ai-cta-call"
                className="btn-primary inline-flex items-center gap-2 text-[13px]"
              >
                <PhoneIncoming size={14} strokeWidth={2.5} />
                Call 954-908-9619
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right phone */}
        <div className="relative">
          <PhoneFrame />
        </div>
      </div>
    </section>
  );
};

export default AIReceptionistDeepDive;
