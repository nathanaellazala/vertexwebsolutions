export const VertexLogo = ({ size = 28, withText = true, className = "" }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`} data-testid="vertex-logo">
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="vlgo" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="100%" stopColor="#0070F3" />
          </linearGradient>
          <filter id="vglow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M5 7 L20 33 L35 7"
          stroke="url(#vlgo)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#vglow)"
          fill="none"
        />
        <circle cx="20" cy="33" r="2.2" fill="#00E5FF" filter="url(#vglow)" />
        <circle cx="5" cy="7" r="1.6" fill="#00E5FF" />
        <circle cx="35" cy="7" r="1.6" fill="#00E5FF" />
      </svg>
      {withText && (
        <span className="font-display text-[18px] font-semibold tracking-tight text-white">
          Vertex
          <span className="text-white/40 font-normal ml-1">/ web</span>
        </span>
      )}
    </div>
  );
};

export default VertexLogo;
