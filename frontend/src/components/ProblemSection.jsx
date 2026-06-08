import { PhoneOff, Globe2, BarChart3 } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const PROBLEMS = [
  {
    icon: PhoneOff,
    title: "Missed calls",
    desc: "When customers call and nobody answers, they usually call the next business. An unanswered phone can mean a lost job.",
    accent: "from-rose-400/30 to-rose-500/0",
  },
  {
    icon: Globe2,
    title: "Weak online presence",
    desc: "If your website looks outdated, loads slowly, or doesn't exist, customers may question whether your business is professional.",
    accent: "from-amber-400/30 to-amber-500/0",
  },
  {
    icon: BarChart3,
    title: "Inconsistent marketing",
    desc: "Posting randomly on social media is not a strategy. Your business needs a consistent presence that builds trust and keeps you visible.",
    accent: "from-cyan-400/30 to-cyan-500/0",
  },
];

export const ProblemSection = () => {
  return (
    <section id="problem" data-testid="problem-section" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          overline="THE LEAK"
          title={
            <>
              Most businesses are <span className="text-gradient-cyan">losing leads</span> without realizing it.
            </>
          }
          subtitle="Three quiet problems cost local businesses real revenue every week. Vertex helps solve all three with one connected digital system."
          testid="problem-heading"
        />

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div
                data-testid={`problem-card-${i}`}
                className="group relative h-full rounded-2xl glass hover-glow p-7 overflow-hidden"
              >
                <div className={`absolute -top-24 -right-24 w-56 h-56 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-6 group-hover:border-cyan-300/40 transition-colors">
                    <p.icon size={20} className="text-cyan-300" strokeWidth={1.75} />
                  </div>
                  <span className="font-mono-label text-[10px] text-white/40">PROBLEM {String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-[24px] sm:text-[28px] text-white mt-1.5 mb-3 font-semibold">
                    {p.title}
                  </h3>
                  <p className="text-[14px] text-white/55 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-center text-[15px] text-white/50">
            <span className="text-white">Vertex</span> helps solve all three with one connected digital system.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default ProblemSection;
