import { useEffect } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "crm", title: "Healthcare sales CRM", stack: "Python · FastAPI · React · MongoDB",
    problem: "Sales-team workflows need a shared way to manage leads, assignments, imports, and agent activity.",
    solution: "A React interface calls a FastAPI API backed by MongoDB. Owner and agent roles control access to dashboards and lead workflows. The source includes CSV imports, duplicate handling, and shared lead pools.",
    architecture: "React → FastAPI REST API → MongoDB",
    evidence: "Source implementation and API integration tests are available. The application has outstanding security work; this is not a claim of compliance or production readiness.",
    tradeoff: "A single backend module makes the workflow easy to trace, but separating authentication, permissions, and business logic would make future changes easier to test.",
    href: "https://github.com/nathanaellazala/Medicare-CRM",
  },
  {
    id: "automation", title: "Discord alert automation", stack: "Python · JavaScript · Chrome extension · Mock testing",
    problem: "Time-sensitive text alerts can be ambiguous, stale, or duplicated. Automated processing needs clear acceptance rules and persistent state.",
    solution: "A browser extension forwards candidate messages to a loopback Python bridge. The processor checks message age, channel, wording, and duplicate state before entering an order-management workflow. Dry-run is the default.",
    architecture: "Rendered message → extension → local bridge → validation → dry-run engine",
    evidence: "The existing 43 Python tests and 6 JavaScript matcher tests passed in an isolated review. Tests use mocks and localhost. Live trading and brokerage reconciliation have not been verified.",
    tradeoff: "DOM observation avoids storing a Discord user token, but depends on Discord markup. Persisting uncertain order state favors avoiding duplicate orders over automatically retrying an ambiguous request.",
    href: "https://github.com/nathanaellazala/DiscordTradingBot",
  },
  {
    id: "vertex", title: "Vertex Web Solutions", stack: "React · JavaScript · Tailwind CSS · React Router",
    problem: "A service business needs visitors to understand its offerings and reach the right contact or portfolio page.",
    solution: "A component-based business website combines service explanations, a client-work portfolio, mobile navigation, and click-to-call contact paths. The service selector is an illustrative walkthrough, not a connected AI receptionist demo.",
    architecture: "React Router → page components → service and portfolio content",
    evidence: "Website source and the business URL are available. Conversion results, client outcomes, and performance scores have not been independently measured.",
    tradeoff: "A client-rendered interface supports rich interactions; route-specific social metadata and performance should be checked separately from visual design.",
    href: "https://github.com/nathanaellazala/vertexwebsolutions",
  },
];

export default function DeveloperPortfolio() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Nathanael Lazala | Software & Automation Portfolio";
    return () => { document.title = previous; };
  }, []);
  return (
    <main className="min-h-screen bg-[#05050A] text-white px-5 py-12 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <nav aria-label="Portfolio navigation" className="flex flex-wrap gap-6 text-sm text-cyan-200">
          <Link to="/">Vertex Web Solutions</Link><Link to="/portfolio">Client work</Link>
          <a href="https://github.com/nathanaellazala">GitHub</a>
        </nav>
        <header className="pt-20 pb-14 border-b border-white/15">
          <p className="text-cyan-200 text-sm tracking-widest uppercase">Developer portfolio</p>
          <h1 className="mt-5 text-4xl sm:text-6xl font-semibold leading-tight">Nathanael Lazala</h1>
          <p className="mt-6 max-w-3xl text-lg text-white/80 leading-relaxed">Software development, Python automation, and practical web applications. Explore the code, architecture, and engineering tradeoffs behind three projects.</p>
          <a className="inline-block mt-8 rounded-lg border border-cyan-200 px-5 py-3 text-cyan-100" href="mailto:lazalanathanael@gmail.com">Contact Nathanael</a>
        </header>
        <nav aria-label="Project case studies" className="flex flex-wrap gap-5 py-8 text-cyan-200">
          {projects.map(project => <a key={project.id} href={`#${project.id}`}>{project.title}</a>)}
        </nav>
        {projects.map((project, index) => (
          <article key={project.id} id={project.id} className="scroll-mt-8 py-12 border-b border-white/15">
            <p className="text-sm text-cyan-200">0{index + 1} / {project.stack}</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">{project.title}</h2>
            <div className="mt-8 grid md:grid-cols-2 gap-8 text-white/80 leading-relaxed">
              <div><h3 className="text-white font-semibold mb-2">Problem</h3><p>{project.problem}</p>
                <h3 className="text-white font-semibold mt-6 mb-2">Technical solution</h3><p>{project.solution}</p></div>
              <div><h3 className="text-white font-semibold mb-2">Evidence and limits</h3><p>{project.evidence}</p>
                <h3 className="text-white font-semibold mt-6 mb-2">Engineering tradeoff</h3><p>{project.tradeoff}</p></div>
            </div>
            <p className="my-7 p-4 rounded-lg bg-white/5 text-cyan-100 text-sm break-words" aria-label="Architecture">{project.architecture}</p>
            <a href={project.href} className="inline-block text-cyan-200 underline underline-offset-4">Explore {project.title} on GitHub</a>
          </article>
        ))}
        <footer className="py-12 text-white/70 leading-relaxed"><p>Interested in junior software development, Python automation, technical implementation, and SaaS support opportunities.</p><p className="mt-4"><a className="text-cyan-200 underline" href="mailto:lazalanathanael@gmail.com">Email for résumé and availability</a></p></footer>
      </div>
    </main>
  );
}
