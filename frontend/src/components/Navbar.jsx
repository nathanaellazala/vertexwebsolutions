import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import VertexLogo from "./VertexLogo";

const NAV_ITEMS = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "AI Receptionist", href: "/#ai-receptionist" },
  { label: "Websites", href: "/#websites" },
  { label: "Social Media", href: "/#social-media" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Developer", href: "/developer" },
  { label: "Contact", href: "/#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 transition-all duration-500 ${
            scrolled
              ? "glass-strong"
              : "border border-white/[0.04] bg-[#05050A]/30 backdrop-blur-md"
          }`}
        >
          <a href="/#home" data-testid="nav-logo-link" className="shrink-0">
            <VertexLogo size={26} />
          </a>

          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-[13px] text-white/70 hover:text-white px-3 py-2 rounded-full transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:9549089619"
              data-testid="nav-cta-call"
              className="hidden sm:inline-flex items-center gap-2 btn-primary text-[13px] py-2.5 px-4"
            >
              <Phone size={14} strokeWidth={2.5} />
              <span>954-908-9619</span>
            </a>
            <a
              href="tel:9549089619"
              data-testid="nav-cta-call-mobile"
              className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-full btn-primary"
              aria-label="Call Vertex"
            >
              <Phone size={16} strokeWidth={2.5} />
            </a>
            <button
              onClick={() => setOpen(!open)}
              data-testid="nav-menu-toggle"
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white"
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            id="mobile-navigation"
            data-testid="nav-mobile-menu"
            className="lg:hidden mt-3 glass-strong rounded-2xl p-3 flex flex-col"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                data-testid={`nav-mobile-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-4 py-3 text-white/80 hover:text-white hover:bg-white/[0.04] rounded-xl text-[14px]"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
