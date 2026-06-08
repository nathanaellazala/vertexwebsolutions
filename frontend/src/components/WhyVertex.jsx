import { Wrench, Target, BrainCircuit, Diamond } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const REASONS = [
  {
    n: "01",
    icon: Wrench,
    title: "Custom-built around you",
    desc: "We do not believe every business needs the same cookie-cutter website. We build around your services, your customers, and your goals.",
  },
  {
    n: "02",
    icon: Target,
    title: "Designed to capture leads",
    desc: "Every page, button, call flow, and section is designed to make it easier for customers to contact you.",
  },
  {
    n: "03",
    icon: BrainCircuit,
    title: "Modern AI advantage",
    desc: "We help local businesses use AI in practical ways, starting with call answering and customer intake.",
  },
  {
    n: "04",
    icon: Diamond,
    title: "Luxury tech feel",
    desc: "Your business deserves a digital presence that looks polished, modern, and trustworthy.",
  },
];

export const WhyVertex = () => {
  return (
    <section id="why" data-testid="why-section" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          overline="WHY VERTEX"
          title={
            <>
              Not just a website company. <span className="text-gradient-cyan">A growth system partner.</span>
            </>
          }
          testid="why-heading"
        />

        <div className="mt-16 grid sm:grid-cols-2 gap-4">
          {REASONS.map((r, i) => (
            <Reveal key={r.n} delay={i * 0.08}>
              <div
                data-testid={`why-card-${r.n}`}
                className="relative h-full rounded-2xl glass hover-glow p-7 overflow-hidden group"
              >
                <span
                  className="absolute right-5 top-4 font-display font-semibold text-[110px] leading-none text-white/[0.025] select-none pointer-events-none"
                >
                  {r.n}
                </span>
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/5 border border-cyan-300/20 flex items-center justify-center mb-5">
                    <r.icon size={20} className="text-cyan-300" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-[22px] sm:text-[26px] text-white font-semibold">{r.title}</h3>
                  <p className="mt-3 text-[14px] text-white/55 leading-relaxed max-w-md">{r.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVertex;
