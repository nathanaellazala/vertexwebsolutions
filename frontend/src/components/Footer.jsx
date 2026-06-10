import { Phone } from "lucide-react";
import VertexLogo from "./VertexLogo";

const NAV = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "AI Receptionist", href: "/#ai-receptionist" },
  { label: "Websites", href: "/#websites" },
  { label: "Social Media", href: "/#social-media" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

const LEGAL = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export const Footer = () => {
  return (
    <footer data-testid="footer" className="relative border-t border-white/[0.05] pt-16 pb-10 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr] gap-12">
          <div>
            <VertexLogo size={28} />
            <p className="mt-5 max-w-md text-[14px] text-white/50 leading-relaxed">
              Luxury digital systems for local businesses — websites, AI voice
              receptionists, and social media marketing.
            </p>
            <a
              href="tel:9549089619"
              data-testid="footer-cta-call"
              className="mt-6 btn-primary inline-flex items-center gap-2 text-[13px]"
            >
              <Phone size={14} strokeWidth={2.5} />
              Call 954-908-9619
            </a>
          </div>

          <div>
            <p className="font-mono-label text-[10px] text-white/40 mb-5">NAVIGATE</p>
            <ul className="space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    data-testid={`footer-link-${n.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-[14px] text-white/70 hover:text-cyan-300 transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono-label text-[10px] text-white/40 mb-5">CONTACT & LEGAL</p>
            <ul className="space-y-3">
              <li>
                <a href="tel:9549089619" data-testid="footer-phone" className="text-[14px] text-white hover:text-cyan-300 transition-colors">
                  954-908-9619
                </a>
              </li>
              {LEGAL.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    data-testid={`footer-legal-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-[14px] text-white/70 hover:text-cyan-300 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[12px] text-white/35 font-mono-label">
            © 2026 VERTEX WEB SOLUTIONS · ALL RIGHTS RESERVED
          </p>
          <p className="text-[11px] text-white/30 font-mono-label">
            BUILT IN MIAMI · LUXURY DIGITAL SYSTEMS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
