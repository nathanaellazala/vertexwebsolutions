import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, ExternalLink, Phone } from "lucide-react";
import { motion } from "framer-motion";
import CursorGlow from "./CursorGlow";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

/**
 * Portfolio entries.
 * To add a new site, append an object with: { client, category, year, summary, tags, url, accent }
 * Replace the `preview` element with a thumbnail (illustrative SVG/CSS) or screenshot if desired.
 */
const PROJECTS = [
  {
    id: "crispclean",
    client: "CrispClean",
    category: "Pressure Washing",
    year: "2026",
    summary:
      "Mobile-first lead capture site with quote-flow, gallery, and click-to-call. Doubled inbound inquiries within the first month.",
    tags: ["Website", "Lead Capture", "Mobile"],
    url: "#",
    accent: "from-cyan-500/30 to-blue-500/10",
  },
  {
    id: "vertex-detail",
    client: "Vertex Detail",
    category: "Mobile Detailing",
    year: "2026",
    summary:
      "Booking-focused site with service grid, before-and-after gallery, and AI receptionist handling after-hours quotes.",
    tags: ["Website", "AI Receptionist"],
    url: "#",
    accent: "from-blue-500/30 to-cyan-500/10",
  },
  {
    id: "lumen-spa",
    client: "Lumen Med Spa",
    category: "Med Spa",
    year: "2026",
    summary:
      "Premium brand presence with treatment menu, membership tiers, and social campaign assets for paid traffic.",
    tags: ["Website", "Social Media"],
    url: "#",
    accent: "from-fuchsia-500/25 to-cyan-500/10",
  },
  {
    id: "harbor-eats",
    client: "Harbor Eats",
    category: "Food Truck",
    year: "2026",
    summary:
      "Daily-location map, catering inquiry form, menu page, and Instagram-ready promo graphics.",
    tags: ["Website", "Social Media"],
    url: "#",
    accent: "from-emerald-400/25 to-cyan-500/10",
  },
  {
    id: "atlas-grounds",
    client: "Atlas Grounds",
    category: "Landscaping",
    year: "2026",
    summary:
      "Seasonal service site with project portfolio, online estimate request, and AI call answering for emergency cleanups.",
    tags: ["Website", "AI Receptionist", "Lead Capture"],
    url: "#",
    accent: "from-amber-400/25 to-cyan-500/10",
  },
  {
    id: "northline-hvac",
    client: "Northline HVAC",
    category: "HVAC",
    year: "2026",
    summary:
      "24/7 emergency dispatch presence — fast-loading service pages, click-to-call hero, and overnight AI receptionist.",
    tags: ["Website", "AI Receptionist"],
    url: "#",
    accent: "from-rose-400/25 to-cyan-500/10",
  },
];

const ProjectThumb = ({ accent, client, category }) => (
  <div className={`relative aspect-[16/10] rounded-xl bg-gradient-to-br ${accent} overflow-hidden border border-white/[0.05]`}>
    <div className="absolute inset-0 grid-bg opacity-30" />
    <div className="absolute inset-0 dot-bg opacity-30" />
    {/* mock browser */}
    <div className="absolute inset-4 rounded-lg glass overflow-hidden">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.05]">
        <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
        <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
        <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
        <span className="ml-auto font-mono-label text-[8px] text-white/40">{client.toLowerCase().replace(/\s+/g, "")}.co</span>
      </div>
      <div className="px-4 py-3">
        <span className="font-mono-label text-[8px] text-cyan-300">{category.toUpperCase()}</span>
        <p className="font-display text-[15px] text-white leading-tight mt-1">{client}</p>
        <div className="mt-3 space-y-1">
          <div className="h-1.5 w-3/4 rounded bg-white/[0.06]" />
          <div className="h-1.5 w-1/2 rounded bg-white/[0.06]" />
        </div>
        <div className="mt-3 flex gap-1.5">
          <span className="text-[7px] px-2 py-0.5 rounded-full bg-white text-[#05050A] font-semibold">Call</span>
          <span className="text-[7px] px-2 py-0.5 rounded-full border border-white/15 text-white/70">Services</span>
        </div>
      </div>
    </div>
  </div>
);

const ProjectCard = ({ p, i }) => (
  <Reveal delay={(i % 3) * 0.08}>
    <a
      href={p.url}
      data-testid={`portfolio-card-${p.id}`}
      className="group block rounded-2xl glass hover-glow p-5 h-full"
    >
      <ProjectThumb accent={p.accent} client={p.client} category={p.category} />
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <span className="font-mono-label text-[10px] text-white/40">{p.category} · {p.year}</span>
          <h3 className="font-display text-[22px] text-white font-semibold leading-tight mt-1">{p.client}</h3>
        </div>
        <ArrowUpRight size={18} className="text-cyan-300 mt-1 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
      </div>
      <p className="mt-3 text-[13px] text-white/55 leading-relaxed">{p.summary}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <span
            key={t}
            className="text-[10px] font-mono-label px-2 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-white/60"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  </Reveal>
);

export const Portfolio = () => {
  return (
    <div className="relative" data-testid="portfolio-page">
      <CursorGlow />
      <Navbar />

      <main className="relative pt-32 sm:pt-36 lg:pt-40 pb-16">
        {/* bg */}
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full bg-[#0070F3]/15 blur-[120px] orb-anim pointer-events-none" />
        <div className="absolute top-40 -right-32 w-[480px] h-[480px] rounded-full bg-[#00E5FF]/10 blur-[120px] orb-anim pointer-events-none" style={{ animationDelay: "5s" }} />

        <section className="relative mx-auto max-w-7xl px-5 lg:px-8">
          {/* back to home */}
          <Link
            to="/"
            data-testid="portfolio-back-home"
            className="inline-flex items-center gap-2 text-[12px] text-white/50 hover:text-cyan-300 transition-colors font-mono-label"
          >
            <ArrowLeft size={13} />
            BACK TO HOME
          </Link>

          {/* heading */}
          <div className="mt-8 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 glow-pill"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 pulse-glow" />
              <span className="font-mono-label text-[10px]">PORTFOLIO · SELECTED WORK</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-display mt-6 text-[40px] sm:text-[60px] lg:text-[72px] leading-[0.98] font-semibold text-gradient"
            >
              Sites built to <span className="text-gradient-cyan">capture leads.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-xl text-[15px] sm:text-[17px] text-white/60 leading-relaxed"
            >
              A snapshot of recent Vertex builds — websites, AI receptionists, and
              social media systems designed to make local businesses look premium
              and convert visitors into inquiries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="tel:9549089619"
                data-testid="portfolio-cta-call"
                className="btn-primary inline-flex items-center gap-2 text-[13px]"
              >
                <Phone size={14} strokeWidth={2.5} />
                Call 954-908-9619
              </a>
              <Link
                to="/#services"
                data-testid="portfolio-cta-services"
                className="btn-secondary inline-flex items-center gap-2 text-[13px]"
              >
                See services <ExternalLink size={13} />
              </Link>
            </motion.div>
          </div>

          {/* stats strip */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { k: "Sites shipped", v: "20+" },
              { k: "Industries served", v: "18" },
              { k: "Avg. mobile speed", v: "< 2s" },
              { k: "After-hours capture", v: "24/7" },
            ].map((s) => (
              <div key={s.k} className="rounded-xl glass p-5">
                <p className="font-display text-[26px] sm:text-[30px] text-white font-semibold">{s.v}</p>
                <p className="font-mono-label text-[10px] text-white/40 mt-1">{s.k}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="relative mx-auto max-w-7xl px-5 lg:px-8 mt-24">
          <SectionHeading
            overline="RECENT BUILDS"
            title={<>Selected <span className="text-gradient-cyan">case studies.</span></>}
            subtitle="Each project is built around a specific local business — its services, its customers, and the way it actually books work."
            testid="portfolio-section-heading"
          />

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.id} p={p} i={i} />
            ))}
          </div>

          <p className="mt-10 text-center font-mono-label text-[10px] text-white/30">
            PLACEHOLDER PROJECTS · REPLACE WITH YOUR ACTUAL CLIENT WORK
          </p>
        </section>

        {/* Final mini CTA */}
        <section className="relative mx-auto max-w-4xl px-5 lg:px-8 mt-24 text-center">
          <Reveal>
            <span className="font-mono-label text-[11px] text-cyan-300">
              READY TO BE NEXT?
            </span>
            <h2 className="font-display mt-5 text-[32px] sm:text-[48px] lg:text-[56px] leading-[1.02] font-semibold text-gradient">
              Let&rsquo;s build something <span className="text-gradient-cyan">for your business.</span>
            </h2>
            <p className="mt-5 text-[14px] sm:text-[16px] text-white/55 max-w-xl mx-auto">
              Tell us what you need — a custom website, AI receptionist, social media, or the full package — and we&rsquo;ll map it out on a quick call.
            </p>
            <a
              href="tel:9549089619"
              data-testid="portfolio-final-cta"
              className="mt-8 inline-flex items-center gap-2 btn-primary text-[14px]"
            >
              <Phone size={15} strokeWidth={2.5} />
              Call 954-908-9619
            </a>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
