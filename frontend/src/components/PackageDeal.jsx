import { Eye, MousePointerClick, PhoneCall, Sparkles, Send, Megaphone, TrendingUp, Phone } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const STEPS = [
  { icon: Eye, title: "Sees your business online", note: "Social + Search" },
  { icon: MousePointerClick, title: "Visits your website", note: "Premium presence" },
  { icon: PhoneCall, title: "Calls or submits form", note: "Multi-channel intent" },
  { icon: Sparkles, title: "AI receptionist captures lead", note: "24/7 intake" },
  { icon: Send, title: "Lead sent to owner", note: "Instant alert" },
  { icon: Megaphone, title: "Social keeps brand visible", note: "Always-on" },
  { icon: TrendingUp, title: "More trust → more inquiries", note: "Compounding growth" },
];

export const PackageDeal = () => {
  return (
    <section id="package" data-testid="package-section" className="relative py-24 sm:py-32 overflow-hidden">
      {/* bg */}
      <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          align="center"
          overline="THE ECOSYSTEM"
          title={
            <>
              Available separately. <span className="text-gradient-cyan">More powerful together.</span>
            </>
          }
          subtitle="Start with one service or combine the AI receptionist, website, and social media marketing into a complete lead-capture system for your business."
          testid="package-heading"
        />

        {/* Flow diagram */}
        <div className="mt-16 relative">
          {/* connecting line */}
          <div className="hidden md:block absolute left-0 right-0 top-[44px] h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
          <div className="hidden md:block absolute left-0 right-0 top-[44px] h-px">
            <div className="absolute top-1/2 -translate-y-1/2 w-24 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent sweep" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4 md:gap-2">
            {STEPS.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex flex-col items-center text-center group" data-testid={`flow-step-${i}`}>
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/20 blur-xl transition-colors" />
                    <div className="relative w-[88px] h-[88px] rounded-full glass border-cyan-300/15 flex items-center justify-center">
                      <s.icon size={22} className="text-cyan-300" strokeWidth={1.75} />
                      <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#0B0C13] border border-cyan-300/30 font-mono-label text-[9px] text-cyan-300 flex items-center justify-center">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-[12px] text-white leading-tight font-medium px-1">{s.title}</p>
                  <p className="mt-1 text-[10px] text-white/40 font-mono-label">{s.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <p className="text-[15px] sm:text-[17px] text-white/60 leading-relaxed">
              Instead of having disconnected tools, Vertex builds a connected digital
              presence that helps your business look better, respond faster, and capture
              more opportunities.
            </p>
            <a
              href="tel:3054693585"
              data-testid="package-cta-call"
              className="mt-8 inline-flex items-center gap-2 btn-primary text-[14px]"
            >
              <Phone size={15} strokeWidth={2.5} />
              Call 305-469-3585 to discuss your custom package
            </a>
            <p className="mt-4 text-[11px] text-white/30 font-mono-label">NO PRICES ONLINE · CALL TO DISCUSS YOUR SETUP</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default PackageDeal;
