import { Phone, Globe, Megaphone, ArrowUpRight, Check } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const SERVICES = [
  {
    id: "ai-voice",
    overline: "01 / RECEPTIONIST",
    icon: Phone,
    title: "AI Voice Call Receptionist",
    desc: "Never let a missed call become a missed opportunity. Our AI voice receptionist answers calls, collects customer info, responds to common questions, captures quote requests, and sends lead details directly to your business.",
    features: [
      "24/7 call answering",
      "Lead capture & customer intake",
      "Appointment / quote requests",
      "FAQ responses",
      "Lead summaries to owner",
    ],
    cta: "Call 305-469-3585 to request a demo",
    anchor: "#ai-receptionist",
  },
  {
    id: "websites",
    overline: "02 / WEBSITES",
    icon: Globe,
    title: "Custom Website Building",
    desc: "Modern, high-converting websites that make your business look professional and help customers take action. Your site should not just exist — it should build trust, explain your services clearly, and turn visitors into leads.",
    features: [
      "Custom modern design",
      "Mobile-first layouts",
      "Click-to-call & lead forms",
      "Gallery & testimonial sections",
      "SEO-ready structure",
    ],
    cta: "Call 305-469-3585 to build your website",
    anchor: "#websites",
  },
  {
    id: "social",
    overline: "03 / SOCIAL",
    icon: Megaphone,
    title: "Social Media Marketing",
    desc: "We help your business stay visible with social media content designed to build credibility, show your work, and keep your brand in front of local customers.",
    features: [
      "Content strategy",
      "Branded posts & graphics",
      "Service highlights",
      "Before-and-after content",
      "Consistent online presence",
    ],
    cta: "Call 305-469-3585 to grow your presence",
    anchor: "#social-media",
  },
];

export const ServicesOverview = () => {
  return (
    <section id="services" data-testid="services-section" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          overline="WHAT WE DO"
          title={
            <>
              One digital growth system. <span className="text-gradient-cyan">Built around your business.</span>
            </>
          }
          subtitle="Choose one service or combine all three into a custom package designed to help your business get discovered, capture leads, and communicate faster."
          testid="services-heading"
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.08}>
              <div
                data-testid={`service-card-${s.id}`}
                className="group relative h-full rounded-2xl glass hover-glow p-7 flex flex-col overflow-hidden"
              >
                {/* Sweep highlight */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  <div className="absolute -inset-y-10 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent skew-x-12 sweep" style={{ animationDelay: `${i * 0.6}s` }} />
                </div>

                <div className="relative flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/5 border border-cyan-300/20 flex items-center justify-center">
                    <s.icon size={20} className="text-cyan-300" strokeWidth={1.75} />
                  </div>
                  <span className="font-mono-label text-[10px] text-white/30">{s.overline}</span>
                </div>

                <h3 className="relative font-display text-[24px] sm:text-[28px] text-white font-semibold leading-tight">
                  {s.title}
                </h3>
                <p className="relative mt-3 text-[14px] text-white/55 leading-relaxed">{s.desc}</p>

                <ul className="relative mt-6 space-y-2.5 flex-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px] text-white/70">
                      <span className="mt-0.5 w-4 h-4 rounded-full border border-cyan-300/30 bg-cyan-400/10 flex items-center justify-center shrink-0">
                        <Check size={9} className="text-cyan-300" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-7 pt-5 border-t border-white/[0.05] flex items-center justify-between">
                  <a
                    href="tel:3054693585"
                    data-testid={`service-cta-${s.id}`}
                    className="text-[13px] text-white inline-flex items-center gap-2 group/btn"
                  >
                    {s.cta}
                    <ArrowUpRight size={14} className="text-cyan-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
