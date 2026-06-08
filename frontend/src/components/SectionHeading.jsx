import Reveal from "./Reveal";

export const SectionHeading = ({ overline, title, subtitle, align = "left", testid }) => {
  const a = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-5 max-w-3xl ${align === "center" ? "mx-auto" : ""}`} data-testid={testid}>
      {overline && (
        <Reveal delay={0}>
          <span className="font-mono-label text-[11px] text-cyan-300/80 inline-flex items-center gap-2">
            <span className="w-6 h-px bg-cyan-300/60" />
            {overline}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className={`font-display text-[34px] sm:text-[44px] lg:text-[56px] leading-[1.02] font-semibold text-gradient ${a}`}>
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className={`text-[15px] sm:text-[17px] text-white/60 leading-relaxed max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
};

export default SectionHeading;
