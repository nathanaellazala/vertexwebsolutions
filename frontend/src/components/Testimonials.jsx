import { Star, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";

const TESTIMONIALS = [
  { quote: "Vertex helped us look more professional online and made it easier for customers to reach us.", name: "Local Business Owner", role: "Service Business" },
  { quote: "The AI receptionist concept immediately made sense. Missing calls used to mean missing opportunities.", name: "Business Owner", role: "Home Services" },
  { quote: "Our new website finally matches the quality of the work we do.", name: "Small Business Owner", role: "Local Business" },
  { quote: "Everything feels cleaner, more modern, and more organized now.", name: "Client", role: "Small Business" },
  { quote: "We started capturing leads after hours within the first week.", name: "Owner", role: "Pressure Washing" },
  { quote: "Looks like a brand. Not just a website.", name: "Owner", role: "Mobile Detailing" },
];

const Card = ({ quote, name, role, i }) => (
  <div
    data-testid={`testimonial-card-${i}`}
    className="w-[340px] sm:w-[400px] shrink-0 rounded-2xl glass hover-glow p-7"
  >
    <div className="flex items-center justify-between mb-5">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, k) => (
          <Star key={k} size={12} className="fill-cyan-300 text-cyan-300" />
        ))}
      </div>
      <Quote size={20} className="text-white/15" />
    </div>
    <p className="text-[15px] text-white/85 leading-relaxed font-display font-medium">&ldquo;{quote}&rdquo;</p>
    <div className="mt-6 pt-5 border-t border-white/[0.05] flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-500/20 border border-cyan-300/20 flex items-center justify-center text-[12px] font-mono-label text-cyan-300">
        {name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
      </div>
      <div>
        <p className="text-[13px] text-white">{name}</p>
        <p className="text-[11px] text-white/40 font-mono-label">{role}</p>
      </div>
    </div>
  </div>
);

export const Testimonials = () => {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section id="testimonials" data-testid="testimonials-section" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 mb-12">
        <SectionHeading
          align="center"
          overline="CLIENT FEEDBACK"
          title="What business owners are saying"
          subtitle="Real reactions to a real shift in how local businesses capture leads."
          testid="testimonials-heading"
        />
      </div>

      <div className="relative" style={{ maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)" }}>
        <div className="flex gap-5 marquee-x w-max">
          {loop.map((t, i) => (
            <Card key={i} {...t} i={i} />
          ))}
        </div>
      </div>

      <p className="mt-10 text-center text-[10px] font-mono-label text-white/30">
        PLACEHOLDER FEEDBACK · TO BE REPLACED WITH REAL CLIENT TESTIMONIALS
      </p>
    </section>
  );
};

export default Testimonials;
