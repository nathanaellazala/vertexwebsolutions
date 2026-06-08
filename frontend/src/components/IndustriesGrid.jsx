import {
  Droplets, Truck, Car, Trees, Sparkles, Hammer, Scissors, Flower2,
  Sparkle, UtensilsCrossed, ChefHat, Bug, Waves, Thermometer, Wrench, Zap, PartyPopper, Cog,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const INDUSTRIES = [
  { icon: Droplets, name: "Pressure Washing", benefit: "Capture quote requests while you're on the job." },
  { icon: Truck, name: "Food Trucks", benefit: "Show your menu, location, and catering in one professional place." },
  { icon: Car, name: "Mobile Detailing", benefit: "Turn before-and-after photos into bookings." },
  { icon: Trees, name: "Landscaping", benefit: "Capture seasonal jobs before competitors do." },
  { icon: Sparkles, name: "Cleaning Companies", benefit: "Schedule recurring clients with less back-and-forth." },
  { icon: Hammer, name: "Contractors", benefit: "Look the part with a site that builds instant trust." },
  { icon: Scissors, name: "Barbershops", benefit: "Showcase your style and convert visits to appointments." },
  { icon: Flower2, name: "Salons", benefit: "Highlight your work and let clients book themselves." },
  { icon: Sparkle, name: "Med Spas", benefit: "Premium look that matches your premium service." },
  { icon: UtensilsCrossed, name: "Restaurants", benefit: "Menu, hours, reservations — all in one place." },
  { icon: ChefHat, name: "Catering", benefit: "Capture event inquiries with a clear quote flow." },
  { icon: Bug, name: "Pest Control", benefit: "Book service calls 24/7 with AI receptionist." },
  { icon: Waves, name: "Pool Cleaning", benefit: "Recurring service made easy to inquire about." },
  { icon: Thermometer, name: "HVAC", benefit: "Capture emergency calls — even after hours." },
  { icon: Wrench, name: "Plumbing", benefit: "Be the first one customers reach in a panic." },
  { icon: Zap, name: "Electricians", benefit: "Look licensed, modern, and instantly reachable." },
  { icon: PartyPopper, name: "Event Rentals", benefit: "Showcase inventory and capture booking inquiries." },
  { icon: Cog, name: "Auto Services", benefit: "Convert local searches into appointments." },
];

export const IndustriesGrid = () => {
  return (
    <section id="industries" data-testid="industries-section" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          align="center"
          overline="WHO WE SERVE"
          title={
            <>
              Built for local businesses <span className="text-gradient-cyan">that want more leads.</span>
            </>
          }
          subtitle="Eighteen industries we know well — and the lead-capture systems that work best for each."
          testid="industries-heading"
        />

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 6) * 0.04}>
              <div
                data-testid={`industry-card-${ind.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group h-full rounded-2xl glass hover-glow p-5 flex flex-col"
              >
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-4 group-hover:border-cyan-300/40 group-hover:bg-cyan-400/[0.06] transition-all">
                  <ind.icon size={16} className="text-cyan-300" strokeWidth={1.75} />
                </div>
                <h4 className="font-display text-[15px] text-white font-medium leading-tight">{ind.name}</h4>
                <p className="mt-2 text-[11.5px] text-white/45 leading-relaxed">{ind.benefit}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;
