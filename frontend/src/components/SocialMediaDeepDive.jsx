import { Phone, Heart, MessageCircle, Bookmark, Share2, Check } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const FEATURES = [
  "Branded content",
  "Promotional graphics",
  "Service highlights",
  "Before-and-after concepts",
  "Local trust-building posts",
  "Consistent visual identity",
  "Campaign development",
  "Social media strategy",
];

const POSTS = [
  { tag: "BEFORE / AFTER", title: "Driveway restoration · Coral Gables", gradient: "from-cyan-500/30 to-blue-500/10" },
  { tag: "SERVICE", title: "Full interior detail · 90 minutes", gradient: "from-blue-500/30 to-cyan-500/10" },
  { tag: "TESTIMONIAL", title: "\"Booked in under 60 seconds.\"", gradient: "from-cyan-400/25 to-fuchsia-500/10" },
  { tag: "PROMO", title: "Free quote · 24-hour turnaround", gradient: "from-emerald-400/25 to-cyan-500/10" },
  { tag: "BEFORE / AFTER", title: "Patio glow-up · Brickell", gradient: "from-cyan-500/30 to-blue-500/10" },
  { tag: "LOCAL", title: "Trusted by Miami homeowners", gradient: "from-blue-500/30 to-cyan-500/10" },
];

const PostCard = ({ tag, title, gradient }) => (
  <div className="rounded-2xl glass overflow-hidden hover-glow">
    <div className={`relative aspect-[4/3] bg-gradient-to-br ${gradient} overflow-hidden`}>
      <div className="absolute inset-0 dot-bg opacity-40" />
      <div className="absolute top-3 left-3 font-mono-label text-[9px] text-white/90 px-2 py-1 rounded-full bg-black/40 border border-white/10">
        {tag}
      </div>
      {/* mock subject */}
      <div className="absolute inset-6 rounded-xl border border-white/10 bg-black/20 flex items-center justify-center">
        <span className="font-display text-[13px] text-white/80 text-center leading-tight px-3">
          {title}
        </span>
      </div>
    </div>
    <div className="px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4 text-white/60">
        <span className="flex items-center gap-1 text-[11px]"><Heart size={12} /> 412</span>
        <span className="flex items-center gap-1 text-[11px]"><MessageCircle size={12} /> 38</span>
        <span className="flex items-center gap-1 text-[11px]"><Bookmark size={12} /> 21</span>
      </div>
      <Share2 size={12} className="text-white/40" />
    </div>
  </div>
);

const ScrollingFeed = ({ direction = "down" }) => {
  const loop = [...POSTS, ...POSTS];
  return (
    <div className="relative h-[560px] overflow-hidden mask-gradient-y" style={{ maskImage: "linear-gradient(180deg, transparent, black 12%, black 88%, transparent)", WebkitMaskImage: "linear-gradient(180deg, transparent, black 12%, black 88%, transparent)" }}>
      <div className={`flex flex-col gap-4 ${direction === "down" ? "scroll-y" : "scroll-y"}`} style={direction === "up" ? { animationDirection: "reverse" } : {}}>
        {loop.map((p, i) => (
          <PostCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
};

export const SocialMediaDeepDive = () => {
  return (
    <section id="social-media" data-testid="social-section" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-[420px] h-[420px] rounded-full bg-fuchsia-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-[420px] h-[420px] rounded-full bg-cyan-500/15 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
        {/* Copy */}
        <div>
          <SectionHeading
            overline="SOCIAL · DEEP DIVE"
            title={
              <>
                Turn attention <span className="text-gradient-cyan">into trust.</span>
              </>
            }
            subtitle="Your social media should make your business look active, professional, and worth contacting."
            testid="social-heading"
          />

          <p className="mt-8 text-[14px] text-white/55 leading-relaxed max-w-xl">
            Vertex creates social media marketing assets and strategies that help your
            business stay visible. From branded posts to service highlights and
            before-and-after content, we help you show customers why they should choose you.
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
            href="tel:3054693585"
            data-testid="social-cta-call"
            className="mt-9 btn-primary inline-flex items-center gap-2 text-[13px]"
          >
            <Phone size={14} strokeWidth={2.5} />
            Call 305-469-3585 to map out your strategy
          </a>
        </div>

        {/* Feed */}
        <div className="relative grid grid-cols-2 gap-4">
          <ScrollingFeed direction="down" />
          <div className="mt-12">
            <ScrollingFeed direction="up" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaDeepDive;
